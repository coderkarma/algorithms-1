'use strict';

function insertionSort(arr, comp) {
    if(!(arr instanceof Array)) {
        throw new Error('Illegal Argument Error: first arg must be array type');
    }

    //if no comparator, set default comparator
    comp = comp || ((x, y) => x - y);

    let n = arr.length;
    for(let i = 0; i < n; i++) {
        for(let j = i; j > 0 && comp(arr[j], arr[j - 1]) < 0; j--) {
            const temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
}

module.exports = insertionSort;
