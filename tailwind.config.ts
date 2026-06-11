import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#629677',
        'primary-dark': '#4d7a60',
        'primary-light': '#e8f0eb',
        accent: '#AF9AB2',
        'accent-light': '#f0ecf1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
