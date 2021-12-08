const AdmZip = require('adm-zip');

const zip = new AdmZip('./unzip-me.zip');

console.log('Starting extraction...');
zip.extractAllToAsync('./out', true, (err) => {
    if (err) console.err('Encountered error while unzipping', err);
    console.log('All files are now unzipped!')
})