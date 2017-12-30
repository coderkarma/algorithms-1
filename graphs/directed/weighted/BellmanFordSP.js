'use strict';

const EdgeWeightedDigraph = require('./EdgeWeightedDigraph');
const Queue = require('../../fundamentals/queue/Queue');

class BellmanFordSP {
    constructor(g, source) {
        if(!(g instanceof EdgeWeightedDigraph)) {
            throw new Error(`Illegal Argument Error: first arg(${typeof g}) must be EdgeWeightedDigraph type`);
        }
        if(!Number.isSafeInteger(source)) {
            
        }
        if(source < 0 || source >= g.V) {
        
        }

        this._onQueue = new Array(g.V);
        this._q = new Queue();
        this._distTo = new Array(g.V).fill(Infinity);
        this._pathTo = new Array(g.V);
        this._cost = 0;
        this._cycle;

        this._distTo[source] = 0;
        this._q.enqueue(source);
        this._onQueue[source] = true;

        while(!this._q.isEmpty() && !this.hasNegativeCycle()) {
            const curr = this._q.dequeue();
            this._onQueue[curr] = false;
            this._relax(g, curr);
        }
    }

    _relax(g, curr) {
        for(let e of g.adj(curr)) {
            const next = e.to();

            const dist = this._distTo[curr] + e.weight();
            if(this._distTo[next] > dist) {
                this._distTo[next] = dist;
                this._pathTo[next] = e;

                if(!this._onQueue[next]) {
                    this._onQueue[next] = true;
                    this._q.enqueue(next);
                }
            }

            if(this._cost++ % g.V === 0) {
                this._findNegativeCycle();
                if(this.hasNegativeCycle()) {
                    return;
                }
            }
        }
    }

    _findNegativeCycle() {}

    hasNegativeCycle() {
        return !!this._cycle;
    }

    negativeCycle() {
        return this._cycle;
    }

    distTo(v) {}

    hasPathTo(v) {}

    pathTo(v) {}
}

module.exports = BellmanFordSP;
