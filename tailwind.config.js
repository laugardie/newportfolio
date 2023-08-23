/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#E01A66",
        lightGray: "#828282",
        pictureBackground: "#EDEFF1",
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"],
        source: ['"Source Sans Pro"', "ui-sans-serif", "system-ui"],
      },
      height: {
        864: "54rem",
      },
      screens: {
        "3xl": "2200px",
      },
      maxWidth: {
        "screen-4xl": "128rem",
      },
    },
  },
  plugins: [],
};
