'use strict';

class Edge {
    constructor(v, w, weight) {
        this._validate(v);
        this._validate(w);
        if(typeof weight !== 'number' || Number.isNaN(weight)) {
            throw new Error(`Illegal Argument Error: weight(${typeof weight}, ${weight}) must be number type`);
        }

        this._v = v;
        this._w = w;
        this._weight = weight;
    }

    either() {
        return this._v;
    }

    other(v) {
        if(this._v === v) {
            return this._w;
        } else if(this._w === v) {
            return this._v;
        } else {
            throw new Error(`Illegal Argument Error: first arg(${typeof v}, ${v}) must be either ${this._v} or ${this._w}`);
        }
    }

    weight() {
        return this._weight;
    }

    toString() {
        return `${this._v}-${this._w} ${this._weight}`;
    }

    _validate(v) {
        if(!Number.isSafeInteger(v) || v < 0) {
            throw new Error(`Illegal Argument Error: v(${typeof v}, ${v}) must be non-negative integer type`);   
        }
    }
}

module.exports = Edge;
