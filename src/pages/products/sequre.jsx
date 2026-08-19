import React from "react";
import Header from "../../components/Header";
import ContactFormSection from "../../components/ContactFormSection";
import InsightsStories from "../../components/InsightsStories";
import SEO from "../../components/SEO";

const Sequre = () => {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <SEO 
        title="Sequre | Enterprise Cybersecurity" 
        description="Enterprise-grade cybersecurity solution offering real-time threat detection, vulnerability scanning, and compliance management." 
        canonical="https://itmcdigital.com/products-and-platforms/sequre" 
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
                  "@id": "https://itmcdigital.com/products-and-platforms/sequre",
                  "name": "Sequre"
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sequre | Enterprise Cybersecurity",
            "provider": {
              "@id": "https://itmcdigital.com/#organization"
            },
            "description": "Enterprise-grade cybersecurity solution offering real-time threat detection, vulnerability scanning, and compliance management.",
            "url": "https://itmcdigital.com/products-and-platforms/sequre",
            "mainEntityOfPage": "https://itmcdigital.com/products-and-platforms/sequre",
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
      Sequre
    </h1>
    <h2 className="text-2xl md:text-3xl text-white mt-3 font-semibold">
      Next-Generation Enterprise Cybersecurity
    </h2>
    <p className="text-white text-lg mt-4 font-light">
      Protect your digital assets with AI-driven threat detection, Zero Trust architecture, and real-time compliance.
    </p>
    <p className="text-blue-500 text-xl mt-6 font-semibold">
      Request a Security Assessment
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
              <span className="text-[#4c00ff]">The Rising Cost of</span> Cyber
              Threats
            </h3>
            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              Cyber risks are now a top business concern, with ransomware
              attacks and data breaches disrupting operations globally. The rise
              of complex digital ecosystems and hybrid workforces has made these
              threats more sophisticated and harder to detect. Reports show that
              cybercriminals can infiltrate up to 93% of company networks,
              causing financial losses, reputational damage, and loss of
              customer trust. With increasing security risks, Sequre provides the
              ultimate defense.
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
            Key Features of <span className="text-[#4c00ff]">Sequre</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Real-time threat detection and continuous monitoring",
              "Zero Trust Network Access (ZTNA) implementation",
              "Automated vulnerability scanning and patch management",
              "Identity and Access Management (IAM)",
              "Global compliance management and reporting",
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
            Advanced Security <span className="text-[#4c00ff]">Solutions</span>
          </h3>
          <div className="space-y-10 max-w-4xl mx-auto">
            {[
              {
                title: "Threat Protection & Identity Management",
                desc: "AI-powered identity governance, access control, and infrastructure security.",
              },
              {
                title: "Cyber Fusion & Threat Response",
                desc: "24/7 threat detection, monitoring, and forensic analysis for rapid response.",
              },
              {
                title: "Security Assurance & Testing",
                desc: "Ethical hacking, vulnerability assessments, and DevSecOps integration for secure applications.",
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
              <p className="text-5xl font-bold text-slate-700">24/7</p>
              <p className="text-gray-500 mt-2">
                Continuous <br /> Monitoring
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-slate-700">0 Trust</p>
              <p className="text-gray-500 mt-2">
                Architecture <br /> Implementation
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-slate-700">100%</p>
              <p className="text-gray-500 mt-2">
                Compliance <br /> Assurance
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
        Why Sequre?
      </h3>
      <ul className="space-y-4">
        {[
          "Our security solutions are built by industry veterans with deep expertise in cybersecurity.",
          "The Zero Trust security framework and AI-driven accelerators ensure digital asset protection.",
          "AI-driven threat detection enables real-time monitoring and automated response to security incidents.",
          "End-to-end security services are tailored to align with business objectives, industry standards, regulations, and compliances.",
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

export default Sequre;
