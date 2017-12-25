const CC = require('./CC');
const graphReader = require('../graphReader');

graphReader(false, false)
    .then((g) => {
        console.log(g);

        const cc = new CC(g);

        console.log(cc);

        console.log('cc.count() ' + cc.count());
        console.log('cc.id(10) ' + cc.id(10));
        console.log('cc.size(2) ' + cc.size(2));
    })
    .catch(console.log.bind(console));
