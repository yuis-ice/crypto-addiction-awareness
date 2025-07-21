import React from 'react';
import { Eye, Clock, Calendar, TrendingUp } from 'lucide-react';

interface CheckingStatsProps {
  todaysChecks: number;
  weeklyAverage: number;
  totalTime: number;
  streak: number;
}

export const CheckingStats: React.FC<CheckingStatsProps> = ({
  todaysChecks,
  weeklyAverage,
  totalTime,
  streak
}) => {
  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    
    if (minutes > 60) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours}h ${remainingMinutes}m`;
    }
    
    return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
  };

  const getHealthColor = (checks: number) => {
    if (checks > 50) return 'text-red-400 bg-red-900/20 border-red-500/30';
    if (checks > 20) return 'text-amber-400 bg-amber-900/20 border-amber-500/30';
    return 'text-green-400 bg-green-900/20 border-green-500/30';
  };

  const getHealthStatus = (checks: number) => {
    if (checks > 50) return 'High Risk';
    if (checks > 20) return 'Moderate';
    return 'Healthy';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-2">
            <Eye className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm">Today's Checks</p>
            <p className="text-2xl font-bold text-white">{todaysChecks}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getHealthColor(todaysChecks)}`}>
          {getHealthStatus(todaysChecks)}
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm">Weekly Average</p>
            <p className="text-2xl font-bold text-white">{weeklyAverage.toFixed(1)}</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm">checks per day</p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-emerald-600/20 border border-emerald-500/30 rounded-lg p-2">
            <Clock className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm">Time Today</p>
            <p className="text-2xl font-bold text-white">{formatTime(totalTime)}</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm">time spent</p>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-orange-600/20 border border-orange-500/30 rounded-lg p-2">
            <Calendar className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm">Awareness Streak</p>
            <p className="text-2xl font-bold text-white">{streak}</p>
          </div>
        </div>
        <p className="text-slate-400 text-sm">days tracking</p>
      </div>
    </div>
  );
};