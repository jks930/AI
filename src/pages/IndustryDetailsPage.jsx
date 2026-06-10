import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const IndustryDetailsPage = () => {
  const { slug } = useParams();
  
  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const industry = industriesData[slug];

  // If slug doesn't exist, redirect to home
  if (!industry) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-900 bg-[#f9fafb] selection:bg-blue-500/30 selection:text-blue-900 flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full pt-[120px] lg:pt-[160px] pb-16 lg:pb-24 overflow-hidden border-b border-gray-200 bg-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-100 rounded-full blur-[120px] mix-blend-multiply"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 w-fit mx-auto lg:mx-0 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#4c00ff] animate-pulse"></span>
              <span className="text-[#4c00ff] text-sm font-bold tracking-wide uppercase">{industry.title}</span>
            </div>
            
            <h1 className="text-[38px] md:text-[48px] lg:text-[56px] font-extrabold text-[#0a2540] leading-[1.1] mb-6 tracking-tight">
              {industry.heroTitle}
            </h1>
            
            <p className="text-[17px] text-gray-600 leading-[1.7] mb-10 max-w-2xl mx-auto lg:mx-0">
              {industry.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/#contact" className="bg-[#4c00ff] hover:bg-[#3d00cc] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_4px_20px_rgba(76,0,255,0.4)] hover:shadow-[0_8px_30px_rgba(76,0,255,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2">
                Consult an Expert <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative group perspective-1000">
            <div className="relative rounded-[2rem] overflow-hidden border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform transition-transform duration-700 hover:rotate-y-2 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4c00ff]/10 to-transparent mix-blend-overlay z-10"></div>
              <img 
                src={industry.image} 
                alt={industry.title} 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating UI Elements for techy feel */}
            <div className="absolute -left-6 top-20 bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-xl shadow-2xl hidden md:flex items-center gap-4 z-20 animate-[float-subtle_4s_ease-in-out_infinite]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-gray-900 text-sm font-bold">AI Accelerated</p>
                <p className="text-gray-500 text-xs">High Performance</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-[#f9fafb] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] lg:text-[44px] font-bold text-[#0a2540] mb-6">Strategic AI Capabilities for {industry.title}</h2>
            <p className="text-gray-600 text-lg">
              Unlock unprecedented value. Our tailor-made models integrate seamlessly into your workflow to solve the specific challenges facing the {industry.title.toLowerCase()} sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden shadow-lg shadow-gray-200/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4c00ff]/10 rounded-bl-full transition-colors group-hover:bg-[#4c00ff]/20"></div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4c00ff] to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white relative border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] lg:text-[44px] font-bold text-[#0a2540] mb-6">Our Delivery Process</h2>
            <p className="text-gray-600 text-lg">
              A proven, agile methodology to bring your {industry.title.toLowerCase()} vision to life rapidly and securely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your specific bottlenecks and define a clear AI strategy." },
              { step: "02", title: "Prototype", desc: "Rapid development of a proof-of-concept to validate feasibility." },
              { step: "03", title: "Development", desc: "Full-scale engineering using secure, enterprise-grade architecture." },
              { step: "04", title: "Deployment", desc: "Seamless integration with continuous monitoring and support." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-[#f9fafb] rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-6xl font-black text-gray-200 mb-6 group-hover:text-blue-100 transition-colors">{item.step}</div>
                <h3 className="text-xl font-bold text-[#0a2540] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-[#f9fafb] relative border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] lg:text-[44px] font-bold text-[#0a2540] mb-6">Why Partner With Us?</h2>
            <p className="text-gray-600 text-lg mb-10">
              With over 10 years of excellence and an 80% placement success rate globally, we bring unmatched expertise to the {industry.title} sector.
            </p>
            <div className="space-y-8">
              {[
                { title: "Deep Industry Expertise", desc: "We don't just know AI; we understand the nuanced regulatory and operational challenges of your specific domain." },
                { title: "Global Talent Pool", desc: "Access to 150+ elite tech professionals across the USA, India, Canada, Mexico, and Brazil." },
                { title: "End-to-End Security", desc: "Enterprise-grade security protocols ensuring your proprietary data remains safe and compliant." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-[#4c00ff]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" alt="Team Meeting" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 via-[#0a2540]/20 to-transparent flex items-end p-10">
                 <div>
                    <div className="text-white font-extrabold text-3xl mb-2">150+ Tech Professionals</div>
                    <div className="text-gray-300 font-medium text-lg">Delivering global excellence across 5 countries</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>
      {/* Bottom CTA */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50"></div>
        <div className="max-w-[1000px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a2540] mb-8">Ready to Transform Your {industry.title} Business?</h2>
          <Link to="/#contact" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-[#4c00ff] rounded-full hover:bg-[#3d00cc] transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(76,0,255,0.3)]">
            Start Your Project Today
          </Link>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes float-subtle {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
};

export default IndustryDetailsPage;
