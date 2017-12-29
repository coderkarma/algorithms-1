'use strict';

const Queue = require('../../fundamentals/queue/Queue');
const Digraph = require('./unweighted/Digraph');

class BreadthFirstDirectedPaths {
    constructor(g, ...sources) {
        if(!(g instanceof Digraph)) {
            throw new Error('Illegal Argument Error: first arg must be Digraph type');
        }
        if(sources[0][Symbol.iterator]) {
            sources = sources[0][Symbol.iterator]();
        }

        this._visited = new Array(g.V).fill(false);
        this._pathTo = new Array(g.V);
        this._distTo = new Array(g.V).fill(Infinity);


        const q = new Queue();
        for(let source of sources) {
            this._validate(source);
            this._visited[source] = true;
            this._distTo[source] = 0;
            q.enqueue(source);
        }

        while(q.size()) {
            const curr = q.dequeue();

            for(let next of g.adj(curr)) {
                if(!this._visited[next]) {
                    this._pathTo[next] = curr;
                    this._distTo[next] = this._distTo[curr] + 1;
                    this._visited[next] = true;
                    q.enqueue(next);
                }
            }
        }
    }

    hasPathTo(v) {
        this._validate(v);
        return this._visited[v]; 
    }

    pathTo(v) {
        if(!this.hasPathTo(v)) {
            return undefined;
        }

        const path = [];

        let curr;
        for(curr = v; this._distTo[curr] !== 0; curr = this._pathTo[curr]) {
            path.push(curr);
        }
        path.push(curr);

        return path.reverse();
    }

    distTo(v) {
        this._validate(v);

        return this._distTo[v];
    }

    _validate(v) {
        if(!Number.isSafeInteger(v)) {
            throw new Error(`Illegal Argument Error: arg ${typeof v} must be integer type`);
        }
        if(v < 0 || v >= this._visited.length) {
            throw new Error(`Index Out Of Bounds Error: ${v} must be between 0 <= v <= ${this._visited.length - 1}`);
        }
    }
}

module.exports = BreadthFirstDirectedPaths;
