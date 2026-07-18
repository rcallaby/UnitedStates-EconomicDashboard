const { logger } = require('./logger.middleware');

module.exports = (err, req, res, next) => {
  logger.error(err.stack || err.message);
  
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
};