# Crypto Addiction Awareness

> Crypto Prices, but with how many times you checked them today

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)

## 🎯 About

Many people check crypto prices too often, leading to addiction. This app tracks how many times you check crypto prices today, providing insights, statistics, and tips to help you reduce addiction by integrating awareness into your checking frequency and helping you manage your crypto habits.

### Key Features

- **📊 Real-time Crypto Prices**: Live cryptocurrency price tracking
- **🔢 Checking Frequency Counter**: Tracks how many times you've checked prices today
- **📈 Behavioral Analytics**: Visualize your checking patterns over time
- **🧠 Addiction Awareness**: Insights and tips to help reduce compulsive checking
- **📱 Modern UI**: Dark, stylish, and responsive design
- **💾 Local Data Storage**: All tracking data stored locally for privacy

## 🏗️ Architecture

```
Chart addict awareness app
Concept: dark stylish modern crypto price list table app, but it tracks checking frequency, and logging and visualize with localStorage.
Impact: Behavioral improvement for crypto investors avoiding addiction.
Uniqueness: Psychology meets local data persistence.
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yuis-ice/crypto-addiction-awareness.git
cd crypto-addiction-awareness
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technology Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React
- **Data Storage**: localStorage (client-side)
- **Linting**: ESLint 9.9.1

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── BehaviorInsights.tsx   # Addiction awareness insights
│   ├── CheckingChart.tsx      # Frequency visualization
│   ├── CheckingStats.tsx      # Statistics display
│   └── CryptoTable.tsx        # Crypto price table
├── hooks/               # Custom React hooks
│   ├── useCheckingTracker.ts  # Checking frequency logic
│   └── useCryptoData.ts       # Crypto data fetching
├── types/               # TypeScript type definitions
│   └── index.ts
├── utils/               # Utility functions
│   └── storage.ts       # localStorage helpers
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎯 Core Concept

This application combines real-time cryptocurrency price tracking with behavioral psychology to help users become more aware of their checking habits. By displaying a counter that increments each time you view the prices, it creates conscious awareness of potentially addictive behaviors.

### How It Works

1. **Track**: Every time you open the app, it increments your daily checking counter
2. **Visualize**: Charts and statistics show your checking patterns over time
3. **Reflect**: Behavioral insights help you understand your habits
4. **Improve**: Awareness naturally leads to more mindful checking behavior

## 📊 Features in Detail

### Checking Frequency Tracking
- Automatic counting when app is opened
- Daily, weekly, and monthly statistics
- Visual charts showing patterns over time

### Behavioral Insights
- Personalized tips based on your checking frequency
- Psychology-backed advice for reducing addiction
- Progress tracking and milestone celebrations

### Crypto Price Display
- Real-time price updates for major cryptocurrencies
- Clean, modern table interface
- Price change indicators

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Star History

If this project helps you develop healthier crypto habits, please consider giving it a star!

## 🔗 Links

- [Report a Bug](https://github.com/yuis-ice/crypto-addiction-awareness/issues/new?template=bug_report.yml)
- [Request a Feature](https://github.com/yuis-ice/crypto-addiction-awareness/issues/new?template=feature_request.yml)
- [Discussions](https://github.com/yuis-ice/crypto-addiction-awareness/discussions)

## ⚠️ Disclaimer

This application is for educational and awareness purposes only. It is not financial advice, and cryptocurrency investments carry significant risks. Always do your own research and consider your financial situation before making investment decisions.

---

Built with ❤️ for healthier crypto habits