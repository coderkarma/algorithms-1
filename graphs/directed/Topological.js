'use strict';

const DirectedCycle = require('./DirectedCycle');
const DepthFirstOrder = require('./DepthFirstOrder');

class Topological {
    constructor(g) {
        const finder = new DirectedCycle(g);
        if(finder.hasCycle()) {
            return;
        }

        const dfo = new DepthFirstOrder(g);
        this._order = dfo.reversePost();
        this._rank = new Array(g.V);
        let i = 0;
        for(let v of this._order) {
            this._rank[v] = i++;
        }
    }

    order() {
        return this._order;
    }

    hasOrder() {
        return !!this._order;
    }

    rank(v) {
        this._validate(v);
        return this._rank[v];
    }

    _validate(v) {
        if(!Number.isSafeInteger(v)) {
            throw new Error(`Illegal Argument Error: (${typeof v}, ${v}) is must be non-negative integer type`);
        }
        if(v < 0 || v >= this._rank.length) {
            throw new Error(`Index Out Of Bounds Error: ${v} must be between 0 <= v <= ${this._rank.length - 1}`);
        }
    }
}

module.exports = Topological;
