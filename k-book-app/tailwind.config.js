const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        "primary-azul" : "#011E2C",
        "primaty-verde": "#377483",
        "secondary": "#B6C8D2",
        "gris": "#D9D9D9",
      },
      backgroundImage: {
        'space': "url(/img/bg_ft.jpeg)",
      },
      fontFamily: {
        'archivo': ['"Archivo Narrow"', 'sans-serif'],
      },
      fontSize: {
        's-40': '40px',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.custom-blur': {
          width: '100%',
          background: 'transparent !important',
          '-webkit-backdrop-filter': 'blur(30px) !important',
          'backdrop-filter': 'blur(30px) !important',
          'box-shadow': '0 0 10px #242422',
          'border-radius': '35px',
          margin: '0 auto',
          height: '100%',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}

