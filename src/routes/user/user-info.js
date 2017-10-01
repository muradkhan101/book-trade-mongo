const User = require('../../mongoose/user-schema');
const mongoose = require('mongoose');

const getUserBooks = (req, res) => {
  User.userModel
    .find({ _id : mongoose.Types.ObjectId(req.body._id) })
    .populate('books')
    .exec((err, user) => {
      if (err) res.status.(400).send(err);
      if (!user.books.length) res.status(204).send('No books found');
      res.status(200).send(user.books);
    });
}

const getUserTrades = (req, res) => {
  User.userModel
    .find({ _id : mongoose.Types.ObjectId(req.body._id) })
    .populate('trades')
    .exec((err, user) => {
      if (err) res.status.(400).send(err);
      if (!user.trades.length) res.status(204).send('No trades found');
      res.status(200).send(user.trades);
    });
}
