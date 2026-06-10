import React from 'react';

const About = () => {
  const features = ['Generative AI Integration', 'Agentic Workflows', 'Expert Talent Pool', 'Global Delivery', 'Zero-Debt Engineering', '24/7 Expert Support'];

  const claudeFeatures = [
    { title: 'Claude API Integration', desc: 'Full /v1/messages integration — document Q&A, code review, customer support & workflow automation at scale.', icon: '🔗' },
    { title: 'Responsible AI & Safety', desc: 'Constitutional AI alignment, bias mitigation, RLHF, and content policy compliance for regulated industries.', icon: '🛡️' },
    { title: 'Multi-Modal Pipelines', desc: 'PDF, image & document understanding using Claude native vision capabilities within RAG architectures.', icon: '🧩' },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white" id="about">
      {/* Background decorations matching the theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f0efff] rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#e6f7ff] rounded-full blur-[100px] opacity-60 -z-10 -translate-x-1/2 translate-y-1/4"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ── Part 1: Who We Are ── */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          
          {/* Left image/video */}
          <div className="w-full lg:w-1/2 flex flex-col items-center relative">
            <div className="relative w-full flex justify-center">
              <div className="w-full max-w-[500px] rounded-[24px] overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Team" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a5c]/80 to-transparent"></div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-10 flex gap-4 sm:gap-6 z-20">
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,255,0.1)] border border-gray-100 flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-[32px] sm:text-[36px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4a00ff] to-[#0d6efd]">10+</span>
                  <span className="text-gray-600 text-[11px] sm:text-[13px] font-bold uppercase tracking-wide mt-1">Years of Excellence</span>
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,255,0.1)] border border-gray-100 flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-[32px] sm:text-[36px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0d6efd] to-[#00b4d8]">38+</span>
                  <span className="text-gray-600 text-[11px] sm:text-[13px] font-bold uppercase tracking-wide mt-1">US States Served</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#eef0ff] text-[#4a00ff] font-semibold text-[14px] mb-6 border border-[#d6dcff]">
              ITMC Systems, Inc.
            </div>
            <h2 className="text-[36px] lg:text-[46px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
              Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a00ff] to-[#0d6efd]">Are</span>
            </h2>
            <p className="text-gray-600 text-[16px] lg:text-[18px] leading-[1.8] mb-8">
              Founded in 2016 in Delaware, ITMC Systems evolved from a software house into a next-generation AI & Staffing Transformation company. We operate across <strong className="text-gray-900">5 countries</strong>, serve <strong className="text-gray-900">38+ US states</strong>, and combine cutting-edge AI with elite human talent to deliver outcomes — not just outputs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-[#f8f9fa] border border-gray-100 hover:border-[#d6dcff] hover:bg-[#eef0ff] transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-[#0d6efd] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-semibold text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Part 2: Claude AI ── */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left text */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#eef0ff] text-[#4a00ff] font-semibold text-[14px] mb-6 border border-[#d6dcff]">
              Enterprise Transformation
            </div>
            <h2 className="text-[36px] lg:text-[46px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
              Anthropic Claude AI <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a00ff] to-[#0d6efd]">Specialisation</span>
            </h2>
            <p className="text-gray-600 text-[16px] lg:text-[18px] leading-[1.8] mb-10">
              We have deep expertise in Claude API integration, agentic deployment, and building responsible AI systems. By combining Sonnet, Opus, and Haiku we deliver high-performance solutions tailored to your workflows.
            </p>

            <div className="space-y-6">
              {claudeFeatures.map((item, i) => (
                <div key={i} className="rounded-2xl p-6 flex items-start gap-5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,255,0.08)] transition-all">
                  <div className="text-3xl flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-[18px] font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image/video */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center relative">
            <div className="w-full max-w-[500px] rounded-[24px] overflow-hidden shadow-2xl relative bg-[#080014]">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" alt="Claude AI Specialisation" className="w-full h-[400px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a00ff]/30 to-[#0d6efd]/30 mix-blend-overlay"></div>
              
              {/* Decorative Claude icon box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <span className="text-5xl">✨</span>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default About;
