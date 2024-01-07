const fs = require('fs');
const fsPromises = require('fs').promises;

const path = require('path');

const fileOps = async () => {
    
    try{
        //no need for callback, remove the error blocks.
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8');
        console.log(data);

        //delete file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), 'promiseWrite');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\npromiseAppend');

        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'),  path.join(__dirname, 'files', 'promiseComplete.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'),'utf8');
        console.log(newData);


    }
    catch(err){
        console.error(err);
    }
}

/* let v= ''
//asynchronous

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err,data) => {

    if(err){
        throw err;
    }
    console.log(data); //.toString() if no 'utf8'
    v = v + data;
    console.log(`v: ${v}`)
})

 */

fileOps();

const a = {
    aa: 3,

    add: (aaa)=>{
        a.aa=aaa+1;
       // return a.aa;
    }
}



const add1 = ({aa},callback) => {
    callback();
    return aa+1;
}

const i = (a, val,callback) => {
    a+=val;
    callback(a);
    return a;
}

/* let aaa = 3;

aaa = i(aaa, 3, (a)=>{
    console.log(`aaa: ${a}`);
})

console.log(`aaa: ${aaa}`);

console.log(a.aa);

a.add(a.aa)

console.log(a.aa);

add1(a, () => {
    console.log(a.aa);
});
 */

//writes to a new file.

//asynchronous, rewrite the whole file
/* fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'nice a', (err) => {

    if(err){
        throw err;
    }
    console.log('write complete');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nw', (err) => {

        if(err){
            throw err;
        }
        console.log('append complete');
        //rename
        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {

            if(err){
                throw err;
            }
            console.log('rename complete');
        })
    })
}) */


//asynchronous
/* fs.appendFile(path.join(__dirname, 'files', 'append.txt'), 'w', (err) => {

    if(err){
        throw err;
    }
    console.log('append complete');
})
 */
process.on('uncaughtException', err => {
    console.error(`uncaught: ${err}`);
    process.exit();
})