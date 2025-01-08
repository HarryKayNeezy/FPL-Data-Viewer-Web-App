const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});

io.on('connection', (socket) => {
    console.log('A user is connected');

    //listen for msgs from clients
    socket.on('chatMessage', (msg) => {
        //broadcast msg to all connected users
        io.emit('chatMessage', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user is disconnected');
    });
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
})