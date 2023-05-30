/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      "comfortaa":"Comfortaa",
      "tangerine":"Tangerine",
      "merienda":"Merienda",
       "pangolin":"Pangolin",
       "rubik":"Rubik Puddles",
       raleway: "Raleway",
    },
    extend: {
      height:{
        "100": "300px",
        "200": "400px"
      },
    },
  },
  plugins: [],
}

