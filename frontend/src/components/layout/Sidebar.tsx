import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Home, 
  BarChart3 
} from 'lucide-react';

const navItems = [
  { to: '/', label: 'Overview', icon: LayoutDashboard },
  { to: '/labor', label: 'Labor Market', icon: Users },
  { to: '/inflation', label: 'Inflation', icon: DollarSign },
  { to: '/growth', label: 'Growth & GDP', icon: TrendingUp },
  { to: '/housing', label: 'Housing', icon: Home },
  { to: '/all-indicators', label: 'All Indicators', icon: BarChart3 },
];

export default function Sidebar() {
  return (
    <aside className="sidebar hidden lg:flex w-64 flex-col p-6 border-r border-slate-800">
      <div className="mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-emerald-600 flex items-center justify-center">
            <BarChart3 className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="font-semibold text-xl tracking-tight">Fincept</span>
        </div>
      </div>

      <nav className="space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <Icon className="h-4.5 w-4.5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-800">
        <div className="px-3 text-xs text-slate-500">
          Demo Mode • Data from BLS
        </div>
      </div>
    </aside>
  );
}