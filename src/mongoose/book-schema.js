const mongoose = require('mongoose');

const bookObject = {
  title       : { type: String, required: false },
  author      : { type: String, required: false },
  image       : { type: String, default: "source.unsplash.com/featured?book" },
  description : { type: String, required: false },
  uuid        : { type: String, required: false },
  published   : String
}

const Books = new mongoose.Schema(bookObject);

const bookModel = mongoose.model('Book', Books, 'BOOKS');

module.exports = {
  bookModel,
  bookObject
}
