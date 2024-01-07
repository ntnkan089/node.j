// node runs on a server, not a browser -> backend, not fronten.
console.log('a')
// global (smaller but somewhat similar) instead of window object (browser, window.height etc) unlike vanilla Js.

//console.log(global)


//common modules, CommonJS modules (related to OS and file system) instead of ES6 modules like vanilla JS.
const os = require('os')
const path = require('path')
const math = require('./math')
const {add, subtract} = require('./math')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))//extension of file.

console.log(path.parse(__filename))

console.log(math.add(2,3))
console.log(subtract(3,3))

//missing some js apis like fetch, just import.