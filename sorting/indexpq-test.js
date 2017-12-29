const IndexPQ = require('./IndexPQ');
const sorted = require('./validate-sort');
const knuth = require('../fundamentals/random/knuth');

const SIZE = 10;

const comp = (x, y) => y - x;
const pq = new IndexPQ(SIZE, comp);

const keys = [];
const sortedKey = [];

const removeOrder = [];


let i;
for(i = 0; i < SIZE; i++) {
    removeOrder[i] = i;
    keys[i] = Math.floor(Math.random() * 100);
    pq.insert(i, keys[i]);
}

knuth.shuffle(removeOrder);
console.log(`keys: ${keys}`);
console.log(`removeOrder: ${removeOrder}`);

let j = 0;
for(let x of pq) {
    sortedKey[j++] = keys[x];
}
console.log(sortedKey);

for(i = 0; i < SIZE; i++) {
    console.log(removeOrder[i]);
    console.log(pq.remove(removeOrder[i]));

    j = 0;
    for(let x of pq) {
        sortedKey[j++] = keys[x];
    }
    console.log(sortedKey.slice(0, j));
    console.log(sorted(sortedKey.slice(0, j), comp));
}



/*

for(let i = 0; i < SIZE; i++) {
    keys[i] = Math.floor(Math.random() * 100);
    pq.changeKey(i, keys[i]);
}



i = 0;
while(!pq.isEmpty()) {
    console.log(`pq.size(): ${pq.size()}`);
    let minKey = pq.peekKey();
    let minIndex = pq.peekIndex();

    console.log(`min key = ${minKey}, min index = ${minIndex}`);
    console.log(`pq.remove() === pq.peekIndex(): ${pq.remove() === minIndex}`);
    console.log(`keys[minIndex] === minKey: ${keys[minIndex] === minKey}`);

    sortedKey[i++] = minKey;

    console.log();
}

console.log(`sortedKey sorted: ${sorted(sortedKey, comp)}`);

*/


