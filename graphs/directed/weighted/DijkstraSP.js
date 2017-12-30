'use strict';

const EdgeWeightedDigraph = require('./EdgeWeightedDigraph');
const IndexPQ = require('../../../sorting/IndexPQ');

class DijkstraSP {
    constructor(g, source) {
        if(!(g instanceof EdgeWeightedDigraph)) {
            throw new Error(`Illegal Argument Error: first arg(${typeof g}) must be EdgeWeightedDigraph type`);
        }
        if(!Number.isSafeInteger(source)) {
            throw new Error(`Illegal Argument Error: second arg(${typeof source}) must be non-negative integer`);
        }
        if(source < 0 || source >= g.V) {
            throw new Error(`Index Out Of Bounds Error: second arg(${source}) must be between 0 <= v <= ${g.V - 1}`);
        }

        this._distTo = new Array(g.V).fill(Infinity);
        this._pathTo = new Array(g.V);
        const minComp = (x, y) => x - y;
        this._pq = new IndexPQ(g.V, minComp);

        this._distTo[source] = 0;
        this._pq.insert(source, this._distTo[source]);

        while(!this._pq.isEmpty()) {
            const curr = this._pq.remove();

            for(let e of g.adj(curr)) {
                this._relax(e);
            }
        }
    }

    _relax(e) {
        const curr = e.from();
        const next = e.to();

        const dist = this._distTo[curr] + e.weight();
        if(this._distTo[next] > dist) {
            this._distTo[next] = dist;
            this._pathTo[next] = e;

            if(this._pq.contains(next)) {
                this._pq.changeKey(next, dist);
            } else {
                this._pq.insert(next, dist);
            }
        }
    }

    distTo(v) {
        if(v < 0 || v >= this._distTo.length) {
            throw new Error(`Index Out Of Bounds Error: vertex(${v}) must be between 0 <= v <= ${this._distTo.length - 1}`);
        }

        return this._distTo[v];
    }

    hasPathTo(v) {
        return this.distTo(v) < Infinity;
    }

    pathTo(v) {
        if(!this.hasPathTo(v)) {
            return undefined;
        }

        const path = [];
        for(let e = this._pathTo[v]; e; e = this._pathTo[e.from()]) {
            path.push(e);
        }

        return path.reverse();
    }
}

module.exports = DijkstraSP;
