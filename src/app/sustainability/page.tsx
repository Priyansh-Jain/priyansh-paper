import Link from "next/link";
import { Recycle, TreePine } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Sustainability() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-30 dark:opacity-10 mix-blend-overlay"></div>
      
      <div className="relative flex min-h-screen w-full flex-col font-display bg-alabaster dark:bg-background-dark text-text-main dark:text-white overflow-x-hidden">
        
        <Header />

        <main className="flex-grow">
          
          {/* Hero Section */}
          <section className="relative w-full h-[90vh] lg:h-screen min-h-[600px]">
             {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2560&auto=format&fit=crop" 
                alt="Mist over a dense green forest" 
                className="w-full h-full object-cover brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32">
              <span className="text-green-500 font-mono text-xs uppercase tracking-[0.2em] mb-6 block font-bold">
                Our Ecological Commitment
              </span>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] font-medium leading-[0.9] text-white tracking-tight mb-8">
                Circular <br/>
                <span className="italic">by Design.</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-xl backdrop-blur-sm">
                Beyond recycling. We engineer materials that begin in the forest and return to the earth, leaving only nourishment behind.
              </p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Feature 1 */}
              <div className="flex flex-col p-8 bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-black/5 dark:border-white/5 h-full">
                <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-8">
                  <span className="material-symbols-outlined text-[24px]">forest</span>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-text-main dark:text-white">Responsibly Sourced</h3>
                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  100% of our virgin fibers are FSC® certified. We prioritize biodiversity and indigenous land rights in every acre of managed forest we partner with.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  FSC-C123456
                </div>
              </div>

               {/* Feature 2 */}
               <div className="flex flex-col p-8 bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-black/5 dark:border-white/5 h-full">
                <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-8">
                  <span className="material-symbols-outlined text-[24px]">water_drop</span>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-text-main dark:text-white">Zero-Waste Mfg.</h3>
                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  Our closed-loop production systems capture 98% of processing water and repurpose byproduct biomass into renewable energy for our mills.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  98% Water Recovery
                </div>
              </div>

               {/* Feature 3 */}
               <div className="flex flex-col p-8 bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-black/5 dark:border-white/5 h-full">
                <div className="size-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-8">
                  <span className="material-symbols-outlined text-[24px]">compost</span>
                </div>
                <h3 className="font-serif text-2xl mb-4 text-text-main dark:text-white">Biodegradability</h3>
                <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  Engineered for end-of-life. Our substrates break down into nutrient-rich organic matter within 12 weeks in industrial composting environments.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  EN 13432 Compliant
                </div>
              </div>

            </div>
          </section>



          {/* Impact Section */}
          <section className="bg-alabaster dark:bg-black/20 pt-12 pb-24 lg:pt-16 lg:pb-32">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
              <div className="bg-white dark:bg-background-dark rounded-[2rem] p-8 lg:p-16 shadow-xl shadow-black/5 dark:shadow-none overflow-hidden relative">
                 <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
                 <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
                    
                    {/* Left: Text & Button */}
                    <div className="lg:w-1/2 flex flex-col justify-center">
                      <span className="text-green-600 dark:text-green-400 font-mono text-xs uppercase tracking-widest mb-6 block">Real-Time Metrics</span>
                      <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-[1.1] text-text-main dark:text-white mb-6">
                        The Cumulative Impact<br/>of Every Sheet.
                      </h2>
                      <p className="text-text-muted dark:text-gray-400 text-base font-light leading-relaxed mb-10 max-w-md">
                        We track the displacement of traditional plastics and the reforestation efforts driven by our global partners in real-time.
                      </p>
                      <div>
                        <button className="bg-[#1a1612] dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl flex items-center gap-3 text-sm font-medium transition-transform hover:scale-105">
                          Download Impact Report 2025
                          <span className="material-symbols-outlined text-[18px]">download</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Metrics */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-3 self-center max-w-[400px]">
                      {/* Metric 1 */}
                      <div className="bg-[#F5F5F7] dark:bg-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px]">
                        <Recycle className="text-[#32D74B]" size={44} strokeWidth={2.5} fill="#32D74B" />
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-serif text-[2.5rem] leading-none text-text-main dark:text-white">1.2M</span>
                            <span className="font-sans text-[10px] font-medium text-[#999] uppercase tracking-wider">KG</span>
                          </div>
                          <p className="font-sans text-[10px] font-medium text-[#888] dark:text-gray-400 uppercase tracking-[0.12em] leading-relaxed mt-1">
                            Plastic Waste<br/>Displaced
                          </p>
                        </div>
                      </div>
                       {/* Metric 2 */}
                       <div className="bg-[#F5F5F7] dark:bg-white/5 p-5 rounded-2xl flex flex-col justify-between h-[200px]">
                        <TreePine className="text-[#32D74B]" size={44} strokeWidth={2.5} fill="#32D74B" />
                        <div>
                          <div className="flex items-baseline gap-0.5">
                            <span className="font-serif text-[2.5rem] leading-none text-text-main dark:text-white">450K</span>
                            <span className="font-serif text-xl text-text-muted font-light">+</span>
                          </div>
                          <p className="font-sans text-[10px] font-medium text-[#888] dark:text-gray-400 uppercase tracking-[0.12em] leading-relaxed mt-1">
                            Trees Planted<br/>& Protected
                          </p>
                        </div>
                      </div>
                    </div>

                 </div>
              </div>
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </>
  );
}
