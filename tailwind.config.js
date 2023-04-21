/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // define the color palette: primary: "#f8c8dd", secondary: "#c1d5e0", accent: "#ffe09d", dark: "#272727"
        primary: "#f8c8dd",
        secondary: "#c1d5e0",
        accent: "#ffe09d",
        dark: "#272727",
      },
    },
  },
  plugins: [],
};
