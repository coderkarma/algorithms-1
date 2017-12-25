'use strict';

const Queue = require('../fundamentals/queue/Queue');

class BreadthFirstDirectedPaths {
    constructor(g, ...vertices) {
        this._visited = new Array(g.V()).fill(false);
        this._pathTo = new Array(g.V()).fill(-1);
        this._distTo = new Array(g.V()).fill(Infinity);


        const q = new Queue();
        for(let v of vertices) {
            this._visited[v] = true;
            this._distTo[v] = 0;
            q.enqueue(v);
        }

        while(q.size()) {
            const curr = q.dequeue();

            for(let next of g.ajd(curr)) {
                if(!this._visited[next]) {
                    this._pathTo[next] = curr;
                    this._distTo[next] = this._distTo[curr] + 1;
                    this._visited[next] = true;
                    q.enqueue(next);
                }
            }
        }
    }

    hasPathTo(v) {
        return this._visited[v]; 
    }

    pathTo(v) {
        if(!this.hasPathTo(v)) {
            return undefined;
        }

        const path = [];

        let i;
        for(i = v; distTo[i] !== 0; i = pathTo[i]) {
            path.push(i);
        }
        path.push(i);

        return path;
    }

    distTo(v) {
        return this._distTo[v];
    }
}

module.exports = BreadthFirstDirectedPaths;
