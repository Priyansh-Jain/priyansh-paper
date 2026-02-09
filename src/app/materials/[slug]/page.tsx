import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { materialsData } from "../data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(materialsData).map((slug) => ({
    slug,
  }));
}

export default async function MaterialPage({ params }: PageProps) {
  const { slug } = await params;
  const material = materialsData[slug];

  if (!material) {
    notFound();
  }

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-40 dark:opacity-20 mix-blend-overlay"></div>
      <div className="relative flex min-h-screen w-full flex-col font-display bg-white dark:bg-background-dark text-text-main dark:text-white overflow-x-hidden">
        
        <Header />

        <main className="flex-grow pt-32 pb-24">
          {/* Hero Section */}
          <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-32">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              
              {/* Left Content */}
              <div className="w-full lg:w-1/2">
                <h1 className="font-serif text-6xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
                  <span dangerouslySetInnerHTML={{ __html: material.title.replace(".", "") }} />
                  <i className="font-light italic">.</i>
                </h1>
                <p className="text-text-muted dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
                  {material.description}
                </p>
                
                <div className="flex gap-16">
                  {material.stats.map((stat, idx) => (
                    <div key={idx}>
                      <span className="text-[10px] uppercase tracking-widest text-text-muted dark:text-gray-500 block mb-2">
                        {stat.label}
                      </span>
                      <span className="font-serif text-3xl font-medium italic block">
                        {stat.value}
                      </span>
                      {stat.subValue && (
                        <span className="font-serif text-3xl font-medium italic block">
                          {stat.subValue}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-square lg:aspect-[4/3] bg-background-light dark:bg-white/5 p-8 lg:p-12">
                   <div className="relative w-full h-full shadow-2xl shadow-black/20">
                    <img
                      src={material.heroImage}
                      alt={material.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specification */}
          <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-32">
            <div className="flex flex-col mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-2">Technical Specification</h2>
               <div className="w-12 h-0.5 bg-primary/30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {material.specs.map((spec, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-primary mb-6">
                    <span className="material-symbols-outlined text-[28px]">{spec.icon}</span>
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4">{spec.title}</h3>
                  <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Optimization Section */}
          <section className="bg-alabaster dark:bg-white/5 py-24">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                
                {/* Left Content */}
                <div className="w-full lg:w-1/2">
                   <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 leading-tight">
                    <span dangerouslySetInnerHTML={{ __html: material.optimization.title.replace(".", "") }} />
                    <i className="font-light italic">.</i>
                  </h2>
                  <p className="text-text-muted dark:text-gray-400 text-lg font-light leading-relaxed mb-12 max-w-xl">
                    {material.optimization.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-text-main dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wider hover:bg-primary dark:hover:bg-gray-200 transition-colors">
                      Download Datasheet
                    </button>
                    <button className="px-8 py-4 border border-black/10 dark:border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      View Gallery
                    </button>
                  </div>
                </div>

                {/* Right Specs Table */}
                <div className="w-full lg:w-1/2 flex items-center">
                  <div className="w-full bg-white dark:bg-black/20 p-8 lg:p-12 border border-black/5 dark:border-white/5">
                    <div className="flex flex-col gap-6">
                      {material.optimization.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-baseline border-b border-black/5 dark:border-white/10 pb-4 last:border-0 last:pb-0">
                          <span className="text-[10px] uppercase tracking-widest text-text-muted dark:text-gray-500 font-bold">
                            {spec.label}
                          </span>
                          <span className="font-serif text-xl italic text-right">
                            {spec.value}
                          </span>
                        </div>
                      ))}
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
