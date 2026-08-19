const fs = require('fs');
const path = require('path');
const dir = path.join('c:/itmc/ITMC_AI/Ai/src/pages/products');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/<main className="pt-\[100px\]/g, '<main className="pt-0');
  content = content.replace(/ITMC-Banner-Video\.mp4/g, 'banner-v.mp4');
  fs.writeFileSync(p, content);
  console.log('Fixed layout and video in ' + f);
});
