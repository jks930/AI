const fs = require('fs');
const path = require('path');

const productDetails = {
  'pulse-ai': { title: 'Pulse.ai', subtitle: 'AI-Powered Business Process Automation', desc: 'Transform business operations with Pulse AI, an AI-powered platform that automates workflows, improves productivity, and helps teams make faster decisions.' },
  'insurance-data-hub': { title: 'Insurance Data Hub', subtitle: 'Unified Insurance Data Management', desc: 'Centralize policy, claims, and customer data with an Insurance Data Hub that improves accuracy, speeds analytics, and supports better business decisions.' },
  'iip': { title: 'Integrated Insurance Platform', subtitle: 'End-to-End Insurance Lifecycle', desc: 'Streamline the entire insurance lifecycle from policy administration to claims management with our seamless Integrated Insurance Platform.' },
  'smarthr': { title: 'SmartHR', subtitle: 'Intelligent Human Resources', desc: 'Empower your workforce with AI-driven HR solutions that automate onboarding, payroll, and performance tracking.' },
  'smartpay': { title: 'SmartPay', subtitle: 'Next-Gen Payment Solutions', desc: 'A secure, scalable, and intelligent payment gateway designed to handle global transactions with real-time fraud detection.' },
  'pulse-nerve': { title: 'Pulse.nerve', subtitle: 'Core Banking & Financial Intelligence', desc: 'Advanced analytics and processing platform tailored for modern financial institutions to drive growth and compliance.' },
  'digital-bpaas': { title: 'Digital BPaaS', subtitle: 'Business Process as a Service', desc: 'Leverage our cloud-native BPaaS solutions to outsource complex business processes and achieve unprecedented operational efficiency.' },
  'sequre': { title: 'Sequre', subtitle: 'Enterprise Cybersecurity Suite', desc: 'Protect your digital assets with Zero-Trust architecture, proactive threat hunting, and AI-driven anomaly detection.' },
  'pulse-retail-ai': { title: 'Pulse.Retail.ai', subtitle: 'Smart Retail Analytics', desc: 'Revolutionize customer experiences with predictive inventory management, personalized recommendations, and dynamic pricing.' },
  'resume-builder': { title: 'Resume Builder', subtitle: 'AI-Powered Talent Profiling', desc: 'Help professionals craft standout resumes using generative AI, while providing enterprises with structured talent data.' },
  'pms': { title: 'Property Management', subtitle: 'Smart Real Estate Operations', desc: 'Automate tenant screening, rent collection, and maintenance requests with our intelligent Property Management System.' },
  'hrms': { title: 'HRMS', subtitle: 'Human Resource Management System', desc: 'A comprehensive suite for managing employee lifecycles, benefits, and compliance across global teams.' },
  'crm': { title: 'CRM Suite', subtitle: 'Customer Relationship Management', desc: 'Build stronger customer relationships with AI-driven insights, automated sales pipelines, and omnichannel support.' },
  'ats': { title: 'ATS', subtitle: 'Applicant Tracking System', desc: 'Streamline recruitment with AI-powered resume parsing, automated interview scheduling, and intelligent candidate matching.' },
  'casacab': { title: 'CasaCab', subtitle: 'Intelligent Fleet Management', desc: 'Optimize dispatching, route planning, and driver safety with our AI-driven fleet and mobility management platform.' }
};

Object.entries(productDetails).forEach(([id, data]) => {
  const componentName = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  
  const content = `import React from "react";
import ProductTemplate from "../../components/ProductTemplate";

const ${componentName} = () => {
  const productData = {
    title: "${data.title}",
    subtitle: "${data.subtitle}",
    heroDescription: "${data.desc}",
    aboutTitle: "Transforming Complexity into Clarity",
    aboutText: "ITMC AI introduces ${data.title}, an advanced platform that consolidates fragmented workflows into a centralized, machine-learning-ready resource. Designed to fuel predictive models and AI agents, our platform delivers high-accuracy insights to accelerate decision-making, streamline operations, and reduce costs.",
    aboutList: [
      "Prebuilt AI models for deep analytics",
      "Real-time data processing and anomaly detection",
      "Automated routing and intelligent workflows",
      "Seamless integration with legacy systems"
    ],
    capabilitiesTitle: "${data.title} Capabilities",
    capabilities: [
      {
        title: "Intelligent Automation",
        desc: "Automatically map, cleanse, and structure unstructured data into actionable intelligence using advanced NLP."
      },
      {
        title: "Predictive Analytics",
        desc: "Forecast trends and identify at-risk scenarios before they escalate, using our pre-trained machine learning models."
      },
      {
        title: "Zero-Trust Security",
        desc: "Military-grade encryption and dynamic data masking ensure that your sensitive business data remains secure at all times."
      }
    ],
    barriersTitle: "Why Choose ${data.title}",
    barriers: [
      "Accelerates decision-making with AI insights",
      "Scales operations without proportional cost increase",
      "Improves data quality and automation outcomes",
      "Reduces infrastructure overhead",
      "Ensures continuous security and compliance"
    ]
  };

  return <ProductTemplate data={productData} />;
};

export default ${componentName};
`;

  fs.writeFileSync(path.join('c:/itmc/ITMC_AI/Ai/src/pages/products', id + '.jsx'), content);
});
console.log('All 15 Professional Pages Generated!');
