const fs = require('fs');
const path = require('path');
const dir = path.join('c:/itmc/ITMC_AI/Ai/src/pages/products');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  // Match src="/something" and replace with src="/ai/something"
  content = content.replace(/src="\/(?!ai\/)([^">]+)"/g, 'src="/ai/$1"');
  fs.writeFileSync(p, content);
  console.log('Fixed paths in ' + f);
});
