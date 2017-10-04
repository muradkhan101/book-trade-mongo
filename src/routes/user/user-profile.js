const User = require('../../mongoose/user-schema');
const mongoose = require('mongoose');
const hash = require('../../assets/hash')
const jwt = require('../../assets/jwt');

const makeUser = (info) => {
  let salt = hash.makeSalt();
  let userObject = Object.assign({}, info, {
    salt: salt,
    password: hash.makeHash(info.password+salt)
  })
  return new User.userModel(userObject);
}

const loginUser = (req, res) => {
  User.userModel.findOne({email: req.body.email}, (err, user) => {
    if (err) return res.status(400).send(err);
    if (!user) return res.status(403).send('Email/Password is incorrect')
    let password = hash.makeHash(req.body.password + user.salt);
    User.userModel.findOne({email: req.body.email, password: password}, (err, user) => {
      if (err) return res.status(400).send(err);
      if (!user) return res.status(403).send('Email/Password is incorrect');
      let token = jwt.createKey({email: user.email}, {expiresInMinutes: 2880})
      res.status(200).json({token: token})
    })
  })
}

const createUser = (req, res) => {
  User.userModel.findOne({email: req.body.email}, (err, user) => {
    if (err) return res.status(400).send(err);
    if (user) return res.status(409).send('User exists');
    try {
      makeUser(req.body).save( err => {
        if (err) return res.status(400).send(err);
        res.status(201).send({})
      });
    } catch(e) {
      console.log(e);
      return res.status(400).send(e);
    }
  })
}

const getUser = (req, res) => {
  User.userModel.findOne({email: req.body.email}, (err, user) => {
    if (err) return res.status(400).send(err);
    if (!user) return res.status(204).send('User not found');
    user = user.toObject();
    delete user["password"];
    delete user["salt"];
    res.status(200).send(user);
  })
}

const updateUser = (req, res) => {
  if (req.body.password) {
    updateUserPassword(req, res);
    return;
  }
  User.userModel.findByIdAndUpdate(mongoose.Types.ObjectId(req.body._id), req.body, (err, user) => {
    if (err) return res.status(400).send(err);
    if (!user) return res.status(204).send('User not found');
    res.status(200).send({});
  })
}

const updateUserPassword = (req, res) => {
  let salt = hash.makeSalt();
  let password = hash.makeHash(req.body.password + salt);
  User.userModel.findByIdAndUpdate(mongoose.Types.ObjectId(req.body._id), {salt: salt, password: password}, (err, user) => {
    if (err) return res.status(400).send(err);
    if (!user) return res.status(204).send('User not found');
    res.status(200).send({});
  })
}

const deleteUser = (req, res) => {
  User.userModel.findByIdAndRemove(mongoose.Types.ObjectId(req.body._id), err => {
    if (err) return res.status(400).send(err);
    res.status(200).send({});
  })
}

module.exports = {
  loginUser,
  createUser,
  getUser,
  updateUser,
  deleteUser
}
