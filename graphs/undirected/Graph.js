'use strict';

class Graph {
    constructor(n) {
        if(!isFinite(n) || n < 0) {
            throw new Error('Illegal Argument Error: first arg must be finite number');
        }

        this._adj = new Array(n);
        this._V = n;
        this._E = 0;

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

    addEdge(v, w) {
        this._validation(v);
        this._validation(w);

        this._adj[v].push(w);
        this._adj[w].push(v);
        this._E++;
    }

    degree(v) {
        this._validation(v);

        return this._adj[v].length;
    }

    //return iterator(it is also iterable) that iterates over adjacent vertices
    adj(v) {
        this._validation(v);

        return this._adj[v][Symbol.iterator]();
    }

    _validation(v) {
        if(Math.floor(v) !== v) {
            throw new Error(`Illegal Argument Error: vertex ${v} must be integer type`);
        }

        if(!isFinite(v) || v < 0 || v >= this._V) {
            throw new Error(`Index Out Of Bounds Error: vertex ${v} must be between 0 <= v <= ${this._V - 1}`);
        }
    }

    toString() {
        let str = '';

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
}

module.exports = Graph;
