const express = require('express');
const { fetchCityStateBasedOnKey } = require('../controllers/zipcodes');
const router = express.Router();

router.get('/', fetchCityStateBasedOnKey);

module.exports = router;