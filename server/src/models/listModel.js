const mongoose = require('mongoose')


const listModel = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  }
})

const List = mongoose.model('listOfNames', listModel);

module.exports = {
  List
}