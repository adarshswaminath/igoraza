/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway':["Raleway", 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
  // plugins: [require('flowbite/plugin')],
}