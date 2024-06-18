/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "business", "lofi"],
  },
  extend: {},
  plugins: [require("daisyui")],
};
