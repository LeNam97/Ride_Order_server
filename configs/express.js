const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes =  require('../routes/index')

const app = express();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(logger('dev'))
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/', routes)

module.exports = app
