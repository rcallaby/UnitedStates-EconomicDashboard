module.exports = {
  BLS_BASE_URL: 'https://api.bls.gov/publicAPI/v2/timeseries/data/',
  CENSUS_BASE_URL: 'https://api.census.gov/data/',
  CENSUS_EITS_URL: 'https://api.census.gov/data/timeseries/eits/',

  // Key BLS Series
  KEY_BLS_SERIES: {
    UNEMPLOYMENT: 'LNS14000000',           // Unemployment Rate
    CPI: 'CUUR0000SA0',                    // CPI-U All Items
    EMPLOYMENT: 'CES0000000001',           // Total Nonfarm Employment
    PPI: 'WPU00000000',                    // Producer Price Index
  },

  // Key Census Datasets (Economic Indicators Time Series + ACS)
  KEY_CENSUS_DATASETS: {
    HOUSING_VACANCIES: 'hv',
    NEW_RESIDENTIAL_CONSTRUCTION: 'resconst',
    RETAIL_SALES: 'marts',
    ACS_POPULATION: 'acs/acs5',            // 5-year ACS
  },
};