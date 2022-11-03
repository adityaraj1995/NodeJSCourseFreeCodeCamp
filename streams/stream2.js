const {createReadStream} = require('fs')

const stream = createReadStream('./big.txt',{highWaterMark:90000, encoding:'utf-8'})

stream.on('data',(res)=>{
    console.log(res)
});

stream.on('error',(err)=>{
    console.log(err)
})