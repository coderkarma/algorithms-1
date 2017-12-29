const NonrecursiveDirectedDFS = require('./NonrecursiveDirectedDFS');
const graphReader = require('../graphReader');

graphReader(true, false)
    .then((g) => {
        console.log(g);

        const dfs = new NonrecursiveDirectedDFS(g, 0);

        console.log(dfs);

        for(let v of dfs.reachableV()) {
            console.log(v);
            console.log(`Has ${v} been visited: ${dfs.visited(v)}`);
        }

        console.log(new NonrecursiveDirectedDFS(g, [1][Symbol.iterator]()));

        console.log(new NonrecursiveDirectedDFS(g, [2]));

        console.log(new NonrecursiveDirectedDFS(g, 3, 4, 5));

        //new NonrecursiveDirectedDFS(g, 1.2);
        //new NonrecursiveDirectedDFS(g, '3');
        //new NonrecursiveDirectedDFS(g, NaN);
        //new NonrecursiveDirectedDFS(g, null);

        
    })
    .catch(console.log.bind(console));
