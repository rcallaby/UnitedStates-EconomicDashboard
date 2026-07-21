import React from 'react';

export default function DemoBanner(): React.ReactElement {
  return (
    <div className="mb-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 text-sm text-yellow-400 flex items-center gap-2">
      <span>🧪</span>
      <span>
        <strong>Demo Mode</strong> — Showing sample data (Backend not connected)
      </span>
    </div>
  );
}