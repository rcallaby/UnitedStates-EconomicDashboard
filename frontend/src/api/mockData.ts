// src/api/mockData.ts

export const mockBlsSeries = (seriesId: string) => {
  const seriesMap: Record<string, any> = {
    // Labor Market
    'LNS14000000': { // Unemployment Rate
      data: [
        { year: '2023', period: 'M01', value: '3.4' }, { year: '2023', period: 'M06', value: '3.6' },
        { year: '2024', period: 'M01', value: '3.7' }, { year: '2024', period: 'M06', value: '4.1' },
        { year: '2025', period: 'M01', value: '4.0' }, { year: '2025', period: 'M06', value: '4.2' },
        { year: '2025', period: 'M12', value: '4.1' },
      ],
    },
    'LNS11300000': { // Labor Force Participation Rate
      data: [
        { year: '2023', period: 'M01', value: '62.4' }, { year: '2023', period: 'M06', value: '62.6' },
        { year: '2024', period: 'M01', value: '62.5' }, { year: '2024', period: 'M06', value: '62.7' },
        { year: '2025', period: 'M01', value: '62.6' }, { year: '2025', period: 'M06', value: '62.8' },
        { year: '2025', period: 'M12', value: '62.7' },
      ],
    },
    'CES0000000001': { // Total Nonfarm Employment
      data: [
        { year: '2023', period: 'M01', value: '155200' }, { year: '2023', period: 'M06', value: '156100' },
        { year: '2024', period: 'M01', value: '157800' }, { year: '2024', period: 'M06', value: '158900' },
        { year: '2025', period: 'M01', value: '159400' }, { year: '2025', period: 'M06', value: '160100' },
        { year: '2025', period: 'M12', value: '160800' },
      ],
    },

    // Inflation
    'CUUR0000SA0': { // CPI All Items
      data: [
        { year: '2023', period: 'M01', value: '299.2' }, { year: '2023', period: 'M06', value: '303.8' },
        { year: '2024', period: 'M01', value: '309.7' }, { year: '2024', period: 'M06', value: '314.1' },
        { year: '2025', period: 'M01', value: '315.6' }, { year: '2025', period: 'M06', value: '318.9' },
        { year: '2025', period: 'M12', value: '320.1' },
      ],
    },
    'CUUR0000SA0L1E': { // Core CPI
      data: [
        { year: '2023', period: 'M01', value: '301.5' }, { year: '2023', period: 'M06', value: '305.2' },
        { year: '2024', period: 'M01', value: '310.8' }, { year: '2024', period: 'M06', value: '314.5' },
        { year: '2025', period: 'M01', value: '316.2' }, { year: '2025', period: 'M06', value: '319.1' },
        { year: '2025', period: 'M12', value: '320.8' },
      ],
    },

    // Wages
    'CES0500000003': { // Average Hourly Earnings
      data: [
        { year: '2023', period: 'M01', value: '33.10' }, { year: '2023', period: 'M06', value: '33.60' },
        { year: '2024', period: 'M01', value: '34.20' }, { year: '2024', period: 'M06', value: '34.80' },
        { year: '2025', period: 'M01', value: '35.10' }, { year: '2025', period: 'M06', value: '35.60' },
        { year: '2025', period: 'M12', value: '36.10' },
      ],
    },

    // === NEW INDICATORS ===
    'GDP': { // Real GDP (Billions of Chained 2017 Dollars) - Quarterly
      data: [
        { year: '2023', period: 'Q1', value: '22250' }, { year: '2023', period: 'Q2', value: '22380' },
        { year: '2024', period: 'Q1', value: '22590' }, { year: '2024', period: 'Q2', value: '22750' },
        { year: '2025', period: 'Q1', value: '22910' }, { year: '2025', period: 'Q2', value: '23080' },
        { year: '2025', period: 'Q4', value: '23250' },
      ],
    },
    'HOUST': { // Housing Starts (Thousands)
      data: [
        { year: '2023', period: 'M01', value: '1340' }, { year: '2023', period: 'M06', value: '1390' },
        { year: '2024', period: 'M01', value: '1360' }, { year: '2024', period: 'M06', value: '1320' },
        { year: '2025', period: 'M01', value: '1280' }, { year: '2025', period: 'M06', value: '1310' },
        { year: '2025', period: 'M12', value: '1350' },
      ],
    },
    'ICSA': { // Initial Jobless Claims (Thousands, weekly average)
      data: [
        { year: '2023', period: 'M01', value: '190' }, { year: '2023', period: 'M06', value: '230' },
        { year: '2024', period: 'M01', value: '210' }, { year: '2024', period: 'M06', value: '240' },
        { year: '2025', period: 'M01', value: '220' }, { year: '2025', period: 'M06', value: '235' },
        { year: '2025', period: 'M12', value: '215' },
      ],
    },
    'EXIST': { // Existing Home Sales (Millions)
      data: [
        { year: '2023', period: 'M01', value: '4.0' }, { year: '2023', period: 'M06', value: '4.2' },
        { year: '2024', period: 'M01', value: '4.1' }, { year: '2024', period: 'M06', value: '3.9' },
        { year: '2025', period: 'M01', value: '3.8' }, { year: '2025', period: 'M06', value: '4.0' },
        { year: '2025', period: 'M12', value: '4.1' },
      ],
    },
  };

  const series = seriesMap[seriesId] || {
    data: [{ year: '2024', period: 'M01', value: '100' }, { year: '2025', period: 'M12', value: '107' }],
  };

  return {
    success: true,
    data: [{ seriesID: seriesId, data: series.data }],
  };
};