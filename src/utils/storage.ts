import { CheckingSession, DailyStats } from '../types';

const STORAGE_KEYS = {
  CHECKING_SESSIONS: 'crypto_checking_sessions',
  DAILY_STATS: 'crypto_daily_stats',
  SETTINGS: 'crypto_tracker_settings'
};

export const storage = {
  getCheckingSessions: (): CheckingSession[] => {
    const sessions = localStorage.getItem(STORAGE_KEYS.CHECKING_SESSIONS);
    return sessions ? JSON.parse(sessions) : [];
  },

  addCheckingSession: (session: CheckingSession): void => {
    const sessions = storage.getCheckingSessions();
    sessions.push(session);
    localStorage.setItem(STORAGE_KEYS.CHECKING_SESSIONS, JSON.stringify(sessions));
  },

  getDailyStats: (): DailyStats[] => {
    const stats = localStorage.getItem(STORAGE_KEYS.DAILY_STATS);
    return stats ? JSON.parse(stats) : [];
  },

  updateDailyStats: (date: string, session: CheckingSession): void => {
    const allStats = storage.getDailyStats();
    const existingDayIndex = allStats.findIndex(stat => stat.date === date);
    
    if (existingDayIndex >= 0) {
      allStats[existingDayIndex].checks += 1;
      allStats[existingDayIndex].totalTime += session.duration;
      allStats[existingDayIndex].sessions.push(session);
    } else {
      allStats.push({
        date,
        checks: 1,
        totalTime: session.duration,
        sessions: [session]
      });
    }
    
    localStorage.setItem(STORAGE_KEYS.DAILY_STATS, JSON.stringify(allStats));
  },

  getSettings: () => {
    const settings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return settings ? JSON.parse(settings) : {
      warningThreshold: 20,
      criticalThreshold: 50,
      notificationsEnabled: true
    };
  },

  clearAllData: (): void => {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
};