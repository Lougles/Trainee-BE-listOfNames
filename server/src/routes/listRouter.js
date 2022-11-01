const express = require('express');
const router = new express.Router();
const {addToListMiddleware} = require('../middleware/addToListMiddleware')
const {
  getAllListController,
  addToListController
} = require('../controllers/listController')

router.get('/', getAllListController);
router.post('/', addToListMiddleware, addToListController);

module.exports = router