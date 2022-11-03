const http = require('http')
const server = http.createServer((req,res)=>{
    console.log('request raised')
    res.end('Home Page')
})

server.listen(5000,()=>{
    console.log('listening to port 5000')
})

// o/p
// listening to port 5000
// request raised
// request raised
// request raised
// request raised

// we can observe that per req the create server is being called twice, this is due to the browsers makes two calls,
//  another for the favicon.ico.
// A favicon, also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon,
//  is a file containing one or more small icons, associated with a particular website or web page.