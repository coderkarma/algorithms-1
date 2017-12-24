/*
    This file is identical to ResizingArrayQueue.js
    This file will be used for building other data-structure very often,
    so I renamed ResizingArrayQueue to Queue.js simply
*/
'use strict';

const INIT_SIZE = 8;
class ResizingArrayQueue {
    constructor(n) {
        n = n || INIT_SIZE;

        if(!isFinite(n)) {
            throw new Error('Illegal Argument Error: arg must be finite number type');
        }

        if(n < INIT_SIZE) {
            n = INIT_SIZE;
        }

        this._items = new Array(n);
        this._first = 0;
        this._last = 0;
        this._size = 0;
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        if(!this.size()) {
            return undefined;
        }

        return this._items[this._first];
    }

    enqueue(item) {
        if(this._size === this._items.length) {
            this._resize(this._size * 2);
        }

        this._items[this._last++] = item;
        if(this._last === this._items.length) {
            this._last = 0;
        }
        this._size++;
    }

    dequeue() {
        if(!this.size()) {
            return undefined;
        }

        const item = this._items[this._first];
        this._items[this._first++] = undefined;
        if(this._first === this._items.length) {
            this._first = 0;
        }
        this._size--;

        if(this._size <= this._items.length / 4 && this._items.length > INIT_SIZE) {
            this._resize(Math.floor(this._items.length / 2));
        }

        return item;
    }

    [Symbol.iterator]() {
        let i = 0;
        let first = this._first;
        let size = this._size;
        let items = this._items;

        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if(i < size) {
                    let value = items[(first + i) % items.length];
                    i++;
                    return {value: value, done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }

    _resize(n) {
        const temp = new Array(n);

        for(let i = 0; i < this._size; i++) {
            temp[i] = this._items[(this._first + i) % this._items.length];
        }

        this._items = temp;
        this._first = 0;
        this._last = this._size;
    }
}

module.exports = ResizingArrayQueue;
