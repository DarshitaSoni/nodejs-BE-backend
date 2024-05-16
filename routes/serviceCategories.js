const express = require('express');
const { getServiceCategories } = require('../controllers/serviceCategories');
const router = express.Router();

router.get('/', getServiceCategories);

module.exports = router;