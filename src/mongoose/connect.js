const mongoose = require('mongoose');
const config = require('../config/mongoose.json');

/*  Status Codes Used
*   200 - Success
*   201 - Object created
*   204 - Doesn't exist / incorrect info
*   400 - Query failed
*   409 - Info already exists
*/

module.exports = () => mongoose.connect(config.connection.url, config.options).then(
  () => {console.log('Connected to MongoDB')},
  (err) => {console.log(err)});
