const graphReader = require('./graphReader');




graphReader(false, false)
    .then((g) => {
        console.log('============== from stdin ======================');
        console.log(g.toString());
    })
    .catch(console.log.bind(console));



graphReader(false, false, process.argv[2])
    .then((g) => {
        console.log('\n=============== from file ========================');
        console.log(g.toString());
    })
    .catch(console.log.bind(console));
