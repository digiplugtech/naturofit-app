/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        bevietnam: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6bbe23', // Green button
          dark: '#059669', // Text green
        },
        heading: '#0a1852',
        body: '#121314',
        accent: '#8a38f5',
        gray: {
          600: '#4b5563',
          800: '#1f2937',
        }
      }
    },
  },
  plugins: [],
}
