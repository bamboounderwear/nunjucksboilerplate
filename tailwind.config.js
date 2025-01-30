/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.njk"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}