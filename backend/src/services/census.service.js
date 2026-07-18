const axios = require('axios');
const cache = require('./cache.service');
const config = require('../config/env.config');
const { CENSUS_EITS_URL, KEY_CENSUS_DATASETS } = require('../utils/constants');

async function fetchCensus(dataset, params = {}) {
  const cacheKey = `census:${dataset}:${JSON.stringify(params)}`;
  const cached = await cache.get(cacheKey);
  if (cached) return cached;

  const url = `${CENSUS_EITS_URL}${dataset}`;
  const query = new URLSearchParams({
    ...params,
    key: config.censusApiKey,
  });

  const response = await axios.get(`${url}?${query.toString()}`);
  const data = response.data;

  await cache.set(cacheKey, data, 3600);
  return data;
}

module.exports = {
  async getHousingVacancies(year = '2023') {
    return fetchCensus(KEY_CENSUS_DATASETS.HOUSING_VACANCIES, { time: year });
  },

  async getNewResidentialConstruction(params = {}) {
    return fetchCensus(KEY_CENSUS_DATASETS.NEW_RESIDENTIAL_CONSTRUCTION, params);
  },
};