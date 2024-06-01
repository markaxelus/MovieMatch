/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: 
      {
        custom: {
          1: '#ff1d52',
          2: '#bf183f'
      }
      }
    },
  plugins: [],
  }
}