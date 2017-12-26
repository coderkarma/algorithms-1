'use strict';

const Digraph = require('./unweighted/Digraph');

class DepthFirstDirectedPaths {
    constructor(g, s) {
        if(!(g instanceof Digraph)) {
            throw new Error('Illegal Argument Error: first arg must be Digraph type');
        }
        this._pathTo = new Array(g.V);
        this._visited = new Array(g.V).fill(false);
        
        this._validate(s);
        this._s = s;
        this._dfs(g, s);
    }

    _dfs(g, curr) {
        this._visited[curr] = true;

        for(let next of g.adj(curr)) {
            if(!this._visited[next]) {
                this._pathTo[next] = curr;
                this._dfs(g, next);
            }
        }
    }

    visited(v) {
        this._validate(v);

        return this._visited[v];
    }

    pathTo(v) {
        if(!this.visited(v)) {
            return undefined;
        }

        const path = [];
        for(let curr = v; curr !== this._s; curr = this._pathTo[curr]) {
            path.push(curr);
        }
        path.push(this._s);

        //javascript array iterator start from 0 index, so it need to be reversed to show correct path
        return path.reverse();
    }

    _validate(v) {
        if(!Number.isSafeInteger(v)) {
            throw new Error(`Illegal Argument Error: ${typeof v} ${v} must be non-negative integer type`);
        }
        if(v < 0 || v >= this._visited.length) {
            throw new Error(`Index Out Of Bounds Error: ${v} must be between 0 <= v <= ${this._visited.length - 1}`);
        }
    }
}

module.exports = DepthFirstDirectedPaths;
