//this is alternate to readfileasync

// normal
const {readFile} = require('fs')
 const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,res)=>{
            if(err){
            reject(err)
            }
            else 
            resolve(res)
        })  
    })
 }
 getText('../modules/fsModule/first.txt')
 .then((res)=>console.log(res))
 .catch((err)=>console.log(err))