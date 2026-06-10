import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const industriesData = [
  {
    title: "Real Estate",
    subtitle: "Smarter property management.",
    content: "Real estate is a traditionally slow-moving industry, so we have developed AI-focused solutions that accelerate and streamline the process for both real estate agents and investors. We leverage historical data to provide accurate property calculations and virtual property tours."
  },
  {
    title: "On-Demand",
    subtitle: "Streamlined on-demand services.",
    content: "We provide AI solutions that optimize routing, dynamic pricing, and match-making algorithms for on-demand platforms to improve efficiency and user experience."
  },
  {
    title: "Healthcare",
    subtitle: "Advanced healthcare solutions.",
    content: "Our AI systems assist in diagnosis, patient monitoring, and personalized treatment plans, improving overall patient care and hospital management."
  },
  {
    title: "Fintech",
    subtitle: "Intelligent financial technology.",
    content: "We develop AI tools for fraud detection, automated trading, and personalized financial advice to keep fintech companies ahead of the curve."
  },
  {
    title: "Logistics",
    subtitle: "Optimized supply chains.",
    content: "AI-driven predictive analytics and route optimization to reduce costs, improve delivery times, and manage fleet operations in logistics."
  },
  {
    title: "Retail",
    subtitle: "Personalized shopping experiences.",
    content: "Enhancing retail with AI-powered recommendations, inventory management, and customer behavior analysis to drive sales."
  },
  {
    title: "Manufacturing",
    subtitle: "Smart manufacturing processes.",
    content: "Implementing predictive maintenance, quality control, and automation to streamline manufacturing operations and reduce downtime."
  },
  {
    title: "EdTech (Education)",
    subtitle: "Personalized learning platforms.",
    content: "AI tools that adapt to individual learning paces, providing customized educational content and automated grading for institutions."
  },
  {
    title: "Travel & Hospitality",
    subtitle: "Enhanced travel experiences.",
    content: "AI-driven booking systems, personalized itineraries, and intelligent customer service chatbots for the travel industry."
  },
  {
    title: "Insurance",
    subtitle: "Automated claims processing.",
    content: "Using AI to assess risks, automate claims processing, and detect fraudulent activities quickly in the insurance sector."
  },
  {
    title: "Banking",
    subtitle: "Secure and intelligent banking.",
    content: "AI solutions for risk management, customer service automation, and providing personalized banking experiences to customers."
  },
  {
    title: "Entertainment & Media",
    subtitle: "Content recommendation and generation.",
    content: "Leveraging AI for personalized content delivery, automated video editing, and deep audience analytics in media."
  },
  {
    title: "Security",
    subtitle: "Advanced threat detection.",
    content: "AI-powered surveillance, anomaly detection, and predictive security measures to safeguard physical and digital assets."
  }
];

const Industries = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="industries" className="relative w-full py-12 lg:py-16 bg-[#f9fafb] overflow-hidden border-t border-gray-100">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <h2 className="text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
              AI-Powered Innovation Across Diverse Industries with an AI Application Development Company
            </h2>
            <p className="text-gray-600 text-[16px] leading-[1.7] mb-10">
              We believe each sector has different issues, and therefore every organisation deals with these issues differently, we understand that there is no one method or generic way to complete an engagement. As a premier AI app development company, we offer specific, scalable, and measurable solutions for all industries.
            </p>
            
            <div className="rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] h-[350px] lg:h-[500px] w-full relative group transform hover:scale-[1.02] transition-transform duration-500 ease-out">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop" 
                alt="Corporate Industries" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:opacity-70 transition-opacity duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-[#1e1b4b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white mb-0.5">15+ Industries</div>
                      <div className="text-xs font-medium text-indigo-200">Custom AI Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Accordion) */}
          <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
            <div className="bg-white rounded-[24px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-100 overflow-y-auto custom-scrollbar h-[500px] lg:h-auto lg:absolute lg:inset-0">
              <div className="flex flex-col">
                {industriesData.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                  <div 
                    key={index} 
                    className={`border-b border-gray-100 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-blue-50/40' : 'hover:bg-gray-50'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center text-left focus:outline-none group p-5 lg:p-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full transition-colors duration-300 flex-shrink-0 ${isOpen ? 'bg-blue-600' : 'bg-transparent group-hover:bg-blue-300'}`}></div>
                        <h3 className={`text-[17px] font-bold transition-colors duration-300 ${isOpen ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-500 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-400'}`} />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out px-5 lg:px-6 pl-[44px] lg:pl-[48px] ${
                        isOpen ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                      }`}
                    >
                      <div className="text-[14px] font-semibold text-gray-800 mb-2">
                        {item.subtitle}
                      </div>
                      <p className="text-gray-500 text-[14px] leading-[1.7]">
                        <span className="font-medium text-blue-600">{item.content.substring(0, item.title.length)}</span>
                        {item.content.substring(item.title.length)}
                      </p>
                    </div>
                  </div>
                )})}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f9fafb;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </section>
  );
};

export default Industries;
