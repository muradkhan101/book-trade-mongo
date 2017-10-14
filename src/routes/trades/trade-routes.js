const router = require('express').Router();
const tradeBooks = require('./trade-books');
// trades

router.route('/')
  .get(tradeBooks.getOpenTrades)
  .post(tradeBooks.addTrade)
  .put(tradeBooks.updateTrade)
  .delete(tradeBooks.deleteTrade)

module.exports = router;
