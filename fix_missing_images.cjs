const fs = require('fs');
const path = require('path');

// 1. Fix servicesData.js
const p1 = 'c:/itmc/ITMC_AI/Ai/src/data/servicesData.js';
let c1 = fs.readFileSync(p1, 'utf8');
c1 = c1.replace(/generative-ai\.jpeg/g, 'artificial-intelligence.jpeg');
fs.writeFileSync(p1, c1);
console.log('Fixed servicesData.js');

// 2. Fix product files
const dir = 'c:/itmc/ITMC_AI/Ai/src/pages/products';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  let original = content;
  
  // Remove bdb-logo and thoughtspot-logo img tags completely
  content = content.replace(/<img[^>]*src="\/ai\/bdb-logo\.png"[^>]*>\s*(?:\{" "\})?/g, '');
  content = content.replace(/<img[^>]*src="\/ai\/thoughtspot-logo\.png"[^>]*>\s*(?:\{" "\})?/g, '');

  // Remove comment tags that might be left behind: {/* Replace with actual path */}
  content = content.replace(/\{\/\* Replace with actual path \*\/\}/g, '');

  if (original !== content) {
    fs.writeFileSync(p, content);
    console.log('Fixed missing logos in ' + f);
  }
});
