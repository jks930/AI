import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const models = [
  {
    title: "Dedicated AI Task Force",
    description: "At  ITMC Digital, we utilize designated teams that are based on your own team's needs. These teams have a seamless connection with your existing organizational structure to produce faster results and drive innovation throughout your organization.",
    bullets: [
      "Scalable delivery team structure designed around your needs",
      "Complete ownership and continuous delivery",
      "Seamless integration with existing workflows",
      "Reduction of hiring and operating costs"
    ]
  },
  {
    title: "Outcome-Driven Project Execution",
    description: "This model is suited for enterprises with predefined AI initiatives and measurable outcomes.  ITMC Digital assumes full responsibility for delivery, from planning to deployment.",
    bullets: [
      "Structured milestones and timelines",
      "Clear and predictable commercial model",
      "Strong focus on performance and quality",
      "Complete lifecycle management"
    ]
  },
  {
    title: "AI Strategy, Consulting & Advisory",
    description: " ITMC Digital partners with organizations to define AI vision, evaluate technology choices, and build a roadmap that supports sustainable business growth.",
    bullets: [
      "Business-aligned AI strategy",
      "Technology and architecture planning",
      "Risk, compliance, and feasibility assessment",
      "Domain-led insights and recommendations"
    ]
  }
];

const EngagementModels = () => {
  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <h2 className="text-[36px] lg:text-[44px] font-bold text-gray-900 mb-6 leading-tight">
            ITMC Digital AI Engagement Models
          </h2>
          <p className="text-gray-600 text-[16px] lg:text-[18px] leading-[1.7]">
            We provide several engagement models that adjust to your particular business needs, project size, and budget constraints. If you want an in-house dedicated Artificial Intelligence (AI) group, a full-scope complete solution delivery experience, or some strategic consulting services, we will guarantee an integrated approach while delivering a rapid result with measurable outcomes.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#fcfbfa] rounded-t-[40px] rounded-b-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-transform hover:-translate-y-2 duration-300 relative overflow-hidden border border-gray-100"
            >
              {/* Subtle top gradient to match the design */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f2eeff] to-transparent pointer-events-none"></div>

              <div className="flex-1 p-8 lg:p-10 relative z-10">
                <h3 className="text-[22px] font-bold text-[#4a00ff] text-center mb-6 px-4 leading-snug h-[60px] flex items-center justify-center">
                  {model.title}
                </h3>

                <p className="text-gray-600 text-[15px] leading-relaxed mb-8 text-center">
                  {model.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {model.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-left gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4a00ff] mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-[14.5px] leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Button Footer */}
              <a href="#contact" className="w-full bg-[#3d00fa] hover:bg-[#2b00b3] text-white py-4 font-semibold text-[16px] flex items-center justify-center gap-2 transition-colors rounded-b-[16px]">
                Get Started <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngagementModels;
