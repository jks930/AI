import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    description: '',
    nda: false,
    captcha: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="w-full relative bg-[#f9fafb]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden">

          {/* Left Column (Image Background) */}
          <div className="w-full lg:w-[45%] p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Background Image */}
            <img
              src="/ai/background-get-in-touch-scaled.webp"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10">
              {/* Profile/Logo Image */}
              <div className="w-28 h-28 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center p-4 mb-8 shadow-lg">
                <img
                  src="/ai/logoai.svg"
                  alt="ITMC Digital"
                  className="w-full h-auto object-contain brightness-0 invert"
                />
              </div>

              <h2 className="text-[36px] lg:text-[44px] font-extrabold text-white leading-tight mb-4">
                Talk to Our Experts
              </h2>
              <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-md">
                Elevate your journey and empower your choices with our experts' insightful guidance.
              </p>

              <button className="border border-white/40 hover:bg-white hover:text-[#4a00ff] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 w-fit">
                Schedule a Call <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Locations Section */}
            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm mb-4 font-medium uppercase tracking-wider">Our Global Presence</p>
              <div className="flex flex-wrap gap-3 items-center opacity-90">
                <div className="bg-blue-500/10 hover:bg-blue-500/20 transition-colors border border-blue-500/30 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm cursor-default">
                  <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-5 h-auto rounded-[2px] shadow-sm" /> <span className="text-blue-50 text-sm font-semibold">USA</span>
                </div>
                <div className="bg-orange-500/10 hover:bg-orange-500/20 transition-colors border border-orange-500/30 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm cursor-default">
                  <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-auto rounded-[2px] shadow-sm" /> <span className="text-orange-50 text-sm font-semibold">India</span>
                </div>
                <div className="bg-red-500/10 hover:bg-red-500/20 transition-colors border border-red-500/30 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm cursor-default">
                  <img src="https://flagcdn.com/w40/ca.png" alt="Canada" className="w-5 h-auto rounded-[2px] shadow-sm" /> <span className="text-red-50 text-sm font-semibold">Canada</span>
                </div>
                <div className="bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors border border-emerald-500/30 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm cursor-default">
                  <img src="https://flagcdn.com/w40/mx.png" alt="Mexico" className="w-5 h-auto rounded-[2px] shadow-sm" /> <span className="text-emerald-50 text-sm font-semibold">Mexico</span>
                </div>
                <div className="bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors border border-yellow-500/30 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm cursor-default">
                  <img src="https://flagcdn.com/w40/br.png" alt="Brazil" className="w-5 h-auto rounded-[2px] shadow-sm" /> <span className="text-yellow-50 text-sm font-semibold">Brazil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="w-full lg:w-[55%] bg-white p-10 lg:p-16 xl:p-20">
            <h3 className="text-[32px] font-bold text-[#0a2540] mb-8">
              Get an Expert Consultation
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name*"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID*"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No*"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all"
              />

              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all appearance-none text-gray-500 bg-white"
                >
                  <option value="" disabled hidden>Budget (select a range)</option>
                  <option value="< $10,000">Less than $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all resize-none"
              ></textarea>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="nda"
                    checked={formData.nda}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#4a00ff] border-gray-300 rounded focus:ring-[#4a00ff]"
                  />
                  <span className="text-sm text-gray-600">Include Copy of a Non-Disclosure Agreement</span>
                </label>

                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-sm font-medium">6 + 1</span>
                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                    className="w-16 border border-gray-300 rounded-lg px-2 py-1 outline-none focus:border-[#4a00ff] text-center"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-colors duration-300 shadow-md shadow-purple-200"
                >
                  Get a free quote <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
                For Direct Inquiries: <a href="mailto:info@itmcsystems.com" className="text-blue-500 hover:underline">info@itmcsystems.com</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
