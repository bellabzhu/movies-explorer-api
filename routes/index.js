const router = require('express').Router();
const { validatorSignIn, validatorSignUp } = require('../middlewares/validators');
const userRouter = require('./users');
const movieRouter = require('./movies');
const { auth } = require('../middlewares/auth');
const { signin, signout, createUser } = require('../controllers/users');
const Error404 = require('../errors/Error404');

router.post('/signin', validatorSignIn, signin);

router.post('/signup', validatorSignUp, createUser);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.delete('/signout', signout);

router.use('/*', (req, res, next) => {
  next(new Error404('Страница не найдена'));
});

module.exports = router;
