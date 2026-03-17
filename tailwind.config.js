/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        ink: "var(--color-ink)",
        "border-ink": "var(--color-ink)",
        muted: "var(--color-secondary)",
        accent: "#D97757",
        "accent-hover": "var(--color-accent-hover)",
        surface: "var(--color-surface)",
        divider: "var(--color-border)",
        // legacy – kept so old project pages don't break
        parchment: "var(--color-parchment)",
        secondary: "var(--color-secondary)",
        sand: "#C4A882",
        accent2: "#8C5AE7",
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
        "dm-sans": ["var(--font-dm-sans)", "ui-sans-serif", "system-ui"],
        fraunces: ["var(--font-fraunces)", "Georgia", "serif"],
        figtree: ["Figtree", "ui-sans-serif", "system-ui"],
        "source-sans": ["Source Sans 3", "ui-sans-serif", "system-ui"],
        cormorant: ["Cormorant Garamond", "serif"],
        "jetbrains-mono": ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "560px",
        prose: "65ch",
        "screen-4xl": "128rem",
      },
      height: {
        864: "54rem",
      },
      screens: {
        "3xl": "2200px",
      },
    },
  },
  plugins: [],
};
