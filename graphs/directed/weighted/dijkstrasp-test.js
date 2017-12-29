const graphReader = require('../../graphReader');
const DijkstraSP = require('./DijkstraSP');



graphReader(true, true)
    .then((g) => {
        console.log(g.toString());

        const sp = new DijkstraSP(g, 0);

        for(let v = 0; v < g.V; v++) {
            console.log(`sp.hasPathTo(${v}): ${sp.hasPathTo(v)}`);
            console.log(`sp.distTo(${v}): ${sp.distTo(v)}`);

            let str = '';
            for(let e of sp.pathTo(v)) {
                str += ` ${e.toString()}`;
            }
            console.log(str);
            console.log('===================================');
        }
    })
    .catch(console.log.bind(console));
