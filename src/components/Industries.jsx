import React from 'react';
import { Building2, Briefcase, Globe, ShieldCheck } from 'lucide-react';

const industriesData = [
  {
    title: "PropTech & Real Estate",
    subtitle: "Intelligent property valuation.",
    content: "Modernizing the property market with intelligent systems. We deploy predictive algorithms to evaluate property values accurately and generate automated virtual experiences for investors and agencies.",
    image: "/ai/images/intelligent-property-valuation.jpeg"
  },
  {
    title: "On-Demand Economy",
    subtitle: "Hyper-efficient service scaling.",
    content: "Fueling the gig economy through hyper-efficient routing and dynamic pricing models. Our matchmaking algorithms drastically reduce wait times and scale platform profitability.",
    image: "/ai/images/on-demand-economy.jpeg"
  },
  {
    title: "Healthcare & Life Sciences",
    subtitle: "Precision medical diagnostics.",
    content: "Revolutionizing patient care through precision diagnostics. Our models empower clinicians with real-time patient monitoring and personalized, data-driven treatment strategies.",
    image: "/ai/images/healthcare-life-sciences.jpeg"
  },
  {
    title: "Financial Services & Banking",
    subtitle: "Secure algorithmic trading.",
    content: "Securing and optimizing financial ecosystems. We deliver autonomous trading algorithms, rapid fraud detection, and highly personalized intelligent banking experiences.",
    image: "/ai/images/financial-services-banking.jpeg"
  },
  {
    title: "Supply Chain & Logistics",
    subtitle: "Global fleet optimization.",
    content: "Orchestrating complex global supply chains with predictive analytics. Our fleet optimization networks minimize operational costs and ensure perfectly timed global deliveries.",
    image: "/ai/images/ai-optimized-supply-chains.jpeg"
  },
  {
    title: "Retail & E-Commerce",
    subtitle: "Hyper-personalized commerce.",
    content: "Redefining digital storefronts with hyper-personalized shopping engines. We analyze deep consumer behavior to optimize inventory and maximize conversion rates.",
    image: "/ai/images/retail-e-commerce.jpeg"
  },
  {
    title: "Smart Manufacturing",
    subtitle: "Industry 4.0 automation.",
    content: "Powering Industry 4.0 with autonomous robotics and predictive maintenance. We eliminate factory downtime and enforce flawless, vision-based quality control.",
    image: "/ai/images/smart-manufacturing.jpeg"
  },
  {
    title: "Education Technology",
    subtitle: "Adaptive digital tutors.",
    content: "Democratizing learning via adaptive AI tutors. Our platforms personalize curriculum pacing for students while automating administrative burdens for educators.",
    image: "/ai/images/education-technology.jpeg"
  },
  {
    title: "Travel & Hospitality",
    subtitle: "Dynamic itinerary generation.",
    content: "Elevating the traveler experience through dynamic itinerary generation and intelligent booking architectures that respond instantly to customer demands.",
    image: "/ai/images/travel-hospitality.jpeg"
  },
  {
    title: "InsurTech",
    subtitle: "Automated risk assessment.",
    content: "Streamlining complex underwriting with intelligent risk assessment. Our automated systems accelerate claims processing and proactively flag fraudulent submissions.",
    image: "/ai/images/insurtech.jpeg"
  },
  {
    title: "Media & Entertainment",
    subtitle: "Algorithmic content curation.",
    content: "Transforming content consumption with algorithmic curation. We utilize deep audience analytics and automated production tools to keep viewers continuously engaged.",
    image: "/ai/images/media-entertainment.jpeg"
  },
  {
    title: "Cyber & Physical Security",
    subtitle: "Proactive threat detection.",
    content: "Safeguarding critical infrastructure via proactive anomaly detection. Our intelligent surveillance networks identify and neutralize threats before they materialize.",
    image: "/ai/images/cyber-physical-security.jpeg"
  }
];

const Industries = () => {
  return (
    <section id="industries" className="relative w-full py-20 lg:py-28 bg-[#f9fafb] overflow-hidden border-t border-gray-100">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[13px] tracking-wide mb-6 border border-blue-200">
            SECTORS WE SERVE
          </div>
          <h2 className="text-[36px] lg:text-[48px] font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
            AI-Powered Innovation Across <br className="hidden md:block"/> Diverse Global Industries
          </h2>
          <p className="text-gray-600 text-[17px] lg:text-[19px] leading-[1.7]">
            We understand that no two sectors share the same challenges. As a premier AI engineering partner, we reject generic approaches, delivering highly specialized, scalable, and quantifiable AI infrastructures tailored specifically to the unique demands of your industry.
          </p>
        </div>

        {/* Hero Banner */}
        <div className="w-full rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(30,27,75,0.15)] bg-gradient-to-br from-[#1e1b4b] to-[#312e81] h-[300px] lg:h-[400px] relative group transform hover:scale-[1.01] transition-transform duration-700 ease-out mb-20">
          <img 
            src="/ai/images/industries.jpeg" 
            alt="Corporate Industries" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:opacity-70 transition-opacity duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/90 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Box 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 group hover:bg-white/20 transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <Building2 className="w-6 h-6 text-[#1e1b4b]" />
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-white mb-0.5 leading-tight">12+ Sectors</div>
                <div className="text-[11px] font-bold text-indigo-200 uppercase tracking-wider leading-tight">Custom AI</div>
              </div>
            </div>
            {/* Box 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 group hover:bg-white/20 transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <Briefcase className="w-6 h-6 text-[#1e1b4b]" />
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-white mb-0.5 leading-tight">Top 1%</div>
                <div className="text-[11px] font-bold text-indigo-200 uppercase tracking-wider leading-tight">Industry Experts</div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 group hover:bg-white/20 transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <Globe className="w-6 h-6 text-[#1e1b4b]" />
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-white mb-0.5 leading-tight">Scale</div>
                <div className="text-[11px] font-bold text-indigo-200 uppercase tracking-wider leading-tight">Global Reach</div>
              </div>
            </div>
            {/* Box 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 lg:p-5 rounded-2xl shadow-xl flex items-center gap-4 group hover:bg-white/20 transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#1e1b4b]" />
              </div>
              <div>
                <div className="text-[20px] font-extrabold text-white mb-0.5 leading-tight">100%</div>
                <div className="text-[11px] font-bold text-indigo-200 uppercase tracking-wider leading-tight">Compliance</div>
              </div>
            </div>
          </div>
          
          {/* Mobile version (single box) */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-center md:hidden">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl w-full flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] shrink-0">
                <Building2 className="w-6 h-6 text-[#1e1b4b]" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white mb-0.5">12+ Sectors</div>
                <div className="text-[11px] font-bold text-indigo-200 uppercase tracking-wider">Custom AI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industriesData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-blue-300 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-full h-[220px] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-[#1e1b4b]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                
                {/* Overlay Text on Image */}
                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="text-[22px] font-bold text-white mb-1 leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                  <div className="text-[13px] font-semibold text-blue-200 uppercase tracking-wider drop-shadow-sm">
                    {item.subtitle}
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8 flex flex-col flex-grow bg-white relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <p className="text-gray-600 text-[15px] leading-[1.8] flex-grow relative z-10 group-hover:text-gray-800 transition-colors">
                  {item.content}
                </p>
                
                <div className="mt-6 flex items-center text-[14px] font-bold text-blue-600 group-hover:text-blue-800 transition-colors cursor-pointer w-fit">
                  Explore Solutions
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
