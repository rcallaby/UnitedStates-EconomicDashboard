const morgan = require('morgan');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [new winston.transports.Console()],
});

const loggerMiddleware = morgan('combined', {
  stream: { write: (message) => logger.info(message.trim()) },
});

module.exports = { loggerMiddleware, logger };