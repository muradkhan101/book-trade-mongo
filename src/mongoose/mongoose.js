const mongoose = require('mongoose');
const config = require('../config/mongoose.json');

mongoose.connect(`mongodb://${config.user}:${config.pass}${config.url}`)

const addToDB = (schema, data, cb) => {
  let newData = new schema(data);
  newData.save(cb);
}

const search = (schema, data, cb) => {
  schema.find(data, cb)
}
