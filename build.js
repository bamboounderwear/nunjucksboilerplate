const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

const pages = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));
nunjucks.configure('src/views', { autoescape: true });

pages.forEach(page => {
    const output = nunjucks.render(`${page.template}.njk`, page);
    fs.writeFileSync(path.join('dist', `${page.slug}.html`), output);
});

console.log('Build complete!');
