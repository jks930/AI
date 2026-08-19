import React, { useState, useEffect } from 'react';
import { Smartphone, Monitor, Code2, PenTool, Brain, Bot, Rocket, Sparkles, Building2, TestTube, CheckCircle2, Layout, Database, Layers, ArrowRight } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ forceSolid = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceSolid);
  const [headerTheme, setHeaderTheme] = useState('light');
  const [headerBg, setHeaderBg] = useState('bg-transparent');
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 20 && !forceSolid) {
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
            setHeaderBg('bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm');
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
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-10 ${scrolled ? 'py-3 sm:py-4' : 'py-0'}`}>
      <div className={`max-w-[1600px] mx-auto transition-all duration-500 ${scrolled ? (headerTheme === 'dark' ? 'bg-[#0f172a]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-full px-6 lg:px-8' : 'bg-white/85 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(76,0,255,0.06)] rounded-full px-6 lg:px-8') : 'bg-transparent px-0'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img src="/ai/logoai.svg" alt="logoai" className={`w-auto transition-all duration-500 group-hover:scale-105 filter drop-shadow-sm group-hover:drop-shadow-md ${scrolled ? 'h-11 lg:h-12' : 'h-14 lg:h-16'}`} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/ai/#about" className={`font-semibold transition-colors ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
              About
            </a>
            <div className="group">
              <a href="/ai/#services" className={`font-semibold transition-colors flex items-center gap-1 py-4 ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
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
                    <Link to="/services/ui-ux-design" className="inline-flex items-center text-gray-900 hover:text-[#4c00ff] font-semibold text-[15px] transition-colors group/link mb-10">
                      View all 
                      <span className="ml-3 w-7 h-7 rounded-full bg-[#4c00ff] group-hover/link:bg-blue-600 transition-colors text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>

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
                        <Link to="/services/ui-ux-design" className="flex items-center justify-between group/cat mb-5">
                          <h4 className="text-xl font-bold text-gray-900 group-hover/cat:text-[#4c00ff] transition-colors">Digital Product Design</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/cat:text-[#4c00ff] transition-colors" />
                        </Link>
                        <div className="space-y-4">
                          <Link to="/services/ui-ux-design" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <PenTool className="w-4 h-4" /> UI/UX
                          </Link>
                          <Link to="/services/wireframing" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Layout className="w-4 h-4" /> Wireframing
                          </Link>
                        </div>
                      </div>

                      <div>
                        <Link to="/services/crm-development" className="flex items-center justify-between group/cat mb-5">
                          <h4 className="text-xl font-bold text-gray-900 group-hover/cat:text-[#4c00ff] transition-colors">Software Development</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/cat:text-[#4c00ff] transition-colors" />
                        </Link>
                        <div className="space-y-4">
                          <Link to="/services/crm-development" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Database className="w-4 h-4" /> CRM
                          </Link>
                          <Link to="/services/mvp-development" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Code2 className="w-4 h-4" /> MVP
                          </Link>
                          <Link to="/services/qa-testing" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <TestTube className="w-4 h-4" /> QA & Testing
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-10">
                      <div>
                        <Link to="/services/android-app-development" className="flex items-center justify-between group/cat mb-5">
                          <h4 className="text-xl font-bold text-gray-900 group-hover/cat:text-[#4c00ff] transition-colors">Mobile App Development</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/cat:text-[#4c00ff] transition-colors" />
                        </Link>
                        <div className="space-y-4">
                          <Link to="/services/android-app-development" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Smartphone className="w-4 h-4" /> Android
                          </Link>
                          <Link to="/services/ios-app-development" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Smartphone className="w-4 h-4" /> iOS
                          </Link>
                          <Link to="/services/cross-platform-app-development" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                            <Layers className="w-4 h-4" /> Cross Platform
                          </Link>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Link to="/services/web-app-development" className="flex items-center gap-3 text-gray-900 font-bold hover:text-[#4c00ff] text-[17px] transition-colors hover:translate-x-1 duration-300">
                          <Monitor className="w-5 h-5 text-gray-500" /> Web App
                        </Link>
                        <Link to="/services/website-development" className="flex items-center gap-3 text-gray-900 font-bold hover:text-[#4c00ff] text-[17px] transition-colors hover:translate-x-1 duration-300">
                          <Layout className="w-5 h-5 text-gray-500" /> Website
                        </Link>
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col">
                      <Link to="/services/artificial-intelligence" className="flex items-center justify-between group/cat mb-5">
                        <h4 className="text-xl font-bold text-gray-900 group-hover/cat:text-[#4c00ff] transition-colors">Artificial Intelligence</h4>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover/cat:text-[#4c00ff] transition-colors" />
                      </Link>
                      <div className="space-y-4">
                        <Link to="/services/machine-learning" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Brain className="w-4 h-4" /> Machine Learning
                        </Link>
                        <Link to="/services/generative-ai-development" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Sparkles className="w-4 h-4" /> Gen AI
                        </Link>
                        <Link to="/services/ai-agent-development" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Bot className="w-4 h-4" /> AI Agent
                        </Link>
                        <Link to="/services/ai-chatbot-development" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Bot className="w-4 h-4" /> AI Chatbot
                        </Link>
                        <Link to="/services/natural-language-processing" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Code2 className="w-4 h-4" /> NLP
                        </Link>
                        <Link to="/services/metaverse-development" className="flex items-center gap-3 text-gray-600 hover:text-[#4c00ff] text-[15px] transition-colors hover:translate-x-1 duration-300">
                          <Monitor className="w-4 h-4" /> Metaverse
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Products Mega Menu */}
            <div className="group">
              <a href="/ai/#products" className={`font-semibold transition-colors flex items-center gap-1 py-4 ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
                Products
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              <div className="absolute top-full left-0 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform -translate-y-4 group-hover:translate-y-0 z-[100] bg-white border-b border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-14 flex flex-col lg:flex-row gap-10 relative z-10">
                  
                  {/* Left Column - Description */}
                  <div className="w-full lg:w-[30%] lg:border-r border-gray-100 lg:pr-10">
                    <h3 className="text-gray-900 text-[28px] font-bold mb-4 tracking-tight">Products</h3>
                    <div className="w-16 h-1 bg-[#4c00ff] mb-6 rounded-full"></div>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                      Explore our suite of innovative products and platforms designed to accelerate your digital transformation and empower your workforce.
                    </p>
                    <a href="/ai/#products" className="inline-flex items-center text-gray-900 hover:text-[#4c00ff] font-semibold text-[15px] transition-colors group/link">
                      View all 
                      <span className="ml-3 w-7 h-7 rounded-full bg-[#4c00ff] group-hover/link:bg-blue-600 transition-colors text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </a>
                  </div>

                  {/* Middle Column - Links Grid */}
                  <div className="w-full lg:w-[45%] grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div className="flex flex-col space-y-5">
                      <Link to="/products/pulse-ai" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Pulse.ai</Link>
                      <Link to="/products/insurance-data-hub" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Insurance Data Hub</Link>
                      <Link to="/products/iip" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Integrated Insurance</Link>
                      <Link to="/products/smarthr" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">SmartHR</Link>
                      <Link to="/products/smartpay" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">SmartPay</Link>
                    </div>
                    <div className="flex flex-col space-y-5">
                      <Link to="/products/pulse-nerve" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Pulse.nerve</Link>
                      <Link to="/products/digital-bpaas" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Digital BPaaS</Link>
                      <Link to="/products/sequre" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Sequre</Link>
                      <Link to="/products/pulse-retail-ai" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Pulse.Retail.ai</Link>
                      <Link to="/products/resume-builder" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Resume Builder</Link>
                    </div>
                    <div className="flex flex-col space-y-5">
                      <Link to="/products/property-management" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Property Management</Link>
                      <Link to="/products/hrms" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">HRMS</Link>
                      <Link to="/products/crm" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">CRM Suite</Link>
                      <Link to="/products/ats" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">ATS</Link>
                      <Link to="/products/casacab" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">CasaCab</Link>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="hidden lg:block w-[25%] rounded-2xl overflow-hidden relative group/img shadow-2xl">
                    <img src="/ai/images/header-1.jpeg" alt="Products & Platforms" className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="group">
              <a href="/ai/#industries" className={`font-semibold transition-colors flex items-center gap-1 py-4 ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
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
                    <a href="/ai/#industries" className="inline-flex items-center text-gray-900 hover:text-[#4c00ff] font-semibold text-[15px] transition-colors group/link">
                      View all 
                      <span className="ml-3 w-7 h-7 rounded-full bg-[#4c00ff] group-hover/link:bg-blue-600 transition-colors text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </a>
                  </div>

                  {/* Middle Column - Links Grid */}
                  <div className="w-full lg:w-[45%] grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div className="flex flex-col space-y-5">
                      <Link to="/on-demand" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">On-Demand</Link>
                      <Link to="/enterprise" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Enterprise</Link>
                      <Link to="/finance" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Finance</Link>
                      <Link to="/e-commerce" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">E-commerce</Link>
                      <Link to="/game" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Game</Link>
                    </div>
                    <div className="flex flex-col space-y-5">
                      <Link to="/healthcare" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Healthcare</Link>
                      <Link to="/travel" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Travel</Link>
                      <Link to="/logistics" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Logistics</Link>
                      <Link to="/start-up" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Start-Up</Link>
                      <Link to="/entertainment" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Entertainment</Link>
                    </div>
                    <div className="flex flex-col space-y-5">
                      <Link to="/real-estate" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Real Estate</Link>
                      <Link to="/education" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Education</Link>
                      <Link to="/electric-vehicle" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Electric Vehicle</Link>
                      <Link to="/automotive" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Automotive</Link>
                      <Link to="/wearable" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Wearable</Link>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="hidden lg:block w-[25%] rounded-2xl overflow-hidden relative group/img shadow-2xl">
                    <img src="/ai/images/header.jpeg" alt="Team Collaboration" className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="group">
              <a href="/ai/#technologies" className={`font-semibold transition-colors flex items-center gap-1 py-4 ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
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
                    <a href="/ai/#technologies" className="inline-flex items-center text-gray-900 hover:text-[#4c00ff] font-semibold text-[15px] transition-colors group/link">
                      Learn more 
                      <span className="ml-3 w-7 h-7 rounded-full bg-[#4c00ff] group-hover/link:bg-blue-600 transition-colors text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </a>
                  </div>

                  {/* Middle Column - Links Grid */}
                  <div className="w-full lg:w-[45%] grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                    <div className="flex flex-col space-y-4">
                      <Link to="/artificial-intelligence" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">AI</Link>
                      <Link to="/generative-ai" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Generative AI</Link>
                      <Link to="/machine-learning" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">ML</Link>
                      <Link to="/blockchain" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Blockchain</Link>
                      <Link to="/ar-vr" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">AR/VR</Link>
                      <Link to="/visionos" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">VisionOS</Link>
                      <Link to="/unity" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Unity</Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <Link to="/iot" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">IoT</Link>
                      <Link to="/metaverse" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Metaverse</Link>
                      <Link to="/big-data" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Big Data</Link>
                      <Link to="/data-science" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Data Science</Link>
                      <Link to="/business-intelligence" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Business Intelligence</Link>
                      <Link to="/nft" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">NFT</Link>
                      <Link to="/chatbot" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Chatbot</Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <Link to="/cloud" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Cloud</Link>
                      <Link to="/smart-tv" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Smart TV</Link>
                      <Link to="/nlp" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">NLP</Link>
                      <Link to="/rpa" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">RPA</Link>
                      <Link to="/digital-ethics" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Digital Ethics</Link>
                      <Link to="/devops" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">DevOps</Link>
                      <Link to="/odoo" className="text-gray-600 hover:text-[#4c00ff] text-[15px] font-medium transition-all hover:translate-x-1 duration-300 block">Odoo</Link>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="hidden lg:block w-[25%] rounded-2xl overflow-hidden relative group/img shadow-2xl">
                    <img src="/ai/images/header-1.jpeg" alt="Technology Code" className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  
                </div>
              </div>
            </div>
            <a href="/ai/#portfolio" className={`font-semibold transition-colors ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
              Portfolio
            </a>
            <a href="/ai/#blog" className={`font-semibold transition-colors ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
              Blog
            </a>
            <a href="/ai/#faq" className={`font-semibold transition-colors ${(scrolled && headerTheme === 'dark') ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-[#4c00ff]'}`}>
              FAQ
            </a>
          </nav>

          {/* Let's Talk Button */}
          <div className="hidden md:flex items-center">
            <a href="#contact" className="bg-[#4c00ff] text-white px-7 py-2.5 rounded-full font-bold hover:bg-[#3d00cc] transition-all shadow-[0_4px_14px_rgba(76,0,255,0.39)] hover:shadow-[0_6px_20px_rgba(76,0,255,0.45)] hover:-translate-y-0.5">
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
            <a href="/ai/#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]">About</a>
            
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
                  <Link to="/services/ui-ux-design" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">UI/UX</Link>
                  <Link to="/services/wireframing" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Wireframing</Link>
                  
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Software Development</div>
                  <Link to="/services/crm-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">CRM</Link>
                  <Link to="/services/mvp-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">MVP</Link>
                  <Link to="/services/qa-testing" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">QA & Testing</Link>
                  
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Mobile App Development</div>
                  <Link to="/services/android-app-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Android</Link>
                  <Link to="/services/ios-app-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">iOS</Link>
                  <Link to="/services/cross-platform-app-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Cross Platform</Link>

                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Web Solutions</div>
                  <Link to="/services/web-app-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Web App</Link>
                  <Link to="/services/website-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Website</Link>

                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Artificial Intelligence</div>
                  <Link to="/services/machine-learning" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Machine Learning</Link>
                  <Link to="/services/generative-ai-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Gen AI</Link>
                  <Link to="/services/ai-agent-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">AI Agent</Link>
                  <Link to="/services/ai-chatbot-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">AI Chatbot</Link>
                  <Link to="/services/natural-language-processing" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">NLP</Link>
                  <Link to="/services/metaverse-development" onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff] pl-2 border-l-2 border-transparent hover:border-[#4c00ff]">Metaverse</Link>
                </div>
              )}
            </div>

            {/* Products Accordion */}
            <div>
              <button 
                onClick={() => setActiveAccordion(activeAccordion === 'products' ? null : 'products')}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]"
              >
                Products
                <svg className={`w-4 h-4 transition-transform duration-300 ${activeAccordion === 'products' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeAccordion === 'products' && (
                <div className="px-4 py-3 bg-white rounded-xl mt-1 border border-gray-100 shadow-sm grid grid-cols-2 gap-x-4 gap-y-2 animate-in fade-in slide-in-from-top-2">
                  {[
                    "Pulse.ai", "Insurance Data Hub", "IIP", "SmartHR", "SmartPay",
                    "Pulse.nerve", "Digital BPaaS", "Sequre", "Pulse.Retail.ai", "Resume Builder",
                    "Property Management", "HRMS", "CRM", "ATS", "CasaCab"
                  ].map(prod => (
                    <Link key={prod} to={`/${products/prod.toLowerCase().replace(/[\/\s\.]/g, '-')}`} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff]">
                      {prod}
                    </Link>
                  ))}
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
                    <Link key={ind} to={`/${ind.toLowerCase().replace(/ /g, '-')}`} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff]">
                      {ind}
                    </Link>
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
                    <Link key={tech} to={`/${tech.toLowerCase().replace(/[\/\s]/g, '-')}`} onClick={() => setIsOpen(false)} className="block text-sm font-medium text-gray-600 py-2 hover:text-[#4c00ff]">
                      {tech}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="/ai/#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]">Portfolio</a>
            <a href="/ai/#blog" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]">Blog</a>
            <a href="/ai/#faq" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-semibold text-gray-800 hover:text-[#4c00ff] hover:bg-[#e6ebff]">FAQ</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block mt-6 text-center bg-[#4c00ff] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#3d00cc] shadow-lg shadow-blue-500/20">
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
