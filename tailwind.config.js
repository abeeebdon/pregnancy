/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightblue': '#CEDBE6',
        'darkblue': '#0A3F6E',
        'coolblue': '#3158A4',
        'navyblue': '#193B7E',
        'yellow': '#FFE500',
        'primarytext': '#44566C',
        'red': '#DB3E4D',

      }
    },
  },
  plugins: [],
}

