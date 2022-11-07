const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

const Auth = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  number: {
    type: Number,
    default: getRandomFloat(0.1, 3.5, 2),
  },
  token: {
    type: String,
  }
})

Auth.pre('save', async function() {
  if (this.isNew){
    this.password =  await bcrypt.hash(this.password, 10);
  }
})

const User = mongoose.model('listofusers', Auth)

module.exports = {
  User
}