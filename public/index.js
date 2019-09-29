const socket = io();
socket.on('connect', () => {
    console.log('entered');
    socket.emit('joined', {name: localStorage.getItem('name')})
})

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const form = document.getElementsByClassName('chat-form')[0];
const handleDiv = document.getElementById('handle');
const chats = document.getElementById('chats');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const handle = handleDiv.value;
    const message = input.value;
    socket.emit('chat', { handle, message });
});

socket.on('chat', (data) => {
    const msg = document.createElement('div');
    msg.setAttribute('class', 'msg');
    const name = document.createElement('p');
    name.setAttribute('class', 'name');
    name.textContent = data.handle + ': ';
    const msgBody = document.createElement('p');
    msgBody.setAttribute('class', 'body');
    msgBody.textContent = data.message;
    msg.appendChild(name);
    msg.appendChild(msgBody);
    chats.appendChild(msg);
});
