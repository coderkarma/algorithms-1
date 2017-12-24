'use strict';


function graphReader(filename) {
    if(!filename) {
        fs.readFile(filename, 'utf8', (err, data) => {
        
        });
    } else {
        process.stdin.on('data', (data) => {
        });
    }
}

function buildGraph(input) {
    

    return g;
}


module.exports = graphReader;


/*
    const fsPromiseFactory = asynFnToPromiseFactory(fs);
*/

function asyncFnToPromiseFactory(asyncFn) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            asyncFn(...args, (err, ...results) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(results.length > 1 ? results : results[0]);
                }
            });
        });
    }
}
