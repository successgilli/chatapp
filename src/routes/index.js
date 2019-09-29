import express from 'express';

const route = express();

route.get('/', (request, response) => response.send('welcome to chat-app'));

export default route;
