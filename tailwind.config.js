/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        com: ["Comfortaa", "cursive"],
        mons: ["Montserrat", "sans-serif"],
        incons: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
