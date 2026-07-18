const express = require('express');
const geoController = require('../../controllers/geo.controller');

const router = express.Router();

router.get('/state/:state', geoController.getStateData);

module.exports = router;