'use strict';

const Edge = require('./Edge');

class EdgeWeightedGraph {
    constructor(n) {
        this._validate(n);

        this._V = n;
        this._E = 0;
        this._adj = new Array(n);
        for(let i = 0; i < n; i++) {
            this._adj[i] = [];
        }
    }

    get V() {
        return this._V;
    }

    get E() {
        return this._E;
    }

    addEdge(e) {
        if(!(e instanceof Edge)) {
            throw new Error(`Illegal Argument Error: arg(${typeof e}, ${e}) must be Edge type`);
        }
        const v = e.either();
        const w = e.other(v);

        this._validate(v);
        this._validate(w);

        this._adj[v].push(e);
        this._adj[w].push(e);
        this._E++;
    }

    adj(v) {
        this._validate(v);

        return this._adj[v];
    }

    edges() {
        const edges = [];
        let selfLoop = 0;
        for(let v = 0; v < this._V; v++) {
            for(let e of this._adj[v]) {
                //edge v-w inserted twice after addEdge(v, w), so we need only one
                if(e.other(v) > v) {
                    edges.push(e);
                } else if(e.other(v) === v && (++selfLoop % 2 === 0)) {
                    edges.push(e);
                }
            }
        }

        return edges;
    }

    degree(v) {
        this._validate(v);

        return this._adj[v].length;
    }

    toString() {
        let str = '';

        for(let v = 0; v < this._V; v++) {
            str += `${v}:`;
            for(let e of this._adj[v]) {
                str += ` ${e.toString()}`;
            }
            str += `\n`;
        }

        return str;
    }

    _validate(v) {
        if(!Number.isSafeInteger(v)) {
            throw new Error(`Illegal Argument Error: v(${typeof v}, ${v}) must be non-negative integer`);
        }
        if(v < 0 || v >= this._V) {
            throw new Error(`Index Out Of bounds Error: v(${v})) must be between 0 <= v <= ${this._V - 1}`);
        }
    }
}

module.exports = EdgeWeightedGraph;
