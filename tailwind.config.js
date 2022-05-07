const defaultTheme = require('tailwindcss/defaultTheme');
const palette = require('./palette');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      },

      container: {
        padding: '1.5rem'
      },

      colors: palette
    },
  },
  plugins: [],
}
