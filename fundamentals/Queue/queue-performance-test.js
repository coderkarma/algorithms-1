const LinkedQueue = require('./LinkedQueue');
const ResizingArrayQueue = require('./ResizingArrayQueue');


const linkedQ = new LinkedQueue();
const arrayQ = new ResizingArrayQueue();
const Q = [];

const SIZE = 100000;
let i;



/*
    Linked List Queue
*/
i = 0;
console.time(`LinkedQ enqueue(): ${SIZE} times`);
while(i++ < SIZE) {
    linkedQ.enqueue(i);
}
console.timeEnd(`LinkedQ enqueue(): ${SIZE} times`);

console.time(`LinkedQ dequeue(): ${SIZE} times`);
while(linkedQ.size()) {
    linkedQ.dequeue();
}
console.timeEnd(`LinkedQ dequeue(): ${SIZE} times`);


/*
    Resizing Array Queue
*/
i = 0;
console.time(`ResizingArrayQ enqueue(): ${SIZE} times`);
while(i++ < SIZE) {
    arrayQ.enqueue(i);
}
console.timeEnd(`ResizingArrayQ enqueue(): ${SIZE} times`);

console.time(`ResizingArrayQ dequeue(): ${SIZE} times`);
while(arrayQ.size()) {
    arrayQ.dequeue();
}
console.timeEnd(`ResizingArrayQ dequeue(): ${SIZE} times`);



/*
    Queue implemented by Array.prototype.push() and Array.prototype.shift();
*/
i = 0;
console.time(`Q push(): ${SIZE} times`);
while(i++ < SIZE) {
    Q.push(i);
}
console.timeEnd(`Q push(): ${SIZE} times`);

console.time(`Q shift(): ${SIZE} times`);
while(Q.length) {
    Q.shift();
}
console.timeEnd(`Q shift(): ${SIZE} times`);


/*
    Queue implemented by Array.prototype.unshift() and Array.prototype.pop();
*/
i = 0;
console.time(`Q unshift(): ${SIZE} times`);
while(i++ < SIZE) {
    Q.unshift(i);
}
console.timeEnd(`Q unshift(): ${SIZE} times`);

console.time(`Q pop(): ${SIZE} times`);
while(Q.length) {
    Q.pop();
}
console.timeEnd(`Q pop(): ${SIZE} times`);
