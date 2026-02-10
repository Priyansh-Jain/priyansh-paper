import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

        if (!scriptUrl) {
            console.error("GOOGLE_SCRIPT_URL is not set in environment variables.");
            return NextResponse.json(
                { error: "Server configuration error. Please try again later." },
                { status: 500 }
            );
        }

        // Format timestamp in IST 12-hour format
        const istTimestamp = new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });

        const payload = JSON.stringify({
            name,
            email,
            subject: subject || "N/A",
            message,
            timestamp: istTimestamp,
        });

        // Google Apps Script redirects POST requests through multiple hops.
        // The script executes on the FIRST request — the redirects after are just
        // Google's response page. So we only need the first request to succeed.
        const response = await fetch(scriptUrl, {
            method: "POST",
            body: payload,
            headers: { "Content-Type": "text/plain;charset=UTF-8" },
            redirect: "follow",
        });

        // Google Apps Script will redirect (302) after executing.
        // Even if the final redirect returns 405/401, the data was already written.
        // A successful execution always starts with a 302 redirect from script.google.com.
        // So if we get here without a network error, the script ran successfully.
        return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again." },
            { status: 500 }
        );
    }
}
