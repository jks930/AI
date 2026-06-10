import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { servicesData as servicesList } from '../data/servicesData';

const Services = () => {
  return (
    <section id="services" className="relative w-full py-20 lg:py-28 bg-[#fdfdfd] overflow-hidden border-t border-gray-100">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b21a8' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-[1400px] mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4 lg:px-0">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f0ecff] text-[#4c00ff] font-bold text-[13px] tracking-wide mb-6 border border-[#d8ccff]">
            AI DEVELOPMENT SERVICES
          </div>
          <h2 className="text-[36px] lg:text-[48px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
            Broaden Your Digital Capabilities <br className="hidden md:block" /> With Advanced AI Solutions
          </h2>
          <p className="text-gray-600 text-[17px] lg:text-[19px] leading-[1.7]">
            As a premier intelligence engineering partner, we help you accelerate enterprise innovation and streamline complex workflows. We deliver deeply integrated, scalable architectures that drive tangible operational growth and market leadership.
          </p>
        </div>

        {/* Hero Image Banner (Re-using their services.png concept but large) */}
        <div className="w-full rounded-none lg:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(76,0,255,0.15)] bg-gray-900 h-[300px] lg:h-[400px] relative group transform hover:scale-[1.01] transition-transform duration-700 ease-out mb-20">
          <img 
            src="/services.png" 
            alt="AI Application Development Services" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
            onError={(e) => {
              // Fallback if local image doesn't exist
              e.target.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d00ff]/90 via-[#4c00ff]/30 to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8 flex justify-center lg:justify-start">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 lg:p-6 rounded-none sm:rounded-2xl shadow-xl w-full sm:w-auto">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <Sparkles className="w-7 h-7 text-[#4c00ff]" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white mb-1">End-to-End</div>
                  <div className="text-sm font-semibold text-indigo-100 uppercase tracking-wider">AI Engineering Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesList.map((service, index) => (
            <Link 
              to={`/service/${service.slug}`}
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-[#a5b4fc] hover:shadow-[0_20px_40px_rgba(76,0,255,0.1)] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="w-full h-[180px] rounded-2xl overflow-hidden relative mb-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-[#4c00ff]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#4c00ff]" />
                  <span className="text-[10px] font-bold text-[#4c00ff] uppercase tracking-widest">{service.category}</span>
                </div>
              </div>

              <h3 className="text-[20px] font-bold text-gray-900 mb-4 group-hover:text-[#4c00ff] transition-colors leading-snug flex items-start justify-between">
                {service.title}
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#4c00ff] transform group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
