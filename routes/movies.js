const router = require('express').Router();

const {
  getMovies,
  createMovie,
  delMovie,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:id', delMovie);

module.exports = router;
