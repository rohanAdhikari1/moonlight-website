/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#12a5bf",
      },
      fontFamily: {
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"],
        quicksand: ["Quicksand", "sans-serif"],
        russonOne: ["Russon One"],
        body: ["Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
};
