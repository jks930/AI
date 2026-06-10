import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const portfolios = [
  {
    logo: "DigiShakti",
    logoColor: "text-blue-600",
    badges: ["Software", "Education"],
    category: "Education • Software",
    title: "Government Chatbot Initiative",
    description: "itmcsystem partnered with the Government of Jammu and Kashmir to develop the Digishakti chatbot, enabling website visitors to receive instant and accurate responses to their queries.",
    stats: [
      { value: "70%", label: "Workflow efficiency boost" },
      { value: "55%", label: "Increase in active users" }
    ],
    buttonText: "View Case Study",
    image: "/img1.jpg",
    imgBg: "bg-white"
  },
  {
    logo: "Enuncia.ai",
    logoColor: "text-red-500",
    badges: ["AI", "HealthTech"],
    category: "HealthTech • Mobile App",
    title: "AI-Powered Speech Therapy",
    description: "To bridge the gap in speech-language pathology (SLP) by providing an accessible, AI-powered assistant that helps users \"unchain\" their voices and overcome communication barriers.",
    stats: [
      { value: "40%", label: "Process Time Reduction" },
      { value: "4.8/5", label: "User Satisfaction" }
    ],
    buttonText: "View Portfolio",
    image: "/img2.webp",
    imgBg: "bg-[#e84135]"
  },
  {
    logo: "Restaurant AI",
    logoColor: "text-gray-900",
    badges: ["Hospitality", "AI Automation Platform"],
    category: "AI-Powered Restaurant Management Solution",
    title: "Intelligent Automation Platform",
    description: "itmcsystem collaborated with Restaurant AI to develop an intelligent automation platform for restaurants, helping businesses streamline order management, automate customer interactions, optimize table reservations, and improve operational efficiency with AI-driven insights.",
    stats: [
      { value: "60%", label: "Operational Efficiency Boost" },
      { value: "4.7/5", label: "Customer Satisfaction" }
    ],
    buttonText: "View Portfolio",
    image: "/img3.jpg",
    imgBg: "bg-white"
  },
  {
    logo: "Simply Keto",
    logoColor: "text-green-600",
    badges: ["Health & Wellness", "Mobile App"],
    category: "AI-Powered Keto Diet & Wellness Platform",
    title: "Intelligent Wellness Platform",
    description: "Our team collaborated with SimpleKeto to build an intelligent wellness platform focused on personalized keto nutrition and healthier lifestyle management. The app delivers AI-based meal recommendations, progress tracking, calorie management, and customized diet insights to help users stay consistent with their fitness and wellness goals through a smooth and engaging user experience.",
    stats: [
      { value: "65%", label: "Increase in User Engagement" },
      { value: "4.8/5", label: "User Satisfaction" }
    ],
    buttonText: "View Portfolio",
    image: "/img4.jpg",
    imgBg: "bg-white"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 lg:mb-24">
          <h2 className="text-[36px] lg:text-[50px] font-extrabold text-gray-900 leading-[1.15] tracking-tight lg:w-1/2">
            Proven AI <br className="hidden lg:block" />
            Implementations <br className="hidden lg:block" />
            That Deliver Real <br className="hidden lg:block" />
            Impact
          </h2>
          <p className="text-gray-600 text-[16px] leading-[1.8] lg:w-5/12">
            Explore how our AI development company has helped businesses build intelligent solutions, automate complex workflows, and accelerate digital transformation with scalable and future-ready AI technologies.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="flex flex-col relative w-full pb-[10vh]">
          {portfolios.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-[24px] border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row transition-all duration-500 mb-10 lg:mb-[150px] portfolio-card"
              style={{
                '--card-index': index,
                zIndex: index + 10
              }}
            >

              {/* Left Content */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-14 flex flex-col justify-center">
                {/* Logo Area */}
                <div className={`text-[20px] font-bold ${item.logoColor} mb-8 flex items-center gap-2`}>
                  <div className={`w-6 h-6 rounded bg-current opacity-20`}></div>
                  {item.logo}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {item.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-1.5 rounded-full border border-blue-600 text-blue-600 text-[13px] font-semibold"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Category & Title */}
                <h3 className="text-[22px] font-bold text-gray-900 mb-4">
                  {item.category}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[15px] leading-[1.8] mb-12">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 lg:gap-12 mb-8 lg:mb-10">
                  {item.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-[32px] font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-[13px] text-gray-500 font-medium leading-snug w-32">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div>
                  <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#2a00ff] hover:bg-[#1f00cc] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold transition-colors duration-300">
                    {item.buttonText} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Image Container */}
              <div className={`w-full lg:w-1/2 ${item.imgBg} flex items-center justify-center relative min-h-[300px] lg:min-h-[500px]`}>
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .portfolio-card {
            position: sticky;
            top: calc(100px + (var(--card-index) * 30px));
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
