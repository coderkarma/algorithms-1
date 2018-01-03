'use strict';

const RADIX = 256;

function lsdSort(txt, len) {
    if(!Array.isArray(txt)) {
        throw new Error(`Illegal Argument Error: first arg(${typeof txt}, ${txt}) must be array type`);
    }
    if(!Number.isSafeInteger(len)) {
        throw new Error(`Illegal Argument Error: second arg(${typeof len}, ${len}) must be integer`);
    }

    const aux = new Array(txt.length);

    const n = txt.length;
    for(let d = len - 1; d >= 0; d--) {
        const count = new Array(RADIX + 1).fill(0);

        for(let i = 0; i < n; i++) {
            count[txt[i].charCodeAt(d) + 1]++;
        }

        for(let r = 0; r < RADIX; r++) {
            count[r + 1] += count[r];
        }

        for(let i = 0; i < n; i++) {
            aux[count[txt[i].charCodeAt(d)]++] = txt[i];
        }

        for(let i = 0; i < n; i++) {
            txt[i] = aux[i];
        }
    }
}

module.exports = lsdSort;
