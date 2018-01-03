'use strict';

const knuth = require('../fundamentals/random/knuth');


function sort(arr, comp) {
    if(!(arr instanceof Array)) {
        throw new Error('Illegal Argument Error: first arg must be array type');
    }

    comp = comp || ((x, y) => x - y);
    knuth.shuffle(arr);

    localSort(arr, 0, arr.length - 1, comp);
}

function localSort(arr, lo, hi, comp) {
    if(lo >= hi) {
        return;
    }

    let mid = partition(arr, lo, hi, comp);
    localSort(arr, lo, mid - 1, comp);
    localSort(arr, mid + 1, hi, comp);
}

function partition(arr, lo, hi, comp) {
    let left = lo;
    let right = hi + 1;
    let pivot = arr[lo];

    while(true) {
        while(left < hi && comp(arr[++left], pivot) < 0 ) {}
        while(comp(arr[--right], pivot) > 0) {}

        if(left >= right) {
            break;
        }

        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    const temp = arr[lo];
    arr[lo] = arr[right];
    arr[right] = temp;

    return right;
}

function select(arr, pos, comp) {
    if(!(arr instanceof Array)) {
        throw new Error('Illegal Argument Error: first arg must be array type');
    }

    let lo = 0;
    let hi = arr.length - 1;

    if(pos < 0 || pos > hi) {
        throw new Error(`Index Out Of Bounds Error: second arg is ${pos}`);
    }
    knuth.shuffle(arr);
    comp = comp || ((x, y) => x - y);

    while(lo < hi) {
        let mid = partition(arr, lo, hi, comp);

        if(mid < pos) {
            lo = mid + 1;
        } else if(mid > pos) {
            hi = mid - 1;
        } else {
            return arr[pos];
        }
    }

    return arr[pos];
}

module.exports = {
    sort: sort,
    select: select
};
