import { useBlsSeries } from '../../api/queries';
import MetricCard from '../../components/ui/MetricCard';
import EconomicLineChart from '../../components/charts/EconomicLineChart';
import { Users, DollarSign, TrendingUp, Briefcase } from 'lucide-react';
import { formatPercent, formatNumber } from '../../utils/formatters';
import DemoBanner from '../../components/ui/DemoBanner';

export default function DashboardPage() {
  const { data: unempData } = useBlsSeries('LNS14000000', '2023');
  const { data: cpiData } = useBlsSeries('CUUR0000SA0', '2023');
  const { data: payrollData } = useBlsSeries('CES0000000001', '2023');
  const { data: wageData } = useBlsSeries('CES0500000003', '2023');

  // Safely extract data (no early returns that can hide content)
  const unemployment = unempData?.data?.[0];
  const cpi = cpiData?.data?.[0];
  const payrolls = payrollData?.data?.[0];
  const wages = wageData?.data?.[0];

  const latestUnemp = unemployment?.data?.at(-1)?.value;
  const latestCPI = cpi?.data?.at(-1)?.value;
  const latestPayrolls = payrolls?.data?.at(-1)?.value;
  const latestWages = wages?.data?.at(-1)?.value;

  return (
    <div className="max-w-[1480px] mx-auto px-8 py-8 space-y-10">
      <DemoBanner />

      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">Economic Dashboard</h1>
        <p className="mt-1 text-lg text-slate-400">United States • Key Macroeconomic Indicators</p>
      </div>

      {/* Key Indicators */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Key Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Unemployment Rate"
            value={latestUnemp ? formatPercent(latestUnemp) : 'N/A'}
            change="+0.4% YoY"
            trend="up"
            icon={<Users className="h-5 w-5" />}
          />
          <MetricCard
            title="CPI (All Items)"
            value={latestCPI ? formatNumber(latestCPI, 1) : 'N/A'}
            change="+3.2% YoY"
            trend="up"
            icon={<DollarSign className="h-5 w-5" />}
          />
          <MetricCard
            title="Nonfarm Payrolls"
            value={latestPayrolls ? formatNumber(latestPayrolls) : 'N/A'}
            change="+700k YoY"
            trend="up"
            icon={<Briefcase className="h-5 w-5" />}
          />
          <MetricCard
            title="Average Hourly Earnings"
            value={latestWages ? `$${latestWages}` : 'N/A'}
            change="+2.8% YoY"
            trend="up"
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>
      </div>

      {/* Charts */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Trend Analysis</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {unemployment?.data?.length > 0 && (
            <EconomicLineChart data={unemployment.data} title="Unemployment Rate (%)" color="#22c55e" />
          )}
          {cpi?.data?.length > 0 && (
            <EconomicLineChart data={cpi.data} title="Consumer Price Index" color="#3b82f6" />
          )}
          {payrolls?.data?.length > 0 && (
            <EconomicLineChart data={payrolls.data} title="Nonfarm Payrolls" color="#f59e0b" />
          )}
          {wages?.data?.length > 0 && (
            <EconomicLineChart data={wages.data} title="Average Hourly Earnings ($)" color="#8b5cf6" />
          )}
        </div>
      </div>
    </div>
  );
}