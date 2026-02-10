import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-12 px-6 lg:px-12 bg-white dark:bg-background-dark text-text-main dark:text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="size-6 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 2L46 24L24 46L2 24L24 2Z" fill="currentColor" fillOpacity="0.2"></path>
                <path d="M24 8L40 24L24 40L8 24L24 8Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="font-serif text-xl font-semibold tracking-tight">Priyansh Paper</h2>
          </div>
          <p className="text-text-muted dark:text-gray-400 text-sm max-w-sm mb-8">
            Pioneering tactile sustainability in high-end packaging through innovative material science and circular design principles.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-text-muted dark:text-gray-400">
            <li><Link className="hover:text-primary transition-colors cursor-pointer" href="/materials">Materials</Link></li>
            <li><Link className="hover:text-primary transition-colors cursor-pointer" href="/sustainability">Sustainability</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Connect</h4>
          <ul className="space-y-4 text-sm text-text-muted dark:text-gray-400">

            <li><Link className="hover:text-primary transition-colors cursor-pointer" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto border-t border-black/5 dark:border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-text-muted/60 dark:text-gray-500">
        <p>© 2026 Priyansh Paper. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
