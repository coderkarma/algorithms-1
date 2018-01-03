'use strict';

const RADIX = 256;

function msdSort(txt) {
    const aux = new Array(txt.length);
    sort(txt, aux, 0, txt.length - 1, 0);
}

function sort(txt, aux, lo, hi, d) {
    if(lo >= hi) {
        return;
    }

    const count = new Array(RADIX + 2).fill(0);

    for(let i = lo; i <= hi; i++) {
        const ch = charAt(txt[i], d);
        count[ch + 2]++;
    }

    for(let r = 0; r < RADIX; r++) {
        count[r + 1] += count[r];
    }

    for(let i = lo; i <= hi; i++) {
        const ch = charAt(txt[i], d);
        aux[count[ch + 1]++] = txt[i];
    }

    for(let i = lo; i <= hi; i++) {
        txt[i] = aux[i - lo];
    }

    for(let r = 0; r < RADIX; r++) {
        sort(txt, aux, lo + count[r], lo + count[r + 1] - 1, d + 1);
    }
}

function charAt(str, d) {
    return str.length > d ? str.charCodeAt(d) : -1;
}

module.exports = msdSort;
