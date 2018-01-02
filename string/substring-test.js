const KMP = require('./KMP');
const BoyerMoore = require('./BoyerMoore');
const RabinKarp = require('./RabinKarp');
const randomStrings = require('./randomStrings');

const str = randomStrings(1, 10000000, 10000001)[0];

const kmp = new KMP('abc');
const bm = new BoyerMoore('abc');
const rk = new RabinKarp('abc');

console.time('kmp');
console.log(kmp.search(str));
console.timeEnd('kmp');

console.time('boyer-moore');
console.log(bm.search(str));
console.timeEnd('boyer-moore');

console.time('rabin-karp');
console.log(rk.search(str));
console.timeEnd('rabin-karp');

console.time('indexOf');
console.log(str.indexOf('abc'));
console.timeEnd('indexOf');
