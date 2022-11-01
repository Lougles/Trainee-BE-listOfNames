const {List} = require('../models/listModel')

const getAllListService = async () => {
  try {
    const data = await List.find().sort({rating: -1})
    return {status: 200, message: data}
  } catch (e) {
    return {status: 400, message: e.message}
  }
}

const addToListService = async (body) => {
  try {
    const data = await List.create({...body});
    return {status: 200, message: data}
  } catch (e) {
    return {status: 400, message: e.message}
  }
}

const deleteFromListService = async (id) => {
  try {
    const data = await List.findByIdAndDelete(id, {returnDocument: 'before'});
    if(!data) return {status: 400, message: {"message": "Not Found"}}
    console.log(data);
    return {status: 200, message: {"message": `Contact ${data.name} has beed deleted`,data}}
  } catch (e) {
    return {status: 400, message: e.message}
  }
}

module.exports = {
  getAllListService,
  addToListService,
  deleteFromListService
}