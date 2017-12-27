'use strict';

const Digraph = require('./unweighted/Digraph');

class NonrecursiveDirectedDFS {
    constructor(g, ...sources) {
        if(!(g instanceof Digraph)) {
            throw new Error('Illegal Argument Error: first arg must be Digraph type');
        }

        if(sources[0][Symbol.iterator]) {
            sources = sources[0][Symbol.iterator]();
        }

        this._visited = new Array(g.V);
        this._reachableV = [];

        for(let source of sources) {
            if(!this._visited[source]) {
                this._dfs(g, source);
            }
        }
    }

    _dfs(g, source) {
        this._validate(source);

        const n = g.V;
        const adj = new Array(n);
        for(let v = 0; v < n; v++) {
            adj[v] = g.adj(v);
        }

        const stack = [];
        stack.push(source);
        this._visited[source] = true;
        this._reachableV.push(source);

        while(stack.length) {
            const curr = stack[stack.length - 1];

            const next = adj[curr].next();
            if(next.done) {
                stack.pop();
            } else if(!this._visited[next.value]) {
                stack.push(next.value);
                this._visited[next.value] = true;
                this._reachableV.push(next.value);
            }
        }
    }

    visited(v) {
        this._validate(v);

        return this._visited[v];
    }

    /*
        return the collection of visited vertices form the source vertex
    */
    reachableV() {
        return this._reachableV;
    }

    _validate(v) {
        if(!Number.isSafeInteger(v)) {
            throw new Error(`Illegal Argument Error: (${typeof v} v) must be integer type`);
        }
        if(v < 0 || v >= this._visited.length) {
            throw new Error(`Index Out Of Bound Error: ${v} must be between 0 <= v <= ${this._visited.length - 1}`);
        }
    }
}

module.exports = NonrecursiveDirectedDFS;
