/*
    Stack implementation using Linked List
*/

'use strict';

class LinkedStack {
    constructor() {
        this._first = null;
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

    push(item) {
        this._first = {
            item: item,
            next: this._first
        };
        this._size++;
    }

    pop() {
        if(!this.size()) {
            return undefined;
        }

        const item = this._first.item;
        this._first = this._first.next;
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
                    let item = curr.item;
                    curr = curr.next;

                    return {value: item, done: false};
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
}

module.exports = LinkedStack;
