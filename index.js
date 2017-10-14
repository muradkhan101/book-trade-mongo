const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');

require('./src/mongoose/connect')();

const app = express();

// Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(require('./src/assets/logger-middleware'));

// Routing
require('./src/routes')(app);

const port = process.env.PORT || 3000;

console.log(`Listening on port: ${port}`)
app.listen(port);
