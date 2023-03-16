/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      onyx: "#393d3fff",
      white: "#fdfdffff",
      silver: "#c6c5b9ff",
      "blue-munsell": "#62929eff",
      "paynes-gray": "#546a7bff",
    },
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blinking: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
}
