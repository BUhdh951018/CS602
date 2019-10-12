const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('connection', () =>{
    myEmitter.emit('event');
});

myEmitter.on('event', () => {
    process.argv.forEach((val, index) => {
        console.log(`Processing command line argument ${val}`);
    });
});

for (var i = 0; i < 11; i++) {
    myEmitter.emit('event');
}