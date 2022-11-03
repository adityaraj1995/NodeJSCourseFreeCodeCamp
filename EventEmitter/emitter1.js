const EventEmitter = require('events')

const customEmitter = new EventEmitter;
//Listening the event
customEmitter.on('response',()=>{
    console.log('data recieved')
})

//emitting the response
customEmitter.emit('response')

// The eventEmitter. on() method is used to register listeners, 
// while the eventEmitter. emit() method is used to trigger the event.