const fs = require('fs-extra');

console.log('*** cleanPublicDirectory START ***');

console.log('empty existing "public" directory');
fs.emptyDirSync(`./public`);

console.log('copy from "_public" to "public" directory');
fs.copySync(`./_public`, `./public`);

console.log('*** cleanPublicDirectory END ***');
