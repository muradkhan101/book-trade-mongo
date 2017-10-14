const Book = require('../../mongoose/book-schema');
const User = require('../../mongoose/user-schema');
const mongoose = require('mongoose');
const genUUID = require('../../assets/uuid');

const getAllBooks = (req, res) => {
  Book.bookModel.find({},{"__v": 0}, (err, books) => {
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
    try {
      let bookData = Object.assign({}, req.body, {uuid : genUUID()});
      let newBook = new Book.bookModel(bookData);
      newBook.save( err => {
        if (err) return res.status(400).send(err);
        res.status(201).send({});
      })
    } catch(e) {
      console.log(e);
      return res.status(400).send(e);
    }
  })
}

const updateBook = (req, res) => {
  Book.bookModel.findByIdAndUpdate({uuid: req.body.uuid}, req.body, (err, book) => {
    if (err) return res.status(400).send(err);
    if (!book) return res.status(204).send('Book not found');
    res.status(200).send(book);
  })
}

const deleteBook = (req, res) => {
  Book.bookModel.findOneAndRemove({uuid: req.body.uuid}, err => {
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
