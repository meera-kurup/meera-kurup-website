import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#161b19',
        primary: '#3d6b52',
        'primary-dark': '#2c5140',
        'primary-light': '#eef2ef',
        accent: '#8a7561',
        'accent-light': '#f3efe9',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
