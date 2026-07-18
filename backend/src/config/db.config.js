const { Pool } = require('pg');
const config = require('./env.config');

const pool = new Pool({
  connectionString: config.databaseUrl,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test connection on startup
pool.on('connect', () => console.log('✅ PostgreSQL connected'));
pool.on('error', (err) => console.error('PostgreSQL error:', err));

module.exports = pool;