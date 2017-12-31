const KMP = require('./KMP');
const randomStrings = require('./randomStrings');

const str = randomStrings(1, 10000000, 10000001)[0];

const kmp = new KMP('abc');

console.time('kmp');
console.log(kmp.search(str));
console.timeEnd('kmp');

console.time('indexOf');
console.log(str.indexOf('abc'));
console.timeEnd('indexOf');
