/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        young: ['Young Serif', 'serif'],
      },
      maxWidth: {
        container: '1600px',
        contain: '1190px'
      },
      container:{
        center: true,
      },
      colors: {
        black: '#262626',
      }
    },
  },
  plugins: [],
}

