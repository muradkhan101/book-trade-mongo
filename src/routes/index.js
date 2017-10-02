const userRoutes = require('./user/user-routes');
const bookRoutes = require('./books/book-routes');

module.exports = (app) => {
  app.use('/user', userRoutes);
  app.use('/books', bookRoutes);
}
