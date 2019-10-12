'use strict';

const http = require('http');

const port = 8000;
const server = http.createServer((request, response) => {
    let buffer = '';
    request.on('data', chunk => {
        buffer += chunk;
    });
    request.on('end', () => {
        const responseString = `Received string ${buffer}`;
        console.log(`Responding with: ${responseString}`);
        response.writeHead(200, 'Content-type: text/plain');
        response.end(responseString);
    });
}).listen(port, () => {
    console.log(`listening on ${port}`);
});