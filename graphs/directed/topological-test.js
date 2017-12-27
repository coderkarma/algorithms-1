const Topological = require('./Topological');
const graphReader = require('../graphReader');


const DepthFirstOrder = require('./DepthFirstOrder');

graphReader(true, false)
    .then((g) => {
       console.log(g.toString());

        const topological = new Topological(g);

        console.log(topological);

        console.log(`topological.hasOrder(): ${topological.hasOrder()}`);
        
        for(let v of topological.order()) {
            console.log(v);
        }
    })
    .catch(console.log.bind(console));
