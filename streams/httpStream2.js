const http = require('http')
const {createReadStream} = require('fs')

const server = http.createServer((req,res)=>{
    const dataStream = createReadStream('./big.txt')
    dataStream.on('open',()=>{
        dataStream.pipe(res)
    })
    dataStream.on('error',(err)=>{
        res.end(err)
    })

})

server.listen(5000)


//content length : chunked