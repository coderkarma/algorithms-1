'use strict';

class LinkedQueue {
    constructor() {
        this._first = null;
        this._last = null;
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

        return this._first.item;
    }

    enqueue(item) {
        const temp = this._last;
        this._last = {
            item: item,
            next: null
        };

        if(!this._first) {
            this._first = this._last;
        } else {
            temp.next = this._last;
        }
        this._size++;
    }

    dequeue() {
        if(!this.size()) {
            return undefined;
        }

        const item = this._first.item;
        this._first = this._first.next;
        if(!this._first) {
            this._last = null;
        }
        this._size--;

        return item;
    }

    [Symbol.iterator]() {
        let curr = this._first;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if(curr) {
                    const value = curr.item;
                    curr = curr.next;
                    return {value: value, done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
}

module.exports = LinkedQueue;
