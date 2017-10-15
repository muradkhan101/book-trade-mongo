const Trade = require('../../mongoose/trade-schema');
const mongoose = require('mongoose');
const genUUID = require('../../assets/uuid');
const userInfo = require('../user/user-info');

const getOpenTrades = (req, res) => {
  Trade.tradeModel
    .find({status: "Open"})
    .populate('offerBook')
    .populate('from', 'uuid firstName lastName')
    .exec( (err, trades) => {
      if (err) return res.status(400).send(err);
      if (!trades.length) return res.status(204).send('No trades found');
      res.status(200).send(trades);
    })
}

const addTrade = (req, res) => {
  try {
    let tradeData = {
      from : mongoose.Types.ObjectId(req.body.from),
      offerBook : mongoose.Types.ObjectId(req.body.offerBook),
      uuid: genUUID(),
      status: "Open"
    }
    if (req.body.wantBook) tradeData.wantBook = req.body.wantBook;
    let newTrade = new Trade.tradeModel(tradeData);
    newTrade.save( (err, trade) => {
      if (err) return res.status(400).send(err);
      let _id = trade.id;
      // code structure could be better for addUserTrade and deleteUserTrade
      userInfo.addUserTrade(_id, req.body.from, res);
      userInfo.addUserTrade(_id, req.body.with, res);
      res.status(201).send({});
    })
  } catch(e) {
    console.log(e);
    res.status(400).send(e);
  }
}

const updateTrade = (req, res) => {
  Trade.tradeModel.findOneAndUpdate({uuid: req.body.uuid}, req.body, (err, trade) => {
    if (err) return res.status(400).send(err);
    if (!trade) return res.status(204).send();
    res.status(200).send(trade);
  })
}

const deleteTrade = (req, res) => {
  Trade.tradeModel.findOneAndRemove({uuid: req.body.uuid}, err => {
    if (err) return res.status(400).send(err);
    userInfo.deleteUserTrade(req.body._id, req.body.from, res);
    userInfo.deleteUserTrade(req.body._id, req.body.with, res);
    res.status(200).send({});
  })
}

module.exports = {
  getOpenTrades,
  addTrade,
  updateTrade,
  deleteTrade
}
