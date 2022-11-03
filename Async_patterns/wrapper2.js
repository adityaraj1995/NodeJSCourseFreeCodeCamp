//here we are trying to avoid the wrapper function 'getText'

//this is alternate to readfileasync and avoiding nested callbacks

//here utils can also be ignored or avoided

const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
    try{
        const first = await readFile('../modules/fsModule/first.txt','utf-8')
        const second = await readFile('../modules/fsModule/second.txt','utf-8')
        console.log(first,second)
    await writeFile('./merger2.txt',`wrapper 2:${first}${second}`)
    }
    catch (error){
        console.log(error)
    }
    

}
start()