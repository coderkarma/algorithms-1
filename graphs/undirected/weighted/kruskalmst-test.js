const KruskalMST = require('./KruskalMST');
const graphReader = require('../../graphReader');

graphReader(false, true)
    .then((g) => {
        console.log(g.toString());

        const kMST = new KruskalMST(g);

        for(let e of kMST.mst()) {
            console.log(e.toString());
        }
        console.log(kMST.mst().length);

        console.log(kMST.weight());
    })
    .catch(console.log.bind(console));
