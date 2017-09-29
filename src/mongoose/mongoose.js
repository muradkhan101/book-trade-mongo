const addToDB = (Schema, data, cb) => {
  let newData = new Schema(data);
  newData.save(cb)
}

const search = (Schema, data, cb) => {
  Schema.find(data, cb)
}
