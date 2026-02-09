import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Materials() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-40 dark:opacity-20 mix-blend-overlay"></div>
      <div className="relative flex min-h-screen w-full flex-col font-display bg-alabaster dark:bg-background-dark text-text-main dark:text-white overflow-x-hidden">
        
        <Header />

        <main className="pt-32 pb-24 flex-grow">
          {/* Hero Section */}
          <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-20">
            <div className="max-w-3xl">
              <span className="text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Archive 2026</span>
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-8 text-text-main dark:text-white">
                Materials Collection <br/> <i className="font-light italic">Overview</i>.
              </h1>
              <p className="text-text-muted dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                Discover our curation of high-fidelity sustainable materials. Each substrate is engineered for tactile excellence and circular lifecycle performance.
              </p>
            </div>
          </section>

          {/* Materials Grid */}
          <section className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-20">
              
              {/* Card 1: Premium Kraft */}
              <div className="group relative flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                <div className="w-full lg:w-2/3 overflow-hidden rounded-3xl material-card-shadow transition-all duration-700 cursor-pointer">
                  <Link href="/materials/premium-kraft">
                    <img 
                      alt="Macro shot of Premium Kraft paper texture" 
                      className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAjMub2bOtALLBWOqkWuy5HcMWa5owGcqfSflHH-LOKDmPJ_uu12m-m8_yLc7rbHNJU_-By1LvVfEPeKa9bbal5CDzK6nDJ3t2x84WSd9Pjm_f77YFZ0zqwDEMw7mhwjFzhDaGVEf8gPcrawhw1uyWh9Tl0sVFtstrW1POwB_GJuwZz-_ORR5Irm0SeILgcuRdX0t1_TMgqgfKKOnVM0N30x0E2SF99SWDPeSXGpBuxKU3w6vHRHomifAE5NIn9lP6KByUa3M67iA"
                    />
                  </Link>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col items-start">
                  <Link href="/materials/premium-kraft">
                    <h2 className="font-serif text-4xl mb-4 text-text-main dark:text-white hover:text-primary group-hover:text-primary transition-colors">Premium Kraft</h2>
                  </Link>
                  <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-8 font-display">
                    High-strength, unbleached virgin fiber sourced from FSC-certified forests. Features a signature organic texture and superior tensile strength for structural packaging.
                  </p>
                  <Link href="/materials/premium-kraft">
                    <button className="group/btn flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-all text-text-main dark:text-white hover:text-primary cursor-pointer">
                      View Details
                      <span className="size-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:border-primary transition-all">
                        <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 2: Honeycomb (Reverse Layout) */}
              <div className="group relative flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
                <div className="w-full lg:w-2/3 overflow-hidden rounded-3xl material-card-shadow transition-all duration-700 cursor-pointer">
                  <Link href="/materials/honeycomb-structure">
                    <img 
                      alt="Close up of structural honeycomb paper core" 
                      className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlwiBlp1hHJdGtFhcYCALBf7OKJbynpizDlKEAFgPpsLZ1ipDjgUP2UGDfcVIGsIyIdjAWKw8Z2_DL7qml-1UZY3vMknAaEB6F0AbWa2NeMRZOfX3HV1hiKISMUsXa5CiGSgFylMyAETJsjFAqOgYd3va93BIxTfyJvIPuKn5cWeRb6MbIDXRTRKEnJBaJmrjgY4PmWf6pxak0frWR-q-D8Dt1KigvbQ5mMRO7qlpEOzV0XZIFFu9Bk255zX_4IeTeapXyDvvXLA4"
                    />
                  </Link>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col items-start lg:items-end lg:text-right">
                  <Link href="/materials/honeycomb-structure">
                    <h2 className="font-serif text-4xl mb-4 text-text-main dark:text-white hover:text-primary group-hover:text-primary transition-colors">Honeycomb Structure</h2>
                  </Link>
                  <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-8 font-display">
                    A lightweight geometric core engineered for maximum shock absorption. Replaces plastic foams with a 100% recyclable, bio-based alternative.
                  </p>
                  <Link href="/materials/honeycomb-structure">
                    <button className="group/btn flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-all lg:flex-row-reverse text-text-main dark:text-white hover:text-primary cursor-pointer">
                      View Details
                      <span className="size-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:border-primary transition-all">
                        <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 3: Bleached Kraft */}
              <div className="group relative flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                <div className="w-full lg:w-2/3 overflow-hidden rounded-3xl material-card-shadow transition-all duration-700 cursor-pointer">
                  <Link href="/materials/bleached-kraft">
                    <img 
                      alt="Pristine white textured bleached kraft paper" 
                      className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbGKR2WMaKO2YD8TYRqzcYxc4iGTR_t1A8yn4gqdTDCnNn-uPTRrX3FwYVWvniUrnTnrIbN5jiWofPPo2aH33HxbNpm7If2VmTioGintqUCl0VvwY9BsxHh4tlyKb0nDQu4j2sbqQKELzjKu7tG08lbWbwFH34pUtpSVyNi4cAfSdyGd86RDamZhFN_Cfqrk5aox8mWfoWpSG-_883Qeb3103h_0PXKhYf3q0pM90Nlu14yMpy_SyywVM2LqL2Mw0aGCrPpJyvXZ0"
                    />
                  </Link>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col items-start">
                  <Link href="/materials/bleached-kraft">
                    <h2 className="font-serif text-4xl mb-4 text-text-main dark:text-white hover:text-primary group-hover:text-primary transition-colors">Bleached Kraft</h2>
                  </Link>
                  <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-8 font-display">
                    Pure, refined surface optimized for high-fidelity branding. Achieved through eco-friendly ECF processes to maintain fiber integrity and environmental standards.
                  </p>
                  <Link href="/materials/bleached-kraft">
                    <button className="group/btn flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-all text-text-main dark:text-white hover:text-primary cursor-pointer">
                      View Details
                      <span className="size-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:border-primary transition-all">
                        <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-32 max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2rem] p-12 lg:p-20 text-center flex flex-col items-center">
              <h3 className="font-serif text-3xl md:text-4xl mb-6 text-text-main dark:text-white">Need technical specifications?</h3>
              <p className="text-text-muted dark:text-gray-400 mb-10 max-w-lg">Access our full data sheet for GSM ranges, burst strength, and recyclability certifications.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-text-main dark:bg-white text-white dark:text-black rounded-xl hover:bg-primary dark:hover:bg-gray-200 transition-colors font-medium cursor-pointer">Download Data Sheet</button>
                <button className="px-8 py-4 border border-black/10 dark:border-white/10 text-text-main dark:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium cursor-pointer">Request Samples</button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        
      </div>
    </>
  );
}
