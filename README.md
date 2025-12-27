# United States Economic Dashboard

A production-grade backend service that aggregates, normalizes, caches, and persists
public U.S. economic data from authoritative sources such as the Federal Reserve (FRED),
Bureau of Labor Statistics (BLS), and U.S. Census Bureau.

This service powers an economic dashboard by providing a clean, consistent, and
dashboard-friendly API over otherwise fragmented public datasets.


## Project Goals

- Provide a **single API** for U.S. economic indicators
- Normalize data across **multiple public providers**
- Support **fast, read-optimized access** for dashboards
- Persist historical data for **trend analysis**
- Demonstrate **clean, scalable backend architecture**

---

## Supported Data Sources

| Source | Description |
|------|------------|
| FRED | GDP, CPI, interest rates |
| BLS  | Unemployment rate |
| Census | Population data (ACS) |

More providers (BEA, Treasury, regional data) can be added easily.

## Project Structure
```
core-data-api-service/
├── src/
│ ├── api/v1/ # HTTP routing layer
│ ├── controllers/ # Request orchestration
│ ├── services/ # Core business logic
│ │ ├── providers/ # External data providers
│ ├── middleware/ # Logging & error handling
│ ├── utils/ # Metrics registry & validation
│ ├── config/ # Environment & infrastructure config
│ ├── server.js # Application entry point
├── sql/
│ └── schema.sql # PostgreSQL schema
├── README.md
├── ARCHITECTURE.md
```
