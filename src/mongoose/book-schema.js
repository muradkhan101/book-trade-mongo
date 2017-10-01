const mongoose = require('mongoose');

const bookObject = {
  title       : { type: String, required: true },
  author:     : { type: String, required: true },
  image       : { type: String, required: true },
  description : { type: String, required: true },
  published   : Date
}

const Books = new mongoose.Schema(bookObject);

const bookModel = mongoose.model('Book', Books, 'BOOKS');

export.modules = {
  bookModel,
  bookObject
}
