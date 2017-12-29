'use strict';

function selectionSort(arr, comp) {
    if(!(arr instanceof Array)) {
        throw new Error('Illegal Argument Error: first arg must be array type');
    }

    //if no comparator, set default comparator
    comp = comp || ((x, y) => x - y);

    const n = arr.length;    
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i + 1; j < n; j++) {
            if(comp(arr[j], arr[min]) < 0) {
                min = j;
            } 
        }

        const temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}

module.exports = selectionSort;
