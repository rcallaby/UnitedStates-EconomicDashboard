const cron = require('node-cron');
const { ingestBlsData } = require('./bls.ingestion.job');
const { ingestCensusData } = require('./census.ingestion.job');

function startScheduler() {
  // Run BLS ingestion daily at 6 AM
  cron.schedule('0 6 * * *', ingestBlsData, {
    scheduled: true,
    timezone: 'America/New_York',
  });

  // Run Census ingestion weekly
  cron.schedule('0 7 * * 1', ingestCensusData, {
    scheduled: true,
    timezone: 'America/New_York',
  });

  console.log('✅ Scheduler started');
}

module.exports = { startScheduler };