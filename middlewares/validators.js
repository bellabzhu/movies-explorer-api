const { celebrate, Joi } = require('celebrate');
const { REGEX_URL } = require('../utils/constants');

module.exports.validatorSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

module.exports.validatorSignUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

module.exports.validatorCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().max(4).required(),
    description: Joi.string().required(),
    image: Joi.string().regex(REGEX_URL).required(),
    trailerLink: Joi.string().regex(REGEX_URL).required(),
    thumbnail: Joi.string().regex(REGEX_URL).required(),
    id: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports.validatorDelMovie = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().length(24).required(),
  }),
});

module.exports.validatorUpdateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});
