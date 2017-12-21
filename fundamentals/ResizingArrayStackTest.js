const ResizingArrayStack = require('./ResizingArrayStack');

//const stack1 = new ResizingArrayStack('asdf');
//const stack1 = new ResizingArrayStack(Infinity);
//const stack1 = new ResizingArrayStack(NaN);

const stack1 = new ResizingArrayStack(-10);

console.log('\npeek() from empty stack');
console.log(stack1.peek());
console.log('\npop() item from emtpy stack');
console.log(stack1.pop());
console.log('\nsize() of the stack');
console.log(stack1.size());
console.log('\npush() with no argument, and size() of the stack');
stack1.push();
console.log(stack1.size());

console.log('\npush: 1, null, NaN, "asdf", {}, 3, 4, 5, 6');
stack1.push(1);
stack1.push(null);
stack1.push(NaN);
stack1.push('asdf');
stack1.push({});
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.push(6);

console.log('\n=====test iterator======');
console.log(`stack size is ${stack1.size()}`);
for(let x of stack1) {
    console.log(x);
}

/*
console.log('\n==== pop() and isEmpty() ina while loop test====== ');
while(!stack1.isEmpty()) {
    console.log(stack1.pop());
}
*/

console.log('\n==== pop() and size() in a while loop test====== ');
while(stack1.size()) {
    console.log(stack1.pop());
}

console.log('\nafter pop everything size() of the stack');
console.log(stack1.size());


let SIZE = 1000000;
let i = 0;

console.log('\n==== performance test ====');

console.log('ResizingArrayStack push() and pop()');
console.time(`stack1 push() ${SIZE} times`);
while(i++ < SIZE) {
    stack1.push(i);
}
console.timeEnd(`stack1 push() ${SIZE} times`);


console.time(`stack1 pop() ${SIZE} times`);
while(stack1.size()) {
    stack1.pop();
}
console.timeEnd(`stack1 pop() ${SIZE} times`);



/*
    use array api push() and pop()
*/
const stack2 = [];
i = 0;

console.log('\nUse array api push() and pop()');
console.time(`stack2 push() ${SIZE} times`);
while(i++ < SIZE) {
    stack2.push(i);
}
console.timeEnd(`stack2 push() ${SIZE} times`);


console.time(`stack2 pop() ${SIZE} times`);
while(stack2.length) {
    stack2.pop();
}
console.timeEnd(`stack2 pop() ${SIZE} times`);
