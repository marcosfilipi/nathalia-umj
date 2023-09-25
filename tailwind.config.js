/** @type {import('tailwindcss').Config} */

const tailwindcss = require('tailwindcss');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss,
    require('autoprefixer'),
  ],
}
