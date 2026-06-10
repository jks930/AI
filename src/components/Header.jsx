import React, { useState, useEffect } from 'react';
import { Smartphone, Monitor, Code2, PenTool, Brain, Bot, Rocket, Sparkles, Building2, TestTube, CheckCircle2, Layout, Database, Layers, ArrowRight } from 'lucide-react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState('light');
  const [headerBg, setHeaderBg] = useState('bg-transparent');
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 20) {
        setScrolled(false);
        setHeaderTheme('light');
        setHeaderBg('bg-transparent');
        return;
      }
      
      setScrolled(true);
      const el = document.elementFromPoint(window.innerWidth / 2, 80);
      if (el) {
        const themeEl = el.closest('[data-header-theme]');
        if (themeEl) {
          setHeaderTheme(themeEl.getAttribute('data-header-theme'));
          setHeaderBg(themeEl.getAttribute('data-header-bg'));
        } else {
          setHeaderTheme('light');
          setHeaderBg('bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-gray-100');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? (headerBg + (headerTheme === 'dark' ? ' border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' : '')) : 'bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img src="/logoo.png" alt="itmcsystem logo" className={`h-12 lg:h-14 w-auto transition-all duration-300 ${(scrolled && headerTheme === 'dark') ? 'brightness-0 invert' : ''}`} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/#about" className={`font-semibold transition-colors ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
              About
            </a>
            <div className="group">
              <a href="/#services" className={`font-semibold transition-colors flex items-center gap-1 py-4 ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Services Mega Menu Dropdown */}
              <div className="absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform -translate-y-4 group-hover:translate-y-0 z-[100] bg-white border-b border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-14 flex flex-col lg:flex-row gap-10 relative z-10">
                  
                  {/* Left Column */}
                  <div className="w-full lg:w-[30%] lg:border-r border-gray-100 lg:pr-10 flex flex-col">
                    <h3 className="text-gray-900 text-[28px] font-bold mb-4 tracking-tight">Services</h3>
                    <div className="w-16 h-1 bg-[#4c00ff] mb-6 rounded-full"></div>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                      We transform your ideas into digital products with our expert development services.
                    </p>
                    <a href="/service-details" className="inline-flex items-center text-gray-900 hover:text-[#4c00ff] font-semibold text-[15px] transition-colors group/link mb-10">
                      View all 
                      <span className="ml-3 w-7 h-7 rounded-full bg-[#4c00ff] group-hover/link:bg-blue-600 transition-colors text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </a>

                    {/* Blue Stats Card */}
                    <div className="bg-gradient-to-br from-[#4c00ff] to-blue-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden mt-auto">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                      <h4 className="text-xl font-bold mb-2">We've served 500+</h4>
                      <p className="text-blue-100 text-sm mb-6">Clients of</p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Rocket className="w-5 h-5 text-cyan-300" />
                          <span className="font-semibold text-[15px]">Startups</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Building2 className="w-5 h-5 text-cyan-300" />
                          <span className="font-semibold text-[15px]">Enterprise</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Columns Grid */}
                  <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
                    
                    {/* Column 1 */}
                    <div className="flex flex-col space-y-10">
                      <div>
                        <a href="/service-details" className="flex items-center justify-between group/cat mb-5">
                          <h4 className="text-xl font-bold text-gray-900 group-hover/cat:text-[#4c00ff] transition-colors">Digital Product Design</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/cat:text-[#4c00ff] transition-colors" />
                        </a>
                        <div className="space-y-4">
                          <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <PenTool className="w-4 h-4" /> UI/UX
                          </a>
                          <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Layout className="w-4 h-4" /> Wireframing
                          </a>
                        </div>
                      </div>

                      <div>
                        <a href="/service-details" className="flex items-center justify-between group/cat mb-5">
                          <h4 className="text-xl font-bold text-gray-900 group-hover/cat:text-[#4c00ff] transition-colors">Software Development</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/cat:text-[#4c00ff] transition-colors" />
                        </a>
                        <div className="space-y-4">
                          <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Database className="w-4 h-4" /> CRM
                          </a>
                          <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Code2 className="w-4 h-4" /> MVP
                          </a>
                          <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <TestTube className="w-4 h-4" /> QA & Testing
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-10">
                      <div>
                        <a href="/service-details" className="flex items-center justify-between group/cat mb-5">
                          <h4 className="text-xl font-bold text-gray-900 group-hover/cat:text-[#4c00ff] transition-colors">Mobile App Development</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/cat:text-[#4c00ff] transition-colors" />
                        </a>
                        <div className="space-y-4">
                          <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Smartphone className="w-4 h-4" /> Android
                          </a>
                          <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Smartphone className="w-4 h-4" /> iOS
                          </a>
                          <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Layers className="w-4 h-4" /> Cross Platform
                          </a>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <a href="/service-details" className="flex items-center gap-3 text-gray-900 font-bold hover:text-[#4c00ff] text-[17px] transition-colors hover:translate-x-1 duration-300">
                          <Monitor className="w-5 h-5 text-gray-500" /> Web App
                        </a>
                        <a href="/service-details" className="flex items-center gap-3 text-gray-900 font-bold hover:text-[#4c00ff] text-[17px] transition-colors hover:translate-x-1 duration-300">
                          <Layout className="w-5 h-5 text-gray-500" /> Website
                        </a>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col">
                      <a href="/service-details" className="flex items-center justify-between group/cat mb-5">
                        <h4 className="text-xl font-bold text-gray-900 group-hover/cat:text-[#4c00ff] transition-colors">Artificial Intelligence</h4>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover/cat:text-[#4c00ff] transition-colors" />
                      </a>
                      <div className="space-y-4">
                        <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Brain className="w-4 h-4" /> Machine Learning
                        </a>
                        <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Sparkles className="w-4 h-4" /> Gen AI
                        </a>
                        <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Bot className="w-4 h-4" /> AI Agent
                        </a>
                        <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Bot className="w-4 h-4" /> AI Chatbot
                        </a>
                        <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Code2 className="w-4 h-4" /> NLP
                        </a>
                        <a href="/service-details" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Monitor className="w-4 h-4" /> Metaverse
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="group">
              <a href="/#industries" className={`font-semibold transition-colors flex items-center gap-1 py-4 ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
                Industries
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Mega Menu Dropdown (Full Width) */}
              <div className="absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform -translate-y-4 group-hover:translate-y-0 z-[100] bg-white border-b border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-14 flex flex-col lg:flex-row gap-10 relative z-10">
                  
                  {/* Left Column - Description */}
                  <div className="w-full lg:w-[30%] lg:border-r border-gray-100 lg:pr-10">
                    <h3 className="text-gray-900 text-[28px] font-bold mb-4 tracking-tight">Industries</h3>
                    <div className="w-16 h-1 bg-[#4c00ff] mb-6 rounded-full"></div>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                      We focus on each domain's unique risks and opportunities, delivering agile and effective digital solutions tailored to your business needs.
                    </p>
                    <a href="/#industries" className="inline-flex items-center text-gray-900 hover:text-[#4c00ff] font-semibold text-[15px] transition-colors group/link">
                      View all 
                      <span className="ml-3 w-7 h-7 rounded-full bg-[#4c00ff] group-hover/link:bg-blue-600 transition-colors text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </a>
                  </div>

                  {/* Middle Column - Links Grid */}
                  <div className="w-full lg:w-[45%] grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div className="flex flex-col space-y-5">
                      <a href="/industry/on-demand" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">On-Demand</a>
                      <a href="/industry/enterprise" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Enterprise</a>
                      <a href="/industry/finance" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Finance</a>
                      <a href="/industry/e-commerce" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">E-commerce</a>
                      <a href="/industry/game" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Game</a>
                    </div>
                    <div className="flex flex-col space-y-5">
                      <a href="/industry/healthcare" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Healthcare</a>
                      <a href="/industry/travel" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Travel</a>
                      <a href="/industry/logistics" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Logistics</a>
                      <a href="/industry/start-up" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Start-Up</a>
                      <a href="/industry/entertainment" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Entertainment</a>
                    </div>
                    <div className="flex flex-col space-y-5">
                      <a href="/industry/real-estate" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Real Estate</a>
                      <a href="/industry/education" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Education</a>
                      <a href="/industry/electric-vehicle" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Electric Vehicle</a>
                      <a href="/industry/automotive" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Automotive</a>
                      <a href="/industry/wearable" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Wearable</a>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="hidden lg:block w-[25%] rounded-2xl overflow-hidden relative group/img shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team Collaboration" className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="group">
              <a href="/#technologies" className={`font-semibold transition-colors flex items-center gap-1 py-4 ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
                Technologies
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Technologies Mega Menu Dropdown (Full Width) */}
              <div className="absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform -translate-y-4 group-hover:translate-y-0 z-[100] bg-white border-b border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-14 flex flex-col lg:flex-row gap-10 relative z-10">
                  
                  {/* Left Column - Description */}
                  <div className="w-full lg:w-[30%] lg:border-r border-gray-100 lg:pr-10">
                    <h3 className="text-gray-900 text-[28px] font-bold mb-4 tracking-tight">Technologies</h3>
                    <div className="w-16 h-1 bg-[#4c00ff] mb-6 rounded-full"></div>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                      Our expertise across diverse technologies, delivering innovative solutions tailored to your unique needs.
                    </p>
                    <a href="/#technologies" className="inline-flex items-center text-gray-900 hover:text-[#4c00ff] font-semibold text-[15px] transition-colors group/link">
                      Learn more 
                      <span className="ml-3 w-7 h-7 rounded-full bg-[#4c00ff] group-hover/link:bg-blue-600 transition-colors text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </a>
                  </div>

                  {/* Middle Column - Links Grid */}
                  <div className="w-full lg:w-[45%] grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div className="flex flex-col space-y-4">
                      <a href="/technology/ai" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">AI</a>
                      <a href="/technology/generative-ai" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Generative AI</a>
                      <a href="/technology/ml" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">ML</a>
                      <a href="/technology/blockchain" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Blockchain</a>
                      <a href="/technology/ar-vr" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">AR/VR</a>
                      <a href="/technology/visionos" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">VisionOS</a>
                      <a href="/technology/unity" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Unity</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <a href="/technology/iot" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">IoT</a>
                      <a href="/technology/metaverse" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Metaverse</a>
                      <a href="/technology/big-data" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Big Data</a>
                      <a href="/technology/data-science" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Data Science</a>
                      <a href="/technology/business-intelligence" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Business Intelligence</a>
                      <a href="/technology/nft" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">NFT</a>
                      <a href="/technology/chatbot" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Chatbot</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <a href="/technology/cloud" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Cloud</a>
                      <a href="/technology/smart-tv" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Smart TV</a>
                      <a href="/technology/nlp" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">NLP</a>
                      <a href="/technology/rpa" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">RPA</a>
                      <a href="/technology/digital-ethics" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Digital Ethics</a>
                      <a href="/technology/devops" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">DevOps</a>
                      <a href="/technology/odoo" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Odoo</a>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="hidden lg:block w-[25%] rounded-2xl overflow-hidden relative group/img shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Technology Code" className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  
                </div>
              </div>
            </div>
            <a href="/#portfolio" className={`font-semibold transition-colors ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
              Portfolio
            </a>
            <a href="/#blog" className={`font-semibold transition-colors ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
              Blog
            </a>
            <a href="/#faq" className={`font-semibold transition-colors ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
              FAQ
            </a>
          </nav>

          {/* Let's Talk Button */}
          <div className="hidden md:flex items-center">
            <a href="/#contact" className="bg-[#4c00ff] text-white px-7 py-2.5 rounded-full font-bold hover:bg-[#3d00cc] transition-all shadow-[0_4px_14px_rgba(76,0,255,0.39)] hover:shadow-[0_6px_20px_rgba(76,0,255,0.45)] hover:-translate-y-0.5">
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-colors ${(scrolled && headerTheme === 'dark') ? 'text-white hover:text-gray-200' : 'text-gray-800 hover:text-[#4c00ff]'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#f7f5ff] border-b border-gray-100 shadow-2xl absolute w-full max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-8 space-y-2">
            <a href="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]">About</a>
            
            {/* Services Accordion */}
            <div>
              <button 
                onClick={() => setActiveAccordion(activeAccordion === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]"
              >
                Services
                <svg className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === 'services' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeAccordion === 'services' && (
                <div className="px-4 py-3 space-y-1 bg-white rounded-xl mt-1 border border-gray-100 shadow-sm animate-in fade-in slide-in-from-top-2">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-2">Digital Product Design</div>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">UI/UX</a>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Wireframing</a>
                  
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Software Development</div>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">CRM</a>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">MVP</a>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">QA & Testing</a>
                  
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Mobile App Development</div>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Android</a>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">iOS</a>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Cross Platform</a>

                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Web Solutions</div>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Web App</a>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Website</a>

                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Artificial Intelligence</div>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Machine Learning</a>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Gen AI</a>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">AI Agent & Chatbot</a>
                  <a href="/service-details" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">NLP & Metaverse</a>
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div>
              <button 
                onClick={() => setActiveAccordion(activeAccordion === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]"
              >
                Industries
                <svg className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === 'industries' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeAccordion === 'industries' && (
                <div className="px-4 py-3 bg-white rounded-xl mt-1 border border-gray-100 shadow-sm grid grid-cols-2 gap-x-4 gap-y-2 animate-in fade-in slide-in-from-top-2">
                  {[
                    "On-Demand", "Enterprise", "Finance", "E-commerce", "Game", 
                    "Healthcare", "Travel", "Logistics", "Start-Up", "Entertainment",
                    "Real Estate", "Education", "Electric Vehicle", "Automotive", "Wearable"
                  ].map(ind => (
                    <a key={ind} href={`/industry/${ind.toLowerCase().replace(/ /g, '-')}`} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff]">
                      {ind}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Technologies Accordion */}
            <div>
              <button 
                onClick={() => setActiveAccordion(activeAccordion === 'technologies' ? null : 'technologies')}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]"
              >
                Technologies
                <svg className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === 'technologies' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeAccordion === 'technologies' && (
                <div className="px-4 py-3 bg-white rounded-xl mt-1 border border-gray-100 shadow-sm grid grid-cols-2 gap-x-4 gap-y-2 animate-in fade-in slide-in-from-top-2">
                  {[
                    "AI", "Generative AI", "ML", "Blockchain", "AR/VR", "VisionOS", "Unity",
                    "IoT", "Metaverse", "Big Data", "Data Science", "Business Intelligence", "NFT", "Chatbot",
                    "Cloud", "Smart TV", "NLP", "RPA", "Digital Ethics", "DevOps", "Odoo"
                  ].map(tech => (
                    <a key={tech} href={`/technology/${tech.toLowerCase().replace(/[\/\s]/g, '-')}`} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff]">
                      {tech}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]">Portfolio</a>
            <a href="/#blog" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]">Blog</a>
            <a href="/#faq" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]">FAQ</a>
            <a href="/#contact" onClick={() => setIsOpen(false)} className="block mt-6 text-center bg-[#4c00ff] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#3d00cc] shadow-lg shadow-blue-500/20">
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
