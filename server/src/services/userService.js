const {User} = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const registrationService = async (email, password) => {
  try {
    return {status: 201, message: await new User({email, password}).save() }
  } catch (err) {
    return {status: 400, message: err.message}
  }
}

const loginService = async (email, password) => {
  try {
    const user = await User.findOne({email});
    if(!user) return {status: 400, message: {"message": "You are not registered yet"}}
    if(!await bcrypt.compare(password, user.password)) return {status: 400, message: {"message": "Wrong password"}}
    const token = jwt.sign({
      _id: user._id,
      createdAt: user.createdAt,
    }, process.env.JWT);
    user.token = token;
    await user.save();
    return {status: 200, message: {"token": user.token}}
  } catch (err) {
    return {status: 400, message: err.message}
  }
}


module.exports = {
  registrationService,
  loginService
}