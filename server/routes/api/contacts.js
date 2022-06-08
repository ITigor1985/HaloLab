const express = require('express');
const { validation } = require('../../middlewares');
const { contactShema } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

const validateMiddleware = validation(contactShema);

const router = express.Router();

// request handler functions--------------------------------------

router.post('/', validateMiddleware, ctrl.add);

module.exports = router;
