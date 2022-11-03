const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home Page')
    }
    //did not work when req.url === '/About' capital letter
    else if(req.url==='/about'){

        //Blocking code - here the page keeps loading until the loop is completed.
        // we assume that only the about page would be loading and other pages would be displayed immediately. 
        // But until and unless the blockin code is finished none of the pages will be loaded.
        for(let i=0;i<500;i++)
        for(let j=0;j<500;j++)
        console.log(i,j)
        res.end('About Page')
    }
    else {
        res.end(`<h1>Error page</h1> 
        <a href="/"> back to home page </a>`)
       
    }
})

server.listen(5000,()=>{
    console.log('server listening to port 5000...')
})