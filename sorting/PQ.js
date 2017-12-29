'use strict';

const INIT_SIZE = 15;
const INIT_COMP = (x, y) => x - y;

class PQ {
    constructor(n = INIT_SIZE, comp = INIT_COMP) {
        if(typeof n === 'function') {
            comp = n;
            n = INIT_SIZE;
        }
        
        if(!Number.isSafeInteger(n) || n < INIT_SIZE) {
            n = INIT_SIZE;
        }

        if(typeof comp !== 'function') {
            throw new Error('Illegal Argument Error: second arg must be comparator function');
        }

        this._keys = new Array(n + 1);
        this._size = 0;
        this._comp = comp;
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this._keys[1];
    }

    insert(key) {
        if(this._size === this._keys.length - 1) {
            this._resize(this._keys.length * 2);
        }

        this._keys[++this._size] = key;
        this._swim(this._size);
    }

    remove() {
        if(!this.size()) {
            return undefined;
        }

        const key = this._keys[1];
        this._keys[1] = this._keys[this._size];
        this._keys[this._size--] = undefined;

        this._sink(1);

        if(this._size <= (this._keys.length - 1) / 4 && this._keys.length > INIT_SIZE + 1) {
            this._resize(Math.floor(this._keys.length / 2));
        }

        return key;
    }

    [Symbol.iterator]() {
        const copy = new PQ(this._size, this._comp);
        for(let i = 1; i <= this._size; i++) {
            copy.insert(this._keys[i]);
        }

        return {
            next() {
                let done = copy.isEmpty();
                return {value: copy.remove(), done: done};
            }
        }
    }

    _resize(n) {
        const temp = new Array(n);
        for(let i = 1; i <= this._size; i++) {
            temp[i] = this._keys[i];
        }
        this._keys = temp;
    }

    _swim(i) {
        let parentNode = Math.floor(i / 2);

        while(i > 1 && this._comp(this._keys[i], this._keys[parentNode]) < 0) {
            this._swap(i, parentNode);
            i = parentNode;
            parentNode = Math.floor(parentNode / 2);
        }
    }

    _sink(i) {
        let childNode = i * 2;

        while(childNode <= this._size) {
            if(childNode < this._size && this._comp(this._keys[childNode], this._keys[childNode + 1]) > 0) {
                childNode++;
            }

            if(this._comp(this._keys[childNode], this._keys[i]) >= 0) {
                break;
            }
            this._swap(i, childNode);
            i = childNode;
            childNode *= 2;
        }
    }

    _swap(i, j) {
        const temp = this._keys[i];
        this._keys[i] = this._keys[j];
        this._keys[j] = temp;
    }
}

module.exports = PQ;
