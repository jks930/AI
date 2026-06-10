import React from 'react';
import { BrainCircuit, Trophy, ShieldCheck, Headphones, Cpu, Lightbulb, ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: "Bridging Deep Tech and Business Goals",
    description: "We seamlessly integrate advanced machine learning capabilities with your core business strategies to deliver solutions that drive immediate, quantifiable ROI.",
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    bg: "bg-[#0a45e8]"
  },
  {
    title: "Dynamic & Scalable Infrastructures",
    description: "Our architectures are engineered for immense scalability, adapting continuously to shifting data landscapes and growing user demand.",
    icon: <Trophy className="w-6 h-6 text-[#0a45e8]" />,
    bg: "bg-white"
  },
  {
    title: "Uncompromising Accuracy",
    description: "We engineer our predictive models to operate with near-perfect precision, leveraging rigorous data validation to minimize error rates.",
    icon: <ShieldCheck className="w-6 h-6 text-[#0a45e8]" />,
    bg: "bg-white"
  },
  {
    title: "Ethical & Compliant AI",
    description: "We embed transparency and global compliance standards into the heart of our algorithms, eliminating bias and securing user privacy.",
    icon: <Headphones className="w-6 h-6 text-[#0a45e8]" />,
    bg: "bg-white"
  },
  {
    title: "Instant Intelligence Automation",
    description: "Unlock instantaneous operational insights and automate complex workflows to maintain a decisive edge over your competitors.",
    icon: <Cpu className="w-6 h-6 text-[#0a45e8]" />,
    bg: "bg-white"
  },
  {
    title: "Continuous Model Optimization",
    description: "We persistently fine-tune our algorithms post-deployment to ensure peak performance and long-term sustainable value.",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    bg: "bg-[#0a1a5c]"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="whychooseus" className="relative w-full py-20 lg:py-28 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Center Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
           <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0a45e8] font-bold text-[13px] tracking-wide mb-6 border border-blue-200">
            THE ITMCSYSTEM ADVANTAGE
          </div>
          <h2 className="text-[36px] lg:text-[48px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
            What Sets Us Apart in Delivering <br className="hidden md:block" /> Enterprise-Grade AI Solutions
          </h2>
          <p className="text-gray-600 text-[17px] lg:text-[19px] leading-[1.7] mb-8 max-w-3xl mx-auto">
            We take a revolutionary approach to developing intelligence architectures. By fusing deep technical expertise with real-world business acumen, we deliver robust, scalable AI platforms that solve complex enterprise challenges rapidly and effectively.
          </p>
          <a href="#contact" className="bg-[#0a45e8] hover:bg-[#0835b8] text-white px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-2 transition-colors shadow-[0_10px_20px_rgba(10,69,232,0.3)]">
            Partner With Us <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`rounded-[32px] p-8 lg:p-10 transition-all duration-300 group flex flex-col h-full border ${
                feature.bg === 'bg-white' 
                  ? 'border-gray-100 hover:border-blue-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(10,69,232,0.08)] bg-white' 
                  : `${feature.bg} border-transparent shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2`
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                feature.bg === 'bg-white' ? 'bg-blue-50 group-hover:bg-[#0a45e8] transition-colors' : 'bg-white/20 backdrop-blur-md'
              }`}>
                {/* Clone element to override colors on hover for white cards */}
                {React.cloneElement(feature.icon, {
                  className: `w-6 h-6 transition-colors ${feature.bg === 'bg-white' ? 'text-[#0a45e8] group-hover:text-white' : 'text-white'}`
                })}
              </div>
              <h3 className={`text-[22px] font-bold mb-4 leading-snug ${
                feature.bg === 'bg-white' ? 'text-gray-900 group-hover:text-[#0a45e8] transition-colors' : 'text-white'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-[15px] leading-relaxed flex-grow ${
                feature.bg === 'bg-white' ? 'text-gray-500' : 'text-blue-100 opacity-90'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
