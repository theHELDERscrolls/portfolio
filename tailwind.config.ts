import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        jersey: ["Jersey 10", "cursive"],
        pixelify: ["Pixelify Sans", "sans-serif"],
      },
      keyframes: {
        rightSlideIn: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        popUp: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "right-slide-in": "rightSlideIn 1s ease-in-out forwards",
        "fade-in": "fadeIn 1s ease-in-out both",
        "pop-up": "popUp 0.5s ease-in-out both",
      },
    },
  },
  plugins: [],
};

export default config;
