/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0f0f0f',
          100: '#1a1a1a',
          200: '#252525',
        },
        orange: {
          400: '#ff8c5a',
          500: '#ff6b35',
          600: '#ff5722',
        },
      },
    },
  },
  plugins: [],
};
