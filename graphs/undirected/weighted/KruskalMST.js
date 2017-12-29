'use strict';

const EdgeWeightedGraph = require('./EdgeWeightedGraph');
const UF = require('../../../fundamentals/union-find/UF');
const PQ = require('../../../sorting/PQ');

class KruskalMST {
    constructor(g) {
        if(!(g instanceof EdgeWeightedGraph)) {
            throw new Error(`Illegal Argument Error: first arg(${typeof g}) must be EdgeWeightedGraph type`);
        }

        this._mst = [];
        this._weight = 0;
        
        const minComp = (x, y) => x.weight() - y.weight();
        const pq = new PQ(g.V, minComp);
        for(let e of g.edges()) {
            pq.insert(e)
        }

        const uf = new UF(g.V); 
        while(!pq.isEmpty() && this._mst.length < g.V - 1) {
            const e = pq.remove();
            const v = e.either();
            const w = e.other(v);

            if(!uf.connected(v, w)) {
                uf.union(v, w);
                this._weight += e.weight();
                this._mst.push(e);
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

module.exports = KruskalMST;
