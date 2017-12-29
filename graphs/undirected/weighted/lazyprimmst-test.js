const LazyPrimMST = require('./LazyPrimMST');
const graphReader = require('../../graphReader');

graphReader(false, true)
    .then((g) => {
        console.log(g.toString());

        const prim = new LazyPrimMST(g);

        console.log(prim.mst().length);
        console.log(prim.weight());
    })
    .catch(console.log.bind(console));
