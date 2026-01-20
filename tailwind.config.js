/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        accent: "#facc15", // yellow accent (your hero color)
      },

      animation: {
        bounceSlow: "bounceSlow 3s ease-in-out infinite",
        spinSlow: "spin 22s linear infinite",
        float: "float 4s ease-in-out infinite",
      },

      keyframes: {

        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },

        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },

      },

    },
  },

  plugins: [],
};
