/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust based on your project structure
  ],
  theme: {
    extend: {colors: {
        primaryPink: '#E82574',
        WhiteColor: '#ffffff'
      }},
  },
  plugins: [],
}
