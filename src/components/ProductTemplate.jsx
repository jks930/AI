import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import SEO from "./SEO";
import { ArrowRight, CheckCircle2, Shield, Database, Layout, Layers, Box, Cpu, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";

// Helper to pick random icon for capabilities
const getIcon = (index) => {
  const icons = [
    <Database className="w-6 h-6 text-[#4c00ff]" />,
    <Layout className="w-6 h-6 text-[#4c00ff]" />,
    <Shield className="w-6 h-6 text-[#4c00ff]" />,
    <Layers className="w-6 h-6 text-[#4c00ff]" />,
    <Box className="w-6 h-6 text-[#4c00ff]" />,
    <Cpu className="w-6 h-6 text-[#4c00ff]" />,
    <Zap className="w-6 h-6 text-[#4c00ff]" />,
    <Activity className="w-6 h-6 text-[#4c00ff]" />
  ];
  return icons[index % icons.length];
};

const ProductTemplate = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.title]);

  const {
    title,
    subtitle,
    heroDescription,
    aboutTitle,
    aboutText,
    aboutList,
    capabilitiesTitle,
    capabilities,
    barriersTitle,
    barriers
  } = data;

  return (
    <div className="font-sans bg-white selection:bg-[#4c00ff] selection:text-white">
      <SEO 
        title={`${title} | AI-Powered Platform by ITMC`}
        description={heroDescription} 
      />
      
      <Header />

      <main className="pt-24">
        {/* 1. Hero Section */}
        <header className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0f172a]">
          <div className="absolute inset-0 z-0">
            {/* Dynamic AI Background Image */}
            <img
              src="/ai/images/header.jpeg"
              alt="AI Hero Background"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a]/95 to-[#4c00ff]/20"></div>
          </div>
          
          {/* Glowing orbs for premium feel */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#4c00ff] rounded-full mix-blend-screen filter blur-[150px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400 rounded-full mix-blend-screen filter blur-[150px] opacity-20" style={{ animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}></div>

          <div className="relative z-10 px-6 md:px-10 max-w-[1400px] mx-auto w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(76,0,255,0.3)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-white text-sm font-medium tracking-wider uppercase">ITMC AI PLATFORMS</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight max-w-5xl tracking-tight">
                {title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-[#4c00ff]">
                  {subtitle || "Intelligent Enterprise Solution"}
                </span>
              </h1>
              
              <p className="text-slate-300 text-xl md:text-2xl mt-8 font-light max-w-3xl leading-relaxed">
                {heroDescription}
              </p>

              <div className="mt-12 flex flex-wrap gap-6">
                <button className="bg-[#4c00ff] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(76,0,255,0.4)] flex items-center gap-2 text-lg hover:scale-105 active:scale-95 duration-300">
                  Explore Platform <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-lg hover:scale-105 active:scale-95 duration-300">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* 2. Evolution Section */}
        <section className="py-24 px-6 md:px-10 bg-white relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="w-20 h-1.5 bg-gradient-to-r from-[#4c00ff] to-cyan-400 mb-8 rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-8">
                {aboutTitle?.split(' ').map((word, i) => 
                  i === aboutTitle.split(' ').length - 1 
                    ? <span key={i} className="text-[#4c00ff]">{word}</span> 
                    : word + " "
                ) || (
                  <>Smarter Operations. <br/><span className="text-[#4c00ff]">Faster Decisions.</span></>
                )}
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed mb-10 font-light">
                {aboutText}
              </p>
              
              {aboutList && aboutList.length > 0 && (
                <ul className="space-y-5">
                  {aboutList.slice(0, 4).map((item, idx) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      key={idx} 
                      className="flex items-start gap-4 text-slate-700 font-medium text-lg bg-slate-50 p-4 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[#4c00ff] shrink-0 mt-0.5" /> 
                      <span className="leading-snug">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full relative"
            >
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4c00ff]/20 to-cyan-400/20 rounded-[2.5rem] transform rotate-3 scale-105 transition-transform hover:rotate-6 duration-700"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4c00ff] to-cyan-400 opacity-20 blur-2xl rounded-full"></div>
              
              <img
                src="/ai/images/header-1.jpeg"
                alt={`${title} Overview`}
                className="rounded-[2rem] shadow-2xl w-full object-cover relative z-10 border border-white/50 min-h-[500px]"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Activity className="text-[#4c00ff] w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">AI Powered</p>
                  <p className="font-bold text-slate-900 text-lg">Smart Enterprise</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Capabilities Section */}
        {capabilities && capabilities.length > 0 && (
          <section className="bg-slate-50 py-24 px-6 md:px-10 relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
            
            <div className="max-w-[1400px] mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-[#4c00ff] font-bold tracking-wider uppercase text-sm mb-4 block">Core Features</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  {capabilitiesTitle || (
                    <>Platform <span className="text-[#4c00ff]">Capabilities</span></>
                  )}
                </h2>
                <p className="text-slate-600 text-xl font-light">
                  Our platform injects Artificial Intelligence into every layer of your workflow, unlocking unprecedented efficiency and scale.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capabilities.map((feature, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    key={idx} 
                    className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                  >
                    <div className="w-16 h-16 bg-slate-50 group-hover:bg-[#4c00ff] rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500">
                      <div className="group-hover:scale-110 group-hover:brightness-200 transition-transform duration-500">
                        {getIcon(idx)}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#4c00ff] transition-colors">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg font-light">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 4. Barriers / Benefits List Section */}
        {barriers && barriers.length > 0 && (
          <section className="bg-white py-24 px-6 md:px-10">
            <div className="max-w-[1400px] mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
                {barriersTitle || "Why Choose This Platform"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {barriers.map((text, index) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="bg-slate-50 p-8 rounded-2xl border-b-4 border-[#4c00ff] hover:bg-[#4c00ff] hover:text-white transition-all duration-300 group"
                  >
                    <p className="text-lg font-medium text-slate-700 group-hover:text-white leading-relaxed">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        <ContactUs />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductTemplate;
