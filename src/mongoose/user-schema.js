const mongoose = require('mongoose');

const Users = new mongoose.Schema({
  firstName  : String,
  lastName   : String,
  email      : String,
  password   : String,
  hash       : String,
  books      : Array,
  trades     : Array
})

const User = mongoose.model('User', Users);

export.modules = {
  User
}
