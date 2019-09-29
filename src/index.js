import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import routes from './routes';
import errorHandler from './Helper.js/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', routes);
app.use('*', (request, response) => response.status(404).json('route does not exist'));
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
