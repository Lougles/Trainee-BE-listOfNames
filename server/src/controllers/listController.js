const {
  getAllListService,
  addToListService,
  deleteFromListService,
  updateAllFieldsService
} = require('../services/listService')

const getAllListController = async(req, res) => {
  const {status, message} = await getAllListService(req.user.number);
  res.status(status).json(message)
}

const addToListController = async(req, res) => {
  const {status, message} = await addToListService(req.body);
  res.status(status).json(message)
}

const deleteFromListController = async(req, res) => {
  const {status, message} = await deleteFromListService(req.params.id);
  res.status(status).json(message)
}

const updateAllFieldsController = async(req, res) => {
  const {status, message} = await updateAllFieldsService(req.params.id, req.body);
  res.status(status).json(message)
}

module.exports = {
  getAllListController,
  addToListController,
  deleteFromListController,
  updateAllFieldsController
}