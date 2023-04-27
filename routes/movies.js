const router = require('express').Router();

const {
  getUsersMovies,
  createMovie,
  delMovie,
} = require('../controllers/movies');

router.get('/', getUsersMovies);
router.post('/', createMovie);
router.delete('/:id', delMovie);

module.exports = router;
