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
        console.log('5 and 5 conntected: ' + cc.connected(5, 5));
        console.log('5 and 6 conntected: ' + cc.connected(5, 6));
        console.log('6 and 7 conntected: ' + cc.connected(6, 7));
        console.log('{} and 3 connected: ' + cc.connected({}, 3));
    })
    .catch(console.log.bind(console));
