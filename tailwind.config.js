/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-blue-light": "#E9EEFA",
        "c-blue-medium": "#3480FD",
        "c-blue-dark": "#1D40B7",
        "c-black": "#2D2D2D",
        "c-yellow": "#F9DD89",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
