import React from 'react';

const About = () => {
  const features = ['Gen-AI Solutions', 'Autonomous Agents', 'Elite Tech Talent', 'Worldwide Execution', 'Clean Architecture', 'Round-the-clock Support'];

  const claudeFeatures = [
    { title: 'API & Workflow Automation', desc: 'Seamless integration for intelligent document analysis, customer service routing, and complex Q&A systems.', icon: '🔗' },
    { title: 'Ethical AI Frameworks', desc: 'Prioritizing strict industry compliance, bias reduction, and constitutional AI alignment for safe deployments.', icon: '🛡️' },
    { title: 'Advanced Vision & RAG', desc: 'Harnessing Claude’s multi-modal capabilities for deep image and document comprehension in enterprise architectures.', icon: '🧩' },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white" id="about">
      {/* Background decorations matching the theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f0efff] rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e6f7ff] rounded-full blur-[100px] opacity-60 -z-10 -translate-x-1/2 translate-y-1/4"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ── Part 1: Our Identity ── */}
        <div className="mb-32 flex flex-col items-center">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#eef0ff] text-[#4a00ff] font-semibold text-[14px] mb-6 border border-[#d6dcff]">
              ITMC Digital, Inc.
            </div>
            <h2 className="text-[36px] lg:text-[46px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
              Our Identity & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a00ff] to-[#0d6efd]">Mission</span>
            </h2>
            <p className="text-gray-600 text-[16px] lg:text-[18px] leading-[1.8]">
              Established in 2016 in Delaware, ITMC Digital has grown into a leading AI and workforce transformation powerhouse. Spanning <strong className="text-gray-900">5 countries</strong> and over <strong className="text-gray-900">38 US states</strong>, we fuse state-of-the-art artificial intelligence with top-tier human expertise to guarantee measurable business results.
            </p>
          </div>

          <div className="w-full relative max-w-5xl mx-auto mb-16">
            <div className="w-full h-[300px] md:h-[450px] rounded-[32px] overflow-hidden shadow-2xl relative">
              <img src="/ai/images/about.jpeg" alt="Team Collaboration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a5c]/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-8 z-20 w-full max-w-[500px] justify-center px-4">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_10px_40px_rgba(0,0,255,0.12)] border border-gray-100 flex flex-col items-center flex-1 transform hover:-translate-y-2 transition-transform duration-300">
                <span className="text-[32px] sm:text-[40px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4a00ff] to-[#0d6efd]">10+</span>
                <span className="text-gray-600 text-[11px] sm:text-[13px] font-bold uppercase tracking-wide mt-1 text-center">Years in Tech</span>
              </div>
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_10px_40px_rgba(0,0,255,0.12)] border border-gray-100 flex flex-col items-center flex-1 transform hover:-translate-y-2 transition-transform duration-300">
                <span className="text-[32px] sm:text-[40px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0d6efd] to-[#00b4d8]">38+</span>
                <span className="text-gray-600 text-[11px] sm:text-[13px] font-bold uppercase tracking-wide mt-1 text-center">US States</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mt-8">
            {features.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-5 rounded-2xl bg-[#f8f9fa] border border-gray-100 hover:border-[#d6dcff] hover:bg-[#eef0ff] transition-colors group shadow-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4a00ff] to-[#0d6efd] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 font-bold text-[14px] sm:text-[16px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Part 2: Claude AI ── */}
        <div className="bg-[#f8f9fa] border border-[#eef0ff] rounded-[40px] p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Context & Image */}
            <div className="w-full lg:w-5/12 flex flex-col">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#eef0ff] text-[#4a00ff] font-semibold text-[14px] mb-6 border border-[#d6dcff] w-fit">
                Enterprise Transformation
              </div>
              <h2 className="text-[32px] lg:text-[40px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
                Claude AI <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a00ff] to-[#0d6efd]">Integration Experts</span>
              </h2>
              <p className="text-gray-600 text-[16px] leading-[1.8] mb-8">
                Our team holds specialized knowledge in deploying Anthropic's Claude models. Utilizing Opus, Sonnet, and Haiku, we build secure, high-performing, and ethically aligned AI ecosystems that perfectly match your enterprise requirements.
              </p>
              
              <div className="w-full rounded-[24px] overflow-hidden shadow-xl relative bg-[#080014] flex-grow min-h-[250px]">
                <img src="/ai/images/about-1.jpeg" alt="Claude AI Specialisation" className="w-full h-full object-cover opacity-80 absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#4a00ff]/40 to-[#0d6efd]/40 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 p-5 rounded-2xl shadow-2xl">
                  <span className="text-4xl">✨</span>
                </div>
              </div>
            </div>

            {/* Right Features List */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-5 lg:space-y-8">
              {claudeFeatures.map((item, i) => (
                <div key={i} className="group relative bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(74,0,255,0.08)] hover:border-[#d6dcff] transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#4a00ff] to-[#0d6efd] rounded-l-[24px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#eef0ff] flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[19px] lg:text-[22px] font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
