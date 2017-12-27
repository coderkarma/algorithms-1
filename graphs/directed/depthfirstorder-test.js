const DepthFirstOrder = require('./DepthFirstOrder');
const graphReader = require('../graphReader');

/*
    pre()
    pre(v);
    post();
    post(v);
    reversePost();
*/


//DepthFirstOrder on Digraph
graphReader(true, false)
    .then((g) => {
        console.log(g.toString());

        const dfo = new DepthFirstOrder(g);
        console.log(dfo);

        let str = 'reverse post order:';
        for(let v of dfo.reversePost()) {
            str += ` ${v}`;
        }
        console.log(str);

        //console.log(`dfo.pre(): ${dfo.pre(3.4)}`);
        //console.log(`dfo.pre(): ${dfo.pre('3')}`);
        //console.log(`dfo.pre(): ${dfo.pre(null)}`);
        //console.log(`dfo.pre(): ${dfo.pre(undefined)}`);
        console.log(`dfo.pre(4): ${dfo.pre(4)}`);


        //console.log(`dfo.post(): ${dfo.post(3.4)}`);
        //console.log(`dfo.post(): ${dfo.post('5')}`);
        //console.log(`dfo.post(): ${dfo.post({})}`);
        //console.log(`dfo.post(): ${dfo.post(NaN)}`);
        console.log(`dfo.post(2): ${dfo.post(2)}`);

        let post = 'post order:';
        for(let v of dfo.post()) {
            post += ` ${v}`;
        }
        console.log(post);
        
        
        let pre = 'pre order:';
        for(let v of dfo.pre()) {
            pre += ` ${v}`;
        }
        console.log(pre);
    })
    .catch(console.log.bind(console));


/*
//DepthFirstOrder on EdgeWeightedDigraph
graphReader(true, true)
    .then((g) => {
        console.log(g.toString());

        const dfo = new DepthFirstOrder(g);
        console.log(dfo);

        let str = 'reverse post order:';
        for(let v of dfo.reversePost()) {
            str += ` ${v}`;
        }
        console.log(str);

        //console.log(`dfo.pre(): ${dfo.pre(3.4)}`);
        //console.log(`dfo.pre(): ${dfo.pre('3')}`);
        //console.log(`dfo.pre(): ${dfo.pre(null)}`);
        //console.log(`dfo.pre(): ${dfo.pre(undefined)}`);
        console.log(`dfo.pre(4): ${dfo.pre(4)}`);


        //console.log(`dfo.post(): ${dfo.post(3.4)}`);
        //console.log(`dfo.post(): ${dfo.post('5')}`);
        //console.log(`dfo.post(): ${dfo.post({})}`);
        //console.log(`dfo.post(): ${dfo.post(NaN)}`);
        console.log(`dfo.post(2): ${dfo.post(2)}`);

        let post = 'post order:';
        for(let v of dfo.post()) {
            post += ` ${v}`;
        }
        console.log(post);
        
        
        let pre = 'pre order:';
        for(let v of dfo.pre()) {
            pre += ` ${v}`;
        }
        console.log(pre);
    })
    .catch(console.log.bind(console));
*/
