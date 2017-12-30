const BellmanFordSP = require('./BellmanFordSP');
const graphReader = require('../../graphReader');

graphReader(true, true)
    .then((g) => {
        console.log(g.toString());

        const sp = new BellmanFordSP(g, 0);

        if(!sp.hasNegativeCycle()) {
            for(let v = 0; v < g.V; v++) {
                let str = `${v}(${sp.distTo(v)}): `;
                for(let e of sp.pathTo(v)) {
                    str += `${e.toString()} `;
                }
                console.log(str);
            }
        } else {
            let str = ``;
            for(let e of sp.negativeCycle()) {
                str += ` ${e.toString()}`;
            }
            console.log(str);
        }
    })
    .catch(console.log.bind(console));
