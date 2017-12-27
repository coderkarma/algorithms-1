const DepthFirstOrder = require('./DepthFirstOrder');

class SCC {
    constructor(g) {
        const dfo = new DepthFirstOrder(g.reverse());

        this._visited = new Array(g.V);
        this._id = new Array(g.V);
        this._size = new Array(g.V).fill(0);
        this._count = 0;
        for(let v of dfo.reversePost()) {
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

    stronglyConnected(v, w) {
        this._validate(v);
        this._validate(w);
        return this._id[v] === this._id[w];
    }

    id(v) {
        this._validate(v);
        return this._id[v];
    }

    size(v) {
        this._validate(v);
        return this._size[this._id[v]];
    }

    count() {
        return this._count;
    }

    _validate(v) {
        if(!Number.isSafeInteger(v)) {
            throw new Error(`Illegal Argument Error: (${typeof v}, ${v}) must be non-negative integer type`);
        }
        if(v < 0 || v >= this._visited.length) {
            throw new Error(`Index Out Of Bounds Error: ${v} must be between 0 <= and <= ${this._visited.length - 1}`);
        }
    }
}

module.exports = SCC;
