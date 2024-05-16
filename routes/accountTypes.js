const AccountTypeModal = require('../models/accountTypes');
const express = require('express');
const { getAccountTypes } = require('../controllers/accountTypes');
const router = express.Router();

router.get('/', getAccountTypes);

module.exports = router;