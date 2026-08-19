const fs = require('fs');
const path = require('path');
const dir = 'c:/itmc/ITMC_AI/Ai/src/pages/products';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace('import React\nimport Header from "../../components/Header"; from "react";', 'import React from "react";\nimport Header from "../../components/Header";');
  fs.writeFileSync(p, content);
  console.log('Fixed syntax in ' + f);
});
