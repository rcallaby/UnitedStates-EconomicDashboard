require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  blsApiKey: process.env.BLS_API_KEY || '',
  censusApiKey: process.env.CENSUS_API_KEY || '',
  databaseUrl: process.env.DATABASE_URL,
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
};

if (!config.databaseUrl) {
  console.warn('⚠️ DATABASE_URL not set. Using in-memory fallback (not recommended for production).');
}

module.exports = config;