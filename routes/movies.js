const router = require('express').Router();
const { validatorCreateMovie, validatorDelMovie } = require('../middlewares/validators');
const {
  getUsersMovies,
  createMovie,
  delMovie,
} = require('../controllers/movies');

router.get('/', getUsersMovies);
router.post('/', validatorCreateMovie, createMovie);
router.delete('/:id', validatorDelMovie, delMovie);

module.exports = router;
