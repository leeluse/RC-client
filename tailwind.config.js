/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'index.html',
    './src/styles/main.css'
  ],
  
  theme: {
    fontFamily: {
      Pretendard: ["Pretendard"]
    },
    extend: {
      colors: {
      }
    },
  },
  plugins: [
    scrollbarHide
  ],
}
