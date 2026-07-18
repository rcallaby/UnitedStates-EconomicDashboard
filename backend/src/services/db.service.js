const pool = require('../config/db.config');

module.exports = {
  async query(text, params) {
    const start = Date.now();
    const res = await pool.query(text, params);
    console.log(`Executed query in ${Date.now() - start}ms`);
    return res;
  },

  async initTables() {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS economic_observations (
        id SERIAL PRIMARY KEY,
        series_id VARCHAR(50) NOT NULL,
        date DATE NOT NULL,
        value NUMERIC,
        source VARCHAR(20) NOT NULL,
        metadata JSONB,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(series_id, date)
      );
    `);
    // Add more tables as needed (geo_data, etc.)
  },
};