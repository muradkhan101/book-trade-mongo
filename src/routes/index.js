const userRoutes = require('./user/user-routes');
const bookRoutes = require('./books/book-routes');
const tradeRoutes = require('./trades/trade-routes');

module.exports = (app) => {
  app.use('/user', userRoutes);
  app.use('/books', bookRoutes);
  app.use('/trades', tradeRoutes);
  app.get('*', (req, res) => {
    res.redirect('/')
  })
}
