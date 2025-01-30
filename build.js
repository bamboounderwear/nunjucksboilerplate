const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

// Ensure the dist directory exists
const distDir = 'dist';
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Load page data
const pages = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));

// Configure Nunjucks
nunjucks.configure('src/views', { autoescape: true });

pages.forEach(page => {
    try {
        const output = nunjucks.render(`${page.template}.njk`, page);
        const outputPath = path.join(distDir, `${page.slug}.html`);
        
        fs.writeFileSync(outputPath, output);
        console.log(`Generated: ${outputPath}`);
    } catch (error) {
        console.error(`Error generating ${page.slug}.html:`, error);
    }
});

console.log('Build complete!');
