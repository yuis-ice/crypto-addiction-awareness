export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_30d_in_currency: number;
  market_cap: number;
  market_cap_rank: number;
  image: string;
}

export interface CheckingSession {
  timestamp: number;
  duration: number;
  date: string;
}

export interface DailyStats {
  date: string;
  checks: number;
  totalTime: number;
  sessions: CheckingSession[];
}

export interface BehaviorInsight {
  type: 'warning' | 'info' | 'success';
  message: string;
  recommendation?: string;
}