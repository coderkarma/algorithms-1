'use strict';


class Cycle {
    construcotr(g) {
        this._visited = new Array(g.V()).fill(false);
        this._pathTo = new Array(g.V());
        this._cycle;

        if(this._hasSelfLoop(g) || this._hasParallelEdges(g)) {
            return;
        } 

        const n = g.V();
        for(let v = 0; v < n && !this.hasCycle(); v++) {
            if(!this._visited[v]) {
                this._dfs(g, -1, v);
            }
        }
    }

    _dfs(g, prev, curr) {
        this._visited[curr] = true;

        for(let next of g.adj(curr)) {
            if(this.hasCycle()) {
                return;
            }

            if(!this._visited[next]) {
                this._pathTo[next] = curr;
                this._dfs(g, curr, next);
            } else if(next !== prev) {
                cycle = [];

                for(let i = curr; i !== next; i = pathTo[i]) {
                    cycle.push(i);
                }
                cycle.push(next);
                cycle.push(curr);
            }
        }
    }

    _hasSelfLoop(g) {
        const n = g.V();
        for(let v = 0; v < n; v++) {
            for(let w of g.adj(v)) {
                if(v === w) {
                    return cycle = [v, v];
                }
            }
        }

        return false;
    }

    _hasParallelEdges(g) {
        const n = g.V();
        const parallelEdges = new Array(n).fill(false);
        for(let v = 0; v < n; v++) {
            for(let w of g.adj(v)) {
                if(parallelEdges[w]) {
                    return cycle = [v, w, v];
                }
                parallelEdges[w] = true;
            }

            for(let w of g.adj(v)) {
                parallelEdges[w] = false;
            }
        }

        return false;
    }

    cycle() {
        return this._cycle;
    }

    hasCycle() {
        return this._cycle;
    }
}

module.exports = Cycle;
