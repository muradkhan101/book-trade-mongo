const mongoose = require('mongoose');

const userObject = {
  firstName  : String,
  lastName   : String,
  email      : String,
  password   : String,
  hash       : String,
  books      : Array,
  trades     : Array
}

const Users = new mongoose.Schema(userObject);

const User = mongoose.model('User', Users);

export.modules = {
  User,
  userObject
}
