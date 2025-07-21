import React from 'react';
import { DailyStats } from '../types';

interface CheckingChartProps {
  data: DailyStats[];
}

export const CheckingChart: React.FC<CheckingChartProps> = ({ data }) => {
  const last7Days = data.slice(-7);
  const maxChecks = Math.max(...last7Days.map(d => d.checks), 10);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getBarColor = (checks: number) => {
    if (checks > 50) return 'bg-red-500';
    if (checks > 20) return 'bg-amber-500';
    return 'bg-green-500';
  };

  const getBarHeight = (checks: number) => {
    return Math.max((checks / maxChecks) * 100, 2);
  };

  if (last7Days.length === 0) {
    return (
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <div className="text-center py-8">
          <p className="text-slate-400">No data available yet</p>
          <p className="text-slate-500 text-sm mt-2">Keep using the app to see your checking patterns</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-white">Weekly Checking Pattern</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-slate-400">Healthy (≤20)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded"></div>
            <span className="text-slate-400">Moderate (21-50)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-slate-400">High Risk ({'>'} 50)</span>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between gap-4 h-40">
        {last7Days.map((day, index) => (
          <div key={day.date} className="flex flex-col items-center flex-1">
            <div className="w-full bg-slate-700/30 rounded-t-lg relative h-32 flex items-end">
              <div 
                className={`w-full rounded-t-lg transition-all duration-300 ${getBarColor(day.checks)}`}
                style={{ height: `${getBarHeight(day.checks)}%` }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
                  {day.checks} checks
                </div>
              </div>
            </div>
            <div className="mt-2 text-center">
              <p className="text-slate-400 text-sm font-medium">{formatDate(day.date)}</p>
              <p className="text-white text-lg font-bold">{day.checks}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/30">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-slate-400 text-sm">Total Checks</p>
            <p className="text-white text-lg font-semibold">
              {last7Days.reduce((sum, day) => sum + day.checks, 0)}
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Daily Average</p>
            <p className="text-white text-lg font-semibold">
              {(last7Days.reduce((sum, day) => sum + day.checks, 0) / last7Days.length).toFixed(1)}
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Peak Day</p>
            <p className="text-white text-lg font-semibold">
              {Math.max(...last7Days.map(d => d.checks))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};