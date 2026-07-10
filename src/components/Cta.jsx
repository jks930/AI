import React from 'react';

const Cta = () => {
  return (
    <section
      data-header-theme="dark"
      data-header-bg="bg-gradient-to-r from-[#21004a]/95 via-[#10002b]/95 to-[#080014]/95 backdrop-blur-md"
      className="relative w-full overflow-hidden bg-gradient-to-r from-[#21004a] via-[#10002b] to-[#080014]"
    >
      {/* Abstract wave lines on the left side mimicking the screenshot */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <svg className="absolute w-[1200px] h-full left-[-20%] top-0" viewBox="0 0 800 600" fill="none" preserveAspectRatio="none">
          <path d="M0 100 Q 200 300 800 -100" stroke="url(#paint0_linear)" strokeWidth="1.5" />
          <path d="M0 200 Q 300 400 900 -50" stroke="url(#paint1_linear)" strokeWidth="1" />
          <path d="M0 300 Q 400 500 1000 0" stroke="url(#paint2_linear)" strokeWidth="0.5" />
          <path d="M0 400 Q 500 600 1100 50" stroke="url(#paint3_linear)" strokeWidth="0.25" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.6" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.4" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint2_linear" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint3_linear" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row relative z-10">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 py-8 lg:py-10 px-4 sm:px-6 lg:px-12 flex flex-col justify-center border-r border-white/5">
          <h2 className="text-[30px] lg:text-[40px] font-extrabold text-white leading-[1.2] mb-4 tracking-tight">
            Transform Your Business With Intelligent AI
          </h2>
          <p className="text-[16px] text-[#d4c5f9] leading-[1.6] mb-6 pr-4 lg:pr-10">
            Leverage Powerful AI Solutions To Streamline Processes, Reduce Costs, And Unlock New Growth Opportunities.
          </p>
          <div>
            <a href="#contact" className="group inline-flex items-center justify-center px-8 py-3.5 text-[16px] font-bold text-white bg-[#001aff] border-2 border-white hover:border-[#334aff] hover:bg-[#334aff] rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(0,26,255,0.4)] hover:shadow-[0_0_35px_rgba(0,26,255,0.6)]">
              Start Your AI Journey
              <svg className="w-[18px] h-[18px] ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative min-h-[250px] lg:min-h-[350px] flex items-center justify-center bg-black/20 overflow-hidden">
          {/* Glowing Background Element */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#4a00ff]/20 rounded-full blur-[60px] pointer-events-none"></div>

          <img
            src="/ai/services.png"
            alt="AI Solutions"
            className="w-[80%] max-w-[450px] h-auto object-contain z-10 transform transition-transform duration-700 hover:scale-105 drop-shadow-2xl rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Cta;
