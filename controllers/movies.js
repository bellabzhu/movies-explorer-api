const mongoose = require('mongoose');
const { statusCode } = require('../utils/errors');
const Movie = require('../models/movie');
const Error400 = require('../errors/Error400');
const Error403 = require('../errors/Error403');
const Error404 = require('../errors/Error404');

module.exports.getUsersMovies = async (req, res, next) => {
  try {
    const usersMovies = await Movie.find({ owner: req.user._id });
    res.status(statusCode.OK).send(usersMovies);
  } catch (err) {
    next(err);
  }
};

module.exports.createMovie = async (req, res, next) => {
  try {
    const newMovie = await Movie.create({ ...req.body, owner: req.user._id });
    res.status(statusCode.OK_NEW).send(newMovie);
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      next(new Error400('Неверный формат у id.'));
    } else if (err instanceof mongoose.Error.ValidationError) {
      next(new Error400('Переданы некорректные данные при создании фильма.'));
    } else {
      next(err);
    }
  }
};

module.exports.delMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      next(new Error404('Фильм с таким таким id не найден.'));
      return;
    }
    if (req.user._id !== movie.owner.toString()) {
      next(new Error403('Это не ваш фильм! Удаляйте свой!'));
      return;
    }
    const deletedMovie = await movie.deleteOne();
    res.status(statusCode.OK).send(deletedMovie);
  } catch (err) {
    if (err instanceof mongoose.Error.CastError) {
      next(new Error400('Неверный формат у id фильма.'));
    } else if (err instanceof mongoose.Error.ValidationError) {
      next(new Error400('Переданы некорректные данные.'));
    } else {
      next(err);
    }
  }
};
