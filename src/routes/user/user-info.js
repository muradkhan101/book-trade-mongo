const User = require('../../mongoose/user-schema');
const mongoose = require('mongoose');

const getUserBooks = (req, res) => {
  User.userModel
    .find({ uuid : req.body.uuid })
    .populate('books')
    .exec((err, user) => {
      if (err) return res.status(400).send(err);
      if (!user.books.length) return res.status(204).send('No books found');
      res.status(200).send(user.books);
    });
}

const getUserTrades = (req, res) => {
  User.userModel
    .find({ uuid : req.body.uuid })
    .populate('trades')
    .exec((err, user) => {
      if (err) return res.status(400).send(err);
      if (!user.trades.length) return res.status(204).send('No trades found');
      res.status(200).send(user.trades);
    });
}

const addUserTrade = (tradeId, userId, res) => {
  User.userModel.findOneAndUpdate({uuid: userId}, {$push : {trades: mongoose.Types.ObjectId(tradeId)}}, (err, user) => {
    if (err) {
      deleteTrade({req:{body: {_id: tradeId}}}, res);
      console.log(`Error add trade for user ${userId}`)
    }
  })
}

const deleteUserTrade = (tradeId, userId, res) => {
  User.userModel.findOneAndUpdate({uuid: userId}, {$pull: {trades: mongoose.Types.ObjectId(tradeId)}}, (err, user) => {
    if (err) console.log("Error deleting trade");
  })
}

const addUserBook = (req, res) => {
  User.userModel.findOne({
    uuid: req.body.uuid || req.params.uuid,
    books: mongoose.Types.ObjectId(req.body._id)
  }, (err, user) => {
    if (user) req.status(409).send('You already own this book!');
    User.userModel.findOneAndUpdate(
      {uuid: req.body.uuid || req.params.uuid},
      {$push : {books: mongoose.Types.ObjectId(req.body._id)}},
      (err, user) => {
        if (err) return res.status(400).send(err);
        if (!user) return res.status(204).send('User not found');
        return res.status(200).send();
      }
    )
  })
}

const removeUserBook = (req, res) => {
  User.userModel.findOneAndUpdate(
    {uuid: req.params.uuid},
    {$pull : {books: mongoose.Types.ObjectId(req.params._id)}},
    (err, user) => {
      if (err) return res.status(400).send(err);
      if (!user) return res.status(204).send('User not found');
      return res.status(200).send();
    }
  )
}
module.exports = {
  getUserBooks,
  getUserTrades,
  addUserTrade,
  deleteUserTrade,
  addUserBook,
  removeUserBook
}
