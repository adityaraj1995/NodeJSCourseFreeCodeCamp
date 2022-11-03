//this is alternate to readfileasync and avoiding nested callbacks

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
//  getText('../modules/fsModule/first.txt')
//  .then((res)=>console.log(res))
//  .catch((err)=>console.log(err))

const start = async () =>{
    try{
        const first = await getText('../modules/fsModule/first.txt')
    const second = await getText('../modules/fsModule/second.txt')
    console.log(first,second)
    }
    catch (error){
        console.log(error)
    }
    

}
start()