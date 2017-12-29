'use strict';

function mergeSort(arr, comp) {
    if(!(arr instanceof Array)) {
        throw new Error('Illegal Argument Error: first arg must be array type');
    }

    comp = comp || ((x, y) => x - y);

    const aux = new Array(arr.length);
    sort(arr, aux, 0, arr.length - 1, comp);
}

function sort(arr, aux, lo, hi, comp) {
    if(lo >= hi) {
        return;
    }

    const mid = Math.floor((lo + hi) / 2);
    sort(arr, aux, lo, mid, comp);
    sort(arr, aux, mid + 1, hi, comp);
    merge(arr, aux, lo, mid, hi, comp);
}

function merge(arr, aux, lo, mid, hi, comp) {
    
    for(let i = lo; i <= hi; i++) {
        aux[i] = arr[i];
    }

    let left = lo;
    let right = mid + 1;
    let i = lo;

    while(left <= mid && right <= hi) {
        if(comp(aux[left], aux[right]) > 0) {
            arr[i++] = aux[right++];
        } else {
            arr[i++] = aux[left++];
        }
    }

    while(left <= mid) {
        arr[i++] = aux[left++];
    }
}

module.exports = mergeSort;
