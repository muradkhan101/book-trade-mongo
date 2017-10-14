const Trade = require('../../mongoose/trade-schema');
const mongoose = require('mongoose');


const tradesByBook = (req, res) => {
  Trade.tradeModel
    .find({status: "Open", wantBook: mongoose.Types.ObjectId(req.params.bookId)})
    .populate('offerBook')
    .exec( (err, trades) => {
      if (err) return res.status(400).send(err);
      if (!trades.length) return res.status(204).send('No trades found');
      let books = [];
      for (let i = 0; i < trades.length; i++) books.push(trades[i].offerBook);
      res.status(200).send(books);
    })
}

module.exports = {
  tradesByBook
}
