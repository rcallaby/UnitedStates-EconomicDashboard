import { MetricCardProps } from '../../types';

export default function MetricCard({ title, value, change, trend = 'neutral', icon }: MetricCardProps) {
  const trendColor =
    trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-slate-400';

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <p className="mt-2 text-4xl font-bold tracking-tight">{value}</p>
        </div>
        {icon && <div className="text-emerald-400">{icon}</div>}
      </div>
      {change && <p className={`mt-2 text-sm ${trendColor}`}>{change}</p>}
    </div>
  );
}