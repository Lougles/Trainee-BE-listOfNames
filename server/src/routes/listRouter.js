const express = require('express');
const router = new express.Router();
const {addToListMiddleware} = require('../middleware/listMiddleware')
const {authMiddleware} = require('../middleware/authMiddleware')
const {
  getAllListController,
  addToListController,
  deleteFromListController,
  updateAllFieldsController
} = require('../controllers/listController')

router.use(authMiddleware)
router.get('/', getAllListController);
router.post('/', addToListMiddleware, addToListController);
router.delete('/:id', deleteFromListController);
router.put('/:id', addToListMiddleware, updateAllFieldsController)

module.exports = router