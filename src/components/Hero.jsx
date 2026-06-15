import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full pt-[100px] lg:pt-[116px] pb-8 lg:pb-2 overflow-hidden bg-gradient-to-r from-[#f0efff] via-[#f7f5ff] to-[#e6f7ff]">
      <div className="max-w-[1600px] mx-auto px-0 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch relative gap-6 lg:gap-6">

          {/* Left Content */}
          <div className="w-full lg:w-[55%] pb-6 lg:pb-0 pt-4 lg:pt-0 px-4 lg:px-0 z-20 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">


            <h1 className="text-[32px] sm:text-[42px] lg:text-[50px] xl:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.1] mb-6 lg:mb-5 text-[#0f172a]">
              <span className="relative inline-block">
                <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-[#6F00FF]/20 to-[#0D00FF]/20 opacity-50 rounded-lg"></span>
                <span 
                  className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#6F00FF] via-[#9d4edd] to-[#0D00FF]"
                  style={{
                    backgroundSize: '200% auto',
                    animation: 'text-gradient 4s linear infinite'
                  }}
                >
                  Artificial Intelligence
                </span>
              </span>
              <br />
              <span className="text-[#1e293b]">Development Company</span>
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#475569] mb-8 lg:mb-6 leading-[1.7] lg:leading-[1.8] xl:pr-32 px-2 lg:px-0">
              At itmcsystem, we partner with modern enterprises to engineer innovative, AI-powered applications. Leveraging Machine Learning, LLMs, and Intelligent Automation, we turn ambitious ideas into scalable digital solutions that accelerate your business growth.
            </p>

            {/* Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 lg:gap-y-2 gap-x-4 mb-8 lg:mb-4 w-fit mx-auto lg:mx-0 justify-items-start">
              {[
                'Over 100 AI Solutions Built',
                '50+ Dedicated AI Experts',
                'Boost Efficiency by 85%',
                'Serving 30+ Global Industries'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 w-fit">
                  <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#0d6efd] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px] font-semibold text-gray-900">{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <a href="#contact" className="group inline-flex items-center justify-center px-8 py-3.5 lg:px-9 lg:py-4 text-[15px] lg:text-[16px] font-bold text-white bg-[#4c00ff] hover:bg-[#3d00cc] rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(76,0,255,0.25)] hover:shadow-[0_12px_25px_rgba(76,0,255,0.4)] hover:-translate-y-0.5">
              Discover Our AI Services
              <svg className="w-[18px] h-[18px] ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Right Video Container - Equal Height */}
          <div className="w-full lg:w-[45%] relative mt-6 lg:mt-0 flex flex-col justify-stretch min-h-[250px] sm:min-h-[300px] z-10 py-0 lg:py-0 px-4 lg:px-0 pb-8 lg:pb-0">
            <div className="relative w-full h-full flex-grow rounded-[20px] lg:rounded-[32px] overflow-hidden shadow-xl lg:shadow-2xl border-4 lg:border-white/40 border-white/40">
              <video
                src="/h1vedio.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Subtle background sparkles/stars */}
            <div className="absolute top-10 -left-6 w-6 h-6 text-[#4c00ff] opacity-20 pointer-events-none">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z" /></svg>
            </div>
            <div className="absolute bottom-10 right-10 w-8 h-8 text-[#0d6efd] opacity-20 hidden lg:block pointer-events-none">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z" /></svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-subtle {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;