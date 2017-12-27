const Digraph = require('./Digraph');
const graphReader = require('../../graphReader');

if(process.argv.length < 3) {
    graphReader(true, false)
        .then((g) => {
            console.log(g);

            console.log('g.V: ' + g.V);
            console.log('g.E: ' + g.E);
            //console.log(g.adj(2.3));
            //console.log(g.adj('3'));
            console.log('g.indegree(5): ' + g.indegree(5));
            console.log('g.outdegree(5): ' + g.outdegree(5));

            console.log(g.reverse());
            console.log(g.toString());
            console.log(g.reverse().toString());
        })
        .catch(console.log.bind(console));
} else {
    graphReader(true, false, process.argv[2])
        .then((g) => {
            console.log(g);
        })
        .catch(console.log.bind(console));
}
