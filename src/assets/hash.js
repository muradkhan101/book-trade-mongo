const uuidv4 = require('uuid/v4');
const aesjs = require('aes-js');

const key = require('../config/hash.json').key;

const makeSalt = () => {
  let temp = uuidv4().split('-');
  return temp[0] + temp[temp.length-1];
}
const makeHash = (text) => {
  let aesCtr = new aesjs.ModeOfOperation.ctr(key);
  let bytes = aesjs.utils.utf8.toBytes(text);
  let encrypted = aesCtr.encrypt(bytes);
  return aesjs.utils.hex.fromBytes(encrypted);
}

module.exports = {
  makeSalt,
  makeHash
}
