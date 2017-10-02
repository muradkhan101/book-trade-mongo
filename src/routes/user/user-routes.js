const router = require('express').Router();
const userInfo = require('./user-info');
const userProfile = require('./user-profile');

router.route('/')
  .post(userProfile.createUser)
  .put(userProfile.updateUser)

router.route('/authenticate')
  .post(userProfile.authenticateUser)

router.route('/info')
  .post(userProfile.getUser)

router.route('/:id/books')
  .get(userInfo.getUserBooks)

router.route('/:id/trades')
  .get(userInfo.getUserTrades)

// Not necessary to implement at this point
// router.get('/user/:id/books/available', );

module.exports = router;
