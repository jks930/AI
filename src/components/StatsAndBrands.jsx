import React from 'react';

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "150+", label: "Tech Professionals" },
  { value: "5", label: "Global Countries" },
  { value: "80%", label: "Placement Success" },
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
      style={{ backgroundImage: "url('/background-img.webp')" }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Advanced Stats Section */}
        <div className="mb-24 max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-6 tracking-tight leading-tight">
              Trusted by Startups and Fortune 500 Companies
            </h2>
            <p className="text-[17px] md:text-lg text-[#d3c2ff] leading-relaxed max-w-3xl mx-auto font-light">
              Trusted by global brands, funded startups, and enterprise teams who want reliable engineering, steady delivery, and practical AI adoption.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-center hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                <div className="relative text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 mb-4 drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="relative text-blue-100/80 text-sm md:text-base font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Glowing Divider */}
        <div className="w-full max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-10 bg-blue-500/20 blur-xl rounded-full"></div>
        </div>

        {/* Clients & Partners Heading */}
        <div className="text-center mb-14 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white mb-5 tracking-tight">
            Clients & Partners We Serve
          </h2>
          <p className="text-[17px] md:text-lg text-blue-200/80 italic font-light">
            Trusted by global IT leaders, Fortune 500 enterprises, and Accenture ecosystem partners
          </p>
        </div>

        {/* Marquee Section */}
        <div className="relative z-10 flex flex-col gap-6 pb-6">
          {/* Gradient masks for smooth fading on edges */}
          <div className="absolute inset-y-0 left-0 w-32 lg:w-64 bg-gradient-to-r from-[#180048] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 lg:w-64 bg-gradient-to-l from-[#180048] to-transparent z-20 pointer-events-none"></div>

          {/* Row 1 */}
          <div className="flex overflow-hidden group">
            <div className="flex w-max animate-marquee space-x-6 px-3">
              {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, i) => (
                <div key={`r1-${i}`} className="flex-shrink-0 w-56 h-[85px] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden hover:scale-105 transition-transform cursor-pointer group/card">
                  {/* Colorful Top Border */}
                  <div className={`h-[5px] w-full bg-gradient-to-r ${i % 3 === 0 ? 'from-red-500 to-yellow-400' : i % 3 === 1 ? 'from-blue-500 to-cyan-400' : 'from-green-500 to-teal-400'}`}></div>
                  <div className="flex-grow flex items-center justify-center px-4 bg-white group-hover/card:bg-gray-50 transition-colors">
                    <span className="text-[18px] font-extrabold text-gray-800 uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500">
                      {brand}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Reverse */}
          <div className="flex overflow-hidden group">
            <div className="flex w-max animate-marquee-reverse space-x-6 px-3">
              {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, i) => (
                <div key={`r2-${i}`} className="flex-shrink-0 w-56 h-[85px] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden hover:scale-105 transition-transform cursor-pointer group/card">
                  {/* Colorful Top Border */}
                  <div className={`h-[5px] w-full bg-gradient-to-r ${i % 3 === 0 ? 'from-purple-500 to-pink-500' : i % 3 === 1 ? 'from-orange-500 to-red-400' : 'from-indigo-500 to-blue-400'}`}></div>
                  <div className="flex-grow flex items-center justify-center px-4 bg-white group-hover/card:bg-gray-50 transition-colors">
                    <span className="text-[18px] font-extrabold text-gray-800 uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500">
                      {brand}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text / Contact Info Banner */}
        <div className="mt-12 text-center max-w-6xl mx-auto mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-3 bg-white/10 border border-white/20 backdrop-blur-md px-6 lg:px-8 py-3.5 rounded-full text-sm md:text-[15px] font-semibold shadow-[0_0_30px_rgba(74,0,255,0.3)]">
            <span className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors cursor-default group">
              <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-5 h-auto rounded-[2px] group-hover:scale-125 transition-transform duration-300 shadow-sm" /> USA
            </span>
            <span className="text-purple-400/50 hidden sm:inline">•</span>
            <span className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors cursor-default group">
              <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-auto rounded-[2px] group-hover:scale-125 transition-transform duration-300 shadow-sm" /> India
            </span>
            <span className="text-purple-400/50 hidden sm:inline">•</span>
            <span className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors cursor-default group">
              <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-5 h-auto rounded-[2px] group-hover:scale-125 transition-transform duration-300 shadow-sm" /> Canada
            </span>
            <span className="text-purple-400/50 hidden sm:inline">•</span>
            <span className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors cursor-default group">
              <img src="https://flagcdn.com/w40/mx.png" alt="Mexico" className="w-5 h-auto rounded-[2px] group-hover:scale-125 transition-transform duration-300 shadow-sm" /> Mexico
            </span>
            <span className="text-purple-400/50 hidden sm:inline">•</span>
            <span className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors cursor-default group">
              <img src="https://flagcdn.com/w40/br.png" alt="Brazil" className="w-5 h-auto rounded-[2px] group-hover:scale-125 transition-transform duration-300 shadow-sm" /> Brazil
            </span>
            <span className="text-purple-400/50 hidden md:inline ml-2">•</span>
            <a href="https://www.itmcsystems.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-100 transition-colors ml-0 md:ml-2 drop-shadow-md">
              www.itmcsystems.com
            </a>
            <span className="text-purple-400/50 hidden sm:inline">•</span>
            <a href="mailto:info@itmcsystems.com" className="text-pink-300 hover:text-pink-100 transition-colors drop-shadow-md">
              info@itmcsystems.com
            </a>
          </div>

          {/* Bottom Stats Bar */}
          <div className="w-full bg-[#f4faff] rounded-xl flex flex-wrap justify-between items-center py-6 px-4 md:px-10 shadow-2xl border-b-8 border-[#3b82f6]">
            <div className="flex items-center gap-3 w-1/2 md:w-auto mb-6 md:mb-0">
              <span className="text-[32px] md:text-[40px] font-bold text-amber-500">2</span>
              <span className="text-xs md:text-sm font-semibold text-[#180048] text-left leading-tight w-24">Direct Enterprise<br/>Clients</span>
            </div>
            <div className="flex items-center gap-3 w-1/2 md:w-auto mb-6 md:mb-0">
              <span className="text-[32px] md:text-[40px] font-bold text-amber-500">7</span>
              <span className="text-xs md:text-sm font-semibold text-[#180048] text-left leading-tight w-24">Implementation<br/>Partners</span>
            </div>
            <div className="flex items-center gap-3 w-1/2 md:w-auto">
              <span className="text-[32px] md:text-[40px] font-bold text-amber-500">150+</span>
              <span className="text-xs md:text-sm font-semibold text-[#180048] text-left leading-tight w-24">Active<br/>Placements</span>
            </div>
            <div className="flex items-center gap-3 w-1/2 md:w-auto">
              <span className="text-[32px] md:text-[40px] font-bold text-amber-500">1.5x</span>
              <span className="text-xs md:text-sm font-semibold text-[#180048] text-left leading-tight w-24">Annual Growth<br/>Rate</span>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
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
