import React from 'react';
import { Cpu } from 'lucide-react';

const applicationsList = [
  {
    category: "AI Accelerator",
    title: "Advanced Conversational Interfaces",
    description: "The creation of intelligent chatbots and conversational interfaces to provide more human-like conversations with customers can greatly enhance customer engagement and support."
  },
  {
    category: "LLM Accelerator",
    title: "Fully Automated Support Systems",
    description: "Our AI-driven support systems can automate customer service processes, delivering faster response times, lower operational costs, and 24/7 support."
  },
  {
    category: "RAG Platform",
    title: "Personalized Recommendation Systems",
    description: "As an experienced artificial intelligence development services providers, we build recommendation systems that provide highly personalized content, product, or service suggestions based on user behavior patterns."
  },
  {
    category: "Mobile Accelerator",
    title: "Fraud Detection & Risk Monitoring",
    description: "Our intelligent systems are designed to identify and prevent fraudulent activity in real time, ensuring the safety of your business and preventing financial losses."
  },
  {
    category: "Cloud Accelerator",
    title: "Predictive Maintenance Solutions",
    description: "Through our advanced analytics solutions, we provide systems to predict equipment failures prior to the occurrence of the fault, thus improving efficiency and reducing equipment downtime."
  },
  {
    category: "Cloud Accelerator",
    title: "AI in Healthcare & Diagnostics",
    description: "Through our artificial intelligence development services, we help healthcare providers improve the speed and accuracy of diagnoses, enhance patient care, and streamline business processes."
  },
  {
    category: "Cloud Accelerator",
    title: "Financial Forecasting & Analytics",
    description: "By utilizing our AI models that analyze financial data and project trends, our clients can make better decisions regarding investment opportunities and business development."
  },
  {
    category: "Cloud Accelerator",
    title: "Smart Demand Forecasting",
    description: "Use demand forecasting tools driven by Artificial Intelligence (AI) to enhance accuracy and minimize waste; improve inventory and production planning."
  },
  {
    category: "Cloud Accelerator",
    title: "AI-Optimized Supply Chains",
    description: "As a reputable AI app development company, we build intelligent supply chain systems with increased visibility, effectiveness and decision-making abilities."
  },
  {
    category: "Cloud Accelerator",
    title: "Sentiment Analysis & Brand Monitoring",
    description: "itmcsystem is a top artificial intelligence development company that identifies customer opinions by analyzing reviews, feedback, and social media, allowing clients to enhance their brand image and marketing strategy."
  },
  {
    category: "Cloud Accelerator",
    title: "Real-Time Language Translation",
    description: "Using AI-enabled technologies, our platform enables seamless business growth across geographic boundaries without requiring a specific language."
  },
  {
    category: "Cloud Accelerator",
    title: "Computer Vision Solutions",
    description: "Our top artificial intelligence development company utilizes advanced technologies to create AI-powered Vision Solutions to assist with the creation of image recognition, object detection, and video analytics for several industries such as retail, healthcare, and security."
  },
  {
    category: "Cloud Accelerator",
    title: "Edge AI & Smart Devices",
    description: "Utilizing Artificial Intelligence (AI) at the Edge provides real-time availability of data processed on devices, making them faster, more efficient, and better able to respond to changing conditions."
  },
  {
    category: "Cloud Accelerator",
    title: "AI-Powered Marketing Automation",
    description: "Enhance your marketing performance with our AI-driven marketing automation tools that optimize marketing campaigns, target the right audience, and increase a company's return on investment (ROI)."
  },
  {
    category: "Cloud Accelerator",
    title: "Voice-Enabled AI Systems",
    description: "Our development of voice-enabled technology enables customers to interact with our products and services without using their hands, thereby improving accessibility and convenience."
  }
];

const Applications = () => {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-[#fdfdfd] overflow-hidden border-t border-gray-100">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b21a8' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4">
            <h2 className="text-[34px] lg:text-[40px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
              Intelligent AI Applications Transforming Modern Businesses
            </h2>
            <p className="text-gray-600 text-[16px] leading-[1.7] mb-10">
              In the current, digitally focused environment, companies are using advanced AI development services to create efficiencies, improve the customer experience, and innovate. Being one of the top artificial intelligence development company we design and develop intelligent applications that help clients solve real-world problems and provide measurable benefits for the business.
            </p>
            
            <div className="rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 bg-gradient-to-br from-[#2f68ff] to-[#0a45e8] min-h-[400px] flex-1 relative group transform hover:scale-[1.02] transition-transform duration-500 ease-out">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" 
                alt="AI Applications" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70 group-hover:opacity-90 transition-opacity duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a45e8]/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-[#0a45e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-0.5">500+</div>
                      <div className="text-xs font-medium text-blue-100">Enterprise AI Deployments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Scrollable List) */}
          <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
            <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 overflow-y-auto custom-scrollbar h-[500px] lg:h-auto lg:absolute lg:inset-0">
              <div className="flex flex-col">
                {applicationsList.map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-7 lg:p-8 hover:bg-gray-50/50 transition-colors duration-500 ease-out group cursor-pointer ${
                      index !== applicationsList.length - 1 ? 'border-b border-dashed border-gray-200' : ''
                    }`}
                  >
                    <div className="flex items-start">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-[#0a45e8] rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 transform group-hover:scale-105 transition-transform duration-500 ease-out">
                        <Cpu className="w-5 h-5 text-white" />
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

export default Applications;
