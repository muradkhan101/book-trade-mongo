const router = require('express').Router();
const userInfo = require('./user-info');
const userProfile = require('./user-profile');

router.route('/')
  .post(userProfile.createUser)
  .put(userProfile.updateUser)

router.route('/login')
  .post(userProfile.loginUser)

router.route('/info')
  .post(userProfile.getUser)

router.route('/:uuid/books')
  .get(userInfo.getUserBooks)
  .post(userInfo.addUserBook)
// router.route('/:id/books/:book')
router.route('/:uuid/books/:_id')
  .delete(userInfo.removeUserBook)

router.route('/:uuid/trades')
  .get(userInfo.getUserTrades)

// Not necessary to implement at this point
// router.get('/user/:id/books/available', );

module.exports = router;
