import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    category: "AI Accelerator",
    title: "AI Strategy & Consulting",
    description: "Your AI vision must align with your overall business vision; your company’s specific goals will therefore define how our AI experts develop a unique AI strategy that delivers the highest possible ROI without adding unnecessary complexity or draining your resources."
  },
  {
    category: "LLM Accelerator",
    title: "AI-Driven Product Development",
    description: "With a growing presence as the premier developer of AI applications, itmcsystem develops intelligent applications designed to improve business operations and enhance customer experiences, offering scalable, effective solutions that can be integrated into any company’s existing digital ecosystem."
  },
  {
    category: "RAG Platform",
    title: "Generative AI Solutions",
    description: "itmcsystem provides companies with AI agent sand virtual assistants that automate customer interactions 24/7 and automate other routine operational tasks; thus, your employees can focus on higher-value tasks, increasing productivity across your organisation."
  },
  {
    category: "Mobile Accelerator",
    title: "Autonomous AI Agent Development",
    description: "Our AI development company in the USA uses generative AI capabilities to unlock creative innovation opportunities for our customers. As such, our customers can produce more creative, faster, and better content using our advanced automation capabilities."
  },
  {
    category: "Cloud Accelerator",
    title: "AI Chatbots & Virtual Assistants",
    description: "As your AI Development partner, our team will ensure a seamless transition when adopting AI into your existing systems, without disrupting your organisation's performance. We will also enhance your organisation’s performance as a result of the successful development of new AI capabilities."
  },
  {
    category: "Cloud Accelerator",
    title: "AI System Integration",
    description: "Our artificial intelligence development company creates intelligent systems that can autonomously make decisions. These AI agents independently adapt, learn, and act to resolve complex business issues and drive transformation."
  },
  {
    category: "Cloud Accelerator",
    title: "AI-Powered Security Solutions",
    description: "Utilize historical data to predict the future. Use forecasting models derived from our statistical analysis of historical data so you can make informed choices, mitigate risk, and discover new business opportunities for growth."
  },
  {
    category: "Cloud Accelerator",
    title: "Voice AI & Conversational Agents",
    description: "Our artificial intelligence development services include ensuring that every AI solution has a security framework incorporated into its design to protect sensitive data, conform to regulatory compliance, and safeguard your systems from evolving threats."
  },
  {
    category: "Cloud Accelerator",
    title: "AIOps & Intelligent Automation",
    description: "From concept to marketplace, we develop new AI-powered products that are functionally sophisticated, architecturally scalable, and commercially viable. As a premier AI development company in the USA, we partner with clients in turning their business concept into revenue-generating digital solutions."
  },
  {
    category: "Cloud Accelerator",
    title: "AI-as-a-Service (AIaaS)",
    description: "We improve IT operations performance by providing AI-powered tools for monitoring and automating IT processes, achieving high reliability, low downtime, and optimal performance throughout the entire operational life cycle."
  },
  {
    category: "Cloud Accelerator",
    title: "Robotic Process Automation (RPA)",
    description: "Our artificial intelligence development services provide automation technology to eliminate repetitive tasks and streamline work processes. As a result, companies will increase productivity, reduce operating expenses, and achieve operational excellence."
  },
  {
    category: "Cloud Accelerator",
    title: "AI Analytics & Insights",
    description: "We convert your data into scalable, actionable insights. As a result, you will be able to identify patterns of behaviour, monitor performance, and make data-driven strategic decisions that will provide a significant competitive advantage."
  }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full py-12 lg:py-16 bg-[#fdfdfd] overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b21a8' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4">
            <h2 className="text-[34px] lg:text-[40px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
              Broaden Your Digital Capabilities with Our Advanced AI Application Development Services
            </h2>
            <p className="text-gray-600 text-[16px] leading-[1.7] mb-10">
              As a premier AI-driven development solutions provider, itmcsystem helps you accelerate your company's innovation and streamline your processes, delivering tangible, measurable results that drive increased growth.
            </p>
            
            <div className="rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 sticky top-32">
              <img 
                src="/services.png" 
                alt="AI Application Development Services" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column (Scrollable List) */}
          <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-y-auto custom-scrollbar h-[500px] lg:h-auto lg:absolute lg:inset-0">
              <div className="flex flex-col">
                {servicesList.map((service, index) => (
                  <Link 
                    to="/service-details"
                    key={index} 
                    className={`block p-7 lg:p-8 hover:bg-gray-50/50 transition-colors group cursor-pointer ${
                      index !== servicesList.length - 1 ? 'border-b border-dashed border-gray-200' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#6f00ff] to-[#0d00ff] rounded-[14px] flex items-center justify-center shadow-[0_4px_15px_rgba(111,0,255,0.3)]">
                        <Sparkles className="w-6 h-6 text-white drop-shadow-md" />
                      </div>
                      
                      {/* Content */}
                      <div className="ml-5 flex-1">
                        <div className="text-[12px] font-bold text-[#4c00ff] uppercase tracking-widest mb-1.5 opacity-80">
                          {service.category}
                        </div>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#4c00ff] transition-colors pr-4">
                            {service.title}
                          </h3>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#4c00ff] transition-all group-hover:translate-x-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
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

export default Services;
