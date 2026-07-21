import { useQuery } from '@tanstack/react-query';
import { apiFetch } from './apiClient';
import { mockBlsSeries } from './mockData';

export const useDashboardOverview = () => {
  return useQuery({
    queryKey: ['dashboard-overview'],
    queryFn: async () => {
      try {
        return await apiFetch<any>('/data/overview');
      } catch (err: any) {
        if (err.message === 'DEMO_MODE') {
          // Return a minimal fallback since we removed mockDashboardOverview
          return {
            success: true,
            data: {
              lastUpdated: new Date().toISOString(),
            },
          };
        }
        throw err;
      }
    },
  });
};

export const useBlsSeries = (seriesId: string, startYear = '2023') => {
  return useQuery({
    queryKey: ['bls-series', seriesId, startYear],
    queryFn: async () => {
      try {
        return await apiFetch<any>(`/data/bls/series/${seriesId}?startYear=${startYear}`);
      } catch (err: any) {
        if (err.message === 'DEMO_MODE') {
          return mockBlsSeries(seriesId);
        }
        throw err;
      }
    },
  });
};