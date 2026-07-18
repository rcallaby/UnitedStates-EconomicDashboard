import { useDashboardOverview, useBlsSeries } from '../../api/queries';
import MetricCard from '../../components/ui/MetricCard';
import EconomicLineChart from '../../components/charts/EconomicLineChart';
import { TrendingUp, Users } from 'lucide-react';
import { formatPercent, formatNumber } from '../../utils/formatters';

export default function DashboardPage() {
  const { 
    data: overviewResponse, 
    isLoading: overviewLoading, 
    error: overviewError 
  } = useDashboardOverview();

  const { 
    data: unemploymentResponse, 
    isLoading: unempLoading 
  } = useBlsSeries('LNS14000000', '2018');

  const { 
    data: cpiResponse, 
    isLoading: cpiLoading 
  } = useBlsSeries('CUUR0000SA0', '2018');

  // Safely extract data (backend wraps responses in { success, data })
  const overview = overviewResponse?.data;
  const unemploymentSeries = unemploymentResponse?.data?.[0];
  const cpiSeries = cpiResponse?.data?.[0];

  // Get latest values (BLS returns newest first)
  const latestUnemployment = unemploymentSeries?.data?.[0]?.value;
  const latestCPI = cpiSeries?.data?.[0]?.value;

  if (overviewLoading || unempLoading || cpiLoading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-xl text-slate-400">Loading economic data from BLS & Census...</div>
      </div>
    );
  }

  if (overviewError) {
    return <div className="p-8 text-red-400">Error loading dashboard: {overviewError.message}</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">United States Economic Dashboard</h2>
        <p className="text-slate-400">Real-time data from BLS Public API & U.S. Census Bureau</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Unemployment Rate"
          value={latestUnemployment ? formatPercent(latestUnemployment) : 'N/A'}
          change="Latest monthly figure"
          trend="neutral"
          icon={<Users className="h-8 w-8" />}
        />
        <MetricCard
          title="CPI (All Urban Consumers)"
          value={latestCPI ? formatNumber(latestCPI, 1) : 'N/A'}
          change="Year-over-year inflation"
          trend="up"
          icon={<TrendingUp className="h-8 w-8" />}
        />
        {/* Add more cards here later */}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {unemploymentSeries && (
          <EconomicLineChart
            data={unemploymentSeries.data}
            title="Unemployment Rate (%) - National"
            color="#10b981"
          />
        )}
        {cpiSeries && (
          <EconomicLineChart
            data={cpiSeries.data}
            title="Consumer Price Index (CPI-U)"
            color="#3b82f6"
          />
        )}
      </div>

      <div className="text-xs text-slate-500">
        Data source: U.S. Bureau of Labor Statistics (BLS) • Last refreshed: {overview?.lastUpdated || 'just now'}
      </div>
    </div>
  );
}