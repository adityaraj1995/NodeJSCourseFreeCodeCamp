const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url === '/'){
        res.end('Welcome to the home page')
    }
    else if(req.url === '/about'){
        res.end('Creating the basic server using http')

    }
    else res.end(` <h1>This page does not exist</h1> 
    <a href='/'> Back to home page</a> `)
})

server.listen(5000)