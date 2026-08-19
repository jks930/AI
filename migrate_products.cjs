const fs = require('fs');
const path = require('path');

const dir = path.join('c:/itmc/ITMC_AI/Ai/src/pages/products');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Manage Imports
  if (!content.includes('import Header')) {
    content = content.replace('import React from "react";', 'import React, { useEffect } from "react";\nimport Header from "../../components/Header";\nimport Footer from "../../components/Footer";\nimport ContactUs from "../../components/ContactUs";');
  }

  // Remove old imports
  content = content.replace(/import ContactFormSection from ".*?";\n?/g, '');
  content = content.replace(/import InsightsStories from ".*?";\n?/g, '');

  // 2. Add useEffect for scroll to top if not exists
  if (!content.includes('window.scrollTo(0, 0)')) {
    content = content.replace(/(const \w+ = \(\) => {)/, `$1\n  useEffect(() => {\n    window.scrollTo(0, 0);\n  }, []);\n`);
  }

  // 3. Inject Header and main wrapper
  if (!content.includes('<Header />')) {
    content = content.replace(/(<SEO[\s\S]*?\/>)/, `$1\n      <Header />\n      <main className="pt-[100px] bg-slate-900">`); // Use dark bg for main wrapper
  }

  // 4. Update Contact Form and Insights
  content = content.replace(/<ContactFormSection \/>/g, '<ContactUs />');
  content = content.replace(/<InsightsStories \/>/g, '');

  // 5. Inject Footer and close main wrapper
  if (!content.includes('<Footer />')) {
    content = content.replace(/(\s*)(<\/div>\s*\);\s*};\s*export default)/, `$1</main>$1<Footer />$1$2`);
  }

  // 6. Color Theme Replacements (Orange to AI Purple/Blue)
  const replacements = {
    '#f08e1e': '#4c00ff',
    'orange-500': '#4c00ff',
    'orange-600': 'blue-700',
    'orange-400': 'cyan-400',
    'orange-100': 'blue-100',
    'orange-200': 'blue-200',
    'bg-[#003057]': 'bg-[#0f172a]',
    'text-[#003057]': 'text-white',
    'border-[#003057]': 'border-[#4c00ff]',
    'bg-white': 'bg-[#0f172a]',
    'bg-[#f8f9fa]': 'bg-[#0f172a]',
    'text-slate-800': 'text-white',
    'text-slate-700': 'text-slate-200',
    'text-gray-900': 'text-white',
    'text-gray-800': 'text-slate-200',
    'text-gray-700': 'text-slate-300',
    'text-gray-600': 'text-slate-300',
    'text-black': 'text-white',
    'border-gray-200': 'border-white/10',
    'border-gray-100': 'border-white/5',
    'bg-gray-50': 'bg-white/5',
    'bg-gray-100': 'bg-white/10',
    'shadow-sm': 'shadow-[0_0_15px_rgba(76,0,255,0.15)]',
    'shadow-lg': 'shadow-[0_0_20px_rgba(76,0,255,0.4)]',
    'shadow-xl': 'shadow-[0_0_30px_rgba(76,0,255,0.5)]',
    'hover:bg-white': 'hover:bg-white/10',
    'hover:text-black': 'hover:text-white',
  };

  Object.entries(replacements).forEach(([oldStr, newStr]) => {
    content = content.split(oldStr).join(newStr);
  });
  
  // Specific fix for the top level div background
  content = content.replace('className="font-sans text-white overflow-x-hidden"', 'className="font-sans bg-[#0f172a] text-white overflow-x-hidden selection:bg-[#4c00ff] selection:text-white"');

  fs.writeFileSync(filePath, content);
  console.log(`Migrated ${file}`);
});
