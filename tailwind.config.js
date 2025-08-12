/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",   // fine to include even if you only use /app
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        purple: "#a855f7",
      },
    },
  },
  plugins: [],
};
