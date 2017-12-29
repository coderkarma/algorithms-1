const graphReader = require('../graphReader');
const DirectedCycle = require('./DirectedCycle');


//cycle detect on Digraph
graphReader(true, false)
    .then((g) => {
        console.log(g.toString());

        console.log(new DirectedCycle(g).cycle());
    })
    .catch(console.log.bind(console));



/*
//cycle detect on EdgeWeightedDigraph
graphReader(true, true)
    .then((g) => {
        //console.log(g.toString());

        console.log(new DirectedCycle(g).cycle());
    })
    .catch(console.log.bind(console));
*/
