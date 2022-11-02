const path = require('path')
//separator which separates path contents
console.log(path.sep)

const filePath = path.join('modules','pathModule','pathBasic.js')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'modules','pathModule','pathBasic.js')
console.log(absolute)


//Output
// /
// modules/pathModule/pathBasic.js
// pathBasic.js
// /home/aditya/Documents/new code/freeCodeCamp_Node/modules/pathModule/modules/pathModule/pathBasic.js