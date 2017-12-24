const LinkedStack = require('./LinkedStack');
const ResizingArrayStack = require('./ResizingArrayStack');


const linkedStack = new LinkedStack();
const arrayStack = new ResizingArrayStack();
const stack = [];


const SIZE = 10000000;
let i;

i = 0;
console.time(`LinkedStack push(): ${SIZE} times`);
while(i++ < SIZE) {
    linkedStack.push(i);
}
console.timeEnd(`LinkedStack push(): ${SIZE} times`);

console.time(`LinkedStack pop(): ${SIZE} times`);
while(linkedStack.size()) {
    linkedStack.pop();
}
console.timeEnd(`LinkedStack pop(): ${SIZE} times`);



i = 0;
console.time(`ResizingArrayStack push(): ${SIZE} times`);
while(i++ < SIZE) {
    arrayStack.push(i);
}
console.timeEnd(`ResizingArrayStack push(): ${SIZE} times`);

console.time(`ResizingArrayStack pop(): ${SIZE} times`);
while(arrayStack.size()) {
    arrayStack.pop();
}
console.timeEnd(`ResizingArrayStack pop(): ${SIZE} times`);





i = 0;
console.time(`Stack push(): ${SIZE} times`);
while(i++ < SIZE) {
    stack.push(i);
}
console.timeEnd(`Stack push(): ${SIZE} times`);

console.time(`Stack pop(): ${SIZE} times`);
while(stack.length) {
    stack.pop();
}
console.timeEnd(`Stack pop(): ${SIZE} times`);

