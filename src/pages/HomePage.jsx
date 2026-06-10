import React from 'react';
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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white">
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
