'use strict';

class NonrecursiveDirectedDFS {
    constructor(g, ...sources) {
        if(!(g instanceof Digraph)) {
            throw new Error('Illegal Argument Error: first arg must be Digraph type');
        }
        if(sources[0][Iterator]) {
            sources = sources[0][Iterator]();
        }

        this._visited = new Array(g.V()).fill(false);
        this._vertices = [];
        
        for(let source of sources) {
            if(!this._visited[source]) {
                this._dfs(g, source);
            }
        }
    }

    _dfs(g, source) {
        const adj = new Array(g.V());
        const n = adj.length;
        for(let v = 0; v < n; v++) {
            adj[i] = g.adj(v);
        }
        const stack = new Array(n);
        stack.push(s);
        this._visited[s] = true;
        this._vertices.push(s);

        while(stack.length) {
            const curr = stack[stack.length - 1];

            const next = adj[curr].next();
            if(next.done) {
                stack.pop();
            } else {
                if(!this._visited[next.value]) {
                    stack.push(next.value);
                    this._visited[next.value] = true;
                    this._vertices.push(next.value);
                }
            }
        }
    
    }

    visited(v) {
        return this._visited[v];
    }

    /*
        return the collection of visited vertices form the source vertex
    */
    vertices() {
        return this._vertices[Symbol.iterator]();
    }
}

module.exports = NonrecursiveDirectedDFS;
