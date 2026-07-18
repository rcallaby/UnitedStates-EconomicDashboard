import { BarChart3 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-emerald-400" />
          <div>
            <h1 className="text-2xl font-bold">US Economic Dashboard</h1>
            <p className="text-xs text-slate-400">Powered by BLS & Census APIs</p>
          </div>
        </div>
        <div className="text-sm text-slate-400">Last updated: {new Date().toLocaleDateString()}</div>
      </div>
    </nav>
  );
}