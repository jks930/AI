import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const portfolios = [
  {
    logo: "CivicConnect AI",
    logoColor: "text-blue-600",
    badges: ["GovTech", "Conversational AI"],
    category: "Public Sector Engagement",
    title: "CivicConnect Chatbot Initiative",
    description: "We partnered with regional authorities to deploy an AI-driven civic engagement bot, providing citizens with instantaneous, accurate resolutions to administrative queries.",
    stats: [
      { value: "70%", label: "Workflow efficiency boost" },
      { value: "55%", label: "Increase in active users" }
    ],
    buttonText: "View Case Study",
    image: "/img1.jpg",
    imgBg: "bg-blue-50"
  },
  {
    logo: "Vocalize.ai",
    logoColor: "text-red-500",
    badges: ["HealthTech", "Machine Learning"],
    category: "AI-Powered Speech Pathology",
    title: "Accessible Therapy Assistant",
    description: "Engineered an accessible, AI-powered pathology assistant designed to help individuals overcome communication barriers through real-time speech analysis and therapy modules.",
    stats: [
      { value: "40%", label: "Process Time Reduction" },
      { value: "4.8/5", label: "User Satisfaction" }
    ],
    buttonText: "View Portfolio",
    image: "/img2.webp",
    imgBg: "bg-red-50"
  },
  {
    logo: "SmartDine",
    logoColor: "text-gray-900",
    badges: ["Hospitality", "Automation"],
    category: "Restaurant Management Solution",
    title: "Intelligent Automation Platform",
    description: "Developed a comprehensive automation ecosystem for hospitality brands, seamlessly optimizing order management, automating customer interactions, and driving operational efficiency.",
    stats: [
      { value: "60%", label: "Operational Efficiency Boost" },
      { value: "4.7/5", label: "Customer Satisfaction" }
    ],
    buttonText: "View Portfolio",
    image: "/img3.jpg",
    imgBg: "bg-gray-50"
  },
  {
    logo: "NutriSync AI",
    logoColor: "text-green-600",
    badges: ["Wellness", "Mobile App"],
    category: "AI-Powered Nutrition Platform",
    title: "Intelligent Wellness Ecosystem",
    description: "Architected an intelligent wellness application delivering hyper-personalized nutrition tracking, AI-based meal generation, and customized lifestyle analytics for optimal health management.",
    stats: [
      { value: "65%", label: "Increase in User Engagement" },
      { value: "4.8/5", label: "User Satisfaction" }
    ],
    buttonText: "View Portfolio",
    image: "/img4.jpg",
    imgBg: "bg-green-50"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full bg-white py-20 lg:py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-28">
           <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0a45e8] font-bold text-[13px] tracking-wide mb-6 border border-blue-200">
            OUR SUCCESS STORIES
          </div>
          <h2 className="text-[36px] lg:text-[54px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
            Proven AI Implementations <br className="hidden lg:block" /> That Deliver Real Impact
          </h2>
          <p className="text-gray-600 text-[17px] lg:text-[19px] leading-[1.8] max-w-3xl mx-auto">
            Explore how our AI engineering teams have helped forward-thinking businesses construct intelligent architectures, automate complex workflows, and accelerate global digital transformation.
          </p>
        </div>

        {/* Alternating Layout Portfolio */}
        <div className="flex flex-col gap-20 lg:gap-32">
          {portfolios.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute inset-0 rounded-[32px] transform transition-transform duration-700 ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'} ${item.imgBg} opacity-50`}></div>
                  <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/3] w-full transform group-hover:-translate-y-2 transition-transform duration-700">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className={`text-[20px] font-bold ${item.logoColor} mb-6 flex items-center gap-3`}>
                    <div className="w-8 h-8 rounded-lg bg-current opacity-10 flex items-center justify-center"></div>
                    {item.logo}
                  </div>

                  <h3 className="text-[28px] lg:text-[36px] font-extrabold text-gray-900 mb-6 leading-[1.2]">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {item.badges.map((badge, idx) => (
                      <span key={idx} className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-[13px] font-bold tracking-wide">
                        {badge}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-500 text-[16px] lg:text-[17px] leading-[1.8] mb-10">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-10 pb-10 border-b border-gray-100">
                    {item.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-[36px] lg:text-[42px] font-extrabold text-gray-900 mb-2">{stat.value}</div>
                        <div className="text-[14px] text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <a href="#" className="inline-flex items-center gap-3 text-[#0a45e8] font-bold text-[16px] hover:text-[#0835b8] transition-colors group">
                      {item.buttonText} 
                      <span className="w-10 h-10 rounded-full bg-blue-50 group-hover:bg-[#0a45e8] group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
