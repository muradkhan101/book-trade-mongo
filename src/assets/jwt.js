const jwt = require('jsonwebtoken');
const key = require('../config/pkey.json').key;

const createKey = (payload, options = {}) => {
  return jwt.sign(Object.assign({iss: 'book-trading-mk'}, payload),
                  key, options);
}

const verifyKey = (jwt, options = {}) => {
  return jwt.verify(jwt, key, options);
}

module.exports = {
  createKey,
  verifyKey
}
