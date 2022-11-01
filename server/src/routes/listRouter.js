const express = require('express');
const router = new express.Router();
const {addToListMiddleware} = require('../middleware/listMiddleware')
const {
  getAllListController,
  addToListController,
  deleteFromListController
} = require('../controllers/listController')

router.get('/', getAllListController);
router.post('/', addToListMiddleware, addToListController);
router.delete('/:id', deleteFromListController);


module.exports = router