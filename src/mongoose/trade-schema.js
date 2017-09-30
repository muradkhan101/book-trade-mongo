const mongoose = require('mongoose');

const tradeObject = {
  from      : ObjectId,
  with      : ObjectId,
  wantBook  : ObjectId,
  offerBook : ObjectId,
  status    : {type: String, default: "Open"},
  completed : Date
}

const Trades = new mongoose.Schema(tradeObject)

const Trade = mongoose.model('Trade', Trades);

export.modules = {
  Trade,
  tradeObject
}
