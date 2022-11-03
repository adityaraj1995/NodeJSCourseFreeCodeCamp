setInterval(()=>{
    console.log("inside set interval")
},2000)
console.log("finished")

//process stays alive until killed [ctrl+c] or until getting unexpected error

// o/p
// finished
// inside set interval
// inside set interval
// inside set interval
//.......
