const graphReader = require('../../graphReader');
const AcyclicSP = require('./AcyclicSP');
const AcyclicLP = require('./AcyclicLP');


graphReader(true, true)
    .then((g) => {
        console.log(g.toString());

        console.log('SHORTEST PATH=====================');
        const sp = new AcyclicSP(g, parseInt(process.argv[2]));

        for(let v = 0; v < g.V; v++) {
            console.log(`sp.distTo(${v}): ${sp.distTo(v)}`);
            console.log(`sp.hasPathTo(${v}): ${sp.hasPathTo(v)}`);

            if(sp.hasPathTo(v)) {
                let str = '';
                for(let e of sp.pathTo(v)) {
                    str += ` ${e.toString()}`;
                }
                console.log(str);
            }
            console.log('================================');
        }
        
        console.log('\n\nLONGEST PATH=====================');

        const lp = new AcyclicLP(g, parseInt(process.argv[2]));

        for(let v = 0; v < g.V; v++) {
            console.log(`lp.distTo(${v}): ${lp.distTo(v)}`);
            console.log(`lp.hasPathTo(${v}): ${lp.hasPathTo(v)}`);

            if(lp.hasPathTo(v)) {
                let str = '';
                for(let e of lp.pathTo(v)) {
                    str += ` ${e.toString()}`;
                }
                console.log(str);
            }
            console.log('================================');
        }
    })
    .catch(console.log.bind(console));
