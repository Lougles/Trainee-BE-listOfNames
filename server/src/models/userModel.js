const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

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