const http = require('http')

//using event emitter API
const server = http.createServer();

//emit requests event
// subscribe to it/ listen to it/ respond to it
server.on('request',(req,res)=>{
    console.log('working!')
    res.end('hello world')
})

//acts as eventemitter.emit
server.listen(5000)