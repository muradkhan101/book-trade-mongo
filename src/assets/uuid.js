const uuidv1 = require('uuid/v1');

const genUUID() {
  let temp = uuidv1().split('-');
  let l = temp.length;
  let randInt = Math.floor( Math.random() * (l - 2) ) + 1;
  return ( [...temp.slice(0, 1).concat(temp.slice(randInt, randInt + 1)).concat(temp.slice(l - 1))].join('') )
}

module.exports = genUUID;
