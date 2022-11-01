const Joi = require('joi')

const addToListSchema = Joi.object({
  name: Joi.string().pattern(new RegExp('^[a-zA-Z]{3,30}$')).required(),
  rating: Joi.number().required(),
})

module.exports = {
  addToListSchema
}