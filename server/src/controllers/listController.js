const {
  getAllListService,
  addToListService
} = require('../services/listService')

const getAllListController = async(req,res) => {
  const {status, message} = await getAllListService();
  res.status(status).json(message)
}

const addToListController = async(req,res) => {
  const {status, message} = await addToListService(req.body);
  res.status(status).json(message)
}

module.exports = {
  getAllListController,
  addToListController
}