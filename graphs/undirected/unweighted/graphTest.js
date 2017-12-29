const Graph = require('./Graph');

//const g = new Graph(-1);
//const g = new Graph(NaN);
//const g = new Graph(Infinity);
//const g = new Graph({});
//const g = new Graph('asdf');

const g = new Graph(13);


//g.addEdge(null, 1);
//g.addEdge(undefined);
//g.addEdge();
//g.addEdge(3, {});
//g.addEdge(-1);
//g.addEdge(4.33, 8);
//g.addEdge(0.000 , 9.00000);


g.addEdge(0, 5);
g.addEdge(4,3);
g.addEdge(0,1);
g.addEdge(9,12);
g.addEdge(6,4);
g.addEdge(5,4);
g.addEdge(0,2);
g.addEdge(11,12);
g.addEdge(9,10);
g.addEdge(0,6);
g.addEdge(7,8);
g.addEdge(9,11);
g.addEdge(5,3);

console.log('number of vertices: ' + g.V);
console.log('number of edges: ' + g.E);
console.log(g.toString());

let str = '';
for(let v = 0; v < g.V; v++) {
    str += `${v}:`;
    for(let w of g.adj(v)) {
        str += ` ${w}`;
    }

    str += `\n`;
}

console.log('\n==============iterator test==========');
console.log(str);


console.log('\n=========== degree test============');
for(let v = 0; v < g.V; v++) {
    console.log(`degree of ${v}: ${g.degree(v)}`);
}
