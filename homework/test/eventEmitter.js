// example from book NODEJS 11 event emitter
/*const EventEmitter = require('events').EventEmitter;

class Dog extends EventEmitter{}
class Food {}

let myDog = new Dog();

myDog.on('chew', (item) => {
    if (item instanceof Food) {
        console.log('Good Dog');
    } else {
        console.log(`Time to buy another ${item}`);
    }
});

myDog.emit('chew', 'shoe');
const bacon = new Food();
myDog.emit('chew', bacon);
// another example get names of emitters
class MyEmitter extends EventEmitter{}

var emitter = new MyEmitter();

emitter.on('message', () => {
    console.log('a message was emitted!');
})
.on('message', () => {
    console.log('this is not the right message');
})
.on('data', () => {
    console.log('a data just occured!!');
});

console.log(emitter.eventNames());
emitter.removeAllListeners('data');
console.log(emitter.eventNames());
/*
// http analytics
const serverEvents = new EventEmitter();

const http = require('http');
const httpServer = http.createServer((req, res) => {
    serverEvents.emit('request', req.method, req.url);
});

module.exports = serverEvents;
*/

// listener
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

var emitter = new MyEmitter();

emitter.on('data', () => {
    console.log('data event emitter');
});

console.log(emitter.listenerCount('data'))
console.log(emitter.listenerCount('message'))

emitter.on('message', () => {
    console.log('message event emitted');
});
console.log(emitter.listenerCount('data'))
console.log(emitter.listenerCount('message'))

emitter.on('data', (stuff) => {
    console.log(`Tell me my ${stuff}`);
})
console.log(emitter.listenerCount('data'))
console.log(emitter.listenerCount('message'))