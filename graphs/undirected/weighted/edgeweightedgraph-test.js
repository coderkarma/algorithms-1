const EdgeWeightedGraph = require('./EdgeWeightedGraph');
const graphReader = require('../../graphReader');
const Edge = require('./Edge');

/*
    test:
    g.V
    g.E
    g.addEdge()
    g.adj()
    g.degree()
    g.edges()
    g.toString()


*/



graphReader(false, true)
    .then((g) => {
        console.log(g);
        console.log(g.toString());
        console.log(`g.V: ${g.V}`);
        console.log(`g.E: ${g.E}`);
        
        //g.addEdge(new Edge(100, 100, 100));
        g.addEdge(new Edge(4,4,4));
        g.addEdge(new Edge(4,4,4));

        console.log(g.toString());
        console.log(`g.V: ${g.V}`);
        console.log(`g.E: ${g.E}`);

        for(let i = 0; i < g.V; i++) {
            console.log(`g.degree(${i}): ${g.degree(i)}`);
        }

        let i = 0;
        for(let e of g.edges()) {
            console.log(e.toString());
            i++;
        }
        console.log(`number of edges: ${i}`);

        for(let i = 0; i < g.V; i++) {
            let str = '';
            for(let e of g.adj(i)) {
                str += `${e.toString()} `;
            }
            console.log(str);
        }

        //g.adj('0');
        //g.degree(9);
    })
    .catch(console.log.bind(console));
