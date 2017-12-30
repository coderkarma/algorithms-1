'use strict';

const EdgeWeightedDigraph = require('./EdgeWeightedDigraph');
const DirectedEdge = require('./DirectedEdge');
const AcyclicLP = require('./AcyclicLP');

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    input += data;
});

process.stdin.on('end', () => {
    let currLine = 0;
    const lines = input.trim().split('\n');
    const n = parseInt(lines[currLine++]);
    const graph = new EdgeWeightedDigraph(2*n + 2);
    const source = 2*n;
    const sink = 2*n + 1;

    for(let i = 0; i < n; i++) {
        const line = lines[currLine++].trim().split(/\s+/);
        const duration = parseFloat(line[0]);
        graph.addEdge(new DirectedEdge(source, i, 0));
        graph.addEdge(new DirectedEdge(i, i + n, duration));
        graph.addEdge(new DirectedEdge(i + n, sink, 0));

        const m = parseInt(line[1]);
        for(let j = 0; j < m; j++) {
            const dep = parseInt(line[j + 2]);
            graph.addEdge(new DirectedEdge(i + n, dep, 0));
        }
    }

    const lp = new AcyclicLP(graph, source);

    console.log(`finish time: ${lp.distTo(sink)}`);
    for(let i = 0; i < n; i++) {
        console.log(`job ${i}: start-time(${lp.distTo(i)}) finish-time(${lp.distTo(i + n)})`);
    }
});
