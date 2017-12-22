/*
    implements stack using array that double the size when the container is full,
    and halve the size when 1/4 of the container is full
*/

'use strict';

const INIT_SIZE = 8;
class ResizingArrayStack {
    constructor(n) {
        n = n || INIT_SIZE;

        if(!isFinite(n)) {
            throw new Error('Illegal Argument Error: argument must be finite number type');
        }

        if(n < INIT_SIZE) {
            n = INIT_SIZE;
        }

        this._items = new Array(n);
        this._first = 0;
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

        return this._items[this._size - 1];
    }

    push(item) {
        if(this._size === this._items.length) {
            this._resize(this._size * 2);
        }

        this._items[this._size++] = item;
    }

    pop() {
        if(!this.size()) {
            return undefined;
        }

        const item = this._items[--this._size];
        this._items[this._size] = undefined;

        if(this._size <= this._items.length / 4 && this._items.length > INIT_SIZE) {
            this._resize(Math.floor(this._items.length / 2));
        }

        return item;
    }

    [Symbol.iterator]() {
        //or
        //return this._items.slice(0, this._size).reverse()[Symbol.iterator]();

        let i = this._size;
        let items = this._items;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if(i > 0) {
                    return {value: items[--i], done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }

    _resize(n) {
        const temp = new Array(n);

        for(let i = 0; i < this._size; i++) {
            temp[i] = this._items[i];
        }
        this._items = temp;
    }
}

module.exports = ResizingArrayStack;
