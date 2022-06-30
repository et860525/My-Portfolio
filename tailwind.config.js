/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        'red-orange': '#FF5C4D',
        'mimosa': '#FFCD58',
        'chartreuse': '#DAD870'
      },
    },
  },
  plugins: [],
}
