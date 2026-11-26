/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        butter: {
          50: '#FFFEF5',
          100: '#FDFCEB',
          200: '#FAF6CE', // Primary reference background
          300: '#F5EFB5',
          400: '#EEE69B',
          500: '#E2D679',
          600: '#C7B753',
        },
        navy: {
          950: '#070824',
          900: '#0B0D38',
          800: '#11134F', // Primary typography & borders
          700: '#1D2175',
          600: '#2A3099',
          500: '#3F47BE',
          400: '#646BD7',
          300: '#9499E5',
          200: '#C5C7F2',
          100: '#E4E5FA',
        },
        signal: {
          500: '#D94E1F',
          600: '#B83A0F',
          DEFAULT: '#D94E1F',
        },
        labteal: {
          500: '#0F766E',
          600: '#0D625C',
          DEFAULT: '#0F766E',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #11134F',
        'brutal-sm': '2px 2px 0px 0px #11134F',
        'brutal-lg': '6px 6px 0px 0px #11134F',
      }
    },
  },
  plugins: [],
}
