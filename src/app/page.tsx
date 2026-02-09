import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-40 dark:opacity-20 mix-blend-overlay"></div>
      <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark text-text-main dark:text-white overflow-x-hidden">
        
        <Header />

        <main className="flex-grow flex flex-col pt-20">
          <section className="relative flex flex-col lg:flex-row min-h-[90vh] lg:h-[800px] w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-0 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center lg:w-1/2 z-10 order-2 lg:order-1 mt-10 lg:mt-0">
              <div className="flex flex-col gap-8">
                <span className="text-primary font-mono text-xs uppercase tracking-widest">Collection 2026</span>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight text-text-main dark:text-white text-balance">
                  Tactile <br/> <i className="font-light italic pr-2">Sustainability</i>.
                </h1>
                <p className="text-text-muted dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md border-l-2 border-primary/30 pl-6">
                  Engineered for the circular economy. Priyansh Paper creates high-performance packaging solutions from 100% renewable sources.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <Link href="/materials">
                    <button className="group relative px-8 py-4 bg-transparent border border-text-main dark:border-white text-text-main dark:text-white rounded-lg overflow-hidden transition-all hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-black hover:cursor-pointer">
                      <span className="relative z-10 flex items-center gap-2 font-medium">
                        Explore Materials
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:w-1/2 h-[50vh] lg:h-[90%] flex items-center justify-center lg:justify-end order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-transparent dark:from-white/5 rounded-[3rem] transform rotate-3 scale-90 -z-10"></div>
              <div className="relative w-full h-full lg:h-[90%] rounded-2xl overflow-hidden shadow-2xl shadow-black/5 group">
                <img 
                  alt="Stacked layers of premium textured paper fanned out under studio lighting" 
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjMub2bOtALLBWOqkWuy5HcMWa5owGcqfSflHH-LOKDmPJ_uu12m-m8_yLc7rbHNJU_-By1LvVfEPeKa9bbal5CDzK6nDJ3t2x84WSd9Pjm_f77YFZ0zqwDEMw7mhwjFzhDaGVEf8gPcrawhw1uyWh9Tl0sVFtstrW1POwB_GJuwZz-_ORR5Irm0SeILgcuRdX0t1_TMgqgfKKOnVM0N30x0E2SF99SWDPeSXGpBuxKU3w6vHRHomifAE5NIn9lP6KByUa3M67iA"
                />
                
                 <div className="absolute top-[20%] left-[10%] bg-white/90 dark:bg-black/80 backdrop-blur-sm p-3 rounded shadow-lg border-l-4 border-primary max-w-[140px] hidden md:block">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-main dark:text-white">Premium Kraft</p>
                  <p className="text-text-muted dark:text-gray-400 text-[10px]">320 GSM</p>
                </div>
                <div className="absolute bottom-[25%] right-[15%] bg-white/90 dark:bg-black/80 backdrop-blur-sm p-3 rounded shadow-lg border-l-4 border-primary max-w-[140px] hidden md:block">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-main dark:text-white">Honeycomb</p>
                  <p className="text-text-muted dark:text-gray-400 text-[10px]">Shock Absorbent</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <h2 className="font-serif text-4xl lg:text-5xl font-medium text-text-main dark:text-white mb-4">Material Diversity</h2>
                <p className="text-text-muted dark:text-gray-400">Explore our range of sustainable textures and finishes designed for the future of packaging.</p>
              </div>
              <Link href="/materials" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
                View Full Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">layers</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-text-main dark:text-white">Premium Kraft</h3>
                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed mb-6">High-strength, unbleached virgin fiber for maximum durability and organic appeal.</p>
                <div className="h-1 w-12 bg-gray-200 group-hover:w-full group-hover:bg-primary transition-all duration-500 rounded-full"></div>
              </div>

              {/* Card 2 */}
              <div className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">hexagon</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-text-main dark:text-white">Honeycomb Structure</h3>
                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed mb-6">Lightweight geometric core engineered for superior shock absorption and rigidity.</p>
                <div className="h-1 w-12 bg-gray-200 group-hover:w-full group-hover:bg-primary transition-all duration-500 rounded-full"></div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">water_drop</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-text-main dark:text-white">Bleached Kraft</h3>
                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed mb-6">Clean, refined surface optimized for high-quality printing and premium branding.</p>
                <div className="h-1 w-12 bg-gray-200 group-hover:w-full group-hover:bg-primary transition-all duration-500 rounded-full"></div>
              </div>
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/materials" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
                View Full Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
