const Schema = require('mongoose');

const Books = new mongoose.Schema({
  title       : String,
  image       : String,
  description : String,
  published   : Date
})

const Book = mongoose.model('Book', Books);

export.modules = {
  Book
}
