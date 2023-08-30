/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#081a51",
        "light-white":"rgba(255,255,255,0.17)",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
