/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#0B0B0F',
        'bg-mid': '#111116',
        'surface': '#18181F',
        'surface-2': '#22222A',
        'card': '#121217',
        'muted': '#7C8899',
        'accent-primary': '#7C9CFF',
        'accent-secondary': '#FF9A7A',
        'accent-highlight': '#FFD0C2',
        'accent-start': '#7C9CFF',
        'accent-end': '#FF8E72'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'gradient-accent': `linear-gradient(90deg, ${theme('colors.accent-start')}, ${theme('colors.accent-end')}, ${theme('colors.accent-highlight')})`,
      }),
      boxShadow: {
        'glow-md': '0 10px 30px rgba(124, 156, 255, 0.18), 0 2px 10px rgba(255, 142, 114, 0.1)'
      }
    },
  },
  plugins: [],
};
