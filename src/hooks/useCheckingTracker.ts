import { useState, useEffect, useRef } from 'react';
import { CheckingSession, DailyStats, BehaviorInsight } from '../types';
import { storage } from '../utils/storage';

export const useCheckingTracker = () => {
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [currentSession, setCurrentSession] = useState<CheckingSession | null>(null);
  const [insights, setInsights] = useState<BehaviorInsight[]>([]);
  const sessionStartRef = useRef<number | null>(null);

  useEffect(() => {
    // Start tracking session
    sessionStartRef.current = Date.now();
    
    const handleBeforeUnload = () => {
      if (sessionStartRef.current) {
        const session: CheckingSession = {
          timestamp: sessionStartRef.current,
          duration: Date.now() - sessionStartRef.current,
          date: new Date().toISOString().split('T')[0]
        };
        
        storage.addCheckingSession(session);
        storage.updateDailyStats(session.date, session);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Load existing data
    setDailyStats(storage.getDailyStats());
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload(); // Save session on component unmount
    };
  }, []);

  useEffect(() => {
    generateInsights();
  }, [dailyStats]);

  const generateInsights = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayStats = dailyStats.find(stat => stat.date === today);
    const recent7Days = dailyStats.slice(-7);
    const avgChecksPerDay = recent7Days.reduce((sum, day) => sum + day.checks, 0) / recent7Days.length;
    
    const newInsights: BehaviorInsight[] = [];

    if (todayStats) {
      if (todayStats.checks > 50) {
        newInsights.push({
          type: 'warning',
          message: `You've checked crypto prices ${todayStats.checks} times today`,
          recommendation: 'Consider setting specific times for checking prices to reduce anxiety'
        });
      } else if (todayStats.checks > 20) {
        newInsights.push({
          type: 'info',
          message: `${todayStats.checks} checks today - moderate usage`,
          recommendation: 'Try to limit checking to 3-4 times per day'
        });
      } else if (todayStats.checks < 5) {
        newInsights.push({
          type: 'success',
          message: 'Great job maintaining healthy checking habits!',
          recommendation: 'Keep up the balanced approach to crypto monitoring'
        });
      }
    }

    if (avgChecksPerDay > 30) {
      newInsights.push({
        type: 'warning',
        message: `Your average is ${Math.round(avgChecksPerDay)} checks per day`,
        recommendation: 'Consider implementing a checking schedule'
      });
    }

    setInsights(newInsights);
  };

  const getTodaysStats = () => {
    const today = new Date().toISOString().split('T')[0];
    return dailyStats.find(stat => stat.date === today) || {
      date: today,
      checks: 0,
      totalTime: 0,
      sessions: []
    };
  };

  const getWeeklyAverage = () => {
    const recent7Days = dailyStats.slice(-7);
    if (recent7Days.length === 0) return 0;
    return recent7Days.reduce((sum, day) => sum + day.checks, 0) / recent7Days.length;
  };

  return {
    dailyStats,
    insights,
    todaysStats: getTodaysStats(),
    weeklyAverage: getWeeklyAverage(),
    clearData: () => {
      storage.clearAllData();
      setDailyStats([]);
    }
  };
};