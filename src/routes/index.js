import express from 'express';

const route = express();

route.get('/', (request, response) => response.status(200).json('welcome to chat-app'));

export default route;
