const express = require('express');
const { listOfEmailDomains } = require('../controllers/users');
const router = express.Router();

router.get('/', listOfEmailDomains);

module.exports = router;