const fs = require('fs')

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new-lorem.txt');


//listen for data coming from strea.
/* rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
})
 */


rs.pipe(ws);// does the same thing as rs.on...