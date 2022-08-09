/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../templates/*.{html,js}',],
  theme: {
    extend: {
      fontFamily: {
        'prim': ['Geared Slab', 'sans-serif'], 
        'sec': ['Lato', 'serif']
      },
      colors: {
        sun: "#F15025", 
        accent: "#CCCCCC"
      }
    },
  },
  plugins: [],
}
