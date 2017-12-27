'use strict';

class EdgeWeightedDigraph {
    constructor(n) {
        if(!Number.isSafeInteger(n) || n < 0) {
            throw new Error(`Illegal Argument Error: first arg (${typeof n}, ${n}) must be non-negative integer type`);
        }
        this._V = n;
        this._E = 0;
        this._adj = new Array(n);
        this._indegree = new Array(n).fill(0);

        for(let v = 0; v < n; v++) {
            this._adj[v] = [];
        }
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

    addEdge(e) {
        const v = e.from();
        const w = e.to();
        this._validate(v);
        this._validate(w);

        this._adj[v].push(e);
        this._indegree[w]++;
        this._E++;
    }

    indegree(v) {
        this._validate(v);

        return this._indegree[v];
    }

    outdegree(v) {
        this._validate(v);

        return this._adj[v].length;
    }

    edges() {
        const n = this._V;
        const edges = [];
        for(let v = 0; v < n; v++) {
            for(let e of this._adj[v]) {
                edges.push(e);
            }
        }
        return edges;
    }

    toString() {
        let str = `V: ${this._V}, E: ${this._E}\n`;
        const n = this._V;
        for(let v = 0; v < n; v++) {
            str += `${v}:`;
            for(let e of this._adj[v]) {
                str += ` ${e.toString()}`;
            }
            str += `\n`;
        }

        return str;
    }

    _validate(v) {
        if(!Number.isSafeInteger(v) || v < 0 || v >= this._V) {
            throw new Error(`Illegal Argument Error: (${typeof v}, ${v}) must be between 0 <= v <= ${this._V - 1}`);
        }
    }
}

module.exports = EdgeWeightedDigraph;
