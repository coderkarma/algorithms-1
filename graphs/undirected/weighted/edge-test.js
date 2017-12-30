const Edge = require('./Edge');

let e;
//e = new Edge('3',3, 4);
//e = new Edge();
//e = new Edge(3.234234 , 4.23423, 5);

//e = new Edge(3, '5', 56);
//e = new Edge(3, 5, '35');
//e = new Edge(0, 0, Infinity);
//e = new Edge(-3, -4, -5);

e = new Edge(5, 5, 5);
console.log(e);

let v = e.either();
let w = e.other(v);
let weight = e.weight();

console.log(`v: ${v}, w: ${w}, weight: ${weight}`);

//console.log(e.other(234));




e = new Edge(0, 234, -Infinity);

console.log(e);

console.log(`v: ${e.either()}, w: ${e.other(e.either())}, weight: ${e.weight()}`);
