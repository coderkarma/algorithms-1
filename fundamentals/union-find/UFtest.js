const UF = require('./UF');
process.stdin.setEncoding('utf8')

let input = '';

process.stdin.on('data', (data) => {
    input += data;
});

process.stdin.on('end', () => {

    const lines = input.trim().split('\n');
    console.log('number of lines: ' + lines.length);

    let i = 0;
    const n = lines[i++];

    const uf = new UF(n);
    while(i < lines.length) {
        const line = lines[i++].split(' ');
        const p = line[0];
        const q = line[1];

        uf.union(p, q);
    }

    console.log(uf.size());
});


