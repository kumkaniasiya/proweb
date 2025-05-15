// scripts/postbuild.js
const fs = require('fs');
const html = fs.readFileSync('./dist/index.html', 'utf8');
const updated = html.replace(
  '<script type="module" src="/src/main.tsx"></script>',
  '<script type="module" src="/assets/main.js"></script>'
);
fs.writeFileSync('./dist/index.html', updated);