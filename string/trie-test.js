const TrieST = require('./TrieST');
const TST = require('./TST');

//const st = new TrieST();
const st = new TST();

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    input += data;
});

process.stdin.on('end', () => {
    const words = input.trim().split(/\s+/);

    words.forEach((word, i) => {
        st.put(word, i);
    });


    console.log(words);
    console.log(st.keys());
    console.log(st.size() === st.keys().length);
    //console.log('after remove "she"');
    //st.remove('she');
    //console.log(st.keys());
    //console.log(st.size() == st.keys().length);

    st.keys().forEach((key) => {
        console.log(`${key}: ${st.get(key)}`);
    });

    console.log(`st.longestPrefixOf('shellsort'): ${st.longestPrefixOf('shellsort')}\n`)
    console.log(`st.longestPrefixOf('quicksort'): ${st.longestPrefixOf('quicksort')}\n`)

    console.log('st.keysWithPrefix("shor")');
    console.log(st.keysWithPrefix('shor'));
    
    console.log('\nst.keysWithPrefix("s")');
    console.log(st.keysWithPrefix('s'));

    console.log(st);

    //console.log(st.contains(''));
    //console.log(st.get(''));
    //st.put('abc');
    //console.log(st.size());
    //console.log(st.keys());

    //console.log(st.longestPrefixOf(''));
    console.log(st.longestPrefixOf('by the way'));
});
