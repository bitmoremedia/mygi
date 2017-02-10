const fs = require('fs-extra');

console.log('Emptying existing "public" directory');
fs.emptyDirSync(`./public`);

console.log('Copying from "_public" to "public" directory');
fs.copySync(`./_public`, `./public`);
