const mongoose = require('mongoose');

const Trades = new mongoose.Schema({
  from      : ObjectId,
  with      : ObjectId,
  wantBook  : ObjectId,
  offerBook : ObjectId,
  status    : {type: String, default: "Open"},
  completed : Date
})

const Trade = mongoose.model('Trade', Trades);

export.modules = {
  Trade
}
