import React from 'react';

const transformServices = [
  {
    title: "Autonomous Agentic AI",
    desc: "We engineer autonomous systems that do more than just follow rules; they think, collaborate, and act independently. As a leading AI Development company for next-gen autonomy, we create intelligent agents that streamline complex operations and boost productivity by making smart decisions without constant human intervention.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Generative AI Solutions",
    desc: "Our team delivers cutting-edge AI Development Services focused on creation and innovation. We build powerful generative models that produce original text, dynamic images, and code, helping enterprises automate content production and solve problems creatively at a scale previously impossible.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Advanced Machine Learning",
    desc: "The team develops bespoke algorithms that turn chaotic data into clear strategic advantages. By leveraging top-tier Artificial Intelligence Development Services, we enable your software to identify hidden patterns and learn from new information, ensuring your business gets smarter with every interaction.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Intelligent Computer Vision",
    desc: "We enable machines to \"see\" and interpret the world with human-like precision. We build systems that process visual data in real-time to automate quality control, enhance security, and revolutionize how users interact with the physical world.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Natural Language Processing (NLP)",
    desc: "Our advanced NLP architectures allow applications to truly understand context, nuance, and sentiment, not just keywords. We implement the best AI development services to create chatbots and search engines that bridge the gap between human communication and machine understanding, dramatically improving customer engagement.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Predictive Analytics Engines",
    desc: "Our experienced team helps you move from reactive to proactive strategies. As a specialized AI Development Company, we build predictive engines that forecast risks and spot market trends before they happen, giving you the foresight needed to secure sustainable growth.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Conversational AI & Virtual Assistants",
    desc: "We build next-generation conversational AI systems that deliver human-like interactions across platforms. From intelligent chatbots to voice-enabled assistants, our solutions use advanced AI Development Services to enhance customer engagement, provide instant support, and create seamless communication experiences across digital channels.",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "High-Performance Model Tuning",
    desc: "Our engineers' focus on fine-tuning and optimizing the model to ensure your AI runs with maximum accuracy and speed. This dedication to quality ensures that our technology adapts seamlessly to your changing business needs, solidifying our role as a partner in your growth.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI-Powered Automation Solutions",
    desc: "We design intelligent automation systems that streamline repetitive tasks and optimize business workflows. By leveraging advanced AI Development Services, we help organizations reduce operational costs, improve efficiency, and enhance productivity through smart, self-operating processes that scale effortlessly.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
  }
];

export default function TransformServices() {
  return (
    <section 
      data-header-theme="dark"
      data-header-bg="bg-gradient-to-br from-[#1d4ed8]/95 via-[#2563eb]/95 to-[#3b82f6]/95 backdrop-blur-md"
      className="relative w-full py-16 lg:py-24 bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] overflow-hidden"
    >
      
      {/* Background ambient light effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16 mb-16">
          <div className="lg:w-5/12">
            <h2 className="text-[34px] lg:text-[44px] font-extrabold text-white leading-[1.2] tracking-tight">
              Transforming Business with AI Development Services
            </h2>
          </div>
          <div className="lg:w-7/12">
            <p className="text-[17px] lg:text-[19px] text-blue-50 leading-relaxed font-light">
              We craft advanced AI solutions that do more than automate they transform the way businesses operate. By building adaptive, scalable systems, we empower organizations to make smarter decisions, unlock deeper insights, and achieve measurable growth at a global scale.
            </p>
          </div>
        </div>

        {/* Services Grid (Scrollable) */}
        <div className="relative">
          <div className="overflow-y-auto custom-scrollbar h-[500px] lg:h-[600px] pr-2 lg:pr-4 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-8">
              {transformServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[24px] overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-[240px] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[20px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                    {service.title}
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
            </div>
          </div>
          {/* Subtle bottom fade to indicate more scrollable content */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#2563eb] to-transparent pointer-events-none rounded-b-xl"></div>
        </div>

      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
}
