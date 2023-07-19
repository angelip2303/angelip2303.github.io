/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Barlow Condensed", ...defaultTheme.fontFamily.sans],
    },
  },
};
