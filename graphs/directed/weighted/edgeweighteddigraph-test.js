const EdgeWeightedDigraph = require('./EdgeWeightedDigraph');
const DirectedEdge = require('./DirectedEdge');
const graphReader = require('../../graphReader');

/*
    adj(v)
    indegree(v)
    outdegree(v)
    addEdge(e)
    g.V
    g.E
    g.edges()
    g.toString()
*/


graphReader(true, true)
    .then((g) => {
        console.log(g.toString());

        console.log(`indegree 3: ${g.indegree(3)}`);
        console.log(`outdegree 3: ${g.outdegree(3)}`);
        //g.indegree('4');
        //g.outdegree(13.555);

        console.log(`g.V: ${g.V}`);
        console.log(`g.E: ${g.E}`);

        console.log(g.edges());

        //g.addEdge(new DirectedEdge());
        //g.addEdge(new DirectedEdge(200, 100, Infinity));
    })
    .catch(console.log.bind(console));
