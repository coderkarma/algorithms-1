'use strict';

const crypto = require('crypto');
const RADIX = 256;

class RabinKarp {
    constructor(patt) {
        if(typeof patt !== 'string') {
            throw new Error(`Illegal Argument Error: arg(${typeof patt}, ${patt}) must be string type`);
        }
        this._mod = this._generatePrime();
        this._pattHash = this._hash(patt, patt.length);
        this._msdHash = 1;
        const n = patt.length;
        for(let i = 1; i < n; i++) {
            this._msdHash = (this._msdHash * RADIX) % this._mod;
        }
        this._patt = patt;
    }

    search(txt) {
        if(typeof txt !== 'string') {
            throw new Error(`Illegal Argument Error: arg(${typeof txt}, ${txt}) must be string type`);
        }

        if(txt.length < this._patt.length) {
            return -1;
        }

        let txtHash = this._hash(txt, this._patt.length);
        if(txtHash === this._pattHash && this._check(txt, 0)) {
            return 0;
        }

        const m = this._patt.length;
        const n = txt.length;
        for(let i = m; i < n; i++) {
            txtHash = txtHash + this._mod - (this._msdHash * txt.charCodeAt(i - m)) % this._mod;
            txtHash = (txtHash * RADIX + txt.charCodeAt(i)) % this._mod;

            const offset = i - m + 1;
            if(txtHash === this._pattHash && this._check(txt, offset)) {
                return offset;
            }
        }

        return -1;
    }

    _hash(str, n) {
        let h = 0;
        for(let i = 0; i < n; i++) {
            h = (RADIX * h + str.charCodeAt(i)) % this._mod;
        }

        return h;
    }

    _generatePrime() {
        const dh = crypto.DiffieHellman(31);

        return dh.getPrime().readUInt32BE();
    }

    _check(str, offset) {
        const m = this._patt.length;
        for(let i = 0; i < m; i++) {
            if(this._patt.charAt(i) !== str.charAt(offset + i)) {
                return false;
            }
        }

        return true;
    }
}

module.exports = RabinKarp;
