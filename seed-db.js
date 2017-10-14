const mongoose = require('mongoose');
const Book = require('./src/mongoose/book-schema');
const request = require('request-promise-native');

const queries = ['king', 'art', 'coding', 'music'];
let limit = 10;
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';

const express = require('express');
const app = express();
require('./src/mongoose/connect')();

app.get('/', (req, res) => {
  let promises = queries.map( e => {
    return request(baseURL+e).then(result => {
      let books = [];
      let parsed = JSON.parse(result);
      for (let i = 0; i < limit && i < parsed.items.length; i++) {
        let b = parsed.items[i].volumeInfo;
        if (!b.title || !b.authors || !b.imageLinks || !b.description || !b.publishedDate) {continue;}
        let bookData = {};
        bookData.title       = b.title;
        bookData.author      = b.authors.join(', ');
        bookData.image       = b.imageLinks.thumbnail;
        bookData.description = b.description;
        bookData.uuid        = parsed.items[i].id;
        bookData.published   = b.publishedDate;
        books[i] = new Book.bookModel(bookData);
        books[i].save( err => {
          if (err) console.log(err);
          console.log(`Added ${books[i].title}`);
        })
      }
      limit = 10;
      return;
    })
  })
})

app.listen(3000);
