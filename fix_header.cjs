const fs = require('fs');
const path = require('path');
const dir = path.join('c:/itmc/ITMC_AI/Ai/src/pages/products');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/<Header \/>/g, '<Header forceSolid={true} />');
  content = content.replace(/<main className="pt-0/g, '<main className="pt-[100px]');
  fs.writeFileSync(p, content);
  console.log('Fixed header in ' + f);
});
