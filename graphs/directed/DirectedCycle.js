'use strict';

const Digraph = require('./unweighted/Digraph');
const EdgeWeightedDigraph = require('./weighted/EdgeWeightedDigraph');

class DirectedCycle {
    constructor(g) {
        if(!(g instanceof Digraph) && !(g instanceof EdgeWeightedDigraph)) {
            throw new Error(`Illegal Argument Error: ${typeof g} must be either Digraph or EdgeWeightedDigraph type`);
        }

        const n = g.V;
        this._visited = new Array(g.V);
        this._onStack = new Array(g.V);
        this._pathTo = new Array(g.V);

        for(let v = 0; v < n && !this.hasCycle(); v++) {
            if(!this._visited[v]) {
                if(g instanceof Digraph) {
                    this._dfs(g, v);
                } else {
                    this._edgeDFS(g, v);
                }
            }
        }
    }

    _dfs(g, curr) {
        this._visited[curr] = true;
        this._onStack[curr] = true;

        for(let next of g.adj(curr)) {
            if(this.hasCycle()) {
                return;
            }

            if(!this._visited[next]) {
                this._pathTo[next] = curr;
                this._dfs(g, next);
            } else if(this._onStack[next]) {
                this._cycle = [];

                for(let v = curr; v != next; v = this._pathTo[v]) {
                    this._cycle.push(v);
                }
                this._cycle.push(next);
                this._cycle.push(curr);

                //this is due to array iterator start from 0 index
                //we need to iterate from last index to 0 index
                this._cycle.reverse();
            }
        }

        this._onStack[curr] = false;
    }

    _edgeDFS(g, curr) {
        this._visited[curr] = true;
        this._onStack[curr] = true;

        for(let edge of g.adj(curr)) {
            if(this.hasCycle()) {
                return;
            }

            const next = edge.to();
            if(!this._visited[next]) {
                this._pathTo[next] = edge;
                this._edgeDFS(g, next);
            } else if(this._onStack[next]) {
                this._cycle = [];

                let e;
                for(e = edge; e.from() != next; e = this._pathTo[e.from()]) {
                    this._cycle.push(e);
                }
                this._cycle.push(e);

                //this is due to array iterator start from 0 index
                //we need to iterate from last index to 0 index
                this._cycle.reverse();
            }
        }

        this._onStack[curr] = false;
    }

    cycle() {
        return this._cycle;
    }

    hasCycle() {
        return !!this._cycle;
    }
}

module.exports = DirectedCycle;
