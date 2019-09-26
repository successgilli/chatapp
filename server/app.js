import express from 'express';
import socket from 'socket.io';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', '/public/index.html')));

const server = app.listen(3000, () => console.log('litening on port 3000'));

const io = socket(server);

io.on('connection', (socket) => {
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });
})