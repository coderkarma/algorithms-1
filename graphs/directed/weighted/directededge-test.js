const DirectedEdge = require('./DirectedEdge');

let e;

//e = new DirectedEdge();
//e = new DirectedEdge('1', '2', '3');
//e = new DirectedEdge('1', '2', NaN);
//e = new DirectedEdge('1', '2', Infinity);
//e = new DirectedEdge(1.123, '2', -Infinity);
e = new DirectedEdge(1, 3 , -Infinity);

console.log(e);

console.log(e.to());
console.log(e.from());
console.log(e.weight());
console.log(e.toString());
