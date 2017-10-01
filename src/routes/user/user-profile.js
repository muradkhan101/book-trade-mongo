const User = require('../../mongoose/user-schema');
const mongoose = require('mongoose');
const hash = require('../../assets/hash')

const makeUser = (info) => {
  let salt = hash.makeSalt();
  let userObject = Object.assign({}, info, {
    salt: salt,
    password: makeHash(info.password+salt)
  })
  return new User.userModel(userObject);
}

const createUser = (res, req) => {
  User.userModel.findOne({email: req.body.email}, (err, user) => {
    if (err) res.status(400).send(err);
    if (user) res.status(409).send('User exists');
    makeUser(req.body).save( err => {
      if (err) res.status(400).send(err);
      res.status(201).send({})
    });
  })
}

const getUser = (req, res) => {
  User.userModel.findOne({email: req.body.email}, (err, user) => {
    if (err) res.status(400).send(err);
    delete user.password;
    delete user.salt;
    res.status(200).send(user);
  })
}

const updateUser = (req, res) => {
  if (req.body.password) {
    updateUserPassword(req, res);
    return;
  }
  User.userModel.findByIdAndUpdate(mongoose.Type.ObjectId(req.body._id), req.body, (err, user) => {
    if (err) res.status(400).send(err);
    if (!user) res.status(204).send('User not found');
    res.status(200).send({});
  })
}

const updateUserPassword = (req, res) => {
  let salt = hash.makeSalt();
  let password = hash.makeHash(req.body.password + salt);
  User.userModel.findByIdAndUpdate(mongoose.Type.ObjectId(req.body._id), {salt: salt, password: password}, (err, user) => {
    if (err) res.status(400).send(err);
    if (!user) res.status(204).send('User not found');
    res.status(200).send({});
  })
}

const deleteUser = (res, req) => {
  User.userModel.findByIdAndRemove(mongoose.Type.ObjectId(req.body._id), err => {
    if (err) res.status(400).send(err);
    res.status(200).send({});
  })
}
