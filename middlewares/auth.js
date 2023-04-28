const jwt = require('jsonwebtoken');
const { JWT_DEV_MODE } = require('../utils/constants');
const Error401 = require('../errors/Error401');

const { NODE_ENV, JWT_SECRET } = process.env;

const auth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    next(new Error401('Необходима авторизация.'));
  }
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : JWT_DEV_MODE);
    req.user = payload;
    next();
  } catch (err) {
    next(new Error401('Необходима авторизация.'));
  }
};

module.exports = { auth };
