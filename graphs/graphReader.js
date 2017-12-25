'use strict';

const fs = require('fs');
const Graph = require('./undirected/Graph');
//const EdgeWeightedGraph = require('./undirected/');
//const Digraph = require('./directed/');
//const EdgeWeightedDigraph = require('./directed/');


/*
    return promise factory that in turn return promise of nodejs async function
*/
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
    
    let input = '';
    return new Promise((resolve, reject) => {
        process.stdin.setEncoding('utf8');
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
    const currLine = 0;
    const sizeOfV = line[currLine++];
    const sizeOfE = line[currLine++];

    let g;
    if(!direction && !edge) {
        g = new Graph(sizeOfV);
    } else if(!direction && edge) {
//        g = new EdgeWeightedGraph(sizeOfV);
    } else if(direction && !edge) {
//        g = new Digraph(sizeOfV);
    } else {
//        g = new EdgeWeightedDigraph(sizeOfV);
    }

    for(let i = 0; i < sizeOfE; i++) {
        const line = lines[currLine++].split(' ');
        const v = line[0];
        const w = line[1];
        const e = line[2];
        
        if(!edge) {
            g.addEdge(v, w);
        } else if(!direction) {
//            g.addEdge(new Edge(v, w, e));
        } else {
//            g.addEdge(new DirectedEdge(v, w, e));
        }
    }

    return g;
}


module.exports = graphReader;
