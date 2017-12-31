const ALPHA_NUM = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/*
    size: size of array
    start: minimum index of string(inclusive)
    end: maximum index of string(exclusive)
*/
function randomStrings(size, start, end) {
    if(!Number.isSafeInteger(size) || size < 0) {
        throw new Error(`Illegal Argument Error: size(${typeof size}, ${size}) must be non-negative integer`);
    }
    if(!Number.isSafeInteger(start)) {
        throw new Error(`Illegal Argument Error: start index(${typeof start}, ${start}) must be integer`);
    }

    if(end === undefined) {
        end = start;
        start = -1;
    } else if(!Number.isSafeInteger(end)) {
        throw new Error(`Illegal Argument Error: length(${typeof end}, ${end}) must be integer`);
    }

    if(start < 0) {
        start = -1;
    }

    if(start >= end || end <= 0) {
        return new Array(size).fill('');
    }


    //produce random alphabet-numeric string with random length with the minimum index and maximum index
    const arr = new Array(size);
    for(let i = 0; i < size; i++) {
        let str = '';

        const strLen = start + Math.floor(Math.random() * (end - start));

        for(let i = 0; i <= strLen; i++) {
            str += ALPHA_NUM.charAt(Math.floor(Math.random() * ALPHA_NUM.length));
        }
        arr[i] = str;
    }

    return arr;
}

module.exports = randomStrings;

console.log(randomStrings(10, -5000, 100));
