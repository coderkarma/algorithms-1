const LazyPrimMST = require('./LazyPrimMST');
const PrimMST = require('./PrimMST');
const KruskalMST = require('./KruskalMST');
const graphReader = require('../../graphReader');

graphReader(false, true)
    .then((g) => {
        //console.log(g.toString());

        const lazyPrim = new LazyPrimMST(g);

        console.log('layprim mst length: ' + lazyPrim.mst().length);
        console.log('layprim weight: ' + lazyPrim.weight());

        const prim = new PrimMST(g);;
        console.log('prim mst length: ' + prim.mst().length);
        console.log('prim weight: ' + prim.weight());
        
        const kruskal = new KruskalMST(g);;
        console.log('kruskal mst length: ' + kruskal.mst().length);
        console.log('kruskal weight: ' + kruskal.weight());

        const minComp = (x, y) => x.weight() - y.weight();

        const p = prim.mst().sort(minComp);
        const l = lazyPrim.mst().sort(minComp);
        const k = kruskal.mst().sort(minComp);


console.log('\n\n');

        let equal = true;
        for(let i = 0; i < p.length; i++) {
            if(p[i] !== k[i]) {

                console.log(p[i]);
                console.log(k[i]);

                console.log(i);
                equal = false;
                break;
            }
        }

        console.log('mst: ' + equal);
    })
    .catch(console.log.bind(console));
