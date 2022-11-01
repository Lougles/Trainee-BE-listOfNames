const {addToListSchema} = require('../helpers/joiListValidate')

const addToListMiddleware = (req, res, next) => {
  const validation = addToListSchema.validate(req.body);
  if(validation.error) next(validation.error)
  next()
}

module.exports = {
  addToListMiddleware,
}