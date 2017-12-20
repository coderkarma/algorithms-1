'use strict';

/*
    this is private helper function
*/
function validation(v) {
    if(v < 0 || v >= this._V) {
        throw new Error(`Index Out of Bounds Error: value or argument is ${v}`);
    }   
}

class Graph {
    constructor(n) {
        if(!isFinite(n)) {
            throw new Error('type of argument must be finite number');
        }
        if(n < 0) {
            throw new Error('value of argument must be greater than 0');
        }

        this._adj = new Array(n);
        for(let i = 0; i < n; i++) {
            this._adj[i] = [];
        }
        this._V = n;
        this._E = 0;
    }

    get V() {
        return this._V;
    }

    get E() {
        return this._E;
    }

    addEdge(v, w) {
        validation.call(this, v);
        validation.call(this, w);

        this._adj[v].push(w);
        this._adj[w].push(v);
        this._E++;
    }

    degree(v) {
        validation.call(this, v);

        return this._adj[v].length;
    }

    adj(v) {
        validation.call(this, v);

        return this._adj[v];
    }

    toString() {
        let str = `V: ${this._V}, E: ${this._E}\n`;
        this._adj.forEach((v, i) => {
            str += `${i} :`;
            v.forEach((w) => {
                str += ` ${w}`;
            });
            str += `\n`;
        });

        return str;
    }
}


module.exports = Graph;
