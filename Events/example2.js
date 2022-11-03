console.log("First Task");
//Inspite of giving 0 time it is executed later because it is offloaded.
setTimeout(()=>{
    console.log("inside timeout")
},0)
console.log("Task Completed")

// o/p
// First Task
// Task Completed
// inside timeout

console.log("First Task 2");
//Inspite of giving 0 time it is executed later because it is offloaded.
setTimeout(()=>{
    console.log("inside timeout 2")
},1000)
console.log("Task Completed 2")

// o/p
// First Task
// Task Completed
// First Task 2
// Task Completed 2
// inside timeout
// inside timeout 2