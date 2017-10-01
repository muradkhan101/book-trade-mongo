const Trade = require('../../mongoose/trade-schema');
const User = require('../../mongoose/user-schema');
const mongoose = require('mongoose');

const getTrades = (req, res) => {
  Trade.tradeModel.find({}, (err, trades) => {
    if (err) res.status(400).send(err);
    if (!trades.length) res.status(204).send('No trades found');

    res.status(200).send(trades);
  })
}

const addTrade = (req, res) => {
  let newTrade = new Trade.tradeModel(req.body);
  newTrade.save( (err, trade) => {
    if (err) res.status(400).send(err);
    let _id = trade.id;
    let user1 = req.body.from;
    let user2 = req.body.with;
    User.userModel.findByIdAndUpdate(mongoose.Type.ObjectId(user1), {$push : {trades: mongoose.Type.ObjectId(_id)}}, (err, user) => {
      if (err) {
        deleteTrade(req, res);
        res.status.(400).send(err);
      }
    })
    User.userModel.findByIdAndUpdate(mongoose.Type.ObjectId(user2), {$push : {trades: mongoose.Type.ObjectId(_id)}}, (err, user) => {
      if (err) {
        deleteTrade(req, res);
        res.status.(400).send(err);
      }
    })
    res.status(200).send({});
  })
}

const updateTrade = (req, res) => {
  Trade.tradeModel.findByIdAndUpdate(mongoose.Type.ObjectId(req.body._id), req.body, (err, book) => {
    if (err) res.status.(400).send(err);
    res.status(200).send(book);
  })
}

const deleteTrade = (req, res) => {
  Trade.tradeModel.findByIdAndRemove(mongoose.Type.ObjectId(req.body._id), err => {
    if (err) res.status.(400).send(err);
    res.status(200).send({});
  })
}
