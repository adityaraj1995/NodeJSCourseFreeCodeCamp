// local - specific to thos file only
const john = 'john';
// shared or access to other files 
const akash = 'akash'
const ananya = 'ananya'


// Here we can observe that module is an object
// console.log(module)
// Module {
//     id: '.',
//     path: '/home/aditya/Documents/freeCodeCamp_Node/modules/module_1',
//     exports: {},
//     parent: null,
//     filename: '/home/aditya/Documents/freeCodeCamp_Node/modules/module_1/names.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/home/aditya/Documents/freeCodeCamp_Node/modules/module_1/node_modules',
//       '/home/aditya/Documents/freeCodeCamp_Node/modules/node_modules',
//       '/home/aditya/Documents/freeCodeCamp_Node/node_modules',
//       '/home/aditya/Documents/node_modules',
//       '/home/aditya/node_modules',
//       '/home/node_modules',
//       '/node_modules'
//     ]
//   }

 module.exports = {akash,ananya};
