const EventEmitter = require('events')

const customEmitter = new EventEmitter;
//Listening the event
customEmitter.on('response',(name,age)=>{
    console.log(`data recieved ${name} is ${age} years old` )
})

//we can add multiple listeners for the same emitter
customEmitter.on('response',()=>{
    console.log('data recieved again')
})

//emitting the response
//we can also pass arguments
customEmitter.emit('response','adi','27')

//The order is very important emit is to used only after listening or registering the events!

// The eventEmitter. on() method is used to register listeners, 
// while the eventEmitter. emit() method is used to trigger the event.