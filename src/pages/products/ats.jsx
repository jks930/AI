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
  HelpCircle,
  FileText,
  AlertTriangle,
  GitMerge,
  LayoutDashboard,
  Cpu,
  UserCheck,
  Search,
  Briefcase
} from "lucide-react";
import ContactFormSection from "../../components/ContactFormSection";
import InsightsStories from "../../components/InsightsStories";
import SEO from "../../components/SEO";

const ATS = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Friction in Traditional Hiring
  const problems = [
    {
      title: "Slow Cycles",
      desc: "Technical roles averaged 60+ days to fill due to manual screening bottlenecks.",
      icon: <Clock className="w-6 h-6 text-red-500" />
    },
    {
      title: "Ghosting",
      desc: "Manual scheduling delays led to a 40% candidate drop-off rate mid-pipeline.",
      icon: <AlertTriangle className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Tool Fatigue",
      desc: "Switching between 5+ apps to manage one candidate created significant cognitive load.",
      icon: <Layers className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Data Silos",
      desc: "Valuable hiring insights were buried in spreadsheets and disconnected email threads.",
      icon: <GitMerge className="w-6 h-6 text-amber-500" />
    }
  ];

  // Project Goals
  const goals = [
    {
      num: "01",
      title: "Accelerate Hiring",
      desc: "Reduce manual effort and speed up every stage of the recruitment process."
    },
    {
      num: "02",
      title: "Leverage AI",
      desc: "Use intelligent screening and matching to identify the most suitable candidates faster."
    },
    {
      num: "03",
      title: "Centralize Workflows",
      desc: "Bring hiring, collaboration, and candidate management into one unified platform."
    },
    {
      num: "04",
      title: "Enhance Collaboration",
      desc: "Enable recruiters, account managers, and hiring teams to work seamlessly together."
    },
    {
      num: "05",
      title: "Improve Experience",
      desc: "Create a smooth, transparent, and efficient journey from application to onboarding."
    },
    {
      num: "06",
      title: "Deliver Insights",
      desc: "Provide real-time analytics and hiring metrics to support informed decision-making."
    }
  ];

  // Personas
  const personas = [
    {
      role: "Senior Recruiter",
      name: "Diya Verma",
      tagline: "The High-Volume Power User",
      quote: "I need a tool that thinks as fast as I do and stops me from wasting hours on candidates that clearly aren't a fit.",
      goals: [
        "Accelerate hiring cycles by 30% through automated screening.",
        "Surface high-quality candidates who fit culture, not just skills."
      ],
      pains: [
        "Drowning in resume overload for entry-level tech roles.",
        "Frustrating coordination delays between HR and hiring managers."
      ],
      avatar: "DV"
    },
    {
      role: "Account Manager",
      name: "Rohan Sharma",
      tagline: "The Strategic Orchestrator",
      quote: "My clients pay for speed and precision. I need to see exactly where we're winning and where we're stalling without asking for a manual report.",
      goals: [
        "Monitor recruiter performance across multiple client portfolios.",
        "Ensure 100% client satisfaction through data-backed reporting."
      ],
      pains: [
        "Limited visibility into real-time pipeline bottlenecks.",
        "Struggling to manage workload balancing for 15+ recruiters."
      ],
      avatar: "RS"
    }
  ];

  // Recruitment Journey (User Flow)
  const journey = [
    { title: "Job Creation", desc: "Recruiter defines hiring requirements." },
    { title: "Resume Aggregation", desc: "From internal & external pools." },
    { title: "AI Screening", desc: "Neural NLP skill & experience extraction." },
    { title: "Ranking", desc: "Intelligent scoring based on relevance match." },
    { title: "Interview", desc: "Automated booking and smart scheduling." },
    { title: "Offer", desc: "Digital offer generation and approvals." },
    { title: "Onboarding", desc: "Final verification and entry flow." }
  ];

  // Features list
  const features = [
    {
      title: "AI Resume Screening",
      desc: "Deep NLP parsing automatically extracts skills, experience, and education from complex documents.",
      icon: <Sparkles className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "Intelligent Ranking",
      desc: "AI calculates match scores and prioritizes the strongest candidates based on cultural fit.",
      icon: <Target className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "Auto Scheduling",
      desc: "Coordinate interviews with recruiters and candidates automatically using smart calendar syncing.",
      icon: <Calendar className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "Digital Onboarding",
      desc: "Collect documents, verify compliance, and track onboarding progress in a unified digital portal.",
      icon: <UserCheck className="w-6 h-6 text-[#F9A826]" />
    }
  ];

  // Inside Hire24.ai interactive mockup data
  const tabContent = {
    dashboard: {
      title: "Dashboard Overview",
      desc: "Get a real-time snapshot of your entire recruitment pipeline with key hiring metrics and application statistics. Monitor candidate progress, interviews, hires, and recruiter performance from a single centralized dashboard. Leverage the integrated AI Recruiter Assistant to gain insights and make faster hiring decisions.",
      url: "app.hire24.ai/dashboard",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-[#F9A826]" />
                <span className="font-semibold text-sm text-slate-300">Recruiter Dashboard</span>
              </div>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-mono">Live</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Active Openings</span>
                <span className="text-2xl font-black text-white">24 Jobs</span>
                <span className="text-[10px] text-green-400 block mt-1">4 new this week</span>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Total Applicants</span>
                <span className="text-2xl font-black text-[#F9A826]">1,420</span>
                <span className="text-[10px] text-green-400 block mt-1">↑ 18% increase</span>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Interviews Scheduled</span>
                <span className="text-2xl font-black text-white">36</span>
                <span className="text-[10px] text-slate-400 block mt-1">8 scheduled today</span>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Hired This Month</span>
                <span className="text-2xl font-black text-green-400">18</span>
                <span className="text-[10px] text-slate-400 block mt-1">Avg 18 days to hire</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Hiring Target (Q3)</span>
              <span>75% (18/24 slots filled)</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#F9A826] to-amber-500 h-full rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      )
    },
    analytics: {
      title: "Hiring Analytics Overview",
      desc: "Gain a comprehensive view of the recruitment pipeline with real-time hiring metrics and conversion insights. Track key performance indicators such as applications, candidates, submissions, hires, interviews, and rejections in one place. Identify hiring trends instantly to make faster, data-driven decisions.",
      url: "app.hire24.ai/analytics",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-sm text-slate-300">Hiring KPIs & Analytics</span>
              <span className="px-3 py-1 bg-blue-500/15 text-blue-400 rounded-full text-xs font-semibold">Q3 Analytics</span>
            </div>
            <div className="space-y-4 mb-4">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Interview-to-Offer Rate</span>
                  <span className="text-green-400 font-bold">28.4% (+4% MoM)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full">
                  <div className="bg-green-400 h-full rounded-full" style={{ width: "28.4%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Candidate Drop-off Rate</span>
                  <span className="text-red-400 font-bold">12% (-28% MoM)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full">
                  <div className="bg-red-400 h-full rounded-full" style={{ width: "12%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Sourcing Quality (AI Ranked)</span>
                  <span className="text-[#F9A826] font-bold">85% Match Average</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full">
                  <div className="bg-[#F9A826] h-full rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block mb-1">Hiring Velocity Highlight</span>
            <p className="text-xs text-slate-200 leading-normal">
              💡 Automated interview scheduling has reduced candidate response cycles by 4.2 days on average, decreasing pipeline drop-off rate by 28%.
            </p>
          </div>
        </div>
      )
    },
    accountManager: {
      title: "Account Manager Dashboard",
      desc: "Manage active job openings, client portfolios, BDM assignments, and hiring progress from a centralized workspace. Track recruiter workloads, client submissions, and pipeline status to ensure smooth team collaboration. Create new job postings manually or generate AI-powered job descriptions instantly to accelerate hiring.",
      url: "app.hire24.ai/client-pipeline",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-sm text-slate-300">Client Portfolio & Assignments</span>
              <button className="p-1 bg-[#F9A826]/10 text-[#F9A826] hover:bg-[#F9A826]/20 rounded-lg transition-all">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { client: "Google Cloud Services", role: "Sr. Backend Engineer", submissions: 12, status: "Active" },
                { client: "FintechCorp Systems", role: "Staff Product Designer", submissions: 8, status: "Active" },
                { client: "HealthTech Innovations", role: "AI Research Lead", submissions: 5, status: "Review" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/30 flex items-center justify-between hover:bg-slate-800/60 transition-all">
                  <div>
                    <h5 className="font-bold text-xs text-white">{item.role}</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">{item.client}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-[#F9A826] block">{item.submissions} Subs</span>
                    <span className="text-[10px] text-slate-400">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
            <span>AM Actions: Recruiter Workloads Balanced</span>
            <span className="text-[#F9A826] hover:underline cursor-pointer">View Load</span>
          </div>
        </div>
      )
    },
    aiInsights: {
      title: "AI Recruiter Insights",
      desc: "Receive AI-powered candidate recommendations based on job requirements, skills, and match suitability. Uncover hiring trends, recruitment velocity, and skill gap analysis through actionable insights. Enable smarter, data-driven hiring decisions with intelligent recommendations that improve overall recruitment efficiency.",
      url: "app.hire24.ai/ai-insights",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-sm text-slate-300">AI Scoring & Matches</span>
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3 animate-pulse" /> Neural Matching
              </span>
            </div>
            <div className="space-y-3">
              {[
                { name: "Aarav Mehta", match: "96%", reason: "Expert React & Cloud Architect" },
                { name: "Priya Sharma", match: "91%", reason: "9+ Years DevOps & Kubernetes" },
                { name: "Kabir Dev", match: "84%", reason: "Strong Python, weak AWS experience" }
              ].map((candidate, idx) => (
                <div key={idx} className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/30 hover:bg-slate-800/70 transition-all">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-xs text-white">{candidate.name}</h5>
                    <span className="text-xs font-black text-green-400">{candidate.match} Match</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">{candidate.reason}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
            AI recommends advancing Aarav Mehta to Interview round.
          </div>
        </div>
      )
    },
    onboarding: {
      title: "Onboarding Dashboard",
      desc: "Track every new hire from initiation to successful onboarding in one centralized workspace. Monitor onboarding progress with real-time status updates across all stages. Manage tasks, document collection, compliance verifications, and employee portal access for a seamless onboarding experience.",
      url: "app.hire24.ai/onboarding",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-sm text-slate-300">New Hire Onboarding Status</span>
              <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full text-[10px] font-semibold">Active Flows</span>
            </div>
            <div className="space-y-4 mb-4">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Ananya Sen (Software Engineer)</span>
                  <span className="text-green-400 font-semibold">90% Done</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-400 h-full rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Rohan Das (Product Manager)</span>
                  <span className="text-[#F9A826] font-semibold">60% Done</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#F9A826] h-full rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Vikram Singhal (HR Consultant)</span>
                  <span className="text-blue-400 font-semibold">25% Done</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-400 h-full rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-300">
            ✔️ All new hires compliance checks automated.
          </div>
        </div>
      )
    }
  };

  // Outcomes & Business Impact
  const outcomes = [
    {
      title: "60% Faster Screening",
      desc: "AI automation processes resume screening instantly, eliminating recruiter manual screening bottlenecks.",
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: "45% Reduction in CAC",
      desc: "Optimized sourcing channels and faster hiring cycles significantly decrease Cost per Candidate / Customer Acquisition Cost.",
      icon: <TrendingUp className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "3x Team Capacity",
      desc: "Recruiters and hiring managers spend less time juggling tasks, tripling the volume of vacancies they can manage.",
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: "100% Data Centralization",
      desc: "Eliminates cognitive loads and data silos by bringing all pipelines, emails, and interview reports into one shared platform.",
      icon: <Shield className="w-6 h-6 text-emerald-500" />
    }
  ];

  // Security elements
  const securityItems = [
    {
      title: "Secure Login & Auth",
      desc: "Single Sign-On (SSO), Multi-Factor Authentication (MFA), and OAuth 2.0 protect candidate & user access."
    },
    {
      title: "Role-Based Access Control",
      desc: "Granular permissions for recruiters, account managers, and admins ensure secure data visibility."
    },
    {
      title: "Enterprise Data Encryption",
      desc: "Candidate profiles and company data are encrypted using AES-256 at rest and TLS 1.3 in transit."
    },
    {
      title: "Compliance Automations",
      desc: "Built-in GDPR, CCPA, and SOC2 workflows automatically manage data consent and candidate right-to-be-forgotten."
    },
    {
      title: "API Security & Control",
      desc: "Rate limiting, encrypted API credentials, and endpoint logging keep program integrations highly secure."
    },
    {
      title: "Database Tenant Isolation",
      desc: "Multi-tenant architecture logically separates customer databases to prevent any cross-contamination of hiring data."
    }
  ];

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden bg-[#fcfcfc]">
      <SEO
        title="Hire24.ai - AI-Powered Applicant Tracking System (ATS)"
        description="Transform your recruitment lifecycle with Hire24.ai by ITMC Systems. AI resume screening, intelligent ranking, automated scheduling, and onboarding."
        canonical="https://itmcdigital.com/products-and-platforms/ats"
      />
      <Header forceSolid={true} />
      <main className="pt-[100px]">

      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#002140]">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#F9A826]/10 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto w-full mt-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#F9A826] animate-ping"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#F9A826] absolute"></span>
                <h2 className="text-white font-bold tracking-[0.25em] uppercase text-xs md:text-sm">ITMC Systems Platforms</h2>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black text-white leading-none mb-6 tracking-tight"
              >
                Hire24<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A826] via-amber-400 to-[#ffda99]">.ai</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white text-lg md:text-xl mt-4 font-light leading-relaxed"
              >
                Simplify and accelerate your recruitment lifecycle. An AI-powered Applicant Tracking System (ATS) that automates screening, scheduling, and onboarding.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-slate-300 text-sm md:text-base mt-6 italic font-medium"
              >
                "Reduces time-to-fill, automates calendar scheduling, eliminates candidate drop-offs, and centralizes hiring data."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-12 flex flex-wrap gap-4"
              >
                <button
                  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 bg-gradient-to-r from-[#F9A826] to-amber-500 hover:from-amber-500 hover:to-blue-600 text-[#002140] font-black rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_35px_rgba(249,168,38,0.4)] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="/Case-Study-Hire.pdf"
                  download="Case-Study-Hire.pdf"
                  className="px-8 py-4 bg-slate-800/40 text-white font-bold rounded-full border border-white/10 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Download Case Study
                  <FileText className="w-5 h-5 text-[#F9A826]" />
                </a>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex-1 relative hidden lg:block"
            >
              {/* Modern Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-transform duration-700 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F9A826]/20 to-transparent z-10 pointer-events-none"></div>
                <img
                  src="/ai/career-hero.png"
                  alt="ATS Recruitment UI"
                  className="w-full h-auto object-cover relative z-0"
                />
              </div>
              
              {/* Decorative floating elements around the image */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">AI Match</p>
                  <p className="text-sm font-black text-[#003057]">98% Fit</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* The Friction Section */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Context & Challenges</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057] leading-tight max-w-3xl mx-auto">
              The Friction in Traditional Hiring
            </h3>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Without automated workflows, recruiters struggle with manual resume overload and scheduling lag, causing slow hiring cycles and high drop-off rates.
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
                className="bg-[#fcfcfc] p-8 rounded-3xl border border-gray-100 hover:border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
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

      {/* Project Goals Section */}
      <section className="py-24 px-6 bg-[#002140] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,168,38,0.08),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Our Objective</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">Hire24.ai Project Goals</h3>
            <p className="text-slate-300 mt-4 max-w-xl mx-auto">
              Re-engineering the recruitment system to drive acceleration, integration, intelligence, and candidate comfort.
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
                <div className="text-3xl font-black text-[#F9A826] mb-4">{goal.num}</div>
                <h4 className="text-xl font-bold text-white mb-2">{goal.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Target Audience</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057] leading-tight">UX Discovery: User Personas</h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Understanding user needs, frustrations, and goals helps us target actual bottlenecks in the hiring chain.
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
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#F9A826] to-amber-500 flex items-center justify-center font-black text-[#002140] text-lg">
                      {per.avatar}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-[#003057]">{per.name}</h4>
                      <p className="text-sm text-gray-500 font-semibold">{per.role} • {per.tagline}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic text-base mb-6 border-l-4 border-[#F9A826] pl-4">
                    "{per.quote}"
                  </blockquote>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-wider text-[#003057] mb-2 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-green-500" /> Key Goals
                      </h5>
                      <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
                        {per.goals.map((g, gIdx) => <li key={gIdx}>{g}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-xs uppercase tracking-wider text-[#003057] mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> Pain Points
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

      {/* Recruitment Journey Flow */}
      <section className="py-24 px-6 bg-slate-50 border-t border-b border-gray-150 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">User Flow</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057]">The Recruitment Journey</h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              A comprehensive view of the hiring lifecycle, powered by intelligent AI recommendation engines.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#F9A826] to-[#002140] -translate-y-1/2 z-0 hidden lg:block"></div>
            {journey.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 w-full lg:w-1/7 z-10 text-center"
              >
                <div className="w-10 h-10 bg-[#002140] text-white rounded-full flex items-center justify-center font-black mx-auto mb-4 border-2 border-[#F9A826] shadow-sm">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-xs text-[#003057] mb-2">{step.title}</h4>
                <p className="text-[10px] text-gray-500 leading-snug">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#003057]">Key Features & System Integrations</h3>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            From screening algorithms to automatic onboarding compliance checks, Hire24.ai operates seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100">
                  {feat.icon}
                </div>
                <h4 className="text-xl font-bold text-[#003057] mb-3">{feat.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inside Hire24.ai (Interactive Mockup Showcase) */}
      <section className="py-24 px-6 bg-slate-50 border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Product Tour</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057]">Inside Hire24.ai</h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Preview our intuitive layouts designed to maximize recruiters' workspace efficiency and decision speeds.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left selector */}
            <div className="flex-1 lg:max-w-md flex flex-col justify-center gap-4">
              {[
                { id: "dashboard", label: "Recruiter Dashboard" },
                { id: "analytics", label: "Hiring Analytics Overview" },
                { id: "accountManager", label: "Account Manager Dashboard" },
                { id: "aiInsights", label: "AI Recruiter Insights" },
                { id: "onboarding", label: "Onboarding Tracker Dashboard" }
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
                      activeTab === tab.id ? "text-[#F9A826] translate-x-1" : "text-gray-400 group-hover:translate-x-1"
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
                    <CheckCircle2 className="w-4 h-4 text-[#F9A826]" />
                    <span>Multi-tenant security layer active</span>
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

      {/* Outcomes & Business Impact Section */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Business Value</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057] leading-tight">Outcomes & Business Impact</h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Tangible growth and efficiency results observed by our global enterprise recruitment partners.
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

      {/* Scalable Architecture & Security */}
      <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,168,38,0.06),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Enterprise Infrastructure</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">Security, Privacy & Compliance</h3>
            <p className="text-slate-300 mt-4 max-w-xl mx-auto">
              Hire24.ai is built on a highly scalable, multi-tenant cloud architecture that ensures strict data isolation and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityItems.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 text-[#F9A826]">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-6 bg-[#002140] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,168,38,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-5xl font-black text-white">Let's Build Smarter Hiring Experiences</h3>
          <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
            Thoughtful UX design, intelligent AI resume matching, and candidate onboarding verifications bring speed and compliance to your company.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-[#F9A826] hover:bg-amber-500 text-[#002140] font-black rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(249,168,38,0.3)] cursor-pointer"
            >
              Schedule a Demo
            </button>
            <a
              href="/Case-Study-Hire.pdf"
              download="Case-Study-Hire.pdf"
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

export default ATS;
