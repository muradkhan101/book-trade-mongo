const router = require('express').Router();
const bookInfo = require('./book-info');
const tradeGet = require('./trade-get');
//books

router.route('/')
  .get(bookInfo.getAllBooks)
  .post(bookInfo.addBook)

router.route('/:id')
  .get(bookInfo.getBook)
  .delete(bookInfo.deleteBook)
  .put(bookInfo.updateBook)

  router.route('/:bookId/trades')
    .get(tradeGet.tradesByBook)

module.exports = router;
