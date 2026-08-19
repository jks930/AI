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
  LayoutDashboard
} from "lucide-react";
import ContactFormSection from "../../components/ContactFormSection";
import InsightsStories from "../../components/InsightsStories";
import SEO from "../../components/SEO";

const CRM = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Problem cards mapping ("The Problem We Set Out to Solve")
  const problems = [
    {
      title: "Disconnected Customer Journey",
      desc: "Multiple systems create a fragmented customer experience as contacts move between different channels.",
      icon: <GitMerge className="w-6 h-6 text-red-500" />
    },
    {
      title: "Manual Processes",
      desc: "Routine tasks like lead assignment, follow-ups, and data entry consume valuable time instead of building relationships.",
      icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Disconnected Teams",
      desc: "Sales, marketing, and support teams work in silos with separate tools, limiting seamless collaboration.",
      icon: <Users className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Limited Insights",
      desc: "Scattered data makes it difficult to generate meaningful reports, forecast sales, and make confident decisions.",
      icon: <AlertTriangle className="w-6 h-6 text-amber-500" />
    }
  ];

  // Goals
  const goals = [
    {
      num: "01",
      title: "Unify Customer Management",
      desc: "Bring leads, sales, customer support, and reporting into one centralized, easy-to-use platform."
    },
    {
      num: "02",
      title: "Automate Repetitive Tasks",
      desc: "Reduce manual work through AI-powered workflows, automatic assignments, and follow-up templates."
    },
    {
      num: "03",
      title: "Improve Team Collaboration",
      desc: "Connect sales, marketing, customer support, and management on a shared platform with a single source of truth."
    },
    {
      num: "04",
      title: "Enable Smarter Decisions",
      desc: "Provide real-time analytics, predictive sales forecasts, and AI insights to support better business growth."
    }
  ];

  // Features list
  const features = [
    {
      title: "AI-Powered Lead Management",
      desc: "Capture, qualify, and prioritize leads automatically to help sales teams focus on the right opportunities.",
      icon: <Sparkles className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "Sales Pipeline & Deal Tracking",
      desc: "Monitor every stage of the sales journey with a clear and organized pipeline for faster deal closures.",
      icon: <Target className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "Workflow Automation",
      desc: "Automate repetitive tasks such as lead assignments, follow-ups, and notifications to improve team productivity.",
      icon: <Zap className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "Smart Analytics & Reporting",
      desc: "Access real-time dashboards, sales forecasts, and actionable insights to support better business decisions.",
      icon: <BarChart3 className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "Customer & Team Collaboration",
      desc: "Keep customer information, communication, and team activities connected in one centralized platform.",
      icon: <Users className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "Customer Engagement",
      desc: "Manage customer interactions through built-in communication channels and centralized messaging.",
      icon: <MessageSquare className="w-6 h-6 text-[#F9A826]" />
    }
  ];

  // Inside CRM Forge interactive mockup data
  const tabContent = {
    dashboard: {
      title: "Executive Dashboard Overview",
      desc: "The dashboard serves as the central workspace, giving users a real-time overview of business performance. Monitor active leads, sales opportunities, upcoming tasks, and key metrics in one place to understand priorities instantly.",
      url: "app.crmforge/dashboard",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-[#F9A826]" />
                <span className="font-semibold text-sm text-slate-300">CRM Forge Dashboard</span>
              </div>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-mono">Live Sync</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Active Leads</span>
                <span className="text-2xl font-black text-white">1,280</span>
                <span className="text-[10px] text-green-400 block mt-1">↑ 12% this week</span>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Sales Forecast</span>
                <span className="text-2xl font-black text-[#F9A826]">$128,450</span>
                <span className="text-[10px] text-slate-400 block mt-1">Q3 Target: 82% met</span>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Open Deals</span>
                <span className="text-2xl font-black text-white">42</span>
                <span className="text-[10px] text-green-400 block mt-1">5 near closing</span>
              </div>
              <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                <span className="text-xs text-slate-400 block mb-1">Tasks Pending</span>
                <span className="text-2xl font-black text-red-400">8</span>
                <span className="text-[10px] text-red-300 block mt-1">3 High Priority</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Monthly Deal Target</span>
              <span>80% ($80,000 / $100,000)</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#F9A826] to-amber-500 h-full rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      )
    },
    leads: {
      title: "AI-Powered Lead Management",
      desc: "Leads enter the system through websites, social media, WhatsApp, email, or manual entry. CRM Forge organizes every enquiry in a single workspace, allowing sales teams to qualify, assign, and track leads more efficiently.",
      url: "app.crmforge/leads",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-sm text-slate-300">Lead Inbox & Scoring</span>
              <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-xs flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3 animate-pulse" /> AI Qualified
              </span>
            </div>
            <div className="space-y-3">
              {[
                { name: "Sarah Jenkins", source: "WhatsApp", score: 94, status: "High Priority" },
                { name: "David Miller", source: "Website Form", score: 87, status: "High Priority" },
                { name: "Robert Chen", source: "Email", score: 62, status: "Medium" }
              ].map((lead, idx) => (
                <div key={idx} className="bg-slate-800/40 p-3.5 rounded-xl border border-slate-700/30 flex items-center justify-between hover:bg-slate-800/70 transition-all">
                  <div>
                    <h5 className="font-bold text-sm text-white">{lead.name}</h5>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">{lead.source}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-black block ${lead.score >= 85 ? "text-green-400" : "text-amber-400"}`}>
                      Score: {lead.score}
                    </span>
                    <span className="text-[10px] text-slate-400">{lead.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-slate-400 text-center border-t border-slate-800 pt-4 mt-4">
            Showing latest leads. Auto-assignment active.
          </div>
        </div>
      )
    },
    contacts: {
      title: "Centralized Contact Profiles",
      desc: "Every customer interaction is stored in one centralized profile, giving teams access to communication history, account details, and important information. Create a unified, 360-degree view of your customer relationship.",
      url: "app.crmforge/contacts/10492",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F9A826] to-amber-500 flex items-center justify-center font-bold text-[#0b1b2d]">
                TC
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">TechCorp Solutions</h4>
                <p className="text-[10px] text-slate-400">Enterprise Client • Active since 2024</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 mb-4 font-semibold uppercase tracking-wider">Interaction History</p>
            <div className="space-y-4">
              {[
                { icon: <Phone className="w-3.5 h-3.5 text-[#F9A826]" />, title: "Call: Pricing Negotiation", time: "Today, 11:30 AM", user: "Alex Carter" },
                { icon: <Mail className="w-3.5 h-3.5 text-blue-400" />, title: "Sent: Updated Proposal PDF", time: "Yesterday", user: "Alex Carter" },
                { icon: <MessageSquare className="w-3.5 h-3.5 text-green-400" />, title: "WhatsApp: Requested demo link", time: "2 days ago", user: "System Auto" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 relative">
                  {idx < 2 && <div className="absolute left-2.5 top-5 bottom-[-20px] w-0.5 bg-slate-800"></div>}
                  <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-200">{item.title}</h5>
                    <p className="text-[10px] text-slate-400">{item.time} • by {item.user}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between gap-2">
            <button className="flex-1 py-1.5 bg-slate-800 text-slate-200 hover:bg-slate-700 transition-all rounded-lg text-xs font-semibold">View Bio</button>
            <button className="flex-1 py-1.5 bg-[#F9A826] text-[#0b1b2d] hover:bg-amber-400 transition-all rounded-lg text-xs font-bold">New Task</button>
          </div>
        </div>
      )
    },
    tasks: {
      title: "Integrated Tasks & Activities",
      desc: "CRM Forge helps users stay organized by managing meetings, follow-ups, reminders, and daily activities in one place. Keeping tasks directly connected to customers and sales opportunities ensures timely execution.",
      url: "app.crmforge/activities",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-sm text-slate-300">My Schedule & Reminders</span>
              <button className="p-1 bg-[#F9A826]/10 text-[#F9A826] hover:bg-[#F9A826]/20 rounded-lg transition-all">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { title: "Presentation meeting with TechCorp", time: "Today at 3:00 PM", type: "Meeting", alert: true },
                { title: "Follow up call with Sarah Jenkins", time: "Tomorrow at 10:00 AM", type: "Call", alert: false },
                { title: "Submit proposal details for manager review", time: "Friday at 5:00 PM", type: "Task", alert: false }
              ].map((task, idx) => (
                <div key={idx} className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/30 flex items-start gap-3 hover:bg-slate-800/60 transition-all">
                  <div className="mt-0.5">
                    {task.alert ? (
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[#F9A826]"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xs font-bold text-white leading-tight">{task.title}</h5>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span className="text-[10px] text-slate-400">{task.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
            <span>Next Action: Client Call in 1h 14m</span>
            <span className="text-[#F9A826] hover:underline cursor-pointer">Launch</span>
          </div>
        </div>
      )
    },
    analytics: {
      title: "Interactive Reports & Analytics",
      desc: "Dashboards and reports provide real-time insights into sales performance, team productivity, and business growth. AI-powered analytics help managers identify trends, monitor KPIs, and make confident, data-driven decisions.",
      url: "app.crmforge/analytics",
      mockup: (
        <div className="bg-[#0b1b2d] rounded-2xl p-6 text-white border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-sm text-slate-300">Sales Forecast & KPI Analytics</span>
              <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full text-[10px] font-semibold">Q3 Updated</span>
            </div>
            <div className="space-y-4 mb-4">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Win Rate</span>
                  <span className="text-green-400 font-bold">24.5% (+3.2% MoM)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full">
                  <div className="bg-green-400 h-full rounded-full" style={{ width: "24.5%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Lead Response Time</span>
                  <span className="text-[#F9A826] font-bold">4.2 mins (-18 mins)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full">
                  <div className="bg-[#F9A826] h-full rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Forecast Growth</span>
                  <span className="text-blue-400 font-bold">+18% Next Month</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block mb-1">AI Actionable Recommendation</span>
            <p className="text-xs text-slate-200 leading-normal">
              💡 Reassign 4 medium leads from Sarah Jenkins to David Miller to decrease response time and optimize deal win rate.
            </p>
          </div>
        </div>
      )
    }
  };

  // Outcomes & Business Impact
  const outcomes = [
    {
      title: "Increased Team Productivity",
      desc: "Automation reduces manual administration and follow-up work, allowing teams to focus on high-value customer interactions.",
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: "Improved Sales Performance",
      desc: "A centralized sales pipeline and AI prioritization help teams track deals, anticipate bottlenecks, and close sales faster.",
      icon: <TrendingUp className="w-6 h-6 text-[#F9A826]" />
    },
    {
      title: "Better Team Collaboration",
      desc: "Sales, marketing, and support teams collaborate seamlessly from a single source of truth with shared customer histories.",
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Smarter Decision-Making",
      desc: "Real-time dashboards, metrics, and predictive forecasting analytics provide actionable insights for data-driven decisions.",
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Exceptional Customer Experience",
      desc: "Deliver faster responses, personalized interactions, and smooth workflows that lead to stronger customer relationships.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "Scalable & Secure Operations",
      desc: "Role-based access controls, centralized data management, and a unified platform support reliable business growth.",
      icon: <Shield className="w-6 h-6 text-cyan-500" />
    }
  ];

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden bg-[#fcfcfc]">
      <SEO
        title="CRM Forge - AI-Powered Customer Relationship Management"
        description="Transform the complete customer lifecycle with CRM Forge by ITMC Systems. AI-powered lead management, sales pipeline tracking, and automated workflows."
        canonical="https://itmcdigital.com/products-and-platforms/crm"
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://itmcdigital.com/#organization",
            "url": "https://itmcdigital.com/",
            "name": "ITMC Digital",
            "sameAs": [
              "https://www.linkedin.com/company/itmcs-systems",
              "https://www.facebook.com/people/ITMC-Systems-Inc/61580620094746/"
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://itmcdigital.com/",
                  "name": "Home"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://itmcdigital.com/products-and-platforms",
                  "name": "Products and Platforms"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@id": "https://itmcdigital.com/products-and-platforms/crm",
                  "name": "CRM"
                }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "CRM Solutions for Better Sales and Customer Management",
            "provider": {
              "@id": "https://itmcdigital.com/#organization"
            },
            "description": "Keep your sales organized with CRM development services that bring together lead tracking, sales automation, & customer data management in one easy-to-use platform.",
            "url": "https://itmcdigital.com/products-and-platforms/crm",
            "mainEntityOfPage": "https://itmcdigital.com/products-and-platforms/crm",
            "areaServed": "Global"
          }
        ]}
      />
      <Header forceSolid={true} />
      <main className="pt-[100px]">

      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#002140]">
        <div className="absolute inset-0 z-0">
          <img
            src="/ai/crm.png"
            alt="CRM Background"
            className="w-full h-full object-cover opacity-15 mix-blend-overlay"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002140]/90 via-[#002140]/80 to-[#fcfcfc]"></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#F9A826]/10 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto w-full text-center mt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#F9A826] animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-[#F9A826] absolute"></span>
            <h2 className="text-white font-bold tracking-[0.25em] uppercase text-xs md:text-sm">ITMC Systems Platforms</h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white leading-none mb-6 tracking-tight"
          >
            CRM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A826] via-amber-400 to-[#ffda99]">Forge</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-lg md:text-2xl mt-4 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Manage the entire customer journey in one place. An AI-powered Customer Relationship Management platform that automates workflows, scoring, and follow-ups.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-slate-300 text-sm md:text-base mt-6 max-w-2xl mx-auto italic"
          >
            "Reduces manual administration, prioritizes high-value leads, provides sales forecasts, and delivers seamless customer experiences."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-gradient-to-r from-[#F9A826] to-amber-500 hover:from-amber-500 hover:to-blue-600 text-[#002140] font-black rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_35px_rgba(249,168,38,0.4)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/Case-Study-CRM.pdf"
              download="Case-Study-CRM.pdf"
              className="px-10 py-4 bg-slate-800/40 text-white font-bold rounded-full border border-white/10 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              Download Case Study
              <FileText className="w-5 h-5 text-[#F9A826]" />
            </a>
          </motion.div>
        </div>
      </header>

      {/* The Problem We Set Out to Solve Section */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Context & Challenges</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057] leading-tight max-w-3xl mx-auto">
              The Challenges We Set Out to Solve
            </h3>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              As businesses grow, managing customer relationships across disconnected tools causes operational friction, delays, and missed sales opportunities.
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
                className="bg-[#fcfcfc] p-8 rounded-3xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
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
            <h3 className="text-4xl md:text-5xl font-black leading-tight">CRM Forge Project Goals</h3>
            <p className="text-slate-300 mt-4 max-w-xl mx-auto">
              Designed with four pillars to empower businesses to grow relationships and manage data confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Key Features & Capabilities */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#003057]">Key Features & Integrations</h3>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Automate routine assignments, qualify high-potential leads, track deal pipelines, and communicate smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100">
                {feat.icon}
              </div>
              <h4 className="text-xl font-bold text-[#003057] mb-3">{feat.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inside CRM Forge (Interactive Mockup Showcase) */}
      <section className="py-24 px-6 bg-slate-50 border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#F9A826] font-bold tracking-widest uppercase text-sm mb-3">Product Tour</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#003057]">Inside CRM Forge</h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Simple, premium, and designed to generate curiosity. Click through the central workspaces below to preview the platform live.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left selector */}
            <div className="flex-1 lg:max-w-md flex flex-col justify-center gap-4">
              {[
                { id: "dashboard", label: "Interactive Dashboard" },
                { id: "leads", label: "Lead Management Inbox" },
                { id: "contacts", label: "Contact Profile Views" },
                { id: "tasks", label: "Tasks & Schedule Activities" },
                { id: "analytics", label: "Reports & Sales Forecasts" }
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
                    <span>Real-time cloud database synchronization</span>
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
              How CRM Forge transforms sales activities, team syncs, and operational growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,168,38,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-5xl font-black text-white">Let's Build Smarter Customer Relationships</h3>
          <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
            Bring automation, AI prioritization, and team coordination to your organization. Learn how CRM Forge can accelerate your sales cycles.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-[#F9A826] hover:bg-amber-500 text-[#002140] font-black rounded-full transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(249,168,38,0.3)] cursor-pointer"
            >
              Schedule a Demo
            </button>
            <a
              href="/Case-Study-CRM.pdf"
              download="Case-Study-CRM.pdf"
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

export default CRM;
