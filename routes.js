const Router = require('express').Router;
const router = new Router();
const user  = require('./model/user/user-router');

function authenticate(req, res, next){
    console.log(req);
    if(req.headers.origin == "http://localhost:9000"){
      next();
    }else{
      res.redirect("/");
    }
}



router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to tipsy-ryde-backend API!' });
});
router.all("/*", authenticate, function(req, res, next){
  next();
});
router.use('/user', user);
router.use('/auth',require('./auth'));

module.exports = router;
