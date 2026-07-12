import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F5F0',
        'paper-raised': '#F1EEE7',
        ink: '#181817',
        'ink-soft': '#6D6A64',
        accent: '#5B4B3D',
        'accent-dark': '#3E332A',
        line: '#E3E0D8',
      },
      fontFamily: {
        sans: ['Archivo', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
