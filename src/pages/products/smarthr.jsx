import React from "react";
import Header from "../../components/Header";
import ContactFormSection from "../../components/ContactFormSection";
import InsightsStories from "../../components/InsightsStories";
import SEO from "../../components/SEO";


const Smarthr= () => {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <SEO 
        title="Smart HR Software for Payroll & Workforce Management" 
        description="Manage payroll, attendance, employee records, and HR automation from one HRMS software designed to improve efficiency and simplify workforce management." 
        canonical="https://itmcdigital.com/products-and-platforms/smarthr" 
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
                  "@id": "https://itmcdigital.com/products-and-platforms/smarthr",
                  "name": "SmartHR"
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Smart HR Software for Payroll & Workforce Management",
            "provider": {
              "@id": "https://itmcdigital.com/#organization"
            },
            "description": "Manage payroll, attendance, employee records, and HR automation from one HRMS software designed to improve efficiency and simplify workforce management.",
            "url": "https://itmcdigital.com/products-and-platforms/smarthr",
            "mainEntityOfPage": "https://itmcdigital.com/products-and-platforms/smarthr",
            "areaServed": "Global"
          }
        ]}
      />
      <Header forceSolid={true} />
      <main className="pt-[100px]">
      {/* 1. Hero Section */}
      <header className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai/cybersecurity-banner.webp"
            alt="AI-Driven Precision"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 px-6 md:px-10 max-w-[1200px] mx-auto w-full">
          <h2 className="text-5xl md:text-3xl font-bold text-white leading-tight">
Enabling Efficiency, Enhancing       <br />
            <span className="text-blue-600">Experience and Growing Revenue

</span>
          </h2>
          <p className="text-white text-2xl mt-6 font-light italic">
AI-Driven, Seamless Compliance for Every Workforce
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-[#4c00ff] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg text-lg">
              Learn More
            </button>
            <button className="bg-[#4c00ff] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg text-lg">
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
              <span className="text-[#4c00ff]">Empowering Insurers with </span> Data Intelligence

            </h3>
            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
ITMC Digital introduces an advanced Insurance Data Hub that consolidates fragmented data into a centralized, AI-powered resource. Designed to transform data silos into a single source of truth, our platform delivers high-accuracy insights to accelerate decision-making, streamline operations, and reduce costs. Equipped with prebuilt data elements, user-friendly data ingestion, and seamless integration with industry-standard systems, it’s trusted by leading carriers, MGAs, and TPAs worldwide. Built specifically for property & casualty and specialty commercial lines, our Insurance Data Hub delivers actionable insights and operational transformation within an impressive 90-120 days.
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
            Barriers to Scalable &{" "}
            <span className="text-[#4c00ff]">Cybersecurity</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Legacy systems slow down analytics and decision-making",
              "Difficulty scaling data operations to meet growing demands",
              "Poor data quality impacts AI and automation outcomes",
              "High storage costs with inefficient data management",
              "Security vulnerabilities and compliance challenges",
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

      {/* 4. AI-Driven Cybersecurity Solutions */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-700">
            AI-Driven Cybersecurity for{" "}
            <span className="text-[#4c00ff]">Total Protection</span>
          </h3>

          <div className="space-y-10 max-w-4xl mx-auto">
            {[
              {
                title: "Governance, Risk, & Compliance",
                desc: "Security strategy, risk management, and compliance frameworks to safeguard business operations.",
              },
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
              },
              {
                title: "Cloud & Data Security",
                desc: "Advanced cloud security solutions with continuous monitoring and Zero Trust frameworks.",
              },
              {
                title: "AI-Powered Risk Mitigation",
                desc: "Proactive defense strategies leveraging AI-driven analytics and automation.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center shrink-0">
                  <div className="w-6 h-6 bg-blue-100 rounded-sm"></div>{" "}
                  {/* Placeholder for Icon */}
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
              <p className="text-5xl font-bold text-slate-700">3x</p>
              <p className="text-gray-500 mt-2">
                Less Effort vs <br /> Manual Work
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-slate-700">Over 50%</p>
              <p className="text-gray-500 mt-2">
                Cost <br /> Reduction
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-slate-700">100%</p>
              <p className="text-gray-500 mt-2">
                Delivery <br /> Assurance
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
        Why ITMC Digital?
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
      {/* 6. Partner Ecosystem */}
      <section className="py-20 px-6 md:px-10 bg-white border-t">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            ITMC Digital's Partner{" "}
            <span className="text-blue-600">Ecosystem</span>
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            We work with trusted partners to deliver tailored solutions that
            meet our clients' needs. By combining global reach with local
            expertise, we accelerate scale, speed, and impact.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-70 hover:grayscale-0 transition-all">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="h-8"
            />
            
            
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Databricks_Logo.png"
              alt="Databricks"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg"
              alt="Snowflake"
              className="h-8"
            />
            
            
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

export default Smarthr;