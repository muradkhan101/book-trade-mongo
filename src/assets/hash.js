const uuidv4 = require('uuid/v4');
const aesjs = require('aes-js');

const key = [32, 21, 14, 63, 14, 36, 37, 3,
           6, 3, 45, 23, 3, 53, 2, 35,
           64, 23, 3, 2, 35, 32, 12, 21,
           34, 14, 2, 53, 32, 1, 42, 12];

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

export.modules = {
  makeSalt,
  makeHash
}
