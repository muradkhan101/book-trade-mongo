const router = require('express').Router();
const userInfo = require('./user-info');
const userProfile = require('./user-profile');
const userAuthentication = require('./user-authentication');

router.route('/')
  .post(userProfile.createUser)
  .put(userProfile.updateUser)

router.route('/authenticate')
  .post(userAuthentication.authenticateUser)

router.route('/login')
  .post(userProfile.loginUser)

router.route('/info')
  .post(userProfile.getUser)

router.route('/:id/books')
  .get(userInfo.getUserBooks)

router.route('/:id/trades')
  .get(userInfo.getUserTrades)

// Not necessary to implement at this point
// router.get('/user/:id/books/available', );

module.exports = router;
