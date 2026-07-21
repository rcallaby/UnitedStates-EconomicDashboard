import { ReactNode } from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: ReactNode;
}

export default function MetricCard({
  title,
  value,
  change,
  trend = 'neutral',
  icon,
}: MetricCardProps) {
  const trendColor =
    trend === 'up'
      ? 'text-[#22c55e]'
      : trend === 'down'
      ? 'text-[#ef4444]'
      : 'text-[#94a3b8]';

  return (
    <div className="bg-[#111418] border border-[#1f252e] rounded-md p-5 transition-colors hover:border-[#334155]">
      <div className="flex items-start justify-between">
        {/* Title */}
        <div>
          <div className="text-[10px] font-semibold tracking-[1.5px] text-[#94a3b8] uppercase mb-1.5">
            {title}
          </div>

          {/* Value */}
          <div className="text-[32px] font-semibold tracking-[-1.5px] text-white tabular-nums leading-none">
            {value}
          </div>
        </div>

        {/* Icon */}
        {icon && (
          <div className="text-[#94a3b8] mt-1">
            {icon}
          </div>
        )}
      </div>

      {/* Change */}
      {change && (
        <div className={`mt-3 text-sm font-medium ${trendColor}`}>
          {change}
        </div>
      )}
    </div>
  );
}