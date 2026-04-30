/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy':        '#0a0f1e',
        'navy-card':   '#0d1526',
        'navy-light':  '#111d35',
        'blue-accent': '#1e90ff',
        'blue-glow':   'rgba(30,144,255,0.3)',
        'text-muted':  '#a0b0cc',
        'gold':        '#f0a500',
        'whatsapp':    '#25D366',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glow':    '0 0 20px rgba(30,144,255,0.3)',
        'glow-lg': '0 0 40px rgba(30,144,255,0.4)',
      },
    }
  },
  plugins: [],
}
