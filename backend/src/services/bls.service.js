const axios = require('axios');
const cache = require('./cache.service');
const db = require('./db.service');
const config = require('../config/env.config');
const { BLS_BASE_URL, KEY_BLS_SERIES } = require('../utils/constants');

async function fetchBlsSeries(seriesIds, startYear, endYear) {
  const cacheKey = `bls:${seriesIds.join(',')}:${startYear}-${endYear}`;
  const cached = await cache.get(cacheKey);
  if (cached) return cached;

  try {
    const response = await axios.post(BLS_BASE_URL, {
      seriesid: seriesIds,
      startyear: startYear,
      endyear: endYear,
      registrationkey: config.blsApiKey,
    });

    if (response.data.status !== 'REQUEST_SUCCEEDED') {
      throw new Error(response.data.message?.[0] || 'BLS API error');
    }

    const data = response.data.Results.series;
    await cache.set(cacheKey, data, 1800); // 30 min cache
    return data;
  } catch (error) {
    // Fallback to DB
    const dbData = await db.query(
      `SELECT * FROM economic_observations WHERE series_id = ANY($1) AND date >= $2 AND date <= $3`,
      [seriesIds, `${startYear}-01-01`, `${endYear}-12-31`]
    );
    return dbData.rows.length ? dbData.rows : [];
  }
}

module.exports = {
  async getUnemploymentRate(startYear = '2015', endYear) {
    return fetchBlsSeries([KEY_BLS_SERIES.UNEMPLOYMENT], startYear, endYear || new Date().getFullYear().toString());
  },

  async getCPI(startYear = '2015', endYear) {
    return fetchBlsSeries([KEY_BLS_SERIES.CPI], startYear, endYear || new Date().getFullYear().toString());
  },

  async getSeriesData(seriesIds, startYear, endYear) {
    return fetchBlsSeries(seriesIds, startYear, endYear);
  },
};