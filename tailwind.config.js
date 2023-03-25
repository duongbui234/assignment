/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        primary: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      },
      transitionDuration: {
        primary: "450ms",
      },
      colors: {
        primary: "#e85205",
      },
    },
    screens: {
      mobile: { min: "320px", max: "480px" },
      tablet: { min: "481px", max: "768px" },
      md: { min: "769px", max: "1024px" },
      lg: { min: "1025px", max: "1280px" },
      xl: { min: "1281px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
  },
  plugins: [],
};
