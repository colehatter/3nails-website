import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d1220",
        blue: "#34C6F4",
        "blue-dim": "#1b9ec5",
        muted: "#8a9ab0",
        "body-text": "#c8d4e0",
        "card-bg": "#0e1420",
        gold: "#9A8A5C",
        orange: "#F5A623",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
