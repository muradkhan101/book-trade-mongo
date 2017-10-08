const mongoose = require('mongoose');

const bookObject = {
  title       : { type: String, required: true },
  author      : { type: String, required: true },
  image       : { type: String, default: "source.unsplash.com/featured?book" },
  description : { type: String, required: true },
  uuid        : { type: String, requiredL true },
  published   : Date
}

const Books = new mongoose.Schema(bookObject);

const bookModel = mongoose.model('Book', Books, 'BOOKS');

module.exports = {
  bookModel,
  bookObject
}
