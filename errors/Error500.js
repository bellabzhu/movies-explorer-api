const { statusCode } = require('../utils/errors');

class Error500 extends Error {
  constructor(message) {
    super(message);
    this.name = 'InternalServerError';
    this.statusCode = statusCode.INTERNAL_SERVER_ERROR;
  }
}

module.exports = Error500;
