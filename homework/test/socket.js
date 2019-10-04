const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.sockets.on('connection', (socket) => {
    /*socket.on('message-from-client-to-server', (msg) => {
        console.log(msg);
    });*/
    socket.emit('news', 'Hello World!');
    socket.on('other event', function (data) {
        console.log(data);
    });
});

http.listen(3000, () => {
    console.log("Socket.io Hello World sever started!")
});