import React from 'react';
import { BarChart3, Brain, TrendingUp } from 'lucide-react';
import { CryptoTable } from './components/CryptoTable';
import { CheckingStats } from './components/CheckingStats';
import { CheckingChart } from './components/CheckingChart';
import { BehaviorInsights } from './components/BehaviorInsights';
import { useCryptoData } from './hooks/useCryptoData';
import { useCheckingTracker } from './hooks/useCheckingTracker';

function App() {
  const { cryptoData, loading, error, lastUpdated, refetch } = useCryptoData();
  const { dailyStats, insights, todaysStats, weeklyAverage, clearData } = useCheckingTracker();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">CryptoMind</h1>
                <p className="text-slate-400 text-sm">Mindful Crypto Tracking</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-slate-400 text-sm">Building awareness since</p>
                <p className="text-white font-semibold">Today</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Stats Overview */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">Your Checking Behavior</h2>
            </div>
            <CheckingStats
              todaysChecks={todaysStats.checks}
              weeklyAverage={weeklyAverage}
              totalTime={todaysStats.totalTime}
              streak={dailyStats.length}
            />
          </div>

          {/* Crypto Table */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Market Data</h2>
            </div>
            <CryptoTable
              data={cryptoData}
              loading={loading}
              error={error}
              lastUpdated={lastUpdated}
              onRefresh={refetch}
            />
          </div>

          {/* Charts and Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold text-white">Checking Patterns</h2>
              </div>
              <CheckingChart data={dailyStats} />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-6 h-6 text-yellow-400" />
                <h2 className="text-xl font-semibold text-white">Mindfulness Center</h2>
              </div>
              <BehaviorInsights insights={insights} onClearData={clearData} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-slate-400 text-sm">
              CryptoMind helps you build healthier crypto checking habits
            </p>
            <p className="text-slate-500 text-sm">
              Data stored locally in your browser
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;