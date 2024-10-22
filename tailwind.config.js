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
        primary: "#F97316",
        secondary: "#64748B",
        background: {
          DEFAULT: "#1E293B",
          dark: "#0F172A",
          light: "#334155",
        },
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
