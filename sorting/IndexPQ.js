'use strict';

const INIT_COMP = (x, y) => x - y;

class IndexPQ {
    constructor(n, comp = INIT_COMP) {
        if(!Number.isSafeInteger(n) || n < 0) {
            throw new Error(`Illegal Argument Error: first arg(${typeof n}, ${n}) must be non-negative integer number`);
        }

        if(typeof comp !== 'function') {
            throw new Error(`Illegal Argument Error: second arg(${typeof n}) must be a comparator function`);
        }

        this._comp = comp;
        this._pq = new Array(n + 1);
        this._qp = new Array(n).fill(0);
        this._keys = new Array(n);
        this._size = 0;
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return !this.size();
    }

    contains(i) {
        return !!this._qp[i];
    }

    peekIndex() {
        if(!this.size()) {
            return undefined;
        }

        return this._pq[1];
    }

    peekKey() {
        if(!this.size()) {
            return undefined;
        }

        return this._keys[this._pq[1]];
    }

    insert(i, key) {
        if(this.contains(i)) {
            throw new Error(`Illegal Argument Error: first arg(${i}) is already inserted before`);
        }
        if(key === undefined || key === null || Number.isNaN(key)) {
            throw new Error(`Illegal Argument Error: second arg must be given`);
        }
        this._validate(i);

        this._size++;
        this._keys[i] = key;
        this._qp[i] = this._size;
        this._pq[this._size] = i;
        this._swim(this._size);
    }

    /*
        remove()
        remove(4);
    */
    remove(i) {
        if(i !== 0) {
            i = i || this._pq[1];
        }

        if(!this.size()) {
            return undefined;
        }
        if(!this.contains(i)) {
            return undefined;
        }

        const index = this._qp[i];
        this._swap(index, this._size--);
        this._qp[i] = 0;
        this._keys[i] = undefined;

        this._swim(index);
        this._sink(index);

        return i;
    }

/*
    removeMin() {
        const min = this._pq[1];
        this._pq[1] = this._pq[this._size--];
        sink(1);

        this._qp[min] = 0;
        this._keys[min] = undefined;

        return min
    }

    remove(i) {
        const index = this._qp[i];
        this._swap(index, this._size--);
        this._qp[i] = 0;
        this._keys[i] = undefined;

        swim(index);
        sink(index);
    }
*/


    changeKey(i, key) {
        if(!this.contains(i)) {
            throw new Error(`Illegal Argument Error: priority queue does not contain index ${i}`);
        }
        if(key === undefined || key === null || Number.isNaN(key)) {
            throw new Error(`Illegal Argument Error: second arg must be given`);
        }

        this._keys[i] = key;
        this._swim(this._qp[i]);
        this._sink(this._qp[i]);
    }

/*
    decreaseKey(i, key) {
        if(!this.contains(i)) {
            throw new Error(``);
        }
        if(this._comp(key, this._keys[i]) >= 0) {}
    }

    increaseKey(i, key) {}
*/

    [Symbol.iterator]() {
        const copy = new IndexPQ(this._qp.length, this._comp);
        const n = this._size;
        for(let i = 1; i <= n; i++) {
            copy.insert(this._pq[i], this._keys[this._pq[i]]);
        }
        return {
            next() {
                const done = copy.isEmpty();
                return {value: copy.remove(), done: done};
            }
        }
    }

    _swap(i, j) {
        const temp = this._pq[i];
        this._pq[i] = this._pq[j];
        this._pq[j] = temp;

        this._qp[this._pq[i]] = i;
        this._qp[this._pq[j]] = j;
    }

    _swim(i) {
        let parentNode = Math.floor(i / 2);

        while(i > 1 && this._comp(this._keys[this._pq[i]], this._keys[this._pq[parentNode]]) < 0) {
            this._swap(i, parentNode);
            i = parentNode;
            parentNode = Math.floor(parentNode / 2);
        }
    }

    _sink(i) {
        let childNode = i * 2;

        while(childNode <= this._size) {
            if(childNode < this._size && this._comp(this._keys[this._pq[childNode]], this._keys[this._pq[childNode + 1]]) > 0) {
                childNode++;
            }

            if(this._comp(this._keys[this._pq[i]], this._keys[this._pq[childNode]]) <= 0) {
                break;
            }

            this._swap(i, childNode);
            i = childNode;
            childNode *= 2;
        }
    }

    _validate(i) {
        if(!Number.isSafeInteger(i)) {
            throw new Error(`Illegal Argument Error: arg(${typeof i}, ${i}) must be integer type`);
        }
        if(i < 0 || i >= this._qp.length) {
            throw new Error(`Index Out Of Bounds Error: i must be between 0 <= i <= ${this._qp.length - 1}`);
        }
    }
}

module.exports = IndexPQ;
