const logEvents = require('./logEvents')

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {};


//initialize obj, weird but doc.

const myEmitter = new MyEmitter();

//add listene for log even, evoked every time named event (log in this case), is emitte.
myEmitter.on('log', (msg)=>logEvents(msg));

//myEmitter.emit('log','log event emitted')

setTimeout(()=>{
    //emit even, (eventname, msg)
    myEmitter.emit('log','log event emitted')
}, 2000)
