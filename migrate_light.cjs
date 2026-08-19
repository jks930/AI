const fs = require('fs');
const path = require('path');

const srcDir = 'c:/itmc/ITMC_AI/digital/src/pages/products-and-platforms';
const destDir = 'c:/itmc/ITMC_AI/Ai/src/pages/products';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const srcPath = path.join(srcDir, f);
  const destPath = path.join(destDir, f);
  
  let content = fs.readFileSync(srcPath, 'utf8');

  // Replace orange colors with AI purple colors
  content = content.replace(/#f08e1e/g, '#4c00ff'); // Main orange to AI purple
  content = content.replace(/orange-600/g, 'blue-700');
  content = content.replace(/orange-500/g, 'blue-600');
  content = content.replace(/orange-400/g, 'blue-500');
  content = content.replace(/orange-100/g, 'blue-100');
  content = content.replace(/orange-50/g, 'blue-50');
  content = content.replace(/bg-orange/g, 'bg-blue');
  content = content.replace(/text-orange/g, 'text-blue');

  // Add the Header import if not present
  if (!content.includes('import Header')) {
    content = content.replace(/import React/, 'import React\nimport Header from "../../components/Header";');
  }

  // Inject the <Header forceSolid={true} /> component directly after SEO
  if (content.includes('<SEO')) {
    // find the closing of SEO component "/>"
    content = content.replace(/(<SEO[\s\S]*?\/>)/, '$1\n      <Header forceSolid={true} />\n      <main className="pt-[100px]">');
    
    // Also we need to close the <main> before the final div closes.
    // Replace the last </div> with </main></div>
    const lastDivIndex = content.lastIndexOf('</div>');
    if (lastDivIndex !== -1) {
      content = content.substring(0, lastDivIndex) + '</main>\n    </div>' + content.substring(lastDivIndex + 6);
    }
  }

  // Fix video paths (replace whatever video with banner-v.mp4)
  content = content.replace(/src="\/[^"]*\.mp4"/g, 'src="/ai/banner-v.mp4"');

  // Fix image paths for Vite base URL (e.g. src="/cyber1.webp" -> src="/ai/cyber1.webp")
  content = content.replace(/src="\/(?!ai\/)([^">]+)"/g, 'src="/ai/$1"');

  // If there are any banner-1.webp images, fall back to banner-erp.webp just in case it's missing
  content = content.replace(/banner-1\.webp/g, 'banner-erp.webp');
  
  // NOTE: We do NOT inject dark theme classes like bg-slate-900 or bg-[#0f172a] here!
  // We keep the original bg-white and text-gray-900 classes!

  fs.writeFileSync(destPath, content);
  console.log('Migrated (Light Theme): ' + f);
});

console.log('Migration complete!');
