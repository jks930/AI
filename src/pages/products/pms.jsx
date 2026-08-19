import React from "react";
import Header from "../../components/Header";
import { ArrowRight, CheckCircle2, Building, Shield, BarChart3, Users, Globe } from "lucide-react";
import ContactFormSection from "../../components/ContactFormSection";
import InsightsStories from "../../components/InsightsStories";
import SEO from "../../components/SEO";


const PMS = () => {
  const features = [
    { title: "Centralized Dashboard", desc: "Manage all your properties, tenants, and maintenance requests from a single intuitive interface.", icon: <Building className="w-6 h-6 text-[#F9A826]" /> },
    { title: "Automated Workflows", desc: "Streamline lease renewals, rent collection, and vendor payments automatically.", icon: <Globe className="w-6 h-6 text-[#F9A826]" /> },
    { title: "Financial Analytics", desc: "Gain deep insights into your portfolio's financial health with real-time reporting.", icon: <BarChart3 className="w-6 h-6 text-[#F9A826]" /> },
    { title: "Tenant Portal", desc: "Provide a seamless digital experience for tenants to pay rent and submit requests.", icon: <Users className="w-6 h-6 text-[#F9A826]" /> },
  ];

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden bg-[#fcfcfc]">
      <SEO 
        title="Property Management System Built for Modern Businesses" 
        description="Simplify real estate operations with our property management system. Manage tenants, leases, payments, and maintenance with ease. Request a demo today." 
        canonical="https://itmcdigital.com/products-and-platforms/property-management-system" 
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
                  "@id": "https://itmcdigital.com/products-and-platforms/property-management-system",
                  "name": "Property Management System"
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Property Management System Built for Modern Businesses",
            "provider": {
              "@id": "https://itmcdigital.com/#organization"
            },
            "description": "Simplify real estate operations with our property management system. Manage tenants, leases, payments, and maintenance with ease. Request a demo today.",
            "url": "https://itmcdigital.com/products-and-platforms/property-management-system",
            "mainEntityOfPage": "https://itmcdigital.com/products-and-platforms/property-management-system",
            "areaServed": "Global"
          }
        ]}
      />
      <Header forceSolid={true} />
      <main className="pt-[100px]">
      {/* Hero Section */}
      <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#003057]">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai/pms.png"
            alt="PMS Background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003057]/90 via-[#003057]/70 to-[#fcfcfc]"></div>
        </div>

        <div className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto w-full text-center mt-20">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F9A826] animate-pulse"></span>
              <h2 className="text-white font-bold tracking-[0.25em] uppercase text-xs md:text-sm">ITMC Digital Platforms</h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
            Property Management <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A826] to-[#ffda99]">System (PMS)</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl mt-6 font-light max-w-3xl mx-auto">
            End-to-end property operations, simplified. Scale your real estate portfolio with powerful automation and AI-driven insights.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-[#F9A826] to-[#f39c12] hover:from-[#f39c12] hover:to-[#e67e22] text-[#003057] font-black rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(249,168,38,0.4)] flex items-center justify-center gap-2 group"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Core Features */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Capabilities</h2>
          <h3 className="text-4xl font-black text-[#003057]">Key Features & Capabilities</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
             <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
               <div className="w-14 h-14 bg-[#f8f9fa] rounded-2xl flex items-center justify-center mb-6 border border-gray-100">
                 {item.icon}
               </div>
               <h4 className="text-xl font-bold text-[#003057] mb-3">{item.title}</h4>
               <p className="text-gray-600 leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-black leading-tight text-[#003057] mb-8">
              Engineered for Real Estate Scale
            </h3>
            <div className="space-y-6">
              {[
                "Reduce operational overhead by automating up to 70% of routine management tasks.",
                "Enhance tenant satisfaction and retention with a premium digital self-service portal.",
                "Ensure robust financial compliance and real-time ledger tracking across all properties."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#F9A826] shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-[#003057] rounded-3xl translate-x-4 translate-y-4 opacity-10"></div>
            <img
              src="/ai/pms.png"
              alt="Details"
              className="rounded-3xl shadow-2xl w-full object-cover relative z-10 border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-[#fcfcfc]">
        <InsightsStories />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-white border-t border-gray-100">
        <ContactFormSection />
      </section>
    </main>
    </div>
  );
};

export default PMS;
