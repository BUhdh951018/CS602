const express = require('express');
const app = express();
const server = app.listen(3000, console.log('Socket.io Hello World server started!'));
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.emit('message-from-client-to-server', 'hello world!');

    socket.on('message-from-client-to-server', (msg) => {
        console.log(msg);
    });
});