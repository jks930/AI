import React from 'react';
import { Cpu, Zap, ShieldCheck, TrendingUp, Globe } from 'lucide-react';

const applicationsList = [
  {
    category: "AI Accelerator",
    title: "Advanced Conversational Interfaces",
    description: "Building sophisticated conversational agents that deliver seamless, human-like dialogue, significantly elevating customer satisfaction and engagement levels.",
    image: "/ai/images/advanced-conversational-interfaces.jpeg"
  },
  {
    category: "LLM Accelerator",
    title: "Fully Automated Support Systems",
    description: "Deploying intelligent support architectures to automate routine service workflows, ensuring rapid resolution times and non-stop operational availability.",
    image: "/ai/images/fully-automated-support-systems.jpeg"
  },
  {
    category: "RAG Platform",
    title: "Personalized Recommendation Systems",
    description: "Engineering tailored recommendation engines that analyze behavioral data to push highly relevant products, content, and services to individual users.",
    image: "/ai/images/personalized-recommendation-systems.jpeg"
  },
  {
    category: "Mobile Accelerator",
    title: "Fraud Detection & Risk Monitoring",
    description: "Implementing real-time threat detection algorithms that proactively identify anomalies, safeguard financial assets, and minimize enterprise risk.",
    image: "/ai/images/fraud-detection-risk-monitoring.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "Predictive Maintenance Solutions",
    description: "Utilizing advanced telemetry analysis to forecast machinery degradation before failures occur, maximizing uptime and optimizing maintenance schedules.",
    image: "/ai/images/predictive-maintenance-solutions.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "AI in Healthcare & Diagnostics",
    description: "Empowering medical institutions with precise diagnostic models that accelerate patient care and streamline complex administrative workflows.",
    image: "/ai/images/ai-in-healthcare-diagnostics.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "Financial Forecasting & Analytics",
    description: "Deploying robust financial models that process massive datasets to project market trends and guide strategic investment decisions.",
    image: "/ai/images/financial-forecasting-analytics.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "Smart Demand Forecasting",
    description: "Applying predictive intelligence to anticipate market demand, allowing businesses to optimize inventory levels and slash production waste.",
    image: "/ai/images/smart-demand-forecasting.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "AI-Optimized Supply Chains",
    description: "Architecting resilient supply chain networks enhanced by machine learning, providing end-to-end visibility and autonomous decision capabilities.",
    image: "/ai/images/ai-optimized-supply-chains.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "Sentiment Analysis & Brand Monitoring",
    description: "Monitoring digital ecosystems to capture public sentiment and customer feedback, enabling brands to dynamically refine their marketing strategies.",
    image: "/ai/images/sentiment-analysis-brand-monitoring.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "Real-Time Language Translation",
    description: "Breaking down global communication barriers through instantaneous, highly accurate translation engines that power international business expansion.",
    image: "/ai/images/real-time-language-translation.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "Computer Vision Solutions",
    description: "Deploying sophisticated visual recognition models capable of complex object tracking and video analytics across retail, security, and industrial sectors.",
    image: "/ai/images/computer-vision-solutions.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "Edge AI & Smart Devices",
    description: "Processing intelligence directly at the edge to enable ultra-low latency decision making and resilient functionality for connected smart devices.",
    image: "/ai/images/edge-ai-smart-devices.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "AI-Powered Marketing Automation",
    description: "Supercharging campaigns via intelligent automation tools that perfectly segment audiences and dynamically optimize ad spend for maximum ROI.",
    image: "/ai/images/ai-powered-marketing-automation.jpeg"
  },
  {
    category: "Cloud Accelerator",
    title: "Voice-Enabled AI Systems",
    description: "Crafting intuitive voice-first interfaces that facilitate hands-free operations, dramatically improving accessibility and user convenience.",
    image: "/ai/images/voice-enabled-ai-systems.jpeg"
  }
];

const Applications = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#fdfdfd] border-t border-gray-100 overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b21a8' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#eef2ff] text-[#0a45e8] font-bold text-[13px] tracking-wide mb-6 border border-[#c7d2fe]">
            INDUSTRY APPLICATIONS
          </div>
          <h2 className="text-[36px] lg:text-[48px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
            Next-Generation AI Applications <br className="hidden md:block" /> Driving Enterprise Growth
          </h2>
          <p className="text-gray-600 text-[17px] lg:text-[19px] leading-[1.7]">
            In today's rapidly evolving digital landscape, organizations leverage our specialized AI engineering to boost efficiency, elevate customer experiences, and pioneer new innovations. As a premier AI development partner, we construct sophisticated applications that tackle complex operational challenges and deliver quantifiable ROI.
          </p>
        </div>

        {/* Hero Image Banner */}
        <div className="w-full rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(10,69,232,0.15)] bg-gradient-to-br from-[#2f68ff] to-[#0a45e8] h-[300px] lg:h-[400px] relative group transform hover:scale-[1.01] transition-transform duration-700 ease-out mb-20">
          <img 
            src="/ai/images/applications.jpeg" 
            alt="AI Applications" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a45e8]/90 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Box 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 group hover:bg-white/20 transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <Zap className="w-6 h-6 text-[#0a45e8]" />
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-white mb-0.5 leading-tight">500+</div>
                <div className="text-[11px] font-bold text-blue-100 uppercase tracking-wider leading-tight">Deployments</div>
              </div>
            </div>
            {/* Box 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 group hover:bg-white/20 transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#0a45e8]" />
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-white mb-0.5 leading-tight">99.9%</div>
                <div className="text-[11px] font-bold text-blue-100 uppercase tracking-wider leading-tight">System Uptime</div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 group hover:bg-white/20 transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <TrendingUp className="w-6 h-6 text-[#0a45e8]" />
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-white mb-0.5 leading-tight">10x</div>
                <div className="text-[11px] font-bold text-blue-100 uppercase tracking-wider leading-tight">Efficiency Gain</div>
              </div>
            </div>
            {/* Box 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 group hover:bg-white/20 transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <Globe className="w-6 h-6 text-[#0a45e8]" />
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-white mb-0.5 leading-tight">24/7</div>
                <div className="text-[11px] font-bold text-blue-100 uppercase tracking-wider leading-tight">Active Monitoring</div>
              </div>
            </div>
          </div>
          
          {/* Mobile version (single box) */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-center md:hidden">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl w-full flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] shrink-0">
                <Zap className="w-6 h-6 text-[#0a45e8]" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white mb-0.5">500+</div>
                <div className="text-[11px] font-bold text-blue-100 uppercase tracking-wider">Enterprise Deployments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {applicationsList.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-[#a5b4fc] hover:shadow-[0_20px_40px_rgba(10,69,232,0.1)] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="w-full h-[200px] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 right-4 text-[10px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/20">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-12 h-12 bg-[#eff6ff] group-hover:bg-[#0a45e8] rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Cpu className="w-5 h-5 text-[#0a45e8] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3 group-hover:text-[#0a45e8] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Applications;
