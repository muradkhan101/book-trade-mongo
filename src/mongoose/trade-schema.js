const mongoose = require('mongoose');

const tradeObject = {
  from      : { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  with      : { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  wantBook  : { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Book' },
  offerBook : { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Book' },
  status    : { type: String, default: "Open" },
  completed : Date
}

const Trades = new mongoose.Schema(tradeObject);

const tradeModel = mongoose.model('Trade', Trades, 'TRADES');

module.exports = {
  tradeModel,
  tradeObject
}
