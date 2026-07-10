import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#080014] text-gray-300 pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Premium Deep Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4a00ff]/50 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4a00ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0d6efd]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-3">
            <a href="/" className="inline-block mb-6">
              <img src="/ai/logoai.svg" alt="logoai" className="h-14 w-auto opacity-100 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-gray-400 text-[14px] leading-[1.8] mb-8">
              Founded in 2016 in Delaware, ITMC Digital began as a software house and has evolved into a next-generation AI & Staffing Transformation company. Today we operate across 5 countries, serve 38+ US states, and combine cutting-edge AI with elite human talent to deliver outcomes — not just outputs.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#4a00ff] hover:text-white hover:border-[#4a00ff] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#4a00ff] hover:text-white hover:border-[#4a00ff] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-4">
            <h4 className="text-white font-bold text-[16px] mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[15px]">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[15px]">Portfolio</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[15px]">Blog</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[15px]">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[15px]">Contact Us</a></li>
            </ul>
          </div>

          {/* Audit / Get Started */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[16px] mb-6 tracking-wide">Get Started</h4>
            <div className="bg-[#4a00ff]/10 border border-[#4a00ff]/20 rounded-2xl p-5 hover:bg-[#4a00ff]/20 transition-colors">
              <h5 className="text-white font-bold text-[15px] mb-2">45-Min Agentification Audit</h5>
              <p className="text-gray-400 text-[14px] leading-relaxed mb-4">
                Free strategic session to identify where AI can save your business the most overhead.
              </p>
              <a href="#contact" className="inline-block text-[#4c00ff] font-bold text-[14px] hover:text-white transition-colors">
                Book Audit &rarr;
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h4 className="text-white font-bold text-[16px] mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <span className="text-gray-400 text-[14px] leading-relaxed"><strong className="text-gray-300">HQ:</strong> Parsippany, New Jersey, US</span>
              </li>
              <li className="flex items-center gap-3 group">
                <a href="tel:+14056518989" className="text-gray-400 hover:text-white transition-colors text-[14px]"><strong className="text-gray-300">US:</strong> +1 405 651 8989</a>
              </li>
              <li className="flex items-center gap-3 group">
                <a href="tel:+919717435004" className="text-gray-400 hover:text-white transition-colors text-[14px]"><strong className="text-gray-300">India:</strong> +91 97174 35004</a>
              </li>
              <li className="flex items-center gap-3 group">
                <a href="https://wa.me/14056518989" className="text-gray-400 hover:text-white transition-colors text-[14px]"><strong className="text-gray-300">WhatsApp:</strong> +1 405 651 8989</a>
              </li>
              <li className="flex items-center gap-3 group">
                <a href="mailto:info@itmcsystems.com" className="text-gray-400 hover:text-white transition-colors text-[14px]"><strong className="text-gray-300">Email:</strong> info@itmcsystems.com</a>
              </li>
              <li className="flex items-center gap-3 group">
                <a href="https://www.itmcsystems.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-[14px]"><strong className="text-gray-300">Web:</strong> www.itmcsystems.com</a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[14px]">
            &copy; {new Date().getFullYear()} ITMC Digital, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-[14px]">
            <a href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
