'use strict';

class Digraph {
    constructor(n) {
        if(!Number.isSafeInteger(n) || n < 0) {
            throw new Error('Illegal Argument Error: first arg must be non-negative integer number');
        }

        this._V = n;
        this._E = 0;
        this._adj = new Array(n);
        this._indegree = new Array(n).fill(0);
        //initialize each vertex with its own container
        for(let v = 0; v < n; v++) {
            this._adj[v] = [];
        }
    }

    reverse() {
        const n = this._V;
        const reverse = new Digraph(n);
        for(let v = 0; v < n; v++) {
            for(let w of this._adj[v]) {
                reverse.addEdge(w, v);
            }
        }
        return reverse;
    }

    get V() {
        return this._V;
    }

    get E() {
        return this._E;
    }

    adj(v) {
        this._validate(v);

        return this._adj[v][Symbol.iterator]();
    }

    outdegree(v) {
        this._validate(v);
        return this._adj[v].length;
    }

    indegree(v) {
        this._validate(v);
        return this._indegree[v];
    }

    addEdge(v, w) {
        this._validate(v);
        this._validate(w);

        //add directed edge v -> w
        this._adj[v].push(w);
        this._indegree[w]++;
        this._E++;
    }

    toString() {
        let str = '';
        str += `${this._V} vertices, ${this._E} edges\n`;
        const n = this._V;
        for(let v = 0; v < n; v++) {
            str += `${v}:`;
            for(let w of this._adj[v]) {
                str += ` ${w}`;
            }
            str += `\n`;
        }
        
        return str;
    }

    _validate(v) {
        if(!Number.isSafeInteger(v) || v < 0 || v >= this._V) {
            throw new Error(`Illegal Argument Error: ${v} must be between 0 <= v <= ${this._V - 1}`);
        }
    }
}

module.exports = Digraph;
