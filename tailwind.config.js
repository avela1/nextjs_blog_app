/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cwhite: "#ffffff",
        clight: "#f0eef6",
        cgray: "#9e98b3",
        cdarkblue: "#08041b",
        cprimary: "#6b4ce6",
        csecondary: "#d6ccff",
        csuccess: "#9e98b3",
        cdanger: "#fb5151",
        cdark: "#241e38",
        cblack: "#151221",
      },
      
    },
  },
  plugins: [],
};
