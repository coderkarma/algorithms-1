'use strict';

const fs = require('fs');


function asyncFnToPromiseFactory(asyncFn) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            asyncFn(...args, (err, ...results) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(results.length > 1 ? results : results[0]);
                }
            });
        });
    }
}


function graphReader(filename) {
    if(filename) {
        const fsPromiseFactory = asynFnToPromiseFactory(fs);
        const fsPromise = fsPromiseFactory(filename, 'utf8');
        
        return fsPromise.then(buildGraph);
    }
        
    return new Promise((resolve, reject) => {
        process.stdin.on('data', (data) => {
            input += data;
        });

        process.stdin.on('end', () => {
            resolve(input);
        });
    }).then(buildGraph);
}

function buildGraph(input) {
    const lines = input.trim().split('\n');
    const n = line[0];

    let g;
    if(!direction && !edge) {
        g = new Graph(n);
    } else if(!direction && edge) {
        g = new EdgeWeightedGraph(n);
    } else if(direction && !edge) {
        g = new Digraph(n);
    } else {
        g = new EdgeWeightedDigraph(n);
    }

    for(let i = ) {
        const line = lines[i].split(' ');
        const v = line[0];
        const w = line[1];
        const e = line[2];
        
        if(!direction && !edge) {
            g.addEdge(v, w);
        } else if(!direction && edge) {
            g.addEdge(new Edge(v, w, e));
        } else if(direction && !edge) {
            g.addEdge(v, w);
        } else {
            g.addEdge(new DirectedEdge(v, w, e));
        }
    }

    return g;
}


module.exports = graphReader;
