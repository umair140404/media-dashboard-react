/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1d1d1e",
        secondary: "#2a2a2b",
        accent: "#FFA500",
        tv: "#18b8b3",
        movies: "#e30060",
      },
    },
  },
  plugins: [require("daisyui")],
};
