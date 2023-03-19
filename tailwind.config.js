/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cwhite: "#ffffff",
        clight: "#f0eef6",
        cgray: "#9e98b3",
        cdarkblue: "#08041b",
        cprimary: "#0275d8",
        cwarning: "#f0ad4e",
        csuccess: "#5cb85c",
        cdanger: "#d9534f",
        cdark: "#241e38",
        cblack: "#151221",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        tilt: ["Tilt Prism", "cursive"],
        akaya: ["Akaya Telivigala", "cursive"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
