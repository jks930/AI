import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

const techCategories = [
  {
    num: "1",
    name: "Core AI Frameworks & Deep Learning",
    techs: ["TensorFlow", "PyTorch", "ONNX", "MXNet", "Keras", "JAX"]
  },
  {
    num: "2",
    name: "Generative AI & Large Language Models",
    techs: ["OpenAI GPT-4", "Llama 3", "Claude", "Gemini", "Hugging Face", "LangChain"]
  },
  {
    num: "3",
    name: "AI Orchestration & RAG",
    techs: ["LlamaIndex", "Pinecone", "Milvus", "Weaviate", "Qdrant", "Chroma"]
  },
  {
    num: "4",
    name: "Computer Vision & Image Processing",
    techs: ["OpenCV", "YOLO", "MediaPipe", "Stable Diffusion", "Midjourney API", "DALL-E 3"]
  },
  {
    num: "5",
    name: "NLP & Text Analysis Libraries",
    techs: ["NLTK", "spaCy", "Transformers", "Gensim", "TextBlob", "FastText"]
  },
  {
    num: "6",
    name: "Vector Databases (Memory for AI)",
    techs: ["Pinecone", "Milvus", "Weaviate", "Redis", "MongoDB Atlas", "PostgreSQL pgvector"]
  },
  {
    num: "7",
    name: "MLOps & Infrastructure",
    techs: ["AWS SageMaker", "Google Vertex AI", "Azure ML", "MLflow", "Kubeflow", "Docker"]
  },
  {
    num: "8",
    name: "Application Integration (Front-End & Back-End)",
    techs: ["React", "Node.js", "Python Fast API", "Next.js", "Django", "GraphQL"]
  }
];

const TechStack = () => {
  const [openCategory, setOpenCategory] = useState("1");

  const toggleCategory = (num) => {
    setOpenCategory(openCategory === num ? null : num);
  };

  return (
    <section 
      data-header-theme="dark"
      data-header-bg="bg-gradient-to-r from-[#210049]/95 via-[#350b7e]/95 to-[#0a1a5c]/95 backdrop-blur-md"
      className="w-full"
    >
      {/* Top Banner Section */}
      <div className="w-full bg-gradient-to-r from-[#210049] via-[#350b7e] to-[#0a1a5c] py-12 lg:py-16 px-4 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Subtle background abstract shape/logo placeholder */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <div className="w-64 h-64 border-[40px] border-white rounded-full blur-[2px]"></div>
        </div>
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-6 leading-[1.2]">
            AI Solutions That Deliver Measurable Business Value
          </h2>
          <p className="text-blue-100 text-[16px] lg:text-[18px] mb-10 max-w-[800px] mx-auto leading-relaxed">
            Build Intelligent Systems That Improve Accuracy, Reduce Complexity, And Support Smarter Decision-Making Across Your Organization.
          </p>
          <a href="#services" className="inline-flex bg-[#4a00ff] hover:bg-[#3800cc] text-white px-8 py-3.5 rounded-full font-semibold items-center gap-2 mx-auto transition-colors">
            Explore AI Solutions <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Tech Stack Section */}
      <div id="techstack" className="w-full bg-[#2a68ff] py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column (Sticky Text) */}
            <div className="w-full lg:w-[45%]">
              <div className="sticky top-32">
                <h2 className="text-[36px] lg:text-[46px] font-bold text-white leading-[1.2] mb-8 pr-4">
                  Our Tech Stack Expertise as an AI Development Company
                </h2>
                <p className="text-blue-50 text-[16px] leading-[1.8] opacity-90 pr-4">
                  itmcsystem doesn't merely employ technology; it develops intelligent ecosystems. To create safe and efficient products, we make use of frameworks, generative modeling, and cloud-based resources that are fully scalable. The goal of itmcsystem is to assist businesses in converting data-intensive, complex analytical computations into usable information that can help you make the correct business decisions so they can succeed.
                </p>
              </div>
            </div>

            {/* Right Column (Accordion) */}
            <div className="w-full lg:w-[55%]">
              <div className="flex flex-col">
                {techCategories.map((category) => (
                  <div key={category.num} className="border-b border-blue-400/30">
                    <button
                      onClick={() => toggleCategory(category.num)}
                      className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                    >
                      <h3 className={`text-[20px] font-semibold transition-colors duration-200 ${openCategory === category.num ? 'text-white' : 'text-blue-100/80 hover:text-white'}`}>
                        <span className="mr-4 inline-block font-mono text-sm opacity-70">[{category.num}]</span>
                        {category.name}
                      </h3>
                      <div className="text-white opacity-70">
                        {openCategory === category.num ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>
                    
                    {/* Accordion Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openCategory === category.num ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                        {category.techs.map((tech, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white rounded-lg h-[80px] flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow cursor-default"
                          >
                            <span className="text-gray-800 font-bold text-[15px] text-center tracking-tight">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
