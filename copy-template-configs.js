const fs = require('fs');
const path = require('path');

const filesToCopy = [
    'webpack.mix.js',
    'bootstrap.php',
    'config.php',
    'composer.php',
    'tailwind.config.js',
    'postcss.config.js',
    'package.json'
];

filesToCopy.forEach(file => {
    const src = path.resolve(__dirname, 'source/_template', file);
    const dest = path.resolve(__dirname, file);

    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`✔ copied ${file}`);
    } else {
        console.warn(`⚠ ${file} not found in _template`);
    }
});
