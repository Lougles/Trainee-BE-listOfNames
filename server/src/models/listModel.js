const mongoose = require('mongoose')

const listModel = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter a vaid name."],
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