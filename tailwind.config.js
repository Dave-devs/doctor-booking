/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004581",
        wt: "#FAFAFA",
        accent: "#DDE8F0"
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px, 1fr))"
      }
    },
  },
  plugins: [],
};

