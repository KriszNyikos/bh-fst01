const fs = require('fs');

// note: sensitive to cwd
// const contents = fs.readFileSync('./readme.txt')
const contents = fs.readFileSync('./readme.txt', 'utf8')

console.log(contents);
console.log(typeof contents);