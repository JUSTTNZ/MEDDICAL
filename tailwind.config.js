// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F2B6C', //custom color for dark blue
        'secondary': '#159EEC', //custom color for light blue
      },
    },
  },
  plugins: [],
}

