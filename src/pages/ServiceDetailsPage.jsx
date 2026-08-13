import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Zap, Shield, BarChart, Cpu } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import ContactUs from '../components/ContactUs';
import SEO from '../components/SEO';
import { servicesData, transformData } from '../data/servicesData';

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug || (s.aliases && s.aliases.includes(slug))) || (transformData && transformData.find(s => s.slug === slug || (s.aliases && s.aliases.includes(slug))));

  // Scroll to top or contact on load/slug change
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  // Icons for the 4 feature cards
  const featureIcons = [Zap, Shield, Cpu, BarChart];
  const featureColors = [
    { bg: 'bg-blue-100', text: 'text-blue-600' },
    { bg: 'bg-indigo-100', text: 'text-indigo-600' },
    { bg: 'bg-cyan-100', text: 'text-cyan-600' },
    { bg: 'bg-purple-100', text: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white">
      <SEO 
        title={service.seoTitle || service.title} 
        description={service.seoDescription || service.description || service.heroDescription} 
        schemas={service.schemas}
      />
      <Header />

      <main className="pt-[80px] lg:pt-[100px]">
        {/* ── Hero Section ── */}
        <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-gradient-to-r from-[#f0efff] via-[#f7f5ff] to-[#e6f7ff]">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4a00ff]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0d6efd]/5 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4"></div>

          <div className="max-w-[1400px] mx-auto px-0 sm:px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-[55%] flex flex-col items-center text-center lg:items-start lg:text-left px-4 lg:px-0">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#eef0ff] text-[#4a00ff] font-semibold text-[14px] mb-6 border border-[#d6dcff]">
                {service.category} Solutions
              </div>
              <h1 className="text-[40px] sm:text-[50px] lg:text-[60px] font-extrabold tracking-tight leading-[1.15] mb-6 text-gray-900">
                {service.heroTitlePrefix} <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a00ff] to-[#0d6efd]">{service.heroTitleHighlight}</span>
              </h1>
              <p className="text-[17px] text-gray-600 mb-10 leading-[1.8] max-w-[600px]">
                {service.heroDescription}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#contact" className="group inline-flex items-center justify-center px-8 py-3.5 text-[15px] font-bold text-white bg-[#4c00ff] hover:bg-[#3d00cc] rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(76,0,255,0.25)] hover:-translate-y-0.5">
                  Request Consultation
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-[45%] relative flex justify-center">
              <div className="w-full max-w-[500px] rounded-none sm:rounded-[24px] overflow-hidden shadow-2xl relative bg-[#080014]">
                <img src={service.heroImage} alt={service.title} className="w-full h-auto object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#4a00ff]/20 to-[#0d6efd]/20 mix-blend-overlay"></div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Overview Section ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1200px] mx-auto px-0 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 px-4 lg:px-0">
              <h2 className="text-[32px] lg:text-[40px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
                {service.overviewTitle}
              </h2>
              <p className="text-gray-600 text-[16px] leading-[1.8] mb-6">
                {service.overviewText1}
              </p>
              <p className="text-gray-600 text-[16px] leading-[1.8] mb-8">
                {service.overviewText2}
              </p>
              <ul className="space-y-4">
                {service.featuresList.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0d6efd] flex-shrink-0" />
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Feature Cards */}
                  {service.featureCards.map((card, idx) => {
                    const Icon = featureIcons[idx % featureIcons.length];
                    const color = featureColors[idx % featureColors.length];
                    return (
                      <div key={idx} className={`bg-[#f8f9fa] border-y sm:border border-gray-100 rounded-none sm:rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${idx % 2 !== 0 ? 'mt-0 sm:mt-8' : ''}`}>
                         <div className={`w-12 h-12 ${color.bg} ${color.text} rounded-xl flex items-center justify-center mb-5`}>
                           <Icon className="w-6 h-6" />
                         </div>
                         <h3 className="text-[18px] font-bold text-gray-900 mb-2">{card.title}</h3>
                         <p className="text-gray-500 text-[14px] leading-[1.7]">{card.description}</p>
                      </div>
                    );
                  })}
               </div>
            </div>
          </div>
        </section>

        {/* CTA Section imported from components */}
        <Cta />

        {/* Contact Us Section */}
        <ContactUs />

      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;
