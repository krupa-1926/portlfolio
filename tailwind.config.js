/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "monospace"],
      },
      colors: {
        navy: "#0a192f",
        navyLight: "#112240",
        slate: {
          300: "#a8b2d1",
          400: "#8892b0",
        },
        green: "#64ffda",
      },
    },
  },
  plugins: [],
};
