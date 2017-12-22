'use strict';

class UF {
    constructor(n) {
        if(!isFinite(n)) {
            throw new Error('Illegal Argument Error: arg must be positive finite number');
        }

        this._parent = new Array(n);
        this._rank = new Array(n).fill(0);
        this._size = n;

        for(let i = 0; i < n; i++) {
            this._parent[i] = i;
        }
    }

    size() {
        return this._size;
    }

    connected(p, q) {
        return this.find(p) === this.find(q);
    }

    find(p) {
        if(p < 0 || p >= this._parent.length) {
            throw new Error(`Out Of Bound Error: ${p} is out of range`);
        }

        while(p !== this._parent[p]) {
            p = this._parent[p] = this._parent[this._parent[p]];
        }

        return p;
    }

    union(p, q) {
        const rootP = this.find(p);
        const rootQ = this.find(q);

        if(rootP === rootQ) {
            return;
        }

        if(this._rank[rootP] > this._rank[rootQ]) {
            this._parent[rootQ] = rootP;
        } else if(this._rank[rootP] < this._rank[rootQ]) {
            this._parent[rootP] = rootQ;
        } else {
            this._parent[rootQ] = rootP;
            this._rank[rootP]++;
        }
        this._size--;
    }
}

module.exports = UF;
