'use strict';

const EdgeWeightedGraph = require('./EdgeWeightedGraph');
const IndexPQ = require('../../../sorting/IndexPQ');

class PrimMST {
    constructor(g) {
        if(!(g instanceof EdgeWeightedGraph)) {
            throw new Error(`Illegal Argument Error: first arg(${typeof g}) must be EdgeWeightedGraph type`);
        }

        this._visited = new Array(g.V);
        this._distTo = new Array(g.V).fill(Infinity);
        this._pathTo = new Array(g.V);

        const minComp = (x, y) => x - y;
        this._pq = new IndexPQ(g.V, minComp);

        const n = g.V;
        for(let v = 0; v < n; v++) {
            if(!this._visited[v]) {
                this._prim(g, v);
            }
        }
    }

    _prim(g, source) {
        this._distTo[source] = 0;
        this._pq.insert(source, this._distTo[source]);

        while(!this._pq.isEmpty()) {
            const v = this._pq.remove();
            this._scan(g, v);
        }
    }

    _scan(g, curr) {
        this._visited[curr] = true;

        for(let e of g.adj(curr)) {
            const next = e.other(curr);

            if(!this._visited[next] && this._distTo[next] > e.weight()) {
                this._distTo[next] = e.weight();
                this._pathTo[next] = e;

                if(this._pq.contains(next)) {
                    this._pq.changeKey(next, e.weight());
                } else {
                    this._pq.insert(next, e.weight());
                }
            }
        }
    }

    weight() {
        return this._distTo.reduce((acc, x) => acc + x);
    }

    mst() {
        const mst = [];

        for(let v = 0; v < this._pathTo.length; v++) {
            if(this._pathTo[v]) {
                mst.push(this._pathTo[v]);
            }
        }

        return mst;
    }
}

module.exports = PrimMST;
