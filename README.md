# Horizon AI Dashboard

**F20 System - AI-Powered Offer Intelligence Platform**

## Overview

Horizon AI Dashboard is a modern, beautiful web application for managing the F20 (Foundational 20) system. It provides a comprehensive interface for generating intelligent, high-converting business offers for startups using AI.

## Features

### 🎯 Dashboard
- Real-time metrics and KPIs
- Performance charts and trends
- Recent offers overview
- Quick stats on startups, offers, and conversions

### 🏢 Startup Management
- View all startup profiles
- Track key metrics (MRR, customers, CAC, etc.)
- Filter and search functionality
- Add new startup profiles

### ✨ Offer Generation
- Step-by-step offer creation wizard
- AI-powered offer variations
- Multiple offer types (Value Stack, Risk Reversal, Social Proof, Scarcity)
- Performance predictions

### 📊 Offers Management
- View all generated offers
- Track performance metrics (views, clicks, conversions)
- Monitor CTR and conversion rates
- Filter by status, type, and startup

### 📈 Analytics
- Performance overview charts
- Offer type distribution
- Conversion funnel analysis
- Top performing offers leaderboard

### ⚙️ Settings
- API configuration (OpenAI, Claude)
- Notification preferences
- Database settings
- Appearance customization

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel/AWS/GCP ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- API keys for OpenAI or Anthropic Claude (optional for full functionality)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
horizon-dashboard/
├── app/                    # Next.js app directory
│   ├── analytics/         # Analytics page
│   ├── generate/          # Offer generation wizard
│   ├── offers/            # Offers management
│   ├── settings/          # Settings page
│   ├── startups/          # Startup profiles
│   ├── layout.tsx         # Root layout with sidebar
│   ├── page.tsx           # Dashboard homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   └── Sidebar.tsx        # Navigation sidebar
├── types/                 # TypeScript types
│   └── f20.ts            # F20 data models
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Features in Detail

### Dashboard Page
- 4 key metric cards (Startups, Offers, Conversion Rate, Revenue)
- Offer performance line chart
- Conversion rate trend bar chart
- Recent offers table

### Startups Page
- Grid view of all startups
- Key metrics display (MRR, customers, active offers)
- Stage badges (MVP, Seed, Series A, etc.)
- Search and filter capabilities

### Generate Page
- 3-step wizard:
  1. Startup Information
  2. Strategy & Goals
  3. Generate & Preview
- Form validation
- AI generation simulation
- Multiple offer variations

### Offers Page
- Summary statistics cards
- Comprehensive offers table
- Performance metrics (views, CTR, CVR, revenue)
- Status badges (active, testing, paused, archived)

### Analytics Page
- 6-month performance trend chart
- Offer type distribution pie chart
- Conversion funnel visualization
- Top performers leaderboard

### Settings Page
- API key configuration
- Email notification preferences
- Database connection settings
- Theme selection

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Navigation
Modify `components/Sidebar.tsx` to add/remove menu items.

### Data Models
Update `types/f20.ts` to match your backend API structure.

## Integration

This dashboard is designed to work with the F20 backend system. To connect:

1. Add your API endpoints in a new `lib/api.ts` file
2. Replace mock data with API calls
3. Configure environment variables for API keys

## License

MIT License

## Support

For questions or issues, please contact the AI Bizway team.

---

Built with ❤️ for the F20 System
