'use strict';

class TST {
    constructor() {
        this._root = undefined;
        this._size = 0;
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return !!this.size();
    }

    contains(key) {
        return this.get(key) !== undefined;
    }

    get(key) {
        this._validate(key);
        this._validateLength(key);

        const node = this._get(this._root, key, 0);

        return node ? node.val : undefined;
    }

    _get(node, key, d) {
        if(!node) {
            return undefined;
        }

        const ch = key.charCodeAt(d);
        if(ch < node.ch) {
            return this._get(node.left, key, d);
        } else if(ch > node.ch) {
            return this._get(node.right, key, d);
        } else if(d < key.length - 1) {
            return this._get(node.mid, key, d + 1);
        } else {
            return node;
        }
    }

    put(key, val) {
        this._validate(key);
        this._validateLength(key);
        if(val === undefined) {
            return;
        }

        this._root = this._put(this._root, key, val, 0);
    }

    _put(node, key, val, d) {
        const ch = key.charCodeAt(d);

        if(!node) {
            //node = {ch: ch};
            node = {
                ch: ch,
                val: undefined,
                left: undefined,
                mid: undefined,
                right: undefined,
            };
        }

        if(ch < node.ch) {
            node.left = this._put(node.left, key, val, d);
        } else if(ch > node.ch) {
            node.right = this._put(node.right, key, val, d);
        } else if(d < key.length - 1) {
            node.mid = this._put(node.mid, key, val, d + 1);
        } else {
            if(node.val === undefined) {
                this._size++;
            }
            node.val = val;

            console.log(node.val);
        }

        return node;
    }

    longestPrefixOf(key) {
        this._validate(key);

        let node = this._root;
        let len = -1;
        let d = 0;
        while(node && d < key.length) {
            const ch = key.charCodeAt(d);
            if(ch < node.ch) {
                node = node.left;
            } else if(ch > node.ch) {
                node = node.right;
            } else {
                d++;
                if(node.val !== undefined) {
                    len = d;
                }
                node = node.mid;
            }
        }

        return len === -1 ? undefined : key.slice(0, len);
    }

    keys() {
        const results = [];
        //collect from root
        this._collect(this._root, results, []);
        return results;
    }

    keysWithPrefix(key) {
        this._validate(key);
        this._validateLength(key);

        const results = [];
        const prefix = key.split('');
        const node = this._get(this._root, key, 0);

        if(node.val !== undefined) {
            results.push(key);
        }

        this._collect(node.mid, results, prefix);

        return results;
    }

    _collect(node, results, prefix) {
        if(!node) {
            return;
        }

        //traverse left
        this._collect(node.left, results, prefix);

        //traverse mid
        prefix.push(String.fromCharCode(node.ch));
        if(node.val !== undefined) {
            results.push(prefix.join(''));
        }
        this._collect(node.mid, results, prefix);
        prefix.pop(prefix.length - 1);

        //traverse right
        this._collect(node.right, results, prefix);
    }

    _validate(str) {
        if(typeof str !== 'string') {
            throw new Error(`Illegal Argument Error: arg(${typeof str}) must be string type`);
        }
    }

    _validateLength(str) {
        if(!str.length) {
            throw new Error(`Illegal Argument Error: length of the key must be positive`);
        }
    }
}

module.exports = TST;
