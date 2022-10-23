/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      padding: '100px',
      center: true,
    },
    screens: {
      main: '375px',
    },
    extend: {
      height: {
        small: '10px',
      },
      width: {
        small: '10px',
      },
      margin: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        large: '30px',
      },
      padding: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        large: '30px',
      },
      gap: {
        'extra-small': '5px',
        small: '10px',
        base: '15px',
        large: '30px',
      },
      minWidth: {
        base: '1440px',
      },
      borderRadius: {
        base: '10px',
      },
      cursor: {
        inherit: 'inherit',
      },
    },
    },
  }
