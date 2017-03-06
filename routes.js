/*jshint esversion: 6 */
const Router = require('express').Router;
const router = new Router();
const user  = require('./model/user/user-router');
const book = require('./model/book/book-router');
// const authIsOn = true;

function authenticate(req, res, next) {
  // if (authIsOn) {
  // return next();
  if (req.headers.origin === process.env.AllowUrl) {
    next();
  } else {
    res.redirect('/');
  }
  // } else {
    // next();
  // }
}

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to Our Hands and Feet API!' });
});
router.all('/*', authenticate, (req, res, next) => {
  next();
});
router.use('/user', user);
router.use('/auth', require('./auth'));
router.use('/book', book);

module.exports = router;
