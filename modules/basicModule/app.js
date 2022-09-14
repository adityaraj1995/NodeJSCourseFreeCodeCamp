const names = require('./names')
const printName = require('./printName')
 
// Here, in the add file the funtion is called. Hence  we get the output instantly
// Module is wrapped 
require('./add')

printName(names.akash)
printName(names.ananya)
