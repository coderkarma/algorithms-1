const lsdSort = require('./lsdSort');
const msdSort = require('./msdSort');
const qSort = require('./quick3string');
const randomStrings = require('./randomStrings');


console.log('\n\n');
const txt = randomStrings(1000000, 9, 10);


const txt1 = txt.slice();
console.time('lsd-sort');
lsdSort(txt1, 10);
console.timeEnd('lsd-sort');
console.log(`sorted: ${sorted(txt1)}`);

const txt2 = txt.slice();
console.time('msd-sort');
msdSort(txt2);
console.timeEnd('msd-sort');
console.log(`sorted: ${sorted(txt2)}`);

const txt3 = txt.slice();
console.time('quick3string-sort');
qSort(txt3);
console.timeEnd('quick3string-sort');
console.log(`sorted: ${sorted(txt3)}`);

const txt4 = txt.slice();
console.time('sort');
txt4.sort();
console.timeEnd('sort');
console.log(`sorted: ${sorted(txt4)}`);

let equal = true;
for(let i = 0; i < txt.length; i++) {
    if(txt1[i] !== txt2[i] || txt2[i] !== txt3[i] || txt3[i] !== txt4[i]) {
        equal = false;
        break;
    }
}
console.log(equal);




function sorted(txt) {
    const n = txt.length;
    for(let i = 1; i < n; i++) {
        if(txt[i - 1] > txt[i]) {
            return false;
        }
    }

    return true;
}
