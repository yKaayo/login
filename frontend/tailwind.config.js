/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1152be'
      },
      fontFamily: {
        'sans': ["Lato", 'serif'],
      },
    },
  },
  plugins: [],
}

