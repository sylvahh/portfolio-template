/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#02aab0',
          dark: '#0f2027',
          light: '',
          hover: '',
        },

        secondary: {
          DEFAULT: '#00cdac',
          dark: '#0f2027',
        },
        gray: {
          DEFAULT: '#333333',
          light: '#d2d2d2',
        },
        darkBlue: '#272341',
        footer: 'gray',
      },
      fontFamily: {
        ubuntu: ['ubuntu', 'sans-serif'],
      },
      fontSize: {
        default: '1.6rem',
        big: '4rem',
        mid: '2.5rem',
      },
      boxShadow: {
        custom: '',
      },
      width: {},
      height: {},
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
