const {writeFileSync} = require('fs')

for(let i=0;i<1000;i++){
    writeFileSync('./big.txt',`Hello World with count ${i}\n`,{flag:'a'})
}