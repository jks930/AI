const fs = require('fs');
const p = 'c:/itmc/ITMC_AI/Ai/src/components/InsightsStories.jsx';
let content = fs.readFileSync(p, 'utf8');

// Fix image paths
content = content.replace(/image: "\/images\//g, 'image: "/ai/images/');

// Fix theme colors
content = content.replace(/#F9A826/g, '#4c00ff');
content = content.replace(/bg-amber-500/g, 'bg-blue-600');
content = content.replace(/#2D4356/g, '#0f172a');
content = content.replace(/shadow-amber-500/g, 'shadow-[#4c00ff]');

fs.writeFileSync(p, content);
console.log('Fixed InsightsStories');
