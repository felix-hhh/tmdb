const express = require('express');
const index = require('../api');

const router = express.Router();

router.get('/query', index.query)

module.exports = router