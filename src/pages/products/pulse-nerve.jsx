import React from "react";
import Header from "../../components/Header";
import ContactFormSection from "../../components/ContactFormSection";
import InsightsStories from "../../components/InsightsStories";
import SEO from "../../components/SEO";

const PulseNerve = () => {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <SEO 
        title="Pulse.nerve | AI-Driven IT Operations" 
        description="AI-driven nerve center for monitoring and automating enterprise IT operations and infrastructure health." 
        canonical="https://itmcdigital.com/products-and-platforms/pulse-nerve" 
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://itmcdigital.com/#organization",
            "url": "https://itmcdigital.com/",
            "name": "ITMC Digital",
            "sameAs": [
              "https://www.linkedin.com/company/itmcs-systems",
              "https://www.facebook.com/people/ITMC-Systems-Inc/61580620094746/"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://itmcdigital.com/",
                  "name": "Home"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://itmcdigital.com/products-and-platforms",
                  "name": "Products and Platforms"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": "https://itmcdigital.com/products-and-platforms/pulse-nerve",
                  "name": "Pulse.nerve"
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pulse.nerve | AI-Driven IT Operations",
            "provider": {
              "@id": "https://itmcdigital.com/#organization"
            },
            "description": "AI-driven nerve center for monitoring and automating enterprise IT operations and infrastructure health.",
            "url": "https://itmcdigital.com/products-and-platforms/pulse-nerve",
            "mainEntityOfPage": "https://itmcdigital.com/products-and-platforms/pulse-nerve",
            "areaServed": "Global"
          }
        ]}
      />
      <Header forceSolid={true} />
      <main className="pt-[100px]">
      {/* 1. Hero Section */}
   <header className="relative h-[85vh] flex items-center overflow-hidden">
  {/* Background Video */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover scale-110"
    >
      <source src="/ai/banner-v.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 px-6 md:px-10 max-w-[1200px] mx-auto w-full">
    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
      Pulse.nerve
    </h1>
    <h2 className="text-2xl md:text-3xl text-white mt-3 font-semibold">
      The AI Nerve Center for IT Operations
    </h2>
    <p className="text-white text-lg mt-4 font-light">
      Automate infrastructure health, optimize performance, and detect anomalies in real-time.
    </p>
    <p className="text-blue-500 text-xl mt-6 font-semibold">
      Request an AIOps Strategy Briefing
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <button className="bg-[#4c00ff] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg">
        Learn More
      </button>
      <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold transition-all">
        Book a Quick Demo
      </button>
    </div>
  </div>
</header>

      {/* 2. Evolution Section */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h3 className="text-4xl font-bold leading-tight text-slate-800">
              <span className="text-[#4c00ff]">The Challenge of</span> IT Infrastructure
            </h3>
            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              As enterprise networks grow in complexity, managing IT operations manually is no longer sustainable. 
              System downtimes, security vulnerabilities, and inefficient resource allocation cost businesses millions 
              annually. Pulse.nerve introduces intelligent automation to IT operations, providing a centralized platform 
              that not only monitors but predicts and self-heals network anomalies before they impact your business.
            </p>
          </div>
          <div className="flex-1 w-full">
            <img
              src="/ai/cyber1.webp"
              alt="Data Scalability"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Barriers Section */}
      <section className="bg-[#f8f9fa] py-20 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
            Key Features of <span className="text-[#4c00ff]">Pulse.nerve</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Real-time infrastructure and application monitoring",
              "AI-driven anomaly detection and predictive alerts",
              "Automated incident response and self-healing",
              "Comprehensive dashboard for centralized visibility",
              "Seamless integration with legacy IT systems",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white p-6 border-l-[6px] border-[#003057] shadow-sm flex items-center"
              >
                <p className="text-[15px] font-semibold text-gray-700 leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI-Driven Solutions */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-700">
            AIOps Solutions for <span className="text-[#4c00ff]">Modern Enterprises</span>
          </h3>
          <div className="space-y-10 max-w-4xl mx-auto">
            {[
              {
                title: "Predictive Maintenance",
                desc: "Identify potential hardware or software failures before they occur using machine learning models.",
              },
              {
                title: "Automated Root Cause Analysis",
                desc: "Instantly pinpoint the source of network slowdowns or application crashes without manual debugging.",
              },
              {
                title: "Intelligent Resource Allocation",
                desc: "Dynamically adjust cloud and server resources based on real-time traffic and demand.",
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center shrink-0">
                  <div className="w-6 h-6 bg-blue-100 rounded-sm"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#003057]">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 text-center border-t pt-16">
            <div>
              <p className="text-5xl font-bold text-slate-700">99.9%</p>
              <p className="text-gray-500 mt-2">
                Uptime <br /> Guaranteed
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-slate-700">40%</p>
              <p className="text-gray-500 mt-2">
                Reduction in <br /> IT Costs
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-slate-700">10x</p>
              <p className="text-gray-500 mt-2">
                Faster Incident <br /> Resolution
              </p>
            </div>
          </div>
        </div>
      </section>

   {/* 5. Why ITMC Digital Section */}
<section className="py-20 px-6 md:px-10 bg-gray-50">
  <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
    <div className="flex-1">
      <img
        src="/ai/syber2.webp"
        alt="Team working"
        className="rounded-3xl shadow-xl w-full"
      />
    </div>
    <div className="flex-1">
      <h3 className="text-4xl font-bold text-[#003057] mb-8">
        Why Pulse.nerve?
      </h3>
      <ul className="space-y-4">
        {[
          "Built on scalable architecture to support enterprises of any size.",
          "Reduces alert fatigue by prioritizing critical IT incidents.",
          "Enhances security posture through continuous environment monitoring.",
          "Empowers IT teams to focus on innovation rather than maintenance.",
        ].map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700">
            <span className="text-blue-600 mt-1.5">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 border-t border-slate-100">
        <InsightsStories />
      </section>
      <section id="contact" className="scroll-mt-24 border-t border-slate-100">
        <ContactFormSection />
      </section>
    </main>
    </div>
  );
};

export default PulseNerve;
