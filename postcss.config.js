/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // remove this if your setup doesn't have it
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
