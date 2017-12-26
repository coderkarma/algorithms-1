const BreadthFirstDirectedPaths = require('./BreadthFirstDirectedPaths');
const graphReader = require('../graphReader');

graphReader(true, false)
    .then((g) => {
        console.log(g.toString());

        const bfs = new BreadthFirstDirectedPaths(g, 3);

        const n = g.V;
        for(let v = 0; v < n; v++) {
            console.log('distance from 3 to ' + v + ': ' + bfs.distTo(v));
            console.log(v + ': ' + bfs.pathTo(v) + '\n');
        }

        //console.log(new BreadthFirstDirectedPaths(g, [3]));
        //console.log(new BreadthFirstDirectedPaths(g, 1,2,3));
    })
    .catch(console.log.bind(console));
