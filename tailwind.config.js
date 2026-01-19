/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5227FF',
          accent: '#FF9FFC',
          soft: '#B19EEF',
        },
        dark: {
          bg: '#0B0A1A',
          surface: '#14132A',
          border: '#1C1B38',
        },
        light: {
          bg: '#F6F4FF',
          surface: '#FFFFFF',
          border: '#EEE9FF',
        },
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
};
