const User = require('../../mongoose/user-schema');
const mongoose = require('mongoose');
const hash = require('../../assets/hash')
const jwt = require('../../assets/jwt');
const genUUID = require('../../assets/uuid');

const makeUser = (info) => {
  let salt = hash.makeSalt();
  let userObject = Object.assign({}, info, {
    salt: salt,
    password: hash.makeHash(info.password+salt),
    uuid: genUUID()
  })
  if (userObject.validatePassword) delete userObject.validatePassword;
  return new User.userModel(userObject);
}

const loginUser = (req, res) => {
  User.userModel.findOne({email: req.body.email}, (err, user) => {
    if (err) return res.status(400).send(err);
    if (!user) return res.status(403).send('Email/Password is incorrect');
    let password = hash.makeHash(req.body.password + user.salt);
    User.userModel.findOne({email: req.body.email, password: password}, (err, user) => {
      if (err) return res.status(400).send(err);
      if (!user) return res.status(403).send('Email/Password is incorrect');
      let token = jwt.createKey({email: user.email}, {"expiresIn": 2880*60})
      user = trimUser(user);
      user.token = token;
      res.status(200).json(user);
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
    user = trimUser(user);
    res.status(200).send(user);
  })
}

const updateUser = (req, res) => {
  if (req.body.password) {
    let salt = hash.makeSalt();
    req.body.salt = salt;
    req.body.password = hash.makeHash(req.body.password + salt);
  }
  User.userModel.findOneAndUpdate({uuid: req.body.uuid}, req.body, (err, user) => {
    if (err) return res.status(400).send(err);
    if (!user) return res.status(204).send('User not found');
    res.status(200).send({});
  })
}

const deleteUser = (req, res) => {
  User.userModel.findOneAndRemove({uuid: req.body.uuid}, err => {
    if (err) return res.status(400).send(err);
    res.status(200).send({});
  })
}

const trimUser = (userQuery) => {
  let user = userQuery.toObject();
  delete user["password"];
  delete user["salt"];
  return user;
}
module.exports = {
  loginUser,
  createUser,
  getUser,
  updateUser,
  deleteUser
}
