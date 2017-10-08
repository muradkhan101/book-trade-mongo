const Trade = require('../../mongoose/trade-schema');
const mongoose = require('mongoose');
const genUUID = require('../../assets/uuid');
const userInfo = require('../user/user-info');

const getTrades = (req, res) => {
  Trade.tradeModel.find({}, (err, trades) => {
    if (err) return res.status(400).send(err);
    if (!trades.length) return res.status(204).send('No trades found');

    res.status(200).send(trades);
  })
}

const addTrade = (req, res) => {
  try {
    let tradeData = Object.assign({}, req.body, { uuid: genUUID() });
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
    res.status(400).send(e);
  }
}

const updateTrade = (req, res) => {
  Trade.tradeModel.findOneAndUpdate({uuid: req.body._id}, req.body, (err, book) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(book);
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
  getTrades,
  addTrade,
  updateTrade,
  deleteTrade
}
