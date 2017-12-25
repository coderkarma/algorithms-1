'use strict';

const Graph = require('./unweighted/Graph');

class CC {
    constructor(g) {
        if(!(g instanceof Graph)) {
            throw new Error('Illegal Argument Error: first arg must be Graph type');
        }

        const n = g.V;
        this._visited = new Array(n).fill(false);
        this._id = new Array(n);
        this._size = new Array(n).fill(0);
        this._count = 0;

        for(let v = 0; v < n; v++) {
            if(!this._visited[v]) {
                this._dfs(g, v);
                this._count++;
            }
        }
    }

    _dfs(g, curr) {
        this._visited[curr] = true;
        this._id[curr] = this._count;
        this._size[this._count]++;

        for(let next of g.adj(curr)) {
            if(!this._visited[next]) {
                this._dfs(g, next);
            }
        }
    }

    connected(v, w) {
        return this.id(v) === this.id(w);
    }

    id(v) {
        return this._id[v];
    }

    size(v) {
        return this._size[this._id[v]];
    }

    count() {
        return this._count;
    }
}

module.exports = CC;
