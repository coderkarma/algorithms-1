'use strict';

const shuffle = function(arr) {
    if(!(arr instanceof Array)) {
        throw new Error('Illegal Argument Error: argument must be array type');
    }

    const n = arr.length;
    for(let i = 0; i < n; i++) {
        const r = Math.floor(Math.random() * (i + 1));

        const temp = arr[r];
        arr[r] = arr[i];
        arr[i] = temp;
    }

    return arr;
};

const shuffleAlternate = function(arr) {
    if(!(arr instanceof Array)) {
        throw new Error('Illegal Argument Error: argument must be array type');
    }

    const n = arr.length;
    for(let i = 0; i < n; i++) {
        const r = Math.floor(Math.random() * (n - i)) + i;

        const temp = arr[r];
        arr[r] = arr[i];
        arr[i] = temp;
    }

    return arr;
};


module.exports = {
    shuffle: shuffle,
    shuffleAlternate: shuffleAlternate
};
