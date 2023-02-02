/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        silver: "url('../src/assets/silver.png')",
      },
    },
  },
  plugins: [],
};
