import React, { useState } from "react";
import Header from "../../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  Sparkles,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Shield,
  Plus,
  Check,
  Play,
  Clock,
  Layers,
  AlertTriangle,
  GitMerge,
  LayoutDashboard,
  Car,
  MapPin,
  Compass,
  DollarSign,
  Leaf,
  FileText
} from "lucide-react";
import ContactFormSection from "../../components/ContactFormSection";
import InsightsStories from "../../components/InsightsStories";
import SEO from "../../components/SEO";

const CasaCab = () => {
  const [activeTab, setActiveTab] = useState("signup");

  // Key Challenges in Carpooling
  const problems = [
    {
      title: "Lack of Trust & Safety",
      desc: "People haven't tried carpooling due to safety concerns and lack of profile reliability.",
      icon: <Shield className="w-6 h-6 text-red-500" />
    },
    {
      title: "Usability Hurdles",
      desc: "Complicated routing, scheduling, and matching make finding shared rides feel like a chore.",
      icon: <Compass className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Cost & Pricing Ambiguity",
      desc: "Lack of transparent, upfront pricing causes confusion during cash-sharing negotiations.",
      icon: <DollarSign className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Timing & Reliability",
      desc: "Commuters prefer public transport but complain about delays and rigid timing structures.",
      icon: <Clock className="w-6 h-6 text-amber-500" />
    }
  ];

  // Project Goals
  const goals = [
    {
      num: "01",
      title: "Simplify Ride Sharing",
      desc: "Make it effortless for users to find or offer rides in just a few taps."
    },
    {
      num: "02",
      title: "Build Trust & Safety",
      desc: "Ensure safety through verified profiles, ratings, and real-time user reviews."
    },
    {
      num: "03",
      title: "Transparent & Fair Pricing",
      desc: "Provide clear, upfront pricing with automatic cost breakdown and splitting."
    },
    {
      num: "04",
      title: "Smart Matching",
      desc: "Match riders and drivers intelligently based on route, time, and personal preferences."
    },
    {
      num: "05",
      title: "Seamless Communication",
      desc: "Enable smooth coordination through secure, in-app chat and call features."
    },
    {
      num: "06",
      title: "Sustainable Commuting",
      desc: "Promote eco-friendly traveling, reducing traffic congestion and carbon footprints."
    }
  ];

  // User Personas
  const personas = [
    {
      role: "Sales Executive",
      name: "Ajay Palkar",
      age: 42,
      location: "Bangalore",
      status: "Married",
      quote: "Love meeting new people, but don't like public transport. Want to save money, travel safely, and with comfort.",
      goals: ["Save Time & fuel expenses.", "Reduce Carbon Footprint.", "Connect with new professionals during commute."],
      pains: ["Too much traffic on Bangalore roads.", "Highly priced daily cabs.", "Boring, solitary daily commute."]
    },
    {
      role: "Software Engineer",
      name: "Naina Kapoor",
      age: 24,
      location: "Delhi",
      status: "Single",
      quote: "Public transport wastes a lot of dynamic time, lacks safety for women, and cabs are too high priced for daily travel.",
      goals: ["Save Money on travel.", "Get daily comfort and convenience.", "Travel safely in a trusted environment."],
      pains: ["Overcrowded metro trains and public transport.", "Lack of women safety features on standard platforms.", "High daily surge pricing for individual cabs."]
    }
  ];

  // Design Process Steps
  const designSteps = [
    { phase: "Empathize", methods: "User Research & Interviews" },
    { phase: "Define", methods: "User Personas & Empathy Maps" },
    { phase: "Ideate", methods: "Journey Mapping & User Flows" },
    { phase: "Prototype", methods: "Wireframes & Visual Designs" },
    { phase: "Test", methods: "Usability Testing & Refinements" }
  ];

  // Interactive product tour tabs
  const tabContent = {
    signup: {
      title: "Easily Sign Up",
      desc: "Get started on CasaCab in seconds. Use simple onboarding processes to set up your verified profile. Sign up securely and verify your details to begin sharing rides immediately.",
      url: "app.casacab.com/signup",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-sm text-[#04BF68]">CasaCab Onboarding</span>
              <span className="text-xs text-slate-400">Secure OTP</span>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Enter Phone Number</span>
                <span className="text-base font-medium text-white">+91 98765 43210</span>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Aadhaar/ID Verification</span>
                <span className="text-sm font-semibold text-green-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ID Verified Successfully
                </span>
              </div>
            </div>
          </div>
          <button className="w-full py-3 bg-[#04BF68] text-white hover:bg-[#039e55] font-bold rounded-xl transition-all text-xs">
            Start Sharing Rides
          </button>
        </div>
      )
    },
    destination: {
      title: "Set Your Destination",
      desc: "Set your preferred location as a default for quick access, or use live integrated Maps to choose your destination. CasaCab automatically maps out optimal shared corridors to match you with nearby drivers or riders.",
      url: "app.casacab.com/map-route",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-sm text-slate-300 flex items-center gap-1"><MapPin className="w-4 h-4 text-[#04BF68]" /> Route Config</span>
              <span className="text-xs px-2 py-0.5 bg-[#04BF68]/10 text-[#04BF68] rounded-full">GPS Active</span>
            </div>
            <div className="space-y-2">
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/20 text-xs">
                <span className="text-[10px] text-slate-400 block">Home / Pickup</span>
                <span className="text-white font-medium">HSR Layout, Bangalore</span>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/20 text-xs">
                <span className="text-[10px] text-slate-400 block">Destination</span>
                <span className="text-white font-medium">Manyata Tech Park, Bangalore</span>
              </div>
            </div>
          </div>
          <div className="bg-[#04BF68]/5 p-3.5 rounded-xl border border-[#04BF68]/20 mt-4 text-[11px] text-slate-300">
            📍 14 shared pools active along your route today.
          </div>
        </div>
      )
    },
    request: {
      title: "Request a Ride",
      desc: "Once your destination is set, choose from verified drivers traveling in the same direction. Review vehicle types, estimated departure times, pricing structures, and match scores to finalize your booking.",
      url: "app.casacab.com/request-pool",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-sm text-slate-300">Available Shared Rides</span>
              <span className="text-xs text-[#04BF68]">Filtered</span>
            </div>
            <div className="space-y-2.5">
              {[
                { driver: "Ajay P.", rating: "4.9 ★", cost: "₹120", time: "08:15 AM", car: "Nexon EV" },
                { driver: "Rahul M.", rating: "4.7 ★", cost: "₹95", time: "08:20 AM", car: "Swift" }
              ].map((ride, idx) => (
                <div key={idx} className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/30 flex items-center justify-between hover:bg-slate-800/60 transition-all cursor-pointer">
                  <div>
                    <h5 className="font-bold text-xs text-white">{ride.driver} • <span className="text-[10px] text-slate-400 font-normal">{ride.car}</span></h5>
                    <span className="text-[9px] text-[#04BF68]">{ride.rating} verified</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-white block">{ride.cost}</span>
                    <span className="text-[9px] text-slate-400">{ride.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-slate-400 text-center">Tap to request pool seat. Driver will be notified.</div>
        </div>
      )
    },
    details: {
      title: "Know All About Your Ride",
      desc: "Complete transparency at your fingertips. View comprehensive driver information, verified profiles, rating histories, and profiles of your co-passengers. Safe daily commutes built on mutual trust.",
      url: "app.casacab.com/ride-details",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#04BF68] to-[#6BED12] flex items-center justify-center font-bold text-white">
                AP
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">Ajay Palkar (Driver)</h4>
                <p className="text-[9px] text-slate-400">4.9 Rating • 142 Shared Trips Completed</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-800/30 p-2.5 rounded-lg text-[11px] border border-slate-700/20">
                <span className="text-slate-400 block text-[9px] mb-0.5">Co-Passengers on Board</span>
                <p className="text-white font-medium">Naina Kapoor • Tech Startup Dev</p>
              </div>
              <div className="bg-slate-800/30 p-2.5 rounded-lg text-[11px] border border-slate-700/20 flex justify-between items-center">
                <span>Vehicle: Nexon EV</span>
                <span className="px-1.5 py-0.5 bg-[#04BF68]/15 text-[#04BF68] rounded text-[9px]">Zero Emission</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-xs pt-4 border-t border-slate-800">
            <span className="text-slate-400">Total Fair: ₹120</span>
            <span className="text-[#04BF68] font-bold">Split Active</span>
          </div>
        </div>
      )
    }
  };

  // Outcomes & Impact
  const outcomes = [
    {
      title: "Reduced Travel Cost",
      desc: "Upfront pricing split saves commuters up to 60% compared to private, high-priced individual cabs.",
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: "Reduced Traffic Congestion",
      desc: "Combining daily commutes takes multiple single-occupancy vehicles off busy city roads.",
      icon: <Car className="w-6 h-6 text-[#04BF68]" />
    },
    {
      title: "Verified Trust & Safety",
      desc: "ID checks and reciprocal rating systems ensure female and daily commuters travel with confidence.",
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Environmental Impact",
      desc: "Shared EV and conventional corridors reduce overall carbon emissions and carbon footprints.",
      icon: <Leaf className="w-6 h-6 text-emerald-500" />
    }
  ];

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden bg-[#fcfcfc]">
      <SEO
        title="CasaCab - Smart Carpooling & Ride Sharing Platform"
        description="Share rides, divide travel costs, and reduce carbon footprints with CasaCab carpooling platform. Verified profiles, smart route matching, and fair split pricing."
        canonical="https://itmcdigital.com/products-and-platforms/casacab"
      />
      <Header forceSolid={true} />
      <main className="pt-[100px]">

      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#002140]">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai/casa.png"
            alt="CasaCab Carpooling"
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002140]/90 via-[#002140]/80 to-[#fcfcfc]"></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#04BF68]/10 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#6BED12]/5 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto w-full text-center mt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#04BF68] animate-ping"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#04BF68] absolute"></span>
            <h2 className="text-white font-bold tracking-[0.25em] uppercase text-xs md:text-sm">ITMC Systems Platforms</h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white leading-none mb-6 tracking-tight"
          >
            Casa<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04BF68] via-[#6BED12] to-[#ffda99]">Cab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-lg md:text-2xl mt-4 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Let's Travel Together. A smart carpooling platform connecting drivers with empty seats to riders heading the same way.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-slate-300 text-sm md:text-base mt-6 max-w-2xl mx-auto italic font-medium"
          >
            "Reduces single-occupancy commutes, ensures transparent cost-sharing, and builds community trust."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-gradient-to-r from-[#04BF68] to-[#6BED12] hover:from-[#6BED12] hover:to-emerald-500 text-white font-black rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_35px_rgba(4,191,104,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/Case-Study-CasaCab.pdf"
              download="Case-Study-CasaCab.pdf"
              className="px-10 py-4 bg-slate-800/40 text-white font-bold rounded-full border border-white/10 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              Download Case Study
              <FileText className="w-5 h-5 text-[#04BF68]" />
            </a>
          </motion.div>
        </div>
      </header>

      {/* Context & Key Challenges */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#04BF68] font-bold tracking-widest uppercase text-sm mb-3">Context & Challenges</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057] leading-tight max-w-3xl mx-auto">
              Key Challenges in Carpooling
            </h3>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Daily commuters face heavy traffic and surging cab costs, yet safety concerns and coordination difficulties block traditional carpooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((prob, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#fcfcfc] p-8 rounded-3xl border border-gray-100 hover:border-gray-200/85 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-50/50">
                    {prob.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#003057] mb-3">{prob.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{prob.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-24 px-6 bg-[#002140] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(4,191,104,0.06),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#04BF68] font-bold tracking-widest uppercase text-sm mb-3">Our Objective</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">CasaCab Project Goals</h3>
            <p className="text-slate-300 mt-4 max-w-xl mx-auto">
              Re-engineering the carpooling flow to guarantee safety, transparent cost breakdown, and comfortable commutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <span className="absolute top-4 right-6 text-5xl font-black text-white/5 select-none">{goal.num}</span>
                <div className="text-3xl font-black text-[#04BF68] mb-4">{goal.num}</div>
                <h4 className="text-xl font-bold text-white mb-2">{goal.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 px-6 bg-slate-50 border-t border-b border-gray-150 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#04BF68] font-bold tracking-widest uppercase text-sm mb-3">Execution Flow</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057]">My Design Process</h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Adhering to a strict user-centric design loop to guarantee high adoption and clear feedback.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#04BF68] to-[#002140] -translate-y-1/2 z-0 hidden lg:block"></div>
            {designSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 w-full lg:w-1/5 z-10 text-center"
              >
                <div className="w-10 h-10 bg-[#002140] text-white rounded-full flex items-center justify-center font-black mx-auto mb-4 border-2 border-[#04BF68] shadow-sm">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-base text-[#003057] mb-2">{step.phase}</h4>
                <p className="text-xs text-gray-500 leading-snug">{step.methods}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#04BF68] font-bold tracking-widest uppercase text-sm mb-3">Target Audience</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057] leading-tight">UX Discovery: User Personas</h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Mapping out commuter stories helps us tackle the safety concerns and high pricing of individual transits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {personas.map((per, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#fcfcfc] p-10 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#04BF68] to-[#6BED12] flex items-center justify-center font-black text-white text-lg">
                      {per.name[0]}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-[#003057]">{per.name}</h4>
                      <p className="text-sm text-gray-500 font-semibold">{per.role} • {per.age} yrs • {per.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic text-base mb-6 border-l-4 border-[#04BF68] pl-4">
                    "{per.quote}"
                  </blockquote>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-wider text-[#003057] mb-2 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-green-500" /> Goals & Needs
                      </h5>
                      <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
                        {per.goals.map((g, gIdx) => <li key={gIdx}>{g}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-wider text-[#003057] mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> Frustrations
                      </h5>
                      <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
                        {per.pains.map((p, pIdx) => <li key={pIdx}>{p}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside CasaCab (Interactive Mockup Tour) */}
      <section className="py-24 px-6 bg-slate-50 border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#04BF68] font-bold tracking-widest uppercase text-sm mb-3">Product Tour</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057]">Inside CasaCab</h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Walk through the interface to see how sharing rides becomes a comfortable and transparent experience.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left selector */}
            <div className="flex-1 lg:max-w-md flex flex-col justify-center gap-4">
              {[
                { id: "signup", label: "Easily Sign Up" },
                { id: "destination", label: "Set Your Destination" },
                { id: "request", label: "Request a Ride" },
                { id: "details", label: "Know All About Your Ride" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    activeTab === tab.id
                      ? "bg-[#002140] border-[#002140] text-white shadow-xl translate-x-2"
                      : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-slate-100/50"
                  }`}
                >
                  <span className="font-bold text-base">{tab.label}</span>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeTab === tab.id ? "text-[#04BF68] translate-x-1" : "text-gray-400 group-hover:translate-x-1"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right mockup window */}
            <div className="flex-1 flex flex-col justify-between bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden min-h-[480px]">
              {/* Browser bar */}
              <div className="bg-slate-100 px-6 py-3 border-b border-gray-200 flex items-center gap-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="flex-1 bg-white px-3 py-1 rounded-md text-xs text-gray-500 font-mono text-center truncate max-w-md mx-auto shadow-inner">
                  {tabContent[activeTab].url}
                </div>
              </div>

              {/* Dynamic Content Panel */}
              <div className="p-8 flex-1 flex flex-col md:flex-row gap-8 items-center bg-[#f8fafd]">
                <div className="flex-1 space-y-4">
                  <h4 className="text-2xl font-black text-[#003057]">{tabContent[activeTab].title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{tabContent[activeTab].desc}</p>
                  <div className="pt-2 flex items-center gap-2 text-xs text-[#003057] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#04BF68]" />
                    <span>Real-time GPS routing algorithms active</span>
                  </div>
                </div>
                <div className="flex-1 w-full max-w-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      {tabContent[activeTab].mockup}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Business Impact */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#04BF68] font-bold tracking-widest uppercase text-sm mb-3">Eco-Economic Value</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057] leading-tight">Outcomes & Impact</h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              How CasaCab delivers carbon reduction and travel affordability to active communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((out, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#fcfcfc] p-8 rounded-3xl border border-gray-100 hover:border-gray-200/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-50">
                  {out.icon}
                </div>
                <h4 className="text-xl font-bold text-[#003057] mb-3">{out.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{out.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-6 bg-[#002140] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(4,191,104,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-5xl font-black text-white">Let's Travel Together</h3>
          <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
            Reduce carbon emissions, save money, and commute in comfort. Experience smart carpooling with CasaCab.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-[#04BF68] hover:bg-[#039e55] text-white font-black rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(4,191,104,0.3)] cursor-pointer"
            >
              Schedule a Demo
            </button>
            <a
              href="/Case-Study-CasaCab.pdf"
              download="Case-Study-CasaCab.pdf"
              className="px-10 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              Download Case Study
            </a>
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

export default CasaCab;
