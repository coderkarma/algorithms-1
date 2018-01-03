'use strict';

class TrieST {
    constructor() {
        this._root = undefined;
        this._size = 0;
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return !this.size();
    }

    contains(key) {
        return this.get(key) !== undefined;
    }

    get(key) {
        this._validate(key);

        const node = this._get(this._root, key, 0);

        return node ? node.val : undefined;
    }

    _get(node, key, d) {
        if(!node) {
            return undefined;
        }

        return key.length === d ? node : this._get(node.next[key.charCodeAt(d)], key, d + 1);
    }

    put(key, val) {
        this._validate(key);
        if(val === undefined) {
            this.remove(key);
            return;
        }

        this._root = this._put(this._root, key, val, 0);
    }

    _put(node, key, val, d) {
        if(!node) {
            node = {
                val: undefined,
                next: []
            };
        }

        if(key.length === d) {
            if(node.val === undefined) {
                this._size++;
            }
            node.val = val;
        } else {
            node.next[key.charCodeAt(d)] = this._put(node.next[key.charCodeAt(d)], key, val, d + 1);
        }

        return node;
    }

    remove(key) {
        this._validate(key);

        this._root = this._remove(this._root, key, 0);
    }

    _remove(node, key, d) {
        if(!node) {
            undefined;
        }

        if(key.length === d) {
            if(node.val !== undefined) {
                this._size--;
            }
            node.val = undefined;
        } else {
            node.next[key.charCodeAt(d)] = this._remove(node.next[key.charCodeAt(d)], key, d + 1);
        }

        if(node.val !== undefined) {
            return node;
        }

        return node.next.some((childNode) => childNode) ? node : undefined;
    }

    longestPrefixOf(key) {
        this._validate(key);

        const len = this._longestPrefixOf(this._root, key, 0, -1);

        return len === -1 ? undefined : key.slice(0, len);
    }

    _longestPrefixOf(node, key, d, max) {
        if(!node) {
            return max;
        }

        if(node.val !== undefined) {
            max = d;
        }

        return key.length === d ? max : this._longestPrefixOf(node.next[key.charCodeAt(d)], key, d + 1, max);
    }

    keys() {
        return this.keysWithPrefix('');
    }

    keysWithPrefix(key) {
        this._validate(key);

        const node = this._get(this._root, key, 0);

        const results = [];
        const prefix = key.split('');

        this._collect(node, prefix, results);

        return results;
    }

    _collect(node, prefix, results) {
        if(!node) {
            return;
        }

        if(node.val !== undefined) {
            results.push(prefix.join(''));
        }

        node.next.forEach((childNode, i) => {
            prefix.push(String.fromCharCode(i));
            this._collect(childNode, prefix, results);
            prefix.pop(prefix.length - 1);
        });
    }

    _validate(str) {
        if(typeof str !== 'string') {
            throw new Error(`Illegal Argument Error: arg($(typeof str)) must be either string or array of char type`);
        }
    }
}

module.exports = TrieST;
