const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,
        primary: "#9333EA",
        secondary: "#ff7e33",
        info: "#0C63E7",
        black: colors.black,
        white: colors.white,
        slate: colors.slate,
        ...colors,
      }
    },
  },
  plugins: [],
});