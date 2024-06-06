/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      "colors" : {
        "primary-azul" : "#011E2C",
        "primaty-verde": "#377483",
        "secondary": "#B6C8D2",
        "gris": "#D9D9D9",
      }
    },
  },
  plugins: [],
}

