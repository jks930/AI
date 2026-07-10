import React, { useState } from 'react';

const leftFaqs = [
  {
    id: 'l1',
    question: "What makes  ITMC Digital a trusted AI development partner?",
    answer: " ITMC Digital stands out as the best AI development company by delivering secure, scalable, and innovative solutions tailored to real business needs. As an experienced artificial intelligence development company, we combine advanced technologies with practical expertise to solve complex challenges."
  },
  {
    id: 'l2',
    question: "Which industries do your AI services support?",
    answer: "We support a wide range of industries including healthcare, finance, retail, manufacturing, logistics, and more. Our customized AI solutions are designed to address the unique challenges of each sector."
  },
  {
    id: 'l3',
    question: "Do you offer tailored AI solutions?",
    answer: "Yes, we specialize in building custom AI solutions tailored to your specific business requirements, ensuring maximum ROI and alignment with your strategic goals."
  },
  {
    id: 'l4',
    question: "Why choose  ITMC Digital as your AI partner?",
    answer: "We bring a deep understanding of advanced AI technologies, a proven track record of successful deliveries, and a commitment to data security and transparency throughout the development lifecycle."
  },
  {
    id: 'l5',
    question: "Does ITMC Digital provide custom software development services?",
    answer: "Yes, as a leading IT services provider, we offer comprehensive custom software development services to meet your unique business needs."
  },
  {
    id: 'l6',
    question: "How can cloud solutions help businesses?",
    answer: "Cloud solutions improve scalability, flexibility, and security. As your trusted cloud solutions provider, we help streamline operations and reduce infrastructure costs."
  },
  {
    id: 'l7',
    question: "What industries does ITMC Digital serve?",
    answer: "We serve a wide variety of industries. Whether you need IT services, digital transformation services, or AI solutions, our expertise spans across healthcare, finance, retail, and more."
  }
];

const rightFaqs = [
  {
    id: 'r1',
    question: "Can you integrate AI into existing systems?",
    answer: "Absolutely. We seamlessly integrate AI capabilities into your existing software infrastructure with minimal disruption, enhancing your current operations with smart automation."
  },
  {
    id: 'r2',
    question: "Do you provide end-to-end AI development services?",
    answer: "Yes, our services cover the entire AI development lifecycle, from initial consulting and strategy to data preparation, model training, deployment, and ongoing maintenance."
  },
  {
    id: 'r3',
    question: "What types of AI solutions do you develop?",
    answer: "Our expertise spans across machine learning, natural language processing (NLP), computer vision, generative AI, predictive analytics, and intelligent automation."
  },
  {
    id: 'r4',
    question: "What sets  ITMC Digital apart from other AI companies?",
    answer: "Our user-centric approach, rigorous quality assurance, and ability to translate complex AI capabilities into tangible business value distinguish us from the competition."
  },
  {
    id: 'r5',
    question: "How can AI improve business operations?",
    answer: "As an expert AI solutions company, we implement AI to automate processes, enhance decision-making, and improve customer experiences, ultimately driving growth."
  },
  {
    id: 'r6',
    question: "How can I start a digital transformation project with ITMC Digital?",
    answer: "Starting is easy! Contact us for a consultation, and our team will guide you through our end-to-end digital transformation services tailored to your specific goals."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState('l1');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const FaqItem = ({ faq }) => {
    const isOpen = openId === faq.id;

    return (
      <div className="mb-3">
        <button
          onClick={() => toggleFaq(faq.id)}
          className={`w-full flex items-center justify-between p-5 lg:p-6 text-left rounded-[10px] transition-colors duration-200 ${isOpen ? 'bg-[#f8f9fa]' : 'bg-[#f4f7fa] hover:bg-[#edf1f6]'
            }`}
        >
          <span className="font-medium text-gray-800 text-[15px] lg:text-[16px] pr-4">{faq.question}</span>
          <span className="text-[#2b59ff] text-2xl font-light leading-none flex-shrink-0">
            {isOpen ? '−' : '+'}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="p-5 lg:p-6 lg:pt-2 text-gray-600 text-[15px] leading-relaxed bg-[#f8f9fa] rounded-b-[10px] -mt-2">
            {faq.answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-center text-gray-900 mb-16 tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8">
          {/* Left Column */}
          <div>
            {leftFaqs.map(faq => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightFaqs.map(faq => (
              <FaqItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
