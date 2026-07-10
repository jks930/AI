import React from 'react';
import { Sparkles } from 'lucide-react'; // Or another icon, let's use a generic one like Zap or Layers

const capabilities = [
  {
    category: "AI Agents & Copilot Solutions",
    title: "Autonomous Agentic AI",
    description: "We engineer autonomous systems that do more than just follow rules they think, collaborate, and act independently. As a leading AI Development company for next-gen autonomy, we create intelligent agents that streamline complex operations and boost productivity by making smart decisions without constant human intervention."
  },
  {
    category: "Prototype & MVP Development",
    title: "Generative AI Solutions",
    description: "Our team delivers cutting-edge AI Development Services focused on creation and innovation. We build powerful generative models that produce original text, dynamic images, and code, helping enterprises automate content production and solve problems creatively at a scale previously impossible."
  },
  {
    category: "Prototype & MVP Development",
    title: "Advanced Machine Learning",
    description: "The team develops bespoke algorithms that turn chaotic data into clear strategic advantages. By leveraging top-tier Artificial Intelligence Development Services, we enable your software to identify hidden patterns and learn from new information, ensuring your business gets smarter with every interaction."
  },
  {
    category: "AI integration & Implementation",
    title: "Intelligent Computer Vision",
    description: "We enable machines to \"see\" and interpret the world with human-like precision. We build systems that process visual data in real-time to automate quality control, enhance security, and revolutionize how users interact with the physical world."
  },
  {
    category: "AI Agents & Copilot Solutions",
    title: "Natural Language Processing (NLP)",
    description: "Our advanced NLP architectures allow applications to truly understand context, nuance, and sentiment, not just keywords. We implement the best AI development services to create chatbots and search engines that bridge the gap between human communication and machine understanding, dramatically improving customer engagement."
  },
  {
    category: "Enterprise AI Solutions",
    title: "Predictive Analytics Engines",
    description: "Our experienced team helps you move from reactive to proactive strategies. As a specialized AI Development Company, we build predictive engines that forecast risks and spot market trends before they happen, giving you the foresight needed to secure sustainable growth."
  },
  {
    category: "AI integration & Implementation",
    title: "Conversational AI & Virtual Assistants",
    description: "We build next-generation conversational AI systems that deliver human-like interactions across platforms. From intelligent chatbots to voice-enabled assistants, our solutions use advanced AI Development Services to enhance customer engagement, provide instant support, and create seamless communication experiences across digital channels."
  },
  {
    category: "AI integration & Implementation",
    title: "High-Performance Model Tuning",
    description: "Our engineers’ focus on fine-tuning and optimizing the model to ensure your AI runs with maximum accuracy and speed. This dedication to quality ensures that our technology adapts seamlessly to your changing business needs, solidifying our role as a partner in your growth."
  },
  {
    category: "AI integration & Implementation",
    title: "AI-Powered Automation Solutions",
    description: "We design intelligent automation systems that streamline repetitive tasks and optimize business workflows. By leveraging advanced AI Development Services, we help organizations reduce operational costs, improve efficiency, and enhance productivity through smart, self-operating processes that scale effortlessly."
  }
];

const Capabilities = () => {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-[#fdfdfd] overflow-hidden border-t border-gray-100">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a45e8' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4">
            <h2 className="text-[34px] lg:text-[40px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
              Pioneering the Future with Intelligent AI Capabilities
            </h2>
            <p className="text-gray-600 text-[16px] leading-[1.7] mb-10">
              At  ITMC Digital, we harness the power of artificial intelligence to deliver solutions that go beyond standard automation. Our advanced capabilities enable businesses to create innovative products, streamline operations, and gain actionable insights from their data.
            </p>

            <div className="rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 bg-gradient-to-br from-[#0a45e8] to-[#1e3a8a] h-[400px] lg:h-auto flex-1 relative flex items-center justify-center transform hover:scale-[1.02] transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-white/5 opacity-50"></div>
              <div className="text-white/80 font-semibold uppercase tracking-widest text-sm bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">Image Placeholder</div>
            </div>
          </div>

          {/* Right Column (Scrollable List) */}
          <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-y-auto custom-scrollbar h-[500px] lg:h-auto lg:absolute lg:inset-0">
              <div className="flex flex-col">
                {capabilities.map((item, index) => (
                  <div
                    key={index}
                    className={`p-7 lg:p-8 hover:bg-gray-50/50 transition-colors duration-500 ease-out group cursor-pointer ${index !== capabilities.length - 1 ? 'border-b border-dashed border-gray-200' : ''
                      }`}
                  >
                    <div className="flex items-start">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-[#0a45e8] rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 transform group-hover:scale-105 transition-transform duration-500 ease-out">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>

                      {/* Content */}
                      <div className="ml-5 flex-1">
                        <div className="text-[12px] font-bold text-[#0a45e8] uppercase tracking-widest mb-1.5 opacity-80">
                          {item.category}
                        </div>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0a45e8] transition-colors duration-500 ease-out pr-4">
                            {item.title}
                          </h3>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0a45e8] transition-all duration-500 ease-out group-hover:translate-x-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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

export default Capabilities;
