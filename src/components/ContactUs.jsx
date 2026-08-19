import React, { useState, useEffect } from 'react';
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
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaParams, setCaptchaParams] = useState({ num1: 6, num2: 1 });

  useEffect(() => {
    setCaptchaParams({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    });
  }, []);

  const validateField = (name, value) => {
    let error = "";
    
    // Prevent basic XSS
    if (typeof value === 'string' && (value.includes('<') || value.includes('>'))) {
      return "Special characters like < and > are not allowed for security reasons";
    }

    if (name === "fullName") {
      if (!value.trim()) {
        error = "Full Name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        error = "Name can only contain letters and spaces";
      }
    } else if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email address";
      }
    } else if (name === "phone") {
      if (!value.trim()) {
        error = "Phone number is required";
      } else if (!/^[0-9+\-\s()]+$/.test(value)) {
        error = "Invalid characters in phone number";
      } else {
        // Count actual digits to ensure it's a realistic phone number length
        const digitCount = value.replace(/\D/g, '').length;
        if (digitCount < 7 || digitCount > 15) {
          error = "Phone number must have between 7 and 15 digits";
        }
      }
    } else if (name === "budget") {
      if (!value.trim()) {
        error = "Please select a budget range";
      }
    } else if (name === "captcha") {
      if (parseInt(value.trim(), 10) !== (captchaParams.num1 + captchaParams.num2)) {
        error = "Incorrect answer";
      }
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: newValue
    }));

    // Real-time validation
    const error = validateField(name, newValue);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    const fields = ["fullName", "email", "phone", "budget", "captcha"];
    
    fields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitted(true);
      
      try {
        // REPLACE THIS URL WITH YOUR FORMSPREE OR GETFORM ENDPOINT
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form data sent to backend:", formData);
          setFormData({ fullName: '', email: '', phone: '', budget: '', description: '', nda: false, captcha: '' });
          
          // Generate new captcha for next time
          setCaptchaParams({
            num1: Math.floor(Math.random() * 10) + 1,
            num2: Math.floor(Math.random() * 10) + 1
          });

          setTimeout(() => setIsSubmitted(false), 3000);
        } else {
          console.error("Failed to send message");
          setIsSubmitted(false);
          alert("Something went wrong. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setIsSubmitted(false);
        alert("Network error. Please try again later.");
      }
    }
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
                  className="w-full h-auto object-contain"
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

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-600 text-center font-medium">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  className={`w-full border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID*"
                  className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No*"
                  className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full border ${errors.budget ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all appearance-none text-gray-500 bg-white`}
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
                {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
              </div>

              <div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  rows="4"
                  className={`w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3.5 outline-none focus:border-[#4a00ff] focus:ring-1 focus:ring-[#4a00ff] transition-all resize-none`}
                ></textarea>
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
              </div>

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

                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-sm font-medium">{captchaParams.num1} + {captchaParams.num2}</span>
                    <input
                      type="text"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleChange}
                      className={`w-16 border ${errors.captcha ? 'border-red-500' : 'border-gray-300'} rounded-lg px-2 py-1 outline-none focus:border-[#4a00ff] text-center`}
                    />
                  </div>
                  {errors.captcha && <p className="text-red-500 text-xs mt-1 text-right">{errors.captcha}</p>}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`bg-[#8b5cf6] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-colors duration-300 shadow-md shadow-purple-200 ${isSubmitted ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#7c3aed]'}`}
                >
                  {isSubmitted ? 'Sending...' : 'Get a free quote'} 
                  {!isSubmitted && <ArrowRight className="w-5 h-5" />}
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
