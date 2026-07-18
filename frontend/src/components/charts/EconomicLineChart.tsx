import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatDate } from '../../utils/formatters';

interface Props {
  data: Array<{ year: string; period: string; value: string }>;
  title: string;
  color?: string;
}

export default function EconomicLineChart({ data, title, color = '#10b981' }: Props) {
  const chartData = data.map((d) => ({
    date: `${d.year}-${d.period}`,
    value: parseFloat(d.value),
  }));

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="date" tickFormatter={formatDate} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke={color} strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}