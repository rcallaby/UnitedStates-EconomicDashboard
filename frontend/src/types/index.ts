export interface EconomicObservation {
  series_id: string;
  date: string;
  value: number;
  source: string;
}

export interface BlsDataPoint {
  year: string;
  period: string;
  value: string;
  footnotes?: any[];
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
}