/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      /////
      /////
      /////
      colors: {
        primary: "#A32025",
        primary_dark: "#0A5D60",
        secondary: "#253939",
        secondary_dark: "#CAE6E6",
        neutral: "#FFE046",
        text: "#1F4F4F",
        text_dark: "#32FFFF",
        bg: "#F1FFFF",
        bg_dark: "#101414",
        border: "",
        /////
        /////
        /////
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      spacing: {
        88: "22rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
