const SCC = require('./SCC');
const graphReader = require('../graphReader');

graphReader(true, false)
    .then((g) => {
        console.log(g.toString());

        const scc = new SCC(g);

        //console.log(scc.stronglyConnected(0,1));
        //console.log(scc.stronglyConnected(1,2));
        //console.log(scc.stronglyConnected(2,3));
        //console.log(scc.stronglyConnected(3,4));
        //console.log(scc.stronglyConnected(4,5));
        //console.log(scc.stronglyConnected(5,6));
        //console.log(scc.stronglyConnected(6,7));
        //console.log(scc.stronglyConnected(7,8));

        //console.log(scc.stronglyConnected(undefined, undefined));
        //console.log(scc.stronglyConnected('4','4'));
        //console.log(scc.stronglyConnected(3.1231231, 3.76756756));
        //console.log(scc.stronglyConnected(5,5));

        const n = g.V;
        for(let v = 0; v < n; v++) {
            console.log(`scc.id(${v}): ${scc.id(v)}`);
        }
        console.log(`\n\nscc.count(): ${scc.count()}\n\n`);

        for(let v = 0; v < n; v++) {
            console.log(`scc.size(${v}): ${scc.size(v)}`);
        }

    })
    .catch(console.log.bind(console));
