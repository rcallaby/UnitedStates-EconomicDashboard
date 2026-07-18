const express = require('express');
const dataController = require('../../controllers/data.controller');
const { validate, schemas } = require('../../utils/validator');

const router = express.Router();

router.get('/overview', dataController.getOverview);
router.get('/bls/series/:seriesId', validate(schemas.seriesQuery), dataController.getBlsSeries);

module.exports = router;