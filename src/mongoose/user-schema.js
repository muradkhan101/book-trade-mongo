const mongoose = require('mongoose');

const userObject = {
  firstName  : { type: String, required: true },
  lastName   : { type: String, required: true },
  email      : { type: String, required: true },
  password   : { type: String, required: true },
  salt       : { type: String, required: true },
  books      : { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book'}], default: [] },
  trades     : { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trade'}], default: [] }
};

const Users = new mongoose.Schema(userObject);

const userModel = mongoose.model('User', Users, 'USERS');

export.modules = {
  userModel,
  userObject
};
