import { useState } from 'react';

export default function StatesPage() {
  const [selectedState, setSelectedState] = useState('CA');

  // Placeholder for future Census geo data integration
  const statesData = [
    { state: 'California', unemployment: '4.8', population: '39.5M' },
    { state: 'Texas', unemployment: '3.9', population: '30.5M' },
    { state: 'New York', unemployment: '4.2', population: '19.7M' },
  ];

  return (
    <div>
      <h2 className="mb-6 text-3xl font-bold">State-Level Economic Data</h2>
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700 text-left text-sm text-slate-400">
              <th className="pb-3">State</th>
              <th className="pb-3">Unemployment Rate</th>
              <th className="pb-3">Population</th>
            </tr>
          </thead>
          <tbody>
            {statesData.map((row) => (
              <tr key={row.state} className="border-b border-slate-800 hover:bg-slate-800">
                <td className="py-4 font-medium">{row.state}</td>
                <td className="py-4">{row.unemployment}%</td>
                <td className="py-4">{row.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-slate-400">
        Full state-level integration coming soon (Census ACS + BLS LAUS data).
      </p>
    </div>
  );
}