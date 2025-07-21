import React from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { CryptoData } from '../types';

interface CryptoTableProps {
  data: CryptoData[];
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  onRefresh: () => void;
}

export const CryptoTable: React.FC<CryptoTableProps> = ({
  data,
  loading,
  error,
  lastUpdated,
  onRefresh
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage > 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  };

  const formatMarketCap = (marketCap: number) => {
    const billion = 1e9;
    const million = 1e6;
    
    if (marketCap >= billion) {
      return `$${(marketCap / billion).toFixed(2)}B`;
    } else if (marketCap >= million) {
      return `$${(marketCap / million).toFixed(2)}M`;
    }
    return `$${marketCap.toLocaleString()}`;
  };

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 text-center">
        <p className="text-red-400 mb-4">Failed to load crypto data</p>
        <button
          onClick={onRefresh}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden">
      <div className="p-6 border-b border-slate-700/50 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-white">Top Cryptocurrencies</h2>
          {lastUpdated && (
            <p className="text-slate-400 text-sm mt-1">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
          )}
        </div>
        <button
          onClick={onRefresh}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-900/50">
            <tr>
              <th className="px-6 py-4 text-left text-slate-300 font-medium">Rank</th>
              <th className="px-6 py-4 text-left text-slate-300 font-medium">Name</th>
              <th className="px-6 py-4 text-right text-slate-300 font-medium">Price</th>
              <th className="px-6 py-4 text-right text-slate-300 font-medium">24h</th>
              <th className="px-6 py-4 text-right text-slate-300 font-medium">7d</th>
              <th className="px-6 py-4 text-right text-slate-300 font-medium">30d</th>
              <th className="px-6 py-4 text-right text-slate-300 font-medium">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Loading skeleton
              Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className="border-t border-slate-700/30">
                  <td className="px-6 py-4">
                    <div className="w-8 h-4 bg-slate-700 rounded animate-pulse"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded-full animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="w-20 h-4 bg-slate-700 rounded animate-pulse"></div>
                        <div className="w-12 h-3 bg-slate-700 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="w-16 h-4 bg-slate-700 rounded animate-pulse ml-auto"></div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="w-12 h-4 bg-slate-700 rounded animate-pulse ml-auto"></div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="w-12 h-4 bg-slate-700 rounded animate-pulse ml-auto"></div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="w-12 h-4 bg-slate-700 rounded animate-pulse ml-auto"></div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="w-16 h-4 bg-slate-700 rounded animate-pulse ml-auto"></div>
                  </td>
                </tr>
              ))
            ) : (
              data.map((crypto) => (
                <tr key={crypto.id} className="border-t border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                  <td className="px-6 py-4 text-slate-300 font-medium">
                    {crypto.market_cap_rank}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={crypto.image} 
                        alt={crypto.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-white font-medium">{crypto.name}</div>
                        <div className="text-slate-400 text-sm uppercase">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-white font-medium">
                    {formatPrice(crypto.current_price)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className={`flex items-center justify-end gap-1 ${
                      crypto.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {crypto.price_change_percentage_24h > 0 ? 
                        <TrendingUp className="w-4 h-4" /> : 
                        <TrendingDown className="w-4 h-4" />
                      }
                      {formatPercentage(crypto.price_change_percentage_24h)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={crypto.price_change_percentage_7d_in_currency > 0 ? 'text-green-400' : 'text-red-400'}>
                      {formatPercentage(crypto.price_change_percentage_7d_in_currency)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={crypto.price_change_percentage_30d_in_currency > 0 ? 'text-green-400' : 'text-red-400'}>
                      {formatPercentage(crypto.price_change_percentage_30d_in_currency)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-300">
                    {formatMarketCap(crypto.market_cap)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};