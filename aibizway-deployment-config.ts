// next.config.js
// Next.js configuration for AI BizWay

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.example.com'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

// .env.local
// Environment variables (add to your actual .env.local)

NEXT_PUBLIC_API_URL=https://aibizway.com
ANTHROPIC_API_KEY=your-anthropic-api-key-here
STRIPE_PUBLIC_KEY=your-stripe-public-key-here
STRIPE_SECRET_KEY=your-stripe-secret-key-here
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=https://aibizway.com
DATABASE_URL=your-database-url-here

// vercel.json
// Vercel deployment configuration

{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm ci",
  "framework": "nextjs",
  "env": [
    {
      "key": "ANTHROPIC_API_KEY",
      "value": "@anthropic-api-key"
    },
    {
      "key": "STRIPE_SECRET_KEY",
      "value": "@stripe-secret-key"
    },
    {
      "key": "NEXTAUTH_SECRET",
      "value": "@nextauth-secret"
    },
    {
      "key": "NEXTAUTH_URL",
      "value": "https://aibizway.com"
    }
  ],
  "regions": ["sfo1"]
}

// tsconfig.json
// TypeScript configuration

{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "dom", "dom.iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowJs": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

// tailwind.config.js
// Tailwind CSS configuration

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        orange: {
          400: '#ff8c5a',
          500: '#ff6b35',
          600: '#ff5722',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

// postcss.config.js
// PostCSS configuration for Tailwind

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// package.json
// Project dependencies

{
  "name": "aibizway",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "deploy": "vercel deploy --prod"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "^0.24.0",
    "@stripe/react-stripe-js": "^3.1.0",
    "@stripe/stripe-js": "^5.1.0",
    "next": "^15.0.0",
    "next-auth": "^4.24.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "stripe": "^14.0.0",
    "zustand": "^4.4.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0"
  }
}

// GitHub Actions - .github/workflows/deploy.yml
// Automatic deployment on push to main

name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          STRIPE_SECRET_KEY: ${{ secrets.STRIPE_SECRET_KEY }}

      - name: Deploy to Vercel
        uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
