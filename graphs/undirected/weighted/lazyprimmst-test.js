const LazyPrimMST = require('./LazyPrimMST');
const KruskalMST = require('./KruskalMST');
const graphReader = require('../../graphReader');

graphReader(false, true)
    .then((g) => {
        //console.log(g.toString());

        const prim = new LazyPrimMST(g);

        console.log(prim.mst().length);
        console.log(prim.weight());

        const kruskal = new KruskalMST(g);
        console.log(kruskal.weight());

        console.log(Math.abs(kruskal.weight() - prim.weight()) < Number.EPSILON);

        console.log(`weight: ${prim.weight() === kruskal.weight()}`);
        console.log(`mst length: ${prim.mst().length === kruskal.mst().length}`);

        const minComp = (x, y) => x.weight() - y.weight();

        prim.mst().sort(minComp);
        kruskal.mst().sort(minComp);

        let equal = true;
        for(let i = 0; i < prim.mst().length; i++) {
            if(prim.mst()[i] !== kruskal.mst()[i]) {

    console.log(prim.mst()[i]);
    console.log(kruskal.mst()[i]);

                console.log(i);
                equal = false;
                break;
            }
        }

        console.log('mst: ' + equal);
    })
    .catch(console.log.bind(console));
