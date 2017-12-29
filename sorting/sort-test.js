const sorted = require('./validate-sort');
const insertionSort = require('./insertionSort');
const selectionSort = require('./selectionSort');
const mergeSort = require('./mergeSort');
const quick = require('./quick');
const quick3way = require('./quick3way');
const PQ = require('./PQ');

const arr1 = [];
const arr1e = [];
const arr2 = [];
const arr2e = [];
const arr3 = [];
const arr3e = [];
const arr4 = [];
const arr4e = [];
const arr5 = [];
const arr5e = [];
const arr6 = [];
const arr6e = [];
const arr7 = [];
const arr7e = [];
const SIZE = 100000;
let i;
for(i = 0; i < SIZE; i++) {
    arr7[i] = arr6[i] = arr5[i] = arr4[i] = arr3[i] = arr2[i] = arr1[i] = Math.floor(Math.random() * (SIZE / 3));
    arr7e[i] = arr6e[i] = arr5e[i] = arr4e[i] = arr3e[i] = arr2e[i] = arr1e[i] = 0;
}

const incComp = (x, y) => x - y;
const decComp = (x, y) => y - x;
/*
console.time('insertionSort arr1 increase order');
insertionSort(arr1, incComp);
console.timeEnd('insertionSort arr1 increase order');
console.log(`insertionSort(arr1, incComp) is sorted: ${sorted(arr1, incComp)}`);

console.time('insertionSort arr1 decrease order');
insertionSort(arr1, decComp);
console.timeEnd('insertionSort arr1 decrease order');
console.log(`insertionSort(arr1, decComp) is sorted: ${sorted(arr1, decComp)}`);

console.time('insertionSort arr1e');
insertionSort(arr1e, incComp);
console.timeEnd('insertionSort arr1e');
console.log(`insertionSort(arr1e, incComp) is sorted: ${sorted(arr1e, incComp)}`);

console.log();

console.time('selectionSort arr2 increase order');
selectionSort(arr2, incComp);
console.timeEnd('selectionSort arr2 increase order');
console.log(`selectionSort(arr2, incComp) is sorted: ${sorted(arr2, incComp)}`);

console.time('selectionSort arr2 decrease order');
selectionSort(arr2, decComp);
console.timeEnd('selectionSort arr2 decrease order');
console.log(`selectionSort(arr2, decComp) is sorted: ${sorted(arr2, decComp)}`);

console.time('selectionSort arr2e');
selectionSort(arr2e, incComp);
console.timeEnd('selectionSort arr2e');
console.log(`selectionSort(arr2e, incComp) is sorted: ${sorted(arr2e, incComp)}`);
*/

console.log();

console.time('mergeSort arr3 increase order');
mergeSort(arr3, incComp);
console.timeEnd('mergeSort arr3 increase order');
console.log(`arr3 is sorted: ${sorted(arr3, incComp)}`);

console.time('mergeSort arr3 decrease order');
mergeSort(arr3, decComp);
console.timeEnd('mergeSort arr3 decrease order');
console.log(`arr3 is sorted: ${sorted(arr3, decComp)}`);

console.time('mergeSort arr3e increase order');
mergeSort(arr3e, incComp);
console.timeEnd('mergeSort arr3e increase order');
console.log(`arr3e is sorted: ${sorted(arr3e, incComp)}`);


console.log();


console.time('quickSort arr4 increase order');
quick.sort(arr4, incComp);
console.timeEnd('quickSort arr4 increase order');
console.log(`arr4 is sorted: ${sorted(arr4, incComp)}`);


console.time('quickSort arr4 decrease order');
quick.sort(arr4, decComp);
console.timeEnd('quickSort arr4 decrease order');
console.log(`arr4 is sorted: ${sorted(arr4, decComp)}`);


console.time('quickSort arr4e increase order');
quick.sort(arr4e, incComp);
console.timeEnd('quickSort arr4e increase order');
console.log(`arr4e is sorted: ${sorted(arr4e, incComp)}`);

console.log();


console.time('quick-select arr5 decrease order');
const positionX = 5;
const x = quick.select(arr5, positionX, decComp);
console.timeEnd('quick-select arr5 decrease order');
console.log(`quick.select() return correct data: ${x === arr4[positionX]}`);


console.time('quick-select arr5e increase order');
const positionY = 5;
const y = quick.select(arr5, positionY, incComp);
console.timeEnd('quick-select arr5e increase order');


console.log();



console.time('quick3waySort arr6 increase order');
quick3way(arr6, incComp);
console.timeEnd('quick3waySort arr6 increase order');
console.log(`arr6 is sorted: ${sorted(arr6, incComp)}`);

console.time('quick3waySort arr6 decrease order');
quick3way(arr6, decComp);
console.timeEnd('quick3waySort arr6 decrease order');
console.log(`arr6 is sorted: ${sorted(arr6, decComp)}`);

console.time('quick3waySort arr6e increase order');
quick3way(arr6e, incComp);
console.timeEnd('quick3waySort arr6e increase order');
console.log(`arr6e is sorted: ${sorted(arr6e, incComp)}`);

console.log();



console.time('pqSort arr7 increase order');
let pq = new PQ(incComp);
arr7.forEach((x) => {
    pq.insert(x);
});
i = 0;

/*
for(let x of pq) {
    arr7[i++] = x;
}
*/
/*
while(!pq.isEmpty()) {
    arr7[i++] = pq.remove();
}*/

while(!pq.isEmpty()) {
    arr7[i++] = pq.peek();
    pq.remove();
}

console.timeEnd('pqSort arr7 increase order');
console.log(`arr7 is sorted: ${sorted(arr7, incComp)}`);


pq = new PQ(decComp);
console.time('pqSort arr7 decrease order');
arr7.forEach((x) => {
    pq.insert(x);
});
i = 0;
while(!pq.isEmpty()) {
    arr7[i++] = pq.remove();
}
console.timeEnd('pqSort arr7 decrease order');
console.log(`arr7 is sorted: ${sorted(arr7, decComp)}`);



console.time('pqSort arr7e increase order');
pq = new PQ(incComp);
arr7e.forEach((x) => {
    pq.insert(x);
});
i = 0;
while(!pq.isEmpty()) {
    arr7e[i++] = pq.remove();
}
console.timeEnd('pqSort arr7e increase order');
console.log(`arr7e is sorted: ${sorted(arr7e, incComp)}`);



