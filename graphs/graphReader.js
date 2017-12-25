'use strict';

const fs = require('fs');
const Graph = require('./undirected/unweighted/Graph');
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


function graphReader(directed, weighted, filename) {
    if(filename) {
        const fsPromiseFactory = asyncFnToPromiseFactory(fs.readFile);
        const fsPromise = fsPromiseFactory(filename, 'utf8');
        
        return fsPromise.then((g) => {
            return buildGraph(g, directed, weighted);
        });
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
    }).then((g) => {
        return buildGraph(g, directed, weighted);
    });
}

function buildGraph(input, directed, weighted) {
    const lines = input.trim().split('\n');
    let currLine = 0;
    const sizeOfV = parseInt(lines[currLine++]);
    const sizeOfE = parseInt(lines[currLine++]);

    let g;
    if(!directed && !weighted) {
        g = new Graph(sizeOfV);
    } else if(!directed && weighted) {
//        g = new EdgeWeightedGraph(sizeOfV);
    } else if(directed && !weighted) {
//        g = new Digraph(sizeOfV);
    } else {
//        g = new EdgeWeightedDigraph(sizeOfV);
    }

    for(let i = 0; i < sizeOfE; i++) {
        const line = lines[currLine++].split(' ');
        const v = parseInt(line[0]);
        const w = parseInt(line[1]);
        const e = parseFloat(line[2]);
        
        if(!weighted) {
            g.addEdge(v, w);
        } else if(!directed) {
//            g.addEdge(new Edge(v, w, e));
        } else {
//            g.addEdge(new DirectedEdge(v, w, e));
        }
    }

    return g;
}


module.exports = graphReader;
