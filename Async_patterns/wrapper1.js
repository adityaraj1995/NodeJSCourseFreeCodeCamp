//here we are trying to avoid the wrapper function 'getText'

//this is alternate to readfileasync and avoiding nested callbacks

const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
//  const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,res)=>{
//             if(err){
//             reject(err)
//             }
//             else 
//             resolve(res)
//         })  
//     })
//  }

const start = async () =>{
    try{
        const first = await readFilePromise('../modules/fsModule/first.txt','utf-8')
    const second = await readFilePromise('../modules/fsModule/second.txt','utf-8')
    console.log(first,second)
    await writeFilePromise('./merger.txt',`${first}${second}`)
    }
    catch (error){
        console.log(error)
    }
    

}
start()