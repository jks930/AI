const fs = require('fs');
const path = require('path');

const srcDir = 'c:/itmc/ITMC_AI/Ai/src';
const publicDir = 'c:/itmc/ITMC_AI/Ai/public';

function scanFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      scanFiles(filePath, fileList);
    } else if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allFiles = scanFiles(srcDir);
const missingImages = [];
const possibleLoops = [];

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // 1. Check for image src matches
  // Matches src="/ai/..." or src="/..." or image: "/..."
  const imgRegex = /(?:src|image|bgImage|img)["']:\s*["']([^"']+\.(?:png|jpg|jpeg|webp|svg|gif|mp4))["']/gi;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    let imgPath = match[1];
    
    // Remove /ai/ prefix if present since public folder is root
    if (imgPath.startsWith('/ai/')) {
      imgPath = imgPath.substring(4); // removes '/ai/'
    } else if (imgPath.startsWith('/')) {
      imgPath = imgPath.substring(1); // removes '/'
    }
    
    // Check if it exists in public
    const fullPath = path.join(publicDir, imgPath);
    if (!fs.existsSync(fullPath)) {
      // Don't flag external URLs
      if (!imgPath.startsWith('http')) {
        missingImages.push(`Missing: ${match[1]} in ${path.basename(file)}`);
      }
    }
  }

  // Also check standard HTML img tags
  const imgTagRegex = /src=["']([^"']+\.(?:png|jpg|jpeg|webp|svg|gif|mp4))["']/gi;
  while ((match = imgTagRegex.exec(content)) !== null) {
    let imgPath = match[1];
    if (imgPath.startsWith('/ai/')) {
      imgPath = imgPath.substring(4);
    } else if (imgPath.startsWith('/')) {
      imgPath = imgPath.substring(1);
    }
    const fullPath = path.join(publicDir, imgPath);
    if (!fs.existsSync(fullPath) && !imgPath.startsWith('http')) {
      missingImages.push(`Missing: ${match[1]} in ${path.basename(file)}`);
    }
  }

  // 2. Check for potential loop/state failures
  // E.g., setter called directly in render (setSomething(val)) not wrapped in () =>
  const setStateRegex = /set[A-Z]\w*\([^=]+?\)(?!\s*=>)(?!\s*\})/g;
  
  // Checking for maps without keys is a bit hard with regex, we can skip complex ast parsing for now
  
});

// Remove duplicates
const uniqueMissingImages = [...new Set(missingImages)];
console.log('--- MISSING IMAGES ---');
if (uniqueMissingImages.length > 0) {
  uniqueMissingImages.forEach(img => console.log(img));
} else {
  console.log('No missing images found!');
}

console.log('\n--- SCAN COMPLETE ---');
