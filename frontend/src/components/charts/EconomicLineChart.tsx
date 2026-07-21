import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface Props {
  data: Array<{ year: string; period: string; value: string }>;
  title: string;
  color?: string;
}

export default function EconomicLineChart({ data, title, color = '#10b981' }: Props) {
  if (!data || data.length === 0) {
    return (
      <div className="chart-container">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-slate-400">No data available</p>
      </div>
    );
  }

  // Convert your custom date format into something Recharts can use
  const chartData = data.map((item) => {
    const month = item.period.replace('M', '').padStart(2, '0');
    return {
      date: `${item.year}-${month}`,           // e.g. "2025-12"
      displayDate: `${item.year}-${item.period}`, // for tooltip
      value: parseFloat(item.value),
    };
  });

  return (
    <div className="chart-container">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <span className="text-xs text-slate-400">BLS</span>
      </div>

      <div className="h-[320px] -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(date) => {
                // Format "2025-12" → "Dec 25"
                const [year, month] = date.split('-');
                const dateObj = new Date(`${year}-${month}-01`);
                return dateObj.toLocaleDateString('en-US', { 
                  month: 'short', 
                  year: '2-digit' 
                });
              }}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(label) => {
                const [year, month] = label.split('-');
                return new Date(`${year}-${month}-01`).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric'
                });
              }}
            />
            <Area 
              type="natural" 
              dataKey="value" 
              stroke={color} 
              fill={color} 
              fillOpacity={0.12}
              strokeWidth={2.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}