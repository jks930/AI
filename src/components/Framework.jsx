import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Target, Database, Layers, Code, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    num: "1.",
    title: "Vision Alignment & Opportunity Mapping",
    desc: "We first investigate your business goals and determine if AI is a suitable solution. Our team then conducts a thorough feasibility study to establish clear objectives, metrics, and ROI expectations, laying the groundwork for a successful project.",
    pills: ["Requirement Analysis", "Project Roadmapping", "Market Understanding", "Goal Alignment"],
    Icon: Target
  },
  {
    num: "2.",
    title: "Data Assessment & Preparation",
    desc: "As an established AI development company in USA, we evaluate your data sources for quality, format, and completeness. We select and prepare your data before training your AI models, so you can be confident in the data's reliability in the long term.",
    pills: ["Data Cleansing", "Data Formatting", "Feature Engineering", "Quality Check"],
    Icon: Database
  },
  {
    num: "3.",
    title: "Solution Design & Architecture Planning",
    desc: "During the solution architecture phase, our team will develop a custom solution architecture that supports your unique business processes and requirements. This includes identifying the right solution models, tools, and infrastructure to ensure scalability, security, and performance while managing your operational costs.",
    pills: ["Architecture Design", "Tool Selection", "Security Planning", "Cost Analysis"],
    Icon: Layers
  },
  {
    num: "4.",
    title: "Development & System Integration",
    desc: "After this phase, AI models will be created and integrated into existing applications through collaboration between developers and data scientists. An established artificial intelligence software development company, we provide effective integration by smoothly connecting the user interface to the AI engine.",
    pills: ["Algorithm Coding", "API Integration", "UI/UX Alignment", "Iterative Builds"],
    Icon: Code
  },
  {
    num: "5.",
    title: "Model Training & Optimization",
    desc: "As an AI development company in the USA, we train and tune models with real-world datasets to ensure they have optimised parameter sets that produce ongoing, consistent data for the AI solution and enable accurate, efficient data collection.",
    pills: ["Hyperparameter Tuning", "Validation Checks", "Accuracy Optimization", "Bias Mitigation"],
    Icon: Settings
  },
  {
    num: "6.",
    title: "Testing, Validation & Deployment Readiness",
    desc: "Models are trained and tuned on real-world datasets to ensure they have optimised parameter sets that generate ongoing, consistent data for the AI solution and enable accurate, efficient data collection.",
    pills: ["Requirement Analysis", "Project Roadmapping", "Market Understanding", "Goal Alignment"],
    Icon: Rocket
  }
];

const Framework = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollPx = -top;
      const maxScroll = height - windowHeight;

      if (scrollPx < 0) {
        setActiveStep(0);
      } else if (scrollPx >= maxScroll) {
        setActiveStep(steps.length - 1);
      } else {
        const progress = scrollPx / maxScroll;
        const stepIndex = Math.floor(progress * steps.length);
        setActiveStep(Math.min(steps.length - 1, stepIndex));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.Icon;

  return (
    <section className="bg-white w-full relative">

      {/* Intro Section */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-10 relative z-10">
        <h2 className="text-[36px] lg:text-[50px] font-extrabold text-gray-900 leading-[1.15] mb-8 tracking-tight">
          Our Proven Framework for Delivering Successful AI Solutions
        </h2>
        <p className="text-gray-600 text-[18px] lg:text-[20px] leading-[1.6] max-w-[900px] mx-auto">
          At  ITMC Digital, we use a methodical, results-oriented approach to deliver AI application development services that create value. As a leading AI development company in USA, we operate as if every project were an enterprise in the same way, whereby we complete each stage with the intention of reducing risk and maximising efficiencies.
        </p>
      </div>

      {/* Scroll-Jacking Container */}
      <div ref={sectionRef} className="relative h-[600vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center">
          <div className="max-w-[1400px] mx-auto w-full relative flex h-full items-center">

            {/* Left Column (Outer Layer Circle + Small Brain) */}
            <div className="absolute left-[-15%] lg:left-[0%] xl:left-[2%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] bg-[#eef0ff] rounded-full flex items-center justify-center z-0 overflow-hidden shadow-inner">
              <img
                src="/ai/Background-e1771697998449.webp"
                alt="AI Brain"
                className="w-[45%] lg:w-[50%] h-auto object-contain spin-image-animation relative -left-4"
              />
            </div>

            {/* Right Column (Dynamic Step Content) */}
            <div className="w-full ml-auto lg:w-[60%] xl:w-[55%] h-full flex flex-col justify-center min-h-[400px] relative z-10 px-4 sm:px-6 lg:px-0">

              <div
                key={activeStep}
                className="animate-fade-in-up w-full max-w-[800px]"
              >
                <h3 className="text-[28px] lg:text-[38px] font-extrabold text-gray-900 leading-[1.2] mb-8">
                  {currentStep.num} {currentStep.title}
                </h3>

                {/* Banner Box */}
                <div className="relative mb-10 flex items-center">
                  {/* Glowing Icon Overlapping left edge */}
                  <div className="absolute left-[-24px] lg:left-[-32px] z-20 w-14 h-14 bg-[#5a20ff] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(90,32,255,0.6)] border-4 border-[#eef0ff]">
                    <StepIcon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text Container extending from the icon */}
                  <div className="bg-[#eef0ff] py-8 pr-10 pl-12 lg:pl-16 w-full ml-0 rounded-r-xl">
                    <p className="text-gray-800 text-[15px] leading-[1.8] font-medium">
                      {currentStep.desc}
                    </p>
                  </div>
                </div>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-4 pl-4 lg:pl-8">
                  {currentStep.pills.map((pill, i) => (
                    <div
                      key={i}
                      className="bg-[#5a20ff] text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md hover:bg-[#4610d9] transition-colors cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span className="font-semibold text-[13px]">{pill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Indicators (Dots) */}
              <div className="mt-16 flex gap-3 pl-4 lg:pl-8">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${i === activeStep ? 'w-10 bg-[#5a20ff]' : 'w-2 bg-gray-300'
                      }`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-image-frames {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-image-animation {
          animation: spin-image-frames 35s linear infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Framework;
