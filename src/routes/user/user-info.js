const User = require('../../mongoose/user-schema');
const mongoose = require('mongoose');

const getUserBooks = (req, res) => {
  User.userModel
    .find({ _id : mongoose.Types.ObjectId(req.body._id) })
    .populate('books')
    .exec((err, user) => {
      if (err) return res.status(400).send(err);
      if (!user.books.length) return res.status(204).send('No books found');
      res.status(200).send(user.books);
    });
}

const getUserTrades = (req, res) => {
  User.userModel
    .find({ _id : mongoose.Types.ObjectId(req.body._id) })
    .populate('trades')
    .exec((err, user) => {
      if (err) return res.status(400).send(err);
      if (!user.trades.length) return res.status(204).send('No trades found');
      res.status(200).send(user.trades);
    });
}

const addUserTrade = (tradeId, userId, res) => {
  User.userModel.findByIdAndUpdate(mongoose.Types.ObjectId(userId), {$push : {trades: mongoose.Types.ObjectId(tradeId)}}, (err, user) => {
    if (err) {
      deleteTrade({req:{body: {_id: tradeId}}}, res);
      console.log(`Error add trade for user ${userId}`)
    }
  })
}

const deleteUserTrade = (tradeId, userId, res) => {
  User.userModel.findByIdAndUpdate(mongoose.Types.ObjectId(userId), {$pull: {trades: tradeId}}, (err, user) => {
    if (err) console.log("Error deleting trade");
  })
}

module.exports = {
  getUserBooks,
  getUserTrades,
  addUserTrade,
  deleteUserTrade
}
