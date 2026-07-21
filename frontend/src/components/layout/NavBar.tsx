import { BarChart3, RefreshCw, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-2xl font-semibold tracking-tight">US Economic Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <button className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-900">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
          <div className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2">
            <User className="h-4 w-4" />
            <span>Demo User</span>
          </div>
        </div>
      </div>
    </nav>
  );
}