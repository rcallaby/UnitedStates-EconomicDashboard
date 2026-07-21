const redis = require('../config/redis.config');

module.exports = {
  async get(key) {
    try {
      const data = await redis.get(key);
      return data ? JSON.parse(data) : null;
    } catch (err) {
      return null; // Fail silently if Redis is down
    }
  },

  async set(key, value, ttlSeconds = 3600) {
    try {
      await redis.setex(key, ttlSeconds, JSON.stringify(value));
    } catch (err) {
      // Cache is optional — fail silently
    }
  },

  async del(key) {
    try {
      await redis.del(key);
    } catch (_) {}
  },
};