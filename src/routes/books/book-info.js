const Book = require('../../mongoose/book-schema');
const User = require('../../mongoose/user-schema');
const mongoose = require('mongoose');

const getAllBooks = (req, res) => {

  Book.bookModel.find({}, (err, books) => {
    if (err) return res.status(400).send(err);
    if (!books.length) return res.status(204).send('No books found');
    res.status(200).send(books);
  })
}

const getBook = (req, res) => {
  Book.bookModel.findOne(req.body, (err, book) => {
    if (err) return res.status(400).send(err);
    if (!book) return res.status(204).send('Book not found');
    res.status(200).send(book);
  })
}

const addBook = (req, res) => {
  Book.bookModel.findOne({title: req.body.title, author: req.body.author}, (err, book) => {
    if (err) return res.status(400).send(err);
    if (book) return res.status(409).send('Book exists');

    let newBook = new Book.bookModel(req.body);
    newBook.save( err => {
      if (err) res.status(400).send(err);
      res.status(201).send({});
    })
  })
}

const updateBook = (req, res) => {
  Book.bookModel.findByIdAndUpdate(mongoose.Type.ObjectId(req.body._id), req.body, (err, book) => {
    if (err) return res.status(400).send(err);
    if (!book) return res.status(204).send('Book not found');

    res.status(200).send(book);
  })
}

const deleteBook = (req, res) => {
  Book.bookModel.findByIdAndRemove(mongoose.Type.ObjectId(req.body._id), err => {
    if (err) return res.status(400).send(err);
    res.status(200).send({});
  })
}

module.exports = {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook
}
