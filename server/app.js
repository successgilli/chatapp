import express from 'express';
import socket from 'socket.io';
import path from 'path';

import { users } from './onLineUsers';

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', '/public/index.html')));

const server = app.listen(3000, () => console.log('litening on port 3000'));

const io = socket(server);

io.on('connection', (socket) => {
    socket.on('joined', (data) => {
        console.log(data, socket.id);
        users.push({ name: data.name, id: socket.id });
        console.log(users, ' online');
    });
    socket.on('chat', (data) => {
        console.log(users.find(x => x.id === socket.id), ' user chatted');
        console.log(users[1].id)
        socket.broadcast.to(users[1].id).emit('chat', data);
        // io.sockets.emit('chat', data);
    });
});
