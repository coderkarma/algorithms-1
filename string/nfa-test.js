const NFA = require('./NFA');

let nfa = new NFA('(A*B|AC)D');
console.log(nfa.recognizes('AAAABD'));

nfa = new NFA('(A*B|AC)D');
console.log(nfa.recognizes('AAAAC'));

nfa = new NFA('(a|(bc)*d)*');
console.log(nfa.recognizes('abcbcd'));

nfa = new NFA('(a|(bc)*d)*');
console.log(nfa.recognizes('abcbcbcdaaaabcbcdaaaddd'));





nfa = new NFA('(a|aa)*b');
const str = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac';

console.time('nfa');
console.log(nfa.recognizes(str));
console.timeEnd('nfa');


console.time('String.search(regexp)');
console.log(str.search(/(a|aa)*b/));
console.timeEnd('String.search(regexp)');
