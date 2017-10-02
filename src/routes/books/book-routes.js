const router = require('express').Router();
const bookInfo = require('./book-info');
const bookTrades = require('./book-trades');

router.route('/')
  .get(bookInfo.getAllBooks)
  .post(bookInfo.addBook)

router.route('/:id')
  .get(bookInfo.getBook)
  .delete(bookInfo.deleteBook)
  .put(bookInfo.updateBook)

router.route('/trades')
  .get(bookTrades.getTrades)
  .post(bookTrades.addTrade)
  .put(bookTrades.updateTrade)
  .delete(bookTrades.deleteTrade)

module.exports = router;
