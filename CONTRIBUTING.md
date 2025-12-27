# Contributing to UnitedStates-EconomicDashboard

Thank you for your interest in contributing to the Core Data API Service!  
This project aims to provide a clean, scalable, and production-grade backend for
aggregating U.S. economic data from public sources.

Contributions of all kinds are welcome: bug fixes, new data providers, documentation,
tests, and architectural improvements.

---

## Project Philosophy

Before contributing, please keep the following principles in mind:

- **Clarity over cleverness**
- **Separation of concerns**
- **Provider-agnostic design**
- **Read-optimized performance**
- **Production realism**

This is not a demo project — it is intentionally structured as a real-world data platform.
---

## How to Contribute

### 1. Fork the Repository
Create your own fork and clone it locally.

```bash
git clone https://github.com/your-username/core-data-api-service.git
cd core-data-api-service
```

### 2. Create a Feature Branch

Use descriptive branch names:

```bash
git checkout -b feature/add-bea-provider
git checkout -b fix/cache-key-collision
```

### 3. Set Up the Development Environment

Install dependencies:

```bash
npm install
```

Configure environment variables:

```bash
cp .env.example .env
```

Ensure PostgreSQL and Redis are running locally, then initialize the database:

```bash
psql -d econ -f sql/schema.sql
```

## Testing Guidelines

While the project currently focuses on core functionality, contributions should:

- Avoid breaking existing endpoints
- Prefer pure functions in services where possible
- Include unit tests for new providers or utilities when feasible

Test directories:
- `src/test/unit`
- `src/test/integration`

## Code Structure Guidelines

### Providers

All external data sources must live under `src/services/providers/`.

Each provider should:
- Encapsulate all API-specific logic
- Normalize responses into `{ date, value }` pairs
- Avoid leaking provider-specific formats upstream

### Services

Business logic belongs in the services layer.

Rules:
- Controllers should remain thin
- Services may orchestrate cache, database, and providers
- No HTTP or Express-specific logic in services

### Metrics Registry

All new metrics must be registered in `src/utils/metrics.constant.js`.

This registry acts as the system's contract for:
- Validation
- Discoverability
- Data provenance

## Code Quality Standards

Please ensure that:

- Files are logically named
- Functions are small and focused
- Errors are handled explicitly
- Logging is meaningful but not noisy
- No secrets are committed to the repository
- Formatting remains consistent with existing code

## Documentation

If your contribution:
- Adds a new provider
- Introduces a new metric
- Changes the data model
- Alters system behavior

Please update:
- `README.md` (user-facing changes)
- `ARCHITECTURE.md` (structural or design changes)

Documentation is considered a first-class contribution.

## Submitting a Pull Request

Before submitting a PR:
- Ensure the application starts successfully
- Verify existing endpoints still work
- Rebase your branch if necessary
- Write a clear, concise PR description

PR descriptions should include:
- What was changed
- Why it was changed
- Any trade-offs or follow-up work

## Security Considerations

This project consumes public data and does not store PII. If you discover a security concern (e.g., key leakage, injection risk):

- Do not open a public issue
- Instead, report it responsibly via private communication

## Areas Especially Open to Contribution

- Additional data providers (BEA, Treasury, Federal Housing Finance Agency)
- State and county-level support
- Background ingestion jobs
- Observability improvements
- OpenAPI / Swagger documentation
- Frontend dashboard integration

## Code of Conduct

Be respectful, inclusive, and constructive. Healthy technical debate is encouraged; personal attacks are not tolerated.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

