/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightRose': '#faf6f2',
        'darkGreen': '#29574c',
        'lightGreen': '#2b5249',
        'grayOlga': '#7A7A7A',
      }
    },
  },
  plugins: [],
}

