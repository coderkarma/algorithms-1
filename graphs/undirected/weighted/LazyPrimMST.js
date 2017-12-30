'use strict';

const EdgeWeightedGraph = require('./EdgeWeightedGraph');
const PQ = require('../../../sorting/PQ');

class LazyPrimMST {
    constructor(g) {
        if(!(g instanceof EdgeWeightedGraph)) {
            throw new Error(`Illegal Argument Error: g(${typeof g}) must be EdgeWeightedGraph type`);
        }

        this._visited = new Array(g.V);
        this._mst = [];
        this._weight = 0;
        
        const minComp = (x, y) => x.weight() - y.weight();
        this._pq = new PQ(g.V, minComp);

        for(let v = 0; v < g.V; v++) {
            if(!this._visited[v]) {
                this._prim(g, v);
            }
        }
    }

    _prim(g, curr) {
        this._scan(g, curr);

        while(!this._pq.isEmpty()) {
            const e = this._pq.remove();
            const v = e.either();
            const w = e.other(v);

            if(this._visited[v] && this._visited[w]) {
                continue;
            }

            this._mst.push(e);
            this._weight += e.weight();

            if(!this._visited[v]) {
                this._scan(g, v);
            } else {
                this._scan(g, w);
            }
        }
    }

    _scan(g, curr) {
        this._visited[curr] = true;

        for(let e of g.adj(curr)) {
            if(!this._visited[e.other(curr)]) {
                this._pq.insert(e);
            }
        }
    }

    mst() {
        return this._mst;
    }

    weight() {
        return this._weight;
    }
}

module.exports = LazyPrimMST;
