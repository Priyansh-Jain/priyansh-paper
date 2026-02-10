"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-black/5 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-12">
      <div className="flex items-center gap-3">
        <Link href="/" className="size-8 text-primary cursor-pointer">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2L46 24L24 46L2 24L24 2Z" fill="currentColor" fillOpacity="0.2"></path>
            <path d="M24 8L40 24L24 40L8 24L24 8Z" fill="currentColor"></path>
          </svg>
        </Link>
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-text-main dark:text-white cursor-pointer">
          Priyansh Paper
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link 
          href="/materials" 
          className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
            isActive("/materials") 
              ? "border-b-2 border-primary pb-0.5 text-text-main dark:text-white" 
              : "text-text-muted hover:text-primary"
          }`}
        >
          Materials
        </Link>
        <Link 
          href="/sustainability" 
          className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
            isActive("/sustainability") 
              ? "border-b-2 border-primary pb-0.5 text-text-main dark:text-white" 
              : "text-text-muted hover:text-primary"
          }`}
        >
          Sustainability
        </Link>
      </nav>

      <div className="hidden md:flex">
        <Link href="/contact" className={`text-sm font-medium border-b hover:text-primary hover:border-primary transition-all pb-0.5 cursor-pointer ${
            isActive("/contact")
              ? "border-primary text-text-main dark:text-white"
              : "border-transparent text-text-muted"
        }`}>
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden z-[10000] relative cursor-pointer text-text-main dark:text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined">
          {isMobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden flex flex-col transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100vh',
          width: '100vw',
          backgroundColor: 'var(--background)',
          zIndex: 9999,
        }}
      >
        
        {/* Menu Content */}
        <div className="flex-grow flex flex-col justify-center px-6 relative z-10">
          <nav className="flex flex-col gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "Materials", href: "/materials" },
              { label: "Sustainability", href: "/sustainability" },
              { label: "Contact Us", href: "/contact" },
            ].map((item, index) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="font-serif text-3xl font-medium tracking-tight text-text-main dark:text-white/90 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => {
                  // If we are already on this page, close the menu immediately
                  // This prevents the "lag" feeling where the menu stays open
                  if (pathname === item.href) {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Menu Footer */}
        <div className="p-6 border-t border-black/5 dark:border-white/5 relative z-10">
          <p className="font-mono text-xs uppercase tracking-widest text-text-muted dark:text-gray-500 mb-2">
            Priyansh Paper
          </p>
          <p className="text-sm text-text-muted dark:text-gray-400 font-light">
            Engineered for the circular economy.
          </p>
        </div>
      </div>
    </header>
  );
}
