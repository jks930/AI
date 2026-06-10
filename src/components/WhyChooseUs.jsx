import React from 'react';
import { BrainCircuit, Trophy, ShieldCheck, Headphones, Cpu, Lightbulb, ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: "Deep-Tech Expertise with Business Focus",
    description: "With a strong technical understanding of AI technologies, we can connect deep technology capabilities with real-world business applications. Our AI app development company will ensure that every AI solution is not only technically feasible but also consistent with your strategic objectives and ROI expectations.",
    icon: <BrainCircuit className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Scalable & Adaptive AI Ecosystems",
    description: "We create scalable, adaptive AI ecosystems built to continuously evolve based upon changing data, business climate and increasing end-user demand. Each AI solution is designed with the intent of providing long-term sustainability while maintaining flexibility.",
    icon: <Trophy className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Precision-Driven Model Development",
    description: "At itmcsystem, our goal is to have 100% accuracy in everything we design. As an experienced provider of AI application development services, we place a strong emphasis on designing models that produce accurate results based on real data with the least amount of error possible.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Responsible & Compliant AI Practices",
    description: "itmcsystem understands the importance of ethical AI development through transparency, fairness and compliance with the applicable global standards. We minimize bias and protect your personal information by developing trust between you and your AI systems.",
    icon: <Headphones className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Real-Time Intelligence & Automation",
    description: "We have created a range of AI solutions that provide immediate insights into complex business processes and workflows. This allows businesses to make quicker decisions, operate their business more efficiently and achieve an unrivaled competitive advantage over competitors.",
    icon: <Cpu className="w-6 h-6 text-blue-600" />
  },
  {
    title: "High-Accuracy Model Engineering",
    description: "As the best AI development company focused on results, we are constantly evolving and optimizing models for maximum accuracy and performance. This guarantees that our AI systems provide consistent, true-to-life value across all scenarios.",
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />
  }
];

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" className="relative w-full py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          
          {/* Left Column */}
          <div className="w-full lg:w-[45%] lg:pr-12 flex flex-col">
            <h2 className="text-[34px] lg:text-[44px] font-extrabold text-gray-900 leading-[1.2] mb-6 tracking-tight">
              What Sets itmcsystem Apart in Delivering Enterprise-Grade AI Solutions
            </h2>
            <p className="text-gray-600 text-[16px] leading-[1.7] mb-8">
              itmcsystem takes a revolutionary approach to developing AI solutions. As a top artificial intelligence development company in USA, we leverage our extensive technical background and real-world business experience to develop AI products that meet customers' needs quickly and effectively.
            </p>
            
            <div className="mb-8">
              <a href="#contact" className="bg-[#4a00ff] hover:bg-[#3800cc] text-white px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/30">
                Contact Us <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Premium Image Container */}
            <div className="rounded-[24px] overflow-hidden shadow-2xl bg-[#0a1a5c] h-[350px] lg:h-[450px] relative w-full group">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                alt="AI Global Network" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-110 transition-transform duration-1000 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080014]/90 via-[#10002b]/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    <ShieldCheck className="w-6 h-6 text-[#4a00ff]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white mb-0.5">100% Accuracy Goal</div>
                    <div className="text-sm font-medium text-blue-200">Precision-Driven Models</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Scrollable Features List) */}
          <div className="w-full lg:w-[55%] relative mt-8 lg:mt-0">
            <div className="bg-[#0f4dff] rounded-[24px] overflow-y-auto custom-scrollbar-light shadow-2xl h-[500px] lg:h-auto lg:absolute lg:inset-0">
              <div className="flex flex-col">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`p-8 lg:p-10 ${index !== features.length - 1 ? 'border-b border-blue-500/30' : ''}`}
                  >
                    <div className="flex items-start gap-6">
                      {/* Icon Box */}
                      <div className="flex-shrink-0 w-14 h-14 bg-white rounded-[14px] flex items-center justify-center shadow-md shadow-blue-900/20">
                        {feature.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-[20px] lg:text-[22px] font-bold text-white mb-3 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-blue-100 text-[15px] leading-relaxed opacity-90">
                          {feature.description}
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
        .custom-scrollbar-dark::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 8px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.4);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
