const blsService = require('./bls.service');
const censusService = require('./census.service');

module.exports = {
  async getDashboardOverview() {
    const [unemployment, cpi] = await Promise.all([
      blsService.getUnemploymentRate('2023'),
      blsService.getCPI('2023'),
    ]);

    return {
      lastUpdated: new Date().toISOString(),
      unemploymentRate: unemployment[0]?.data?.slice(-1)[0] || null,
      cpi: cpi[0]?.data?.slice(-1)[0] || null,
      // Add more metrics...
    };
  },
};