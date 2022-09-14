const {readFile, writeFile} = require('fs')

readFile('./first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err)
        return
    }
    const first = res

    readFile('./second.txt','utf8',(err,res)=>{
        if(err){
            console.log(err)
            return
        }
        const second = res
        writeFile('./newcreated2.txt',`adding data through async ${first}`+` ${second}`,(err,res)=>{
            if(err){
                console.log(err)
                return
            }
        console.log(res)
        })
    })
})