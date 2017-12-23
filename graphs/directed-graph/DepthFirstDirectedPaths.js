'use strict';

class DepthFirstDirectedPaths {
    constructor(g, s) {
        this._s = s;
        this._pathTo = new Array(g.V()).fill(0);
        this._visited = new Array(g.V()).fill(false);

        this._dfs(g, s);
    }

    _dfs(g, curr) {
        this._visited[curr] = true;

        for(let next of g.adj(curr)) {
            if(!visited[next]) {
                this._pathTo[next] = curr;
                this._dfs(g, next);
            }
        }
    }

    visited(v) {
        return this._visited[v];
    }

    pathTo(v) {
        if(!this.visited(v)) {
            return undefined;
        }

        const path = [];
        const n = g.V();
        for(let curr = v; curr < n; curr = this._pathTo[curr]) {
            path.push(curr);
        }
        path.push(this._s);

        return path;
    }
}

module.exports = DepthFirstDirectedPaths;
