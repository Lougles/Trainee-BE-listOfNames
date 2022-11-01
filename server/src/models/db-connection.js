const mongoose = require ('mongoose');
require('dotenv').config()
const database = '/db-numbered'
const URL = process.env.URL + database

const connection = async() => {
  return mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = {
  connection
}