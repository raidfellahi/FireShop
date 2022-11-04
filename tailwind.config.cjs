/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      screens:{
        'mobile': {'max': '700px'}
      },
      colors:{
        'milk':'#EEEEEE',
        'lightgray':'#787A91',
        'darkpurple': {
          100: "#cfcddb",
          200: "#9f9bb7",
          300: "#6f6894",
          400: "#3f3670",
          500: "#0f044c",
          600: "#0c033d",
          700: "#09022e",
          800: "#06021e",
          900: "#03010f"
          }
        ,
        'darkblue': {
          100: "#d0d2df",
          200: "#a1a5c0",
          300: "#7278a0",
          400: "#434b81",
          500: "#141e61",
          600: "#10184e",
          700: "#0c123a",
          800: "#080c27",
          900: "#040613"
          },        
      }
      ,
      
      
    },
  },
  plugins: [],
}
