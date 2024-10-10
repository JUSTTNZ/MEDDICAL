/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'background': '#E5E4E8', //custom color for background
        'primary': '#1F2B6C', //custom color for dark blue
        'secondary': '#159EEC', //custom color for light blue
        'tertiary': '#BFD2F8', //custom color for button
      },
      backgroundImage: {
        'custom-homepage-image': "url('/src/assets/homeassets/Physician_Trends_2021_Merritt_Hawkins 1.svg')",
        'custom-appointment-image': "url('/src/assets/homeassets/Rectangle 33.svg')"
      },
      fontFamily: {
        'yeseva': ['"Yeseva One"', 'cursive'], // Adding Yeseva One font
      },
    },
  },
  plugins: [],
}

