/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bharat-blue': '#003366',
        'ash-grey': '#F3F4F6',
        'accent-orange': '#F97316',
      },
      fontFamily: {
        'sans': ['Inter', 'Hind', 'system-ui', '-apple-system', 'sans-serif'],
        'hindi': ['Hind', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'neumorphic': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neumorphic-dark': '8px 8px 16px #1a1a1a, -8px -8px 16px #2a2a2a',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};