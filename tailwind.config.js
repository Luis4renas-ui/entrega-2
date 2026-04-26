/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefcf3',
          100: '#fef8e7',
          200: '#fdedc4',
          300: '#fce4a1',
          400: '#fad567',
          500: '#f7c633',
          600: '#dfa81a',
          700: '#c48c16',
          800: '#a07015',
          900: '#825c14',
          950: '#4a3209',
        },
        corn: {
          50: '#fefde8',
          100: '#fffbcc',
          200: '#fff799',
          300: '#fff066',
          400: '#ffed4e',
          500: '#ffe619',
          600: '#e6cc00',
          700: '#b39d00',
          800: '#8f7a00',
          900: '#6b5600',
        },
      },
    },
  },
  plugins: [],
}
