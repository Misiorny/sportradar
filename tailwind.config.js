/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      main: {
        DEFAULT: "#1B1C5A",
      },
      neutral: {
        DEFAULT: "#F6F7F7",
      },
      complementary: {
        DEFAULT: "#FF0000",
      },
      shadows: {
        dark: "#3B1313",
        light: "#A9A9DE",
      },
      green: {
        DEFAULT: "#183318",
      },
      red: {
        DEFAULT: "#4F2424",
      },
      orange: {
        DEFAULT: "#b76722",
      },
    },

    extend: {},
  },
  plugins: [],
};
