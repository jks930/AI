import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InsightsStories = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      title: "Centralized Digital Gate Pass Management Transformation for a Large Integrated Manufacturing Enterprise",
      image: "/ai/images/centralized-digital-gate-pass-management-transformation-for-a-large-integrated-manufacturing-enterprise.jpeg",
      tag: "Case Study",
      date: "Oct 2023",
      challenge: "Manual processes caused significant delays and security gaps.",
      solution: "Led one of our core digital transformation projects to build a centralized, automated platform.",
      technology: "Seamless technology implementation using React, Node.js, and IoT.",
      outcomes: "50% faster processing, standing out among our successful IT projects."
    },
    {
      title: "Strengthening Global Security Resilience: 24x7 SOC Safeguards 37 Locations & Manages Over 1B+ Security Events Monthly",
      image: "/ai/images/strengthening-global-security-resilience-24x7-soc-safeguards-37-locations-manages-over-1b-security-events-monthly.jpeg",
      tag: "Security Insight",
      date: "Sept 2023",
      challenge: "Vulnerabilities across 37 global locations without unified oversight.",
      solution: "Deployed a 24x7 SOC for real-time monitoring—one of our top IT solutions success stories.",
      technology: "Advanced SIEM, AI Threat Detection, and Cloud Security.",
      outcomes: "Managed 1B+ events monthly, securing positive business outcomes and zero breaches."
    },
    {
      title: "AI-Driven Supply Chain Optimization: Reducing Latency by 40% for Global Retailers",
      image: "/ai/images/ai-driven-supply-chain-optimization-reducing-latency-by-40-for-global-retailers.jpeg",
      tag: "Tech Innovation",
      date: "Aug 2023",
      challenge: "High latency and high costs in global supply chain operations.",
      solution: "Developed an AI-driven predictive analytics and route optimization system.",
      technology: "Machine Learning, Python, Big Data Analytics.",
      outcomes: "Reduced latency by 40% and improved overall business outcomes significantly."
    }
  ];

  return (
    <div className="w-full bg-[#fcfcfc] font-sans py-24 px-6 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0f172a]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-[#4c00ff] font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#4c00ff]" /> Success Stories
            </h2>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
              Our Successful <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] to-[#4c00ff]">Technology Projects</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <button 
              onClick={() => navigate('/case-studies')}
              className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-[#0f172a] font-bold rounded-2xl hover:bg-[#0f172a] hover:text-white transition-all duration-500 shadow-xl shadow-slate-100 hover:shadow-slate-300"
            >
              View All Insights <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Stories Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} index={index} onClick={() => navigate('/case-studies')} />
          ))}
        </div>

      </div>
    </div>
  );
};

const StoryCard = ({ story, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 cursor-pointer border border-slate-100"
    >
      {/* Image Side with Parallax Effect */}
      <div className="relative h-72 overflow-hidden">
        <motion.img 
          src={story.image} 
          alt="Story" 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ duration: 1 }}
        />
        {/* Overlay Label */}
        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[#0f172a] text-[10px] font-black uppercase tracking-widest shadow-lg">
          {story.tag}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex-1 p-10 flex flex-col justify-between bg-white transition-all duration-700">
        {/* Background Fill Animation */}
        <div className="absolute inset-0 bg-[#0f172a] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
        
        <div className="relative z-10">
          <div className="text-[#4c00ff] group-hover:text-amber-400 text-[10px] font-bold tracking-[0.2em] mb-4 transition-colors duration-500">
            {story.date}
          </div>
          <h4 className="text-[#0f172a] group-hover:text-white font-extrabold text-xl transition-colors duration-500 leading-tight">
            {story.title}
          </h4>
          <div className="text-[13px] text-gray-600 group-hover:text-gray-200 transition-colors duration-500 space-y-1 mt-6">
            <p><strong className="text-[#0f172a] group-hover:text-amber-400">Challenge:</strong> {story.challenge}</p>
            <p><strong className="text-[#0f172a] group-hover:text-amber-400">Solution:</strong> {story.solution}</p>
            <p><strong className="text-[#0f172a] group-hover:text-amber-400">Technology:</strong> {story.technology}</p>
            <p><strong className="text-[#0f172a] group-hover:text-amber-400">Outcomes:</strong> {story.outcomes}</p>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#4c00ff] group-hover:text-white font-bold text-sm transition-colors duration-500">
            Read Case Study <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
          </div>
          
          <div className="w-12 h-12 rounded-full border border-slate-100 group-hover:border-white/20 flex items-center justify-center transition-all duration-700">
            <motion.div
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 45 }}
              className="text-[#0f172a] group-hover:text-white"
            >
              <ArrowRight size={24} />
            </motion.div>
          </div>
        </div>

        {/* Bottom Liquid Line */}
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#4c00ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center" />
      </div>
    </motion.div>
  );
};

export default InsightsStories;