'use strict';

const Topological = require('../Topological');
const EdgeWeightedDigraph = require('./EdgeWeightedDigraph');

class AcyclicSP {
    constructor(g, source) {
        if(!(g instanceof EdgeWeightedDigraph)) {
            throw new Error(`Illegal Argument Error: first arg(${typeof g}) must be EdgeWeightedDigraph type`);
        }

        this._distTo = new Array(g.V).fill(Infinity);
        this._pathTo = new Array(g.V);

        this._validate(source);

        const topological = new Topological(g);
        if(!topological.hasOrder()) {
            throw new Error(`Illegal Argument Error: a graph contains cycle`);
        }

        this._distTo[source] = 0;
        for(let v of topological.order()) {
            for(let e of g.adj(v)) {
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
        }
    }

    distTo(v) {
        this._validate(v);
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

    _validate(v) {
        if(!Number.isSafeInteger(v)) {
            throw new Error(`Illegal Argument Error: arg(${typeof v}) must be non-negative integer type`);
        }
        if(v < 0 || 0 >= this._distTo.length) {
            throw new Error(`Index Out Of Bounds Error: vertex(${v}) must be between 0 <= v <= ${this._distTo.length - 1}`);
        }
    }
}


module.exports = AcyclicSP;
