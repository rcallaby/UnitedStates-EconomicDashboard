const blsService = require('../services/bls.service');
const db = require('../services/db.service');
const { KEY_BLS_SERIES } = require('../utils/constants');

async function ingestBlsData() {
  console.log('🔄 Starting BLS ingestion...');
  const seriesIds = Object.values(KEY_BLS_SERIES);
  const currentYear = new Date().getFullYear().toString();

  try {
    const data = await blsService.getSeriesData(seriesIds, '2020', currentYear);

    for (const series of data) {
      for (const point of series.data || []) {
        const date = `${point.year}-${point.period.replace('M', '')}-01`;
        await db.query(
          `INSERT INTO economic_observations (series_id, date, value, source)
           VALUES ($1, $2, $3, 'BLS')
           ON CONFLICT (series_id, date) DO UPDATE SET value = EXCLUDED.value`,
          [series.seriesID, date, parseFloat(point.value)]
        );
      }
    }
    console.log('✅ BLS ingestion completed');
  } catch (err) {
    console.error('BLS ingestion failed:', err.message);
  }
}

module.exports = { ingestBlsData };