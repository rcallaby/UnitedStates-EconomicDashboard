import { format } from 'date-fns';

export const formatNumber = (num: number | string, decimals = 1): string => {
  const n = typeof num === 'string' ? parseFloat(num) : num;
  return n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const formatPercent = (value: number | string): string => {
  return `${formatNumber(value, 1)}%`;
};

export const formatDate = (dateStr: string): string => {
  return format(new Date(dateStr), 'MMM yyyy');
};

export const getLatestValue = (seriesData: any[] | undefined): string => {
  return seriesData?.[0]?.value || 'N/A';
};