'use strict';

const knuth = require('../fundamentals/random/knuth');

function sort(arr, comp) {
    if(!(arr instanceof Array)) {
        throw new Error('Illegal Argument Error: first arg must be array type');
    }
    knuth.shuffle(arr);
    comp = comp || ((x, y) => x - y);

    localSort(arr, 0, arr.length - 1, comp);
}

function localSort(arr, lo, hi, comp) {
    if(lo >= hi) {
        return;
    }

    let lt = lo;
    let i = lo + 1;
    let gt = hi;
    let pivot = arr[lo];

    while(i <= gt) {
        let cmp = comp(pivot, arr[i]);

        if(cmp > 0) {
            swap(arr, lt++, i++);
        } else if(cmp < 0) {
            swap(arr, i, gt--);
        } else {
            i++;
        }
    }

    localSort(arr, lo, lt - 1, comp);
    localSort(arr, gt + 1, hi, comp);
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = sort;
