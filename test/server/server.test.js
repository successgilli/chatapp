/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../src';

chai.use(chaiHttp);
chai.should();

describe('/', () => {
  it('should inform user that route does not exist', async () => {
    const response = await chai.request(app).get('/');

    (response.body).should.equal('route does not exist');
  });

  it('should catch route parameter errors', async () => {
    const response = await chai.request(app).get('/api/v1/%');

    response.body.should.equal('Failed to decode param \'/api/v1/%\'');
  });

  it('should fallback to 8080 if port not provided', async () => {
    const response = await chai.request(app).get('/api/v1/');

    response.body.should.equal('welcome to chat-app');
  });
});
