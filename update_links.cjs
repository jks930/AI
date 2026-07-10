const fs = require('fs');

// --- Fix Header.jsx ---
let header = fs.readFileSync('c:/itmc/Ai/src/components/Header.jsx', 'utf8');

// Fix the logo
header = header.replace('src="/logoai.svg"', 'src="/ai/logoai.svg"');

// Fix regular hash links and root link
header = header.replace(/href="\/(#[^"]*)"/g, 'href="/ai/$1"');
header = header.replace(/href="\/"/g, 'href="/ai/"');

// Fix industry and technology links
header = header.replace(/href="\/industry\//g, 'href="/ai/industry/');
header = header.replace(/href="\/technology\//g, 'href="/ai/technology/');

// Map of service names in the UI to slugs
const serviceMappings = {
  'UI/UX': 'ui-ux',
  'Wireframing': 'wireframing',
  'CRM': 'crm',
  'MVP': 'mvp',
  'QA & Testing': 'qa-testing',
  'Android': 'android',
  'iOS': 'ios',
  'Cross Platform': 'cross-platform',
  'Web App': 'web-app',
  'Website': 'website',
  'Machine Learning': 'machine-learning',
  'Gen AI': 'gen-ai',
  'AI Agent': 'ai-agent-chatbot',
  'AI Chatbot': 'ai-agent-chatbot',
  'AI Agent & Chatbot': 'ai-agent-chatbot',
  'NLP': 'nlp-metaverse',
  'Metaverse': 'nlp-metaverse',
  'NLP & Metaverse': 'nlp-metaverse',
  'Digital Product Design': 'ui-ux',
  'Software Development': 'crm',
  'Mobile App Development': 'android',
  'Artificial Intelligence': 'machine-learning',
  'View all': 'ui-ux'
};

// Replace all /service-details with the specific slug
Object.keys(serviceMappings).forEach(name => {
  // Regex to match <a href="/service-details" ...> ... name ... </a>
  // It's a bit tricky because the name might be nested in elements.
  // Instead, let's just replace all instances of href="/service-details" and let the user click them.
  // Wait, if I replace all href="/service-details", they will all point to the same thing unless I differentiate.
});

// Let's do line-by-line replacement for /service-details
let lines = header.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('href="/service-details"')) {
    let matchedSlug = 'ui-ux'; // default
    for (let name of Object.keys(serviceMappings)) {
      if (lines[i].includes(name) || (lines[i+1] && lines[i+1].includes(name))) {
        matchedSlug = serviceMappings[name];
        break;
      }
    }
    lines[i] = lines[i].replace('href="/service-details"', `href="/ai/service/${matchedSlug}"`);
  }
}
header = lines.join('\n');

fs.writeFileSync('c:/itmc/Ai/src/components/Header.jsx', header);
console.log('Header.jsx updated.');

// --- Update servicesData.js ---
let servicesDataContent = fs.readFileSync('c:/itmc/Ai/src/data/servicesData.js', 'utf8');

const newServices = [
  { slug: 'ui-ux', title: 'UI/UX Design' },
  { slug: 'wireframing', title: 'Wireframing & Prototyping' },
  { slug: 'crm', title: 'CRM Development' },
  { slug: 'mvp', title: 'MVP Development' },
  { slug: 'qa-testing', title: 'QA & Testing' },
  { slug: 'android', title: 'Android App Development' },
  { slug: 'ios', title: 'iOS App Development' },
  { slug: 'cross-platform', title: 'Cross Platform Development' },
  { slug: 'web-app', title: 'Web Application Development' },
  { slug: 'website', title: 'Website Development' },
  { slug: 'machine-learning', title: 'Machine Learning Solutions' },
  { slug: 'gen-ai', title: 'Generative AI Solutions' },
  { slug: 'ai-agent-chatbot', title: 'AI Agent & Chatbot' },
  { slug: 'nlp-metaverse', title: 'NLP & Metaverse Solutions' }
];

let newDataString = newServices.map(s => `
  {
    slug: "${s.slug}",
    category: "Services",
    title: "${s.title}",
    description: "Expert ${s.title} tailored to your business needs, delivering robust and scalable solutions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    heroTitlePrefix: "Expert",
    heroTitleHighlight: "${s.title}",
    heroDescription: "We provide comprehensive ${s.title} to help your business achieve its digital transformation goals efficiently.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    overviewTitle: "Transforming Your Ideas into Reality",
    overviewText1: "Our team specializes in ${s.title}, bringing years of experience and a track record of successful project deliveries.",
    overviewText2: "We work closely with you to ensure that every aspect of the project aligns with your strategic objectives.",
    featuresList: [
      "Customized Strategy",
      "Agile Methodology",
      "Quality Assurance",
      "Post-Launch Support"
    ],
    featureCards: [
      { title: "High Performance", description: "Optimized for maximum speed and efficiency." },
      { title: "Secure & Private", description: "Built with enterprise-grade security." },
      { title: "Custom Models", description: "Tailored specifically for your requirements." },
      { title: "Scalable ROI", description: "Designed to grow alongside your business." }
    ]
  }`).join(',');

// Insert the new services into the servicesData array
servicesDataContent = servicesDataContent.replace(
  /\];\s*export const transformData/g,
  `,${newDataString}\n];\n\nexport const transformData`
);

fs.writeFileSync('c:/itmc/Ai/src/data/servicesData.js', servicesDataContent);
console.log('servicesData.js updated.');
