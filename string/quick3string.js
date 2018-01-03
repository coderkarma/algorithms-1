'use strict';

const knuth = require('../fundamentals/random/knuth');

function Quick3string(arr) {
    knuth.shuffle(arr);
    sort(arr, 0, arr.length - 1, 0);
}

function sort(arr, lo, hi, d) {
    if(lo >= hi) {
        return;
    }

    let lt = lo;
    let i = lo + 1;
    let gt = hi;
    const pivot = charAt(arr[lo], d);

    while(i <= gt) {
        let cmp = charAt(arr[i], d);

        if(cmp < pivot) {
            swap(arr, lt++, i++);
        } else if(cmp > pivot) {
            swap(arr, i, gt--);
        } else {
            i++;
        }
    }

    sort(arr, lo, lt - 1, d);
    if(pivot >= 0) {
        sort(arr, lt, gt, d + 1);
    }
    sort(arr, gt + 1, hi, d);
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function charAt(str, d) {
    return str.length > d ? str.charCodeAt(d) : -1;
}

module.exports = Quick3string;
