/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#DD2590",
        accentLight: "#EE46BC",
        lightGray: "#828282",
        pictureBackground: "#EDEFF1",
        black: "#101010",
        background: "#ece6e8",
        border: "#D5CDCF",
        blue: "#2966F5",
        dots: "#D3D0D1",
      },
      fontFamily: {
        'figtree': ['Figtree', 'ui-sans-serif', 'system-ui'],
        'source-sans': ['Source Sans 3', 'ui-sans-serif', 'system-ui'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
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
