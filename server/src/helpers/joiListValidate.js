const Joi = require('joi')

const addToListSchema = Joi.object({
  name: Joi.string().min(3).max(10).required(),
  rating: Joi.number().required(),
})

module.exports = {
  addToListSchema
}