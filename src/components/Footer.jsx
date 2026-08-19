import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#080014] text-gray-300 pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Premium Deep Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4a00ff]/50 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4a00ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0d6efd]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16 border-b border-white/10 pb-16 w-full">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
            <a href="/" className="inline-block">
              <img src="/ai/logoai.svg" alt="logoai" className="h-14 w-auto opacity-100 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              Founded in 2016 in Delaware, ITMC Digital began as a software house and has evolved into a next-generation AI & Staffing Transformation company.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.linkedin.com/company/itmcs-systems" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#4a00ff] hover:text-white hover:border-[#4a00ff] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://www.facebook.com/people/ITMC-Systems-Inc/61580620094746/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#4a00ff] hover:text-white hover:border-[#4a00ff] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: SERVICES */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-[13px] tracking-wider uppercase mb-5">Services</h4>
            <ul className="space-y-3 text-[13px]">
              <li><Link to="/services/ui-ux-design" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/crm-development" className="text-gray-400 hover:text-white transition-colors">Software Dev</Link></li>
              <li><Link to="/services/android-app-development" className="text-gray-400 hover:text-white transition-colors">Mobile App Dev</Link></li>
              <li><Link to="/services/web-app-development" className="text-gray-400 hover:text-white transition-colors">Web Solutions</Link></li>
              <li><Link to="/services/machine-learning" className="text-gray-400 hover:text-white transition-colors">Machine Learning</Link></li>
              <li><Link to="/services/generative-ai-development" className="text-gray-400 hover:text-white transition-colors">Generative AI</Link></li>
              <li><Link to="/services/ai-agent-development" className="text-gray-400 hover:text-white transition-colors">AI Agents</Link></li>
              <li><Link to="/services/ai-chatbot-development" className="text-gray-400 hover:text-white transition-colors">AI Chatbots</Link></li>
              <li><Link to="/services/natural-language-processing" className="text-gray-400 hover:text-white transition-colors">NLP</Link></li>
            </ul>
          </div>

          {/* Column 3: INDUSTRIES */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-[13px] tracking-wider uppercase mb-5">Industries</h4>
            <ul className="space-y-3 text-[13px]">
              <li><Link to="/on-demand" className="text-gray-400 hover:text-white transition-colors">On-Demand</Link></li>
              <li><Link to="/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="/finance" className="text-gray-400 hover:text-white transition-colors">Finance</Link></li>
              <li><Link to="/e-commerce" className="text-gray-400 hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link to="/healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/travel" className="text-gray-400 hover:text-white transition-colors">Travel</Link></li>
              <li><Link to="/logistics" className="text-gray-400 hover:text-white transition-colors">Logistics</Link></li>
              <li><Link to="/real-estate" className="text-gray-400 hover:text-white transition-colors">Real Estate</Link></li>
              <li><Link to="/education" className="text-gray-400 hover:text-white transition-colors">Education</Link></li>
              <li><Link to="/automotive" className="text-gray-400 hover:text-white transition-colors">Automotive</Link></li>
            </ul>
          </div>

          {/* Column 4: TECHNOLOGIES */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-[13px] tracking-wider uppercase mb-5">Technologies</h4>
            <ul className="space-y-3 text-[13px]">
              <li><Link to="/artificial-intelligence" className="text-gray-400 hover:text-white transition-colors">AI</Link></li>
              <li><Link to="/generative-ai" className="text-gray-400 hover:text-white transition-colors">Generative AI</Link></li>
              <li><Link to="/machine-learning" className="text-gray-400 hover:text-white transition-colors">Machine Learning</Link></li>
              <li><Link to="/blockchain" className="text-gray-400 hover:text-white transition-colors">Blockchain</Link></li>
              <li><Link to="/ar-vr" className="text-gray-400 hover:text-white transition-colors">AR/VR</Link></li>
              <li><Link to="/iot" className="text-gray-400 hover:text-white transition-colors">IoT</Link></li>
              <li><Link to="/metaverse" className="text-gray-400 hover:text-white transition-colors">Metaverse</Link></li>
              <li><Link to="/big-data" className="text-gray-400 hover:text-white transition-colors">Big Data</Link></li>
              <li><Link to="/cloud" className="text-gray-400 hover:text-white transition-colors">Cloud</Link></li>
              <li><Link to="/devops" className="text-gray-400 hover:text-white transition-colors">DevOps</Link></li>
            </ul>
          </div>

          {/* Column 5: COMPANY */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-[13px] tracking-wider uppercase mb-5">Company</h4>
            <ul className="space-y-3 text-[13px]">
              <li><a href="/ai/#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/ai/#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/ai/#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/ai/#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
            <div className="mt-8 bg-[#4a00ff]/10 border border-[#4a00ff]/20 rounded-xl p-4 hover:bg-[#4a00ff]/20 transition-colors">
              <h5 className="text-white font-bold text-[13px] mb-2">45-Min Audit</h5>
              <p className="text-gray-400 text-[12px] leading-relaxed mb-3">
                Free session to identify AI overhead savings.
              </p>
              <Link to="/contact-us" className="inline-block text-[#4c00ff] font-bold text-[12px] hover:text-white transition-colors">
                Book Audit &rarr;
              </Link>
            </div>
          </div>

          {/* Column 6: CONTACT */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-[13px] tracking-wider uppercase mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-[#4a00ff] mt-0.5" />
                <span className="text-gray-400 text-[13px] leading-relaxed">Parsippany, New Jersey, US</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-[#4a00ff]" />
                <a href="tel:+14056518989" className="text-gray-400 hover:text-white transition-colors text-[13px]">+1 405 651 8989</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-[#4a00ff]" />
                <a href="tel:+919717435004" className="text-gray-400 hover:text-white transition-colors text-[13px]">+91 97174 35004</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-[#4a00ff]" />
                <a href="mailto:info@itmcsystems.com" className="text-gray-400 hover:text-white transition-colors text-[13px]">info@itmcsystems.com</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[13px]">
            &copy; {new Date().getFullYear()} ITMC Digital, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px]">
            <a href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
