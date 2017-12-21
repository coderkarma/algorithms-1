const LinkedQueue = require('./LinkedQueue');

const q = new LinkedQueue();

console.log('\nsize() of the empty queue');
console.log('expected: 0, result: ' + q.size());

console.log('\npeek() from the empty queue');
console.log('expected: undefined, result: ' + q.peek());

console.log('\ndequeue() from the empty queue');
console.log('expected: undefined, result: ' + q.dequeue());


console.log('\nsize() after dequeue() from the empty queue');
console.log('expected: 0, result: ' + q.size());

console.log('\nisEmpty() from the empty queue');
console.log('expected: true, result: ' + q.isEmpty());

console.log('isEmpty(), size() and peek() of the queue after enqueue() with no arg to the queue');
q.enqueue();
console.log('expected: false 1 undefined, results: ' + q.isEmpty() + " " + q.size() + " " + q.peek());

q.enqueue({});
q.enqueue(NaN);
q.enqueue(35);
q.enqueue("asdf");

console.log('\n===========iterator test==========');
console.log('expected size: 5, result: ' + q.size());
console.log('exptected: undefined, {}, NaN, 35, "asdf"');
for(let x of q) {
    console.log(x);
}

/*
console.log('\n========= dequeue() and test !isEmpty() in while loop ========');
while(!q.isEmpty()) {
    console.log(q.dequeue());
}
*/

console.log('\n========= dequeue() and test size() in while loop ========');
while(q.size()) {
    console.log(q.dequeue());
}


console.log('\n======= after dequeu() everything, the size() and isEmpty() of the queue');
console.log('exptected: 0 true, result: ' + q.size() + ' ' + q.isEmpty());





console.log('\n\n ====performance test =====');
const SIZE = 100000;
let i;


/*
    Linked Queue with enqueue() and dequeue()
*/
i = 0;
console.time(`LinkedQueue enqueue(): ${SIZE} times`);
while(i++ < SIZE) {
    q.enqueue(i);
}
console.timeEnd(`LinkedQueue enqueue(): ${SIZE} times`);


console.time(`LinkedQueue dequeue(): ${SIZE} times`);
while(q.size()) {
    q.dequeue();
}
console.timeEnd(`LinkedQueue dequeue(): ${SIZE} times`);

/*
    Library Queue with shift() and unshift();
*/
const libraryQ = [];
i = 0;
console.time(`LibraryQueue enqueue(): ${SIZE} times`);
while(i++ < SIZE) {
    libraryQ.push(i);
}
console.timeEnd(`LibraryQueue enqueue(): ${SIZE} times`);


console.time(`LibraryQueue dequeue(): ${SIZE} times`);
while(libraryQ.length) {
    libraryQ.shift();
}
console.timeEnd(`LibraryQueue dequeue(): ${SIZE} times`);
