const express = require('express');
const { getAllUniversities, getUniversitiesByCountry, getUniversitiesByProvince } = require('../controllers/UniController');
const router = express.Router();

router.get('/', getAllUniversities);
router.get('/:country', getUniversitiesByCountry);
router.get('/:country/:province', getUniversitiesByProvince);

module.exports = router;
