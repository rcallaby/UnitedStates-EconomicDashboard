const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { loggerMiddleware } = require('./middleware/logger.middleware');
const errorMiddleware = require('./middleware/error.middleware');
const authMiddleware = require('./middleware/auth.middleware');

const dataRouter = require('./api/v1/data.router');
const geoRouter = require('./api/v1/geo.router');
const { startScheduler } = require('./jobs/scheduler');
const db = require('./services/db.service');
const config = require('./config/env.config');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(loggerMiddleware);
app.use(authMiddleware);

app.use('/api/v1/data', dataRouter);
app.use('/api/v1/geo', geoRouter);

app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date() }));

app.use(errorMiddleware);

const PORT = config.port;

async function startServer() {
  await db.initTables();           // Ensure tables exist
  startScheduler();                // Start background jobs

  app.listen(PORT, () => {
    console.log(`United States Economic Dashboard running on port ${PORT}`);
  });
}

startServer();

module.exports = app;