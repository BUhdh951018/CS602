// supervisor code of eventEmitter.js 
const server = require('./eventEmitter.js');

server.on('requrest', (method, url) => {
    console.log(`Got a request: ${method} ${url}`);
});