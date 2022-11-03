const http = require('http')
const {readFileSync} = require('fs')

const server = http.createServer((req,res)=>{
    const data = readFileSync('./big.txt','utf-8')
    res.end(data)

})

server.listen(5000)

//content length : size in kb