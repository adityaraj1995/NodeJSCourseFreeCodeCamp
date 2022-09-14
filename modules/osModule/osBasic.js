const os = require('os');

// Info about current user
console.log(os.userInfo())
// {
//     uid: 1000,
//     gid: 1000,
//     username: 'aditya',
//     homedir: '/home/aditya',
//     shell: '/bin/bash'
//   }


//  Returns system uptimr in sec
console.log(os.uptime())


const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)
// {
//     name: 'Linux',
//     release: '5.4.0-122-generic',
//     totalMem: 12444966912,
//     freeMem: 270594048
//   }