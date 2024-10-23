/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3549EC",
        secondary: "#ff5964",
        background: "#fdfdf9",
        grey: "#1f2937",
        accent: "#c1faff",
      },
      fontFamily: {
        primary: ["var(--font-poppins)", "Poppins", "sans-serif"],
        secondary: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
