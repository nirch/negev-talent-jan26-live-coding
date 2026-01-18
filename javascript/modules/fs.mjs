
import fs from 'fs';

const data = "Hello FS!"
fs.writeFileSync('output.txt', data);

console.log('success');