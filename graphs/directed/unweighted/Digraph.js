'use strict';

class Digraph {
    constructor(n) {
        if(!isFinite(n) || n < 0) {
            throw new Error('Illegal Argument Error: first arg must be non negative number');
        }
        this._V = n;
        this._E = 0;
        this._adj = new Array(n);
        this._indegree = new Array(n).fill(0);
        //initialize each vertex with its own container
        for(let i = 0; i < n; i++) {
            this._adj[i] = [];
        }
    }

    reverse() {
        const n = g.V();
        const reverse = new Digraph(n);
        for(let v = 0; v < n; v++) {
            for(let w of this._adj[v]) {
                reverse.addEdge(w, v);
            }
        }
        return reverse;
    }

    V() {
        return this._V;
    }

    E() {
        return this._E;
    }

    adj(v) {
        if(v < 0 || v >= this._V) {
            throw new Error(`Index Out Of Bounds Error: arg is ${v}`);
        }

        return this._adj[v][Symbol.iterator]();
    }

    outdegree(v) {
        return this._adj[v].length;
    }

    indegree(v) {
        return this._indegree[v];
    }

    addEdge(v, w) {
        //add directed edge v -> w
        this._adj[v].push(w);
        this._indegree[w]++;
        this._E++;
    }

    toString() {
        let str = '';
        const n = this._adj.length
        for(let v = 0; v < n; v++) {
            str += `${v}:`;
            for(let w of this._adj[v]) {
                str += ` ${w}`;
            }
            str += `\n`;
        }
        
        return str;
    }
}

module.exports = Digraph;
