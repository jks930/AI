import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full pt-[80px] lg:pt-[84px] pb-10 lg:pb-20 overflow-hidden bg-gradient-to-r from-[#f0efff] via-[#f7f5ff] to-[#e6f7ff]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Left Content */}
          <div className="w-full lg:w-[60%] pb-10 lg:pb-0 pt-6 lg:pt-4 z-20 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 
              className="text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[60px] font-extrabold tracking-tight leading-[1.15] mb-6"
              style={{
                background: 'linear-gradient(90.3deg, #6F00FF 20.19%, #0D00FF 80.77%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Artificial Intelligence <br className="hidden lg:block"/>
              Development Company
            </h1>
            
            <p className="text-[17px] text-gray-700 mb-10 leading-[1.8] xl:pr-40">
              itmcsystem is a top AI development company helping startups, enterprises, and growing businesses build powerful AI-driven applications using Generative AI, Machine Learning, LLMs, Computer Vision, and Intelligent Automation. From AI strategy to deployment, we transform innovative ideas into scalable, high-performing AI solutions that drive real business growth.
            </p>

            {/* Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-10 w-full max-w-[500px] lg:max-w-none justify-items-center lg:justify-items-start">
              {[
                '100+ AI-Driven Products Developed',
                '50+ Certified AI Engineers',
                '85% Faster Operational Efficiency',
                '30+ Industries Empowered'
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
            <a href="#contact" className="group inline-flex items-center justify-center px-9 py-4 text-[16px] font-bold text-white bg-[#4c00ff] hover:bg-[#3d00cc] rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(76,0,255,0.25)] hover:shadow-[0_12px_25px_rgba(76,0,255,0.4)] hover:-translate-y-0.5">
              Explore Our AI Capabilities
              <svg className="w-[18px] h-[18px] ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Right Image Container */}
          <div className="w-full lg:w-[40%] relative mt-6 lg:mt-0 pointer-events-none flex justify-center lg:block">
            {/* The image is positioned absolute in LG mode so it can break bounds like the reference */}
            <div className="relative lg:absolute lg:right-[-15%] lg:top-[50%] lg:-translate-y-[45%] w-full flex justify-center">
                <img 
                src="/hero.webp" 
                alt="AI Robot Hand holding Emblem" 
                className="w-[90%] max-w-[400px] sm:max-w-[500px] lg:max-w-[700px] xl:max-w-[850px] h-auto object-contain drop-shadow-2xl z-10 pointer-events-auto"
                style={{ animation: 'float-subtle 5s ease-in-out infinite' }}
                />
            </div>
            
            {/* Subtle background sparkles/stars */}
            <div className="absolute top-10 left-0 w-6 h-6 text-[#4c00ff] opacity-20">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z"/></svg>
            </div>
            <div className="absolute bottom-20 left-10 w-8 h-8 text-[#0d6efd] opacity-20 hidden lg:block">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z"/></svg>
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
      `}</style>
    </section>
  );
};

export default Hero;
