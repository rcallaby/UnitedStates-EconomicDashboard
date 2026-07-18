import { useQuery } from '@tanstack/react-query';
import { apiFetch } from './apiClient';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export const useDashboardOverview = () => {
  return useQuery({
    queryKey: ['dashboard-overview'],
    queryFn: () => apiFetch<ApiResponse<any>>('/data/overview'),
  });
};

export const useBlsSeries = (seriesId: string, startYear = '2015', endYear?: string) => {
  return useQuery({
    queryKey: ['bls-series', seriesId, startYear, endYear],
    queryFn: () =>
      apiFetch<ApiResponse<any>>(`/data/bls/series/${seriesId}?startYear=${startYear}${endYear ? `&endYear=${endYear}` : ''}`),
  });
};