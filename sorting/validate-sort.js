function sorted(arr, comp) {
    const n = arr.length;
    for(let i = 1; i < n; i++) {
        if(comp(arr[i - 1], arr[i]) > 0) {
            return false;
        }
    }

    return true;
}

module.exports = sorted;



/*
const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = [1,2,3,4,5,6,7,8,9,0];

const arr3 = [9,8,7,6,5,4,3,2,1];
const arr4 = [9,8,7,6,5,4,3,2,1,111];



console.log('=============increase order===============');
console.log(arr1);
console.log(sorted(arr1, (x, y) => x - y));
console.log(arr2);
console.log(sorted(arr2, (x, y) => x - y));

console.log('=============decrease order===============');
console.log(arr3);
console.log(sorted(arr3, (x, y) => y - x));
console.log(arr4);
console.log(sorted(arr4, (x, y) => y - x));


console.log('==========empty array============');
console.log(sorted([], (x, y) => x - y));
console.log('==========one element array============');
console.log(sorted([1], (x, y) => x - y));
console.log('==========multiple elements with same value============');
console.log(sorted([1,1,1,1,1,1,1,1,1,1,1,1,1], (x, y) => x - y));



console.log('==========empty array============');
console.log(sorted([], (x, y) => y - x));
console.log('==========one element array============');
console.log(sorted([1], (x, y) => y - x));
console.log('==========multiple elements with same value============');
console.log(sorted([1,1,1,1,1,1,1,1,1,1,1,1,1], (x, y) => y - x));
*/
