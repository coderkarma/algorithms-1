const DepthFirstDirectedPaths = require('./DepthFirstDirectedPaths');
const graphReader = require('../graphReader');

graphReader(true, false)
    .then((g) => {
        console.log(g.toString());

        const dfs = new DepthFirstDirectedPaths(g, 3);

        const n = g.V;
        for(let v = 0; v < n; v++) {
            console.log(v + ': ' + dfs.pathTo(v));
        }

        console.log(dfs);
    })
    .catch(console.log.bind(console));
