const fs = require('fs');
const content = fs.readFileSync('c:/itmc/ITMC_AI/Ai/src/data/servicesData.js', 'utf8');
const match = content.match(/"image":\s*"(.*?)"/g);
if (match) {
  match.forEach(m => {
    let imgPath = m.split('"')[3]; // Get the path inside quotes
    if (imgPath.startsWith('/ai/')) {
        imgPath = imgPath.replace('/ai/', '');
    }
    const fullPath = 'c:/itmc/ITMC_AI/Ai/public/' + imgPath;
    if (!fs.existsSync(fullPath)) {
        console.log('Missing: ' + fullPath);
    }
  });
  console.log('Done checking images');
}
