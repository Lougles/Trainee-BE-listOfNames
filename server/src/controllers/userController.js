const {
  registrationService,
  loginService
} = require('../services/userService')




const registrationController = async (req, res ) => {
  const {status, message} = await registrationService(req.body.email, req.body.password)
  res.status(status).json(message)
}
const loginController = async (req, res ) => {
  const {status, message} = await loginService(req.body.email, req.body.password)
  res.status(status).json(message)
}


module.exports = {
  registrationController,
  loginController
}