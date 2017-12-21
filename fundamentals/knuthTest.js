/*
    Test if knuth.shuffle and knuth.shuffleAlternate shuffle the array in uniformly random order
*/

const knuth = require('./knuth');

let n = 10;
const arr = [0,1,2,3,4,5,6,7,8,9];
const counter1 = [];
const counter2 = [];

for(let i = 0; i < 10; i++) {
    counter1[i] = new Array(n).fill(0);
    counter2[i] = new Array(n).fill(0);
}

const size = 100000;


let temp = arr.slice();
console.log('\nknuth.shuffle');
console.log(knuth.shuffle(temp));

for(let i = 0; i < size; i++) {
    temp = arr.slice();
    knuth.shuffle(temp);

    temp.forEach((num, i) => {
        counter1[num][i]++;
    });
}

temp = arr.slice();
console.log('\nknuth.shuffleAlternate:');
console.log(knuth.shuffleAlternate(temp));
for(let i = 0; i < size; i++) {
    temp = arr.slice();
    knuth.shuffleAlternate(temp);

    temp.forEach((num, i) => {
        counter2[num][i]++;
    });
}

console.log('\nknuth.shuffle: uniformly random test');
console.log(counter1);

console.log('\nknuth.shuffleAlternate: uniformly random test');
console.log(counter2);
