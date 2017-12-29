const Cycle = require('./Cycle');
const graphReader = require('../graphReader');

graphReader(false, false)
    .then((g) => {
        const finder = new Cycle(g);
        console.log(finder.cycle());
    })
    .catch(console.log.bind(console));
