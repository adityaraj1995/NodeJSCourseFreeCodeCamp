const {createReadStream} = require('fs')

const stream = createReadStream('./big.txt')

stream.on('data',(res)=>{
    console.log(res)
});