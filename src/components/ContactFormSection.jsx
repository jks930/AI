import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactFormSection = () => {
  // ITMC.AI branding colors
  const textDark = "#0f172a";
  const orangeAccent = "#4c00ff";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    consent: false,
    captcha: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    
    // Prevent basic XSS (Cross-Site Scripting) by rejecting < and >
    if (typeof value === 'string' && (value.includes('<') || value.includes('>'))) {
      return "Special characters like < and > are not allowed for security reasons";
    }

    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required";
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        error = "Name can only contain letters and spaces";
      }
    } else if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email address";
      }
    } else if (name === "company") {
      if (!value.trim()) {
        error = "Company is required";
      }
    } else if (name === "consent") {
      if (!value) {
        error = "You must agree to the terms";
      }
    } else if (name === "captcha") {
      if (!value) {
        error = "Please verify you are not a robot";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
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
    const fields = ["name", "email", "company", "consent", "captcha"];
    
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
          setFormData({ name: "", email: "", company: "", consent: false, captcha: false });
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
    <div className="w-full font-sans py-24 px-6 md:px-12 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(0deg, #FFF8EB 0%, #FFFFFF 100%)" }}>
      
      {/* 1. Background Pattern Overlay - Light Bottom Dotted Pattern */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[50%] bg-contain bg-left-bottom bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/contact-bg.webp')" }} // Placeholder Path
      ></div>

      {/* 2. Right Side Wavy Dotted Pattern Image */}
      <div 
        className="absolute top-[-10%] right-[-15%] w-[50%] h-[120%] bg-contain bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/contact-right.webp')" }} // Placeholder Path
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16 max-w-5xl mx-auto">
          <h2 style={{ color: textDark }} className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight">
            Transform, <span style={{ color: orangeAccent }}>Evolve</span>, Succeed with ITMC.AI
          </h2>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-xl text-green-700 text-center">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
            {/* Input Row 1 - Name, Email, Company */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name" 
                  className={`w-full px-6 py-4 border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#4c00ff]'} rounded-lg focus:ring-2 focus:ring-[#4c00ff]/30 transition-all`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className={`w-full px-6 py-4 border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#4c00ff]'} rounded-lg focus:ring-2 focus:ring-[#4c00ff]/30 transition-all`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company" 
                  className={`w-full px-6 py-4 border ${errors.company ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-[#4c00ff]'} rounded-lg focus:ring-2 focus:ring-[#4c00ff]/30 transition-all`}
                />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
              </div>
            </div>

            {/* Consents & Terms */}
            <div>
              <div className="flex items-start gap-4">
                <input 
                  type="checkbox" 
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  id="consent" 
                  className="mt-1 w-5 h-5 border border-gray-200 rounded checked:bg-[#4c00ff] focus:ring-[#4c00ff] transition-all"
                />
                <label htmlFor="consent" className="text-gray-700 text-base leading-relaxed">
                  By clicking on connect you agree to our <a href="#" className="text-[#0f172a] font-semibold hover:text-[#4c00ff]">Terms of use & Privacy Policy</a> and hereby grant your consent to ITMC.AI to call you and send sms.
                </label>
              </div>
              {errors.consent && <p className="text-red-500 text-xs mt-1 ml-9">{errors.consent}</p>}
            </div>

            {/* Captcha Placeholder Card */}
            <div>
              <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 max-w-sm">
                <input 
                  type="checkbox" 
                  name="captcha"
                  checked={formData.captcha}
                  onChange={handleChange}
                  className="w-5 h-5 border border-gray-300 rounded accent-[#4c00ff]" 
                />
                <p className="text-[#0f172a] text-base font-semibold flex-1">I'm not a robot</p>
                <div className="flex items-center justify-center w-full md:w-auto">
                    {/* reCAPTCHA Logo */}
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-12 h-12" />
                </div>
              </div>
              {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-12">
              <motion.button 
                whileTap={isSubmitted ? {} : { scale: 0.95 }}
                type="submit"
                disabled={isSubmitted} 
                className={`px-16 py-4 bg-[#4c00ff] text-white font-bold rounded-full text-lg shadow-lg transition-all ${isSubmitted ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[#4c00ff]/40 hover:-translate-y-1'}`}
              >
                {isSubmitted ? "Submitting..." : "Submit"}
              </motion.button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactFormSection;