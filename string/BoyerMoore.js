'use strict';

const RADIX = 256;

class BoyerMoore {
    constructor(patt) {
        if(typeof patt !== 'string') {
            throw new Error(`Illegal Argument Error: arg(${typeof patt}, ${patt}) must be string type`);
        }
        this._patt = patt;
        this._right = new Array(RADIX).fill(-1);
        const n = patt.length;
        for(let i = 0; i < n; i++) {
            this._right[patt.charCodeAt(i)] = i;
        }
    }

    search(txt) {
        const n = txt.length;
        const m = this._patt.length;
        let skip;
        for(let i = 0; i < n - m + 1; i += skip) {
            skip = 0;

            for(let j = m - 1; j >= 0; j--) {
                if(this._patt.charAt(j) !== txt.charAt(i + j)) {
                    skip = Math.max(1, j - this._right[txt.charCodeAt(i + j)]);
                    break;
                }
            }

            if(skip === 0) {
                return i;
            }
        }

        return -1;
    }
}

module.exports = BoyerMoore;
