'use strict';

const EdgeWeightedDigraph = require('./EdgeWeightedDigraph');
const Queue = require('../../../fundamentals/queue/Queue');
const DirectedCycle = require('../DirectedCycle');

class BellmanFordSP {
    constructor(g, source) {
        if(!(g instanceof EdgeWeightedDigraph)) {
            throw new Error(`Illegal Argument Error: first arg(${typeof g}) must be EdgeWeightedDigraph type`);
        }

        if(!Number.isSafeInteger(source) || source < 0 || source >= g.V) {
            throw new Error(`Illegal Argument Error: vertex(${typeof v}, ${v}) must be integer and between 0 <= v <= ${g.V - 1}`);
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

    _findNegativeCycle() {
        const g = new EdgeWeightedDigraph(this._pathTo.length);
        for(let e of this._pathTo) {
            if(e) {
                g.addEdge(e);
            }
        }

        const finder = new DirectedCycle(g);
        this._cycle = finder.cycle();
    }

    hasNegativeCycle() {
        return !!this._cycle;
    }

    negativeCycle() {
        return this._cycle;
    }

    distTo(v) {
        this._validate(v);
        if(this.hasNegativeCycle()) {
            throw new Error(`Unsupported Operation Error: negative cycle exist`);
        }

        return this._distTo[v];
    }

    hasPathTo(v) {
        this._validate(v);
        return this._distTo[v] < Infinity;
    }

    pathTo(v) {
        if(this.hasNegativeCycle()) {
            throw new Error(`Unsupported Operation Error: negative cycle exist`);
        }
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
            throw new Error(`Illegal Argument Error: vertex(${typeof v}) must be non-negative integer`)
        }
        if(v < 0 || v >= this._distTo.length) {
            throw new Error(`Index Out Of Bounds Error: vertex(${v}) must be between 0 <= v <= ${this._distTo.length - 1}`)
        }
    }
}

module.exports = BellmanFordSP;
