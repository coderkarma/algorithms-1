'use strict';

const RADIX = 256;

class KMP {
    constructor(patt) {
        if(typeof patt !== 'string') {
            throw new Error(`Illegal Argument Error: arg(${typeof patt}, ${patt}) must be string`);
        }

        this._patt = patt;
        this._dfa = new Array(RADIX);
        const n = this._patt.length;
        for(let i = 0; i < RADIX; i++) {
            this._dfa[i] = new Array(n).fill(0);
        }

        this._dfa[this._patt.charCodeAt(0)][0] = 1;
        for(let prev = 0, curr = 1; curr < n; curr++) {
            for(let ch = 0; ch < RADIX; ch++) {
                this._dfa[ch][curr] = this._dfa[ch][prev];
            }
            this._dfa[this._patt.charCodeAt(curr)][curr] = curr + 1;
            prev = this._dfa[this._patt.charCodeAt(curr)][prev];
        }
    }

    search(txt) {
        if(typeof txt !== 'string') {
            throw new Error(`Illegal Argument Error: arg(${typeof txt}, ${txt}) must be string`);
        }

        let i, j;
        const m = this._patt.length;
        const n = txt.length;
        for(i = 0, j = 0; i < n && j < m; i++) {
            j = this._dfa[txt.charCodeAt(i)][j];
        }

        return j === m ? i - m : -1;
    }
}

module.exports = KMP;
