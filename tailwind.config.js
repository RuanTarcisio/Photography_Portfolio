/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    extend: {
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        deepgray: "#696c6d",
        accent: '#EEF7F9',
      },
    },

  plugins: [],
};
