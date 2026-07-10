import React from 'react';

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "150+", label: "Dedicated Engineers" },
  { value: "5", label: "Global Locations" },
  { value: "80%", label: "Client Retention" },
];

const brandsRow1 = [
  "Amaze", "Holcim", "Milli", "ASAPP", "Chic Bee", "Govt of India", "NTPC", "Digisahayak"
];
const brandsRow2 = [
  "MPC", "Gribb", "AAFT", "Seed Park", "EFL", "Global Tech", "Innovate AI", "Future Build"
];

const StatsAndBrands = () => {
  return (
    <section 
      data-header-theme="dark"
      data-header-bg="bg-[#180048]/95 backdrop-blur-md"
      className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#180048] bg-cover bg-center"
      style={{ backgroundImage: "url('/ai/background-img.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#180048]/80 via-transparent to-[#180048]/90"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Stats (Redesigned Layout) */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 max-w-7xl mx-auto gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-300 tracking-wide uppercase">Global Impact</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-[52px] font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Empowering Global <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Enterprises & Startups</span>
            </h2>
            <p className="text-[17px] md:text-lg text-blue-100/70 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Partnering with industry leaders to deliver scalable engineering and advanced AI capabilities. We transform visions into high-impact digital realities.
            </p>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] backdrop-blur-md rounded-[24px] p-6 lg:p-8 text-left hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="relative text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="relative text-blue-200/80 text-sm md:text-[15px] font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Section (Redesigned with Dark Glass Cards) */}
        <div className="relative z-10 flex flex-col gap-6 pb-16">
          <div className="text-center mb-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Technology Ecosystem</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="absolute inset-y-0 left-0 w-24 lg:w-48 bg-gradient-to-r from-[#180048] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 lg:w-48 bg-gradient-to-l from-[#180048] to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 */}
          <div className="flex overflow-hidden group">
            <div className="flex w-max animate-marquee space-x-6 px-3">
              {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, i) => (
                <div key={`r1-${i}`} className="flex-shrink-0 w-52 h-[76px] bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-pointer">
                  <span className="text-[17px] font-bold text-white/90 tracking-wider uppercase drop-shadow-md">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden group">
            <div className="flex w-max animate-marquee-reverse space-x-6 px-3">
              {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, i) => (
                <div key={`r2-${i}`} className="flex-shrink-0 w-52 h-[76px] bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-pointer">
                  <span className="text-[17px] font-bold text-white/90 tracking-wider uppercase drop-shadow-md">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Panel (Redesigned completely) */}
        <div className="max-w-7xl mx-auto mt-8">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 backdrop-blur-xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Left Contact & Global Presense */}
            <div className="w-full lg:w-5/12 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
              <h4 className="text-xl font-bold text-white mb-6">Global Presence</h4>
              <div className="flex flex-wrap gap-4 mb-8">
                {['us', 'in', 'ca', 'mx', 'br'].map((country) => (
                  <div key={country} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-2 hover:scale-110 transition-transform cursor-default">
                    <img src={`https://flagcdn.com/w40/${country}.png`} alt={country} className="w-full h-auto rounded-[2px]" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://www.itmcsystems.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors group">
                  <span className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/40 transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></span>
                  www.itmcsystems.com
                </a>
                <a href="mailto:info@itmcsystems.com" className="flex items-center gap-3 text-pink-200 hover:text-white transition-colors group">
                  <span className="p-2 rounded-lg bg-pink-500/20 group-hover:bg-pink-500/40 transition-colors"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
                  info@itmcsystems.com
                </a>
              </div>
            </div>

            {/* Right Internal Stats */}
            <div className="w-full lg:w-7/12 p-8 lg:p-10 flex items-center bg-white/5">
              <div className="grid grid-cols-2 gap-8 w-full">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-sm text-blue-100/70 font-medium tracking-wide">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">7+</div>
                  <div className="text-sm text-blue-100/70 font-medium tracking-wide">Implementation Partners</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">150+</div>
                  <div className="text-sm text-blue-100/70 font-medium tracking-wide">Active Placements</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-pink-400 mb-2">1.5x</div>
                  <div className="text-sm text-blue-100/70 font-medium tracking-wide">Annual Growth</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 35s linear infinite;
          will-change: transform;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
          will-change: transform;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-33.333333%, 0, 0); }
        }
        @keyframes marquee-reverse {
          0% { transform: translate3d(-33.333333%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
      `}</style>
    </section>
  );
};

export default StatsAndBrands;
