/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xsm': '300px',
        'xsm': '430px',
        'sm': '675px',
        'md': '810px',
        'lg': '1024px',
        'xl': '1325px',
        '2xl': '1600px',
      },
      backgroundColor: {
        'dark1': "#000000"
      },
      textColor: {
        'dark1': "#ffffff"
      }
    },
  },
  plugins: [
    
  ],
}