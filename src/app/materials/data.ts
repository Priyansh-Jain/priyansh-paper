export interface MaterialData {
    slug: string;
    label: string;
    title: string;
    description: string;
    heroImage: string;
    stats: {
        label: string;
        value: string;
        subValue?: string;
    }[];
    specs: {
        title: string;
        description: string;
        icon: string;
    }[];
    optimization: {
        title: string;
        description: string;
        specs: {
            label: string;
            value: string;
        }[];
    };
}

export const materialsData: Record<string, MaterialData> = {
    "bleached-kraft": {
        slug: "bleached-kraft",
        label: "Technical Grade A+",
        title: "Bleached Kraft.",
        description:
            "Our premium bleached kraft paper offers a surgical level of purity and a matte, tactile surface engineered for high-fidelity brand reproduction.",
        heroImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDbGKR2WMaKO2YD8TYRqzcYxc4iGTR_t1A8yn4gqdTDCnNn-uPTRrX3FwYVWvniUrnTnrIbN5jiWofPPo2aH33HxbNpm7If2VmTioGintqUCl0VvwY9BsxHh4tlyKb0nDQu4j2sbqQKELzjKu7tG08lbWbwFH34pUtpSVyNi4cAfSdyGd86RDamZhFN_Cfqrk5aox8mWfoWpSG-_883Qeb3103h_0PXKhYf3q0pM90Nlu14yMpy_SyywVM2LqL2Mw0aGCrPpJyvXZ0",
        stats: [
            { label: "Brightness Index", value: "92% ISO" },
            { label: "Surface Finish", value: "Soft Matte" },
        ],
        specs: [
            {
                title: "Printability",
                description:
                    "Engineered for offset and flexo printing with zero ink-feathering and high color density retention.",
                icon: "print",
            },
            {
                title: "Opacity",
                description:
                    "High-opacity barrier properties (98%+) ensuring no show-through for double-sided premium applications.",
                icon: "opacity",
            },
            {
                title: "Surface Tension",
                description:
                    "Optimal Dyne levels for foil stamping and special UV varnish coatings without adhesion failure.",
                icon: "texture",
            },
            {
                title: "Chlorine-Free",
                description:
                    "TCF (Totally Chlorine Free) bleaching process, maintaining FSC-certified sustainability standards.",
                icon: "eco",
            },
        ],
        optimization: {
            title: "Optimized for Minimalist Aesthetics.",
            description:
                "The neutral white base of our Bleached Kraft provides a sterile canvas that amplifies the purity of your brand's color palette. Designed for luxury retail, cosmetics, and tech packaging.",
            specs: [
                { label: "Grammage Range", value: "80 - 350 GSM" },
                { label: "Tensile Strength", value: "High / Long-Fiber" },
                { label: "Burst Index", value: "3.5 - 4.2 kPa·m²/g" },
                { label: "Moisture Content", value: "6.5% ± 0.5%" },
            ],
        },
    },
    "premium-kraft": {
        slug: "premium-kraft",
        label: "Fiber Grade 01",
        title: "Premium Kraft.",
        description:
            "High-strength, unbleached virgin fiber sourced from FSC-certified forests. Features a signature organic texture and superior tensile strength for structural packaging.",
        heroImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCAjMub2bOtALLBWOqkWuy5HcMWa5owGcqfSflHH-LOKDmPJ_uu12m-m8_yLc7rbHNJU_-By1LvVfEPeKa9bbal5CDzK6nDJ3t2x84WSd9Pjm_f77YFZ0zqwDEMw7mhwjFzhDaGVEf8gPcrawhw1uyWh9Tl0sVFtstrW1POwB_GJuwZz-_ORR5Irm0SeILgcuRdX0t1_TMgqgfKKOnVM0N30x0E2SF99SWDPeSXGpBuxKU3w6vHRHomifAE5NIn9lP6KByUa3M67iA",
        stats: [
            { label: "Fiber Content", value: "100% Virgin" },
            { label: "Surface Finish", value: "Natural Textured" },
        ],
        specs: [
            {
                title: "Durability",
                description:
                    "Exceptional tear resistance and burst strength, making it ideal for heavy-duty packaging applications.",
                icon: "shield",
            },
            {
                title: "Sustainability",
                description:
                    "100% biodegradable and compostable, sourced from responsibly managed forests.",
                icon: "forest",
            },
            {
                title: "Texture",
                description:
                    "Authentic, tactile feel that communicates organic quality and environmental responsibility.",
                icon: "touch_app",
            },
            {
                title: "Versatility",
                description:
                    "Suitable for a wide range of applications, from bags and boxes to wrapping and void fill.",
                icon: "all_inclusive",
            },
        ],
        optimization: {
            title: "Engineered for Strength & Character.",
            description:
                "Premium Kraft combines rugged durability with an artisanal aesthetic. Its natural brown hue provides a warm, earthy backdrop for bold branding.",
            specs: [
                { label: "Grammage Range", value: "120 - 450 GSM" },
                { label: "Tensile Index", value: "85 Nm/g" },
                { label: "Burst Index", value: "5.5 - 6.0 kPa·m²/g" },
                { label: "Recycled Content", value: "0% (Virgin Fiber)" },
            ],
        },
    },
    "honeycomb-structure": {
        slug: "honeycomb-structure",
        label: "Engineering 02",
        title: "Honeycomb Structure.",
        description:
            "A lightweight geometric core engineered for maximum shock absorption. Replaces plastic foams with a 100% recyclable, bio-based alternative.",
        heroImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDlwiBlp1hHJdGtFhcYCALBf7OKJbynpizDlKEAFgPpsLZ1ipDjgUP2UGDfcVIGsIyIdjAWKw8Z2_DL7qml-1UZY3vMknAaEB6F0AbWa2NeMRZOfX3HV1hiKISMUsXa5CiGSgFylMyAETJsjFAqOgYd3va93BIxTfyJvIPuKn5cWeRb6MbIDXRTRKEnJBaJmrjgY4PmWf6pxak0frWR-q-D8Dt1KigvbQ5mMRO7qlpEOzV0XZIFFu9Bk255zX_4IeTeapXyDvvXLA4",
        stats: [
            { label: "Compression Strength", value: "High Load" },
            { label: "Weight Reduction", value: "Up to 80%" },
        ],
        specs: [
            {
                title: "Shock Absorption",
                description:
                    "Hexagonal cell structure dissipates impact energy, protecting fragile goods during transit.",
                icon: "grid_on",
            },
            {
                title: "Lightweight",
                description:
                    "High strength-to-weight ratio reduces shipping costs and carbon footprint.",
                icon: "feather",
            },
            {
                title: "Rigidity",
                description:
                    "Provides structural stability and stacking strength comparable to solid materials.",
                icon: "square_foot",
            },
            {
                title: "Recyclability",
                description:
                    "Mon-material construction simplifies recycling streams compared to multi-layer foam alternatives.",
                icon: "recycling",
            },
        ],
        optimization: {
            title: "Structural Integrity, Redefined.",
            description:
                "Honeycomb Structure offers a sustainable solution for protective packaging. Just as strong as wood or foam but completely recyclable.",
            specs: [
                { label: "Cell Size", value: "10mm - 25mm" },
                { label: "Core Thickness", value: "10mm - 100mm" },
                { label: "Compression", value: "400 kPa" },
                { label: "Material", value: "100% Recycled Paper" },
            ],
        },
    },
};
