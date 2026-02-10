import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-30 dark:opacity-10 mix-blend-overlay"></div>
      <div className="relative flex min-h-screen w-full flex-col font-display bg-alabaster dark:bg-background-dark text-text-main dark:text-white overflow-x-hidden">
        
        <Header />

        <main className="flex-grow pt-32 lg:pt-40 pb-20 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-5">
              <div className="mb-12">
                <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">Inquiries</span>
                <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-text-main dark:text-white mb-6">Get in Touch</h1>
                <p className="text-text-muted dark:text-gray-400 text-lg font-light leading-relaxed">
                  Start a conversation about sustainable excellence. Our design team is ready to help you engineer your next breakthrough.
                </p>
              </div>
              
              <form className="space-y-8">
                <div className="relative group/field mb-8">
                  <input 
                    id="name" 
                    placeholder=" " 
                    required 
                    type="text" 
                    className="block py-4 px-2 w-full text-base text-text-main dark:text-white bg-transparent border-b border-black/10 dark:border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute text-sm text-text-muted dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest pointer-events-none left-2"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative group/field mb-8">
                  <input 
                    id="email" 
                    placeholder=" " 
                    required 
                    type="email" 
                    className="block py-4 px-2 w-full text-base text-text-main dark:text-white bg-transparent border-b border-black/10 dark:border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute text-sm text-text-muted dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest pointer-events-none left-2"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative group/field mb-8">
                  <input 
                    id="subject" 
                    placeholder=" " 
                    type="text" 
                    className="block py-4 px-2 w-full text-base text-text-main dark:text-white bg-transparent border-b border-black/10 dark:border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors"
                  />
                  <label 
                    htmlFor="subject" 
                    className="absolute text-sm text-text-muted dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest pointer-events-none left-2"
                  >
                    Inquiry Type
                  </label>
                </div>

                <div className="relative group/field mb-8">
                  <textarea 
                    id="message" 
                    placeholder=" " 
                    required 
                    rows={4}
                    className="block py-4 px-2 w-full text-base text-text-main dark:text-white bg-transparent border-b border-black/10 dark:border-white/10 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer transition-colors resize-none"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute text-sm text-text-muted dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-widest pointer-events-none left-2"
                  >
                    Your Message
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border border-text-main dark:border-white text-text-main dark:text-white rounded-lg overflow-hidden transition-all hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
                >
                  <span className="font-medium tracking-wide">Send Message</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                </button>
              </form>
            </div>

            {/* Right Column: Images & Info */}
            <div className="lg:col-span-7 flex flex-col gap-12 lg:mt-20">
              
              {/* Person Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 dark:bg-white/5 relative group">
                  <img 
                    src="/Amit.jpeg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter md:grayscale md:group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-4 rounded-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-bold uppercase tracking-widest text-text-main dark:text-white">Amit Jain</p>
                    {/* <p className="text-[10px] text-text-muted dark:text-gray-400">Founder & Lead Engineer</p> */}
                  </div>
                </div>
                 <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 dark:bg-white/5 relative group md:mt-24">
                  <img 
                    src="/priyansh.jpeg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter md:grayscale md:group-hover:grayscale-0"
                  />
                   <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-4 rounded-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-bold uppercase tracking-widest text-text-main dark:text-white">Priyansh Jain</p>
                    {/* <p className="text-[10px] text-text-muted dark:text-gray-400">Head of Sustainability</p> */}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-black/5 dark:border-white/10 pt-12">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-4 text-text-main dark:text-white border-b border-primary/20 pb-2 inline-block">Global Headquarters</h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed mb-4">
                    Priyansh Paper Company<br/>
                    5/1A, Top Floor, Gajju Katra,<br/>
                    Ghee Mandi, Shahdara <br/>
                    Delhi, DL 110032, India
                  </p>
                  <div className="flex flex-col gap-1 text-sm font-medium">
                    <a className="hover:text-primary transition-colors cursor-pointer" href="mailto:priyanshpaper@gmail.com.com">priyanshpaper@gmail.com </a>
                    <a className="hover:text-primary transition-colors cursor-pointer" href="tel:+919634242686">+919634242686</a>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold mb-4 text-text-main dark:text-white border-b border-primary/20 pb-2 inline-block">GST Information</h3>
                  <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed mb-4">
                    GST Number:<br/>
                    <span className="font-mono text-xs tracking-wider">07AANPJ9903A1ZT</span>
                  </p>
                  <p className="text-xs text-text-muted/60 dark:text-gray-500 italic">
                    Registered in Delhi, India.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-xs uppercase tracking-widest font-bold text-text-muted hover:text-primary transition-colors cursor-default">Instagram</span>
                <span className="text-xs uppercase tracking-widest font-bold text-text-muted hover:text-primary transition-colors cursor-default">LinkedIn</span>
              </div>
            </div> 

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
