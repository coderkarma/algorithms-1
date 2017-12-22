const insertionSort = require('./insertionSort');
const selectionSort = require('./selectionSort');
const mergeSort = require('./mergeSort');
const quick = require('./quick');
const quick3way = require('./quick3way');
const PQ = require('./PQ');

const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const arr5 = [];
const arr6 = [];
for(let i = 0; i < 20; i++) {
    arr6[i] = arr5[i] = arr4[i] = arr3[i] = arr2[i] = arr1[i] = Math.floor(Math.random() * 100);
}

insertionSort(arr1);
console.log(arr1);

insertionSort(arr1, (x, y) => y - x);
console.log(arr1);


selectionSort(arr2);
console.log(arr2);

selectionSort(arr2, (x, y) => y - x);
console.log(arr2);

mergeSort(arr3);
console.log(arr3);

console.log(quick.select(arr4, 5));
console.log(arr4);

quick.sort(arr4);
console.log(arr4);


quick3way(arr5);
console.log(arr5);


const pq = new PQ((x, y) => y - x);//PQ(1, (x, y) => y - x);
console.log(arr6);
arr6.forEach((x) => {
    pq.insert(x);
});

while(!pq.isEmpty()) {
    console.log(pq.remove());
}



