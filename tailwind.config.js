/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2a2a2b",
        secondary: "#1d1d1e",
        accent: "#FFA500",
      },
    },
  },
  plugins: [require("daisyui")],
};
