'use strict';

class DirectedEdge {
    constructor(v, w, weight) {
        if((typeof weight !== 'number') || Number.isNaN(weight)) {
            throw new Error(`Illegal Argument Error: third arg (${typeof weight}, ${weight}) must be number type`);
        }
        if(!Number.isSafeInteger(v) || v < 0) {
            throw new Error(`Illegal Argument Error: first arg (${typeof v}, ${v}) must be non-negative integer type`);
        }
        if(!Number.isSafeInteger(w) || w < 0) {
            throw new Error(`Illegal Argument Error: second arg (${typeof w}, ${w}) must be non-negative integer type`);
        }
        this._v = v;
        this._w = w;
        this._weight = weight;
    }

    from() {
        return this._v;
    }

    to() {
        return this._w;
    }

    weight() {
        return this._weight;
    }

    toString() {
        return `${this._v}->${this._w} ${this._weight}`
    }
}

module.exports = DirectedEdge;
