'use strict';

const DirectedEdge = require('./weighted/DirectedEdge');
const EdgeWeightedDigraph = require('./weighted/EdgeWeightedDigraph');
const Digraph = require('./unweighted/Digraph');

class DepthFirstOrder {
    constructor(g) {
        if(!(g instanceof Digraph) && !(g instanceof EdgeWeightedDigraph)) {
            throw new Error(`Illegal Argument Error: ${typeof g} is must be either Digraph or EdgeWeightedDigraph type`);
        }

        const n = g.V;
        this._visited = new Array(n);
        this._pre = new Array(n);
        this._post = new Array(n);
        this._preCounter = 0;
        this._postCounter = 0;
        this._preOrder = [];
        this._postOrder = [];

        for(let v = 0; v < n; v++) {
            if(!this._visited[v]) {
                this._dfs(g, v);
            }
        }
    }

    _dfs(g, curr) {
        this._visited[curr] = true;
        this._pre[curr] = this._preCounter++;
        this._preOrder.push(curr);

        for(let next of g.adj(curr)) {
            if(next instanceof DirectedEdge) {
                next = next.to();
            }
            if(!this._visited[next]) {
                this._dfs(g, next);
            }
        }

        this._post[curr] = this._postCounter++;
        this._postOrder.push(curr);
    }

    pre(v) {
        if(v === undefined) {
            return this._preOrder.slice();
        }

        this._validate(v);
        return this._pre[v];
    }

    post(v) {
        if(v === undefined) {
            return this._postOrder.slice();
        }

        this._validate(v);
        return this._post[v];
    }

    reversePost() {
        return this._postOrder.slice().reverse();
    }

    _validate(v) {
        if(!Number.isSafeInteger(v)) {
            throw new Error(`Illegal Argument Error: (${typeof v}, ${v}) must be non negative integer type`);
        }
        if(v < 0 || v >= this._visited.length) {
            throw new Error(`Index Out Of bounds Error: (${typeof v}, ${v}) must be between 0 <= v <= ${this._visited.length - 1}`);
        }
    }
}

module.exports = DepthFirstOrder;
