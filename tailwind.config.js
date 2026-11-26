/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0E0E10',
          card: '#161619',
          'card-hover': '#1C1C21',
          border: 'rgba(255, 255, 255, 0.12)',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
          text: '#F4F4F6',
          muted: '#9A9AA3',
        },
        light: {
          bg: '#FAF8F8',
          card: '#FFFFFF',
          'card-hover': '#F5F2F2',
          border: 'rgba(20, 21, 28, 0.12)',
          'border-subtle': 'rgba(20, 21, 28, 0.06)',
          text: '#14151C',
          muted: '#5C5E6B',
        },
        rose: {
          accent: '#E05A87',
          deep: '#C83E6B',
          soft: '#F48EAC',
          dark: '#B02C58',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        editorial: '840px',
      },
      borderWidth: {
        '1': '1px',
        '1.5': '1.5px',
      },
    },
  },
  plugins: [],
}
