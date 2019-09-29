/* eslint-disable no-undef */
import chai from 'chai';

import errorHandler from '../../src/Helper.js/errorHandler';

chai.should();

const error = {
  status: 500,
  message: 'server error',
};

const request = {};
const response = {
  status: (status) => ({
    json: () => `error with status code ${status}`,
  }),
};

const next = {};

describe('errorHandler', () => {
  it('should handle 500 error status code', async () => {
    const errorResponse = errorHandler(error, request, response, next);

    errorResponse.should.equal('error with status code 500');
  });
});
