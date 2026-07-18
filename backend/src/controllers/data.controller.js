const dataService = require('../services/data.service');
const blsService = require('../services/bls.service');
const { validate, schemas } = require('../utils/validator');

exports.getOverview = async (req, res, next) => {
  try {
    const data = await dataService.getDashboardOverview();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.getBlsSeries = async (req, res, next) => {
  try {
    const { seriesId } = req.params;
    const { startYear, endYear } = req.query;
    const data = await blsService.getSeriesData([seriesId], startYear, endYear);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};