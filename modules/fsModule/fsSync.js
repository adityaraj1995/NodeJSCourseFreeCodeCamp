const {readFileSync, writeFileSync} = require('fs')

let first = readFileSync('./first.txt','utf-8')
const second = readFileSync('./second.txt', 'utf-8')

console.log(first, second)

//flag - a is to append to the file or it will replace all of its content
writeFileSync('./first.txt','adding some data to first file',{flag:'a'})
first = readFileSync('./first.txt','utf-8')

console.log(first)
// setTimeout(function(){console.log(first)},2000)

//if given file is not present then it will create a new one
writeFileSync('./newCreated.txt','Hello Buddy wssup!')

//this is cannot be done directly, first it has be read an then written 
writeFileSync('./merge.txt','./first.txt')

//this works
writeFileSync('./merge2.txt',first)
