import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsAndBrands from '../components/StatsAndBrands';
import About from '../components/About';
import Services from '../components/Services';
import Capabilities from '../components/Capabilities';
import Applications from '../components/Applications';
import Industries from '../components/Industries';
import Framework from '../components/Framework';
import WhyChooseUs from '../components/WhyChooseUs';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import EngagementModels from '../components/EngagementModels';
import Cta from '../components/Cta';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import TransformServices from '../components/TransformServices';
import ContactUs from '../components/ContactUs';
import SEO from '../components/SEO';

const HomePage = () => {
  const [seoInfo, setSeoInfo] = useState({
    title: "Artificial Intelligence Development Company | AI Solutions",
    description: "AI development company delivering custom AI solutions, machine learning, and generative AI services that help businesses automate workflows and drive growth."
  });

  useEffect(() => {
    const updateSeoFromHash = () => {
      if (window.location.hash === '#portfolio') {
        setSeoInfo({
          title: "AI Development Company Portfolio | Real Client Projects",
          description: "From AI-powered platforms to enterprise applications, explore projects that transform ideas into scalable digital products with measurable impact."
        });
      } else {
        setSeoInfo({
          title: "Artificial Intelligence Development Company | AI Solutions",
          description: "AI development company delivering custom AI solutions, machine learning, and generative AI services that help businesses automate workflows and drive growth."
        });
      }
    };

    updateSeoFromHash();
    window.addEventListener('hashchange', updateSeoFromHash);
    return () => window.removeEventListener('hashchange', updateSeoFromHash);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white">
      <SEO 
        title={seoInfo.title} 
        description={seoInfo.description} 
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://itmcdigital.com/#organization",
            "name": "ITMC Digital",
            "url": "https://itmcdigital.com/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://itmcdigital.com/itmc-digital-logo.png"
            },
            "description": "ITMC Digital helps businesses innovate with AI Solution, Product Development, and digital engineering services that drive growth, efficiency, and long-term success.",
            "email": "info@itmcsystems.com",
            "telephone": "+91 9311228902",
            "areaServed": "Global",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "18th Floor, Galaxy Blue Sapphire Plaza, Office Number - TS 1901, TS 1902, TS1903 and TS1904, 95-5, Sector 4, Haibatpur",
              "addressLocality": "Greater Noida",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201016",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "telephone": "+91 9311228902",
              "email": "info@itmcsystems.com",
              "areaServed": "Global",
              "availableLanguage": [
                "English"
              ]
            },
            "sameAs": [
              "https://www.linkedin.com/company/itmcs-systems",
              "https://www.facebook.com/people/ITMC-Systems-Inc/61580620094746/"
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "AI Development",
              "Generative AI",
              "Digital Transformation",
              "Digital Engineering",
              "Product Development",
              "IT Consulting",
              "Cybersecurity",
              "Machine Learning",
              "Software Development",
              "Web Development",
              "Mobile App Development",
              "Cloud Solutions",
              "Enterprise Solutions"
            ]
          }
        ]}
      />
      <Header />

      <main>
        <Hero />
        <StatsAndBrands />
        <About />
        <Services />
        <TransformServices />
        <Applications />

        {/* <Capabilities /> */}
        <Cta />
        <Industries />
        <Framework />
        <WhyChooseUs />
        <TechStack />
        <Portfolio />
        <EngagementModels />
        <Testimonials />
        <BlogSection />
        <FaqSection />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
