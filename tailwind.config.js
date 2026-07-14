/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#071025',
        'bg-mid': '#0b1220',
        'surface': '#0f1724',
        'muted': '#94a3b8',
        'accent-start': '#7F56D9',
        'accent-end': '#EB3A84',
        'accent-cyan': '#06b6d4'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'gradient-accent': `linear-gradient(90deg, ${theme('colors.accent-start')}, ${theme('colors.accent-end')}, ${theme('colors.accent-cyan')})`,
      }),
      boxShadow: {
        'glow-md': '0 10px 30px rgba(127,86,217,0.12), 0 2px 10px rgba(235,58,132,0.06)'
      }
    },
  },
  plugins: [],
};
