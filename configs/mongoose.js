const mongoose = require('mongoose');
const util = require('util');
const config = require('./config');

const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
mongoose.connection.once('open', function callback () {
  console.log('MongoDB Connection...')
} )
