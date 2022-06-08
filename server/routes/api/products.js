const express = require('express');

const { ctrlWrapper } = require('../../middlewares');
const { products: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

module.exports = router;
