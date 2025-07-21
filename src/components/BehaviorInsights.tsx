import React from 'react';
import { AlertTriangle, Info, CheckCircle, Lightbulb, Trash2 } from 'lucide-react';
import { BehaviorInsight } from '../types';

interface BehaviorInsightsProps {
  insights: BehaviorInsight[];
  onClearData: () => void;
}

export const BehaviorInsights: React.FC<BehaviorInsightsProps> = ({ insights, onClearData }) => {
  const getInsightIcon = (type: BehaviorInsight['type']) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-400" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  const getInsightColor = (type: BehaviorInsight['type']) => {
    switch (type) {
      case 'warning':
        return 'border-amber-500/30 bg-amber-900/20';
      case 'info':
        return 'border-blue-500/30 bg-blue-900/20';
      case 'success':
        return 'border-green-500/30 bg-green-900/20';
      default:
        return 'border-blue-500/30 bg-blue-900/20';
    }
  };

  const behaviorTips = [
    {
      title: "Set Specific Check Times",
      description: "Limit price checking to 2-3 predetermined times per day (morning, midday, evening)."
    },
    {
      title: "Use Dollar-Cost Averaging",
      description: "Regular, scheduled investments reduce the need for constant price monitoring."
    },
    {
      title: "Focus on Long-term Goals",
      description: "Daily price fluctuations are noise. Focus on your long-term investment strategy."
    },
    {
      title: "Practice Mindfulness",
      description: "Before checking prices, pause and ask yourself: 'What will I do with this information?'"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Behavior Insights */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Behavior Insights</h3>
          <button
            onClick={onClearData}
            className="bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-400 px-3 py-1 rounded-lg text-sm transition-colors flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear Data
          </button>
        </div>
        
        <div className="space-y-3">
          {insights.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-slate-400">Keep using the app to get personalized insights</p>
            </div>
          ) : (
            insights.map((insight, index) => (
              <div key={index} className={`border rounded-lg p-4 ${getInsightColor(insight.type)}`}>
                <div className="flex items-start gap-3">
                  {getInsightIcon(insight.type)}
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">{insight.message}</p>
                    {insight.recommendation && (
                      <p className="text-slate-300 text-sm">{insight.recommendation}</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Behavioral Tips */}
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-semibold text-white">Healthy Crypto Habits</h3>
        </div>
        
        <div className="grid gap-4">
          {behaviorTips.map((tip, index) => (
            <div key={index} className="border border-slate-700/30 rounded-lg p-4 hover:bg-slate-700/20 transition-colors">
              <h4 className="text-white font-medium mb-2">{tip.title}</h4>
              <p className="text-slate-300 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};