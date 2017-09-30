const Schema = require('mongoose');

const bookObject = {
  title       : String,
  image       : String,
  description : String,
  published   : Date
}

const Books = new mongoose.Schema(bookObject);

const Book = mongoose.model('Book', Books);

export.modules = {
  Book,
  bookObject
}
