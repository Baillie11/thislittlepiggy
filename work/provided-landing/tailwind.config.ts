import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        piggy: {
          orange: "#FF7A00",
          gold: "#FFC857",
          charcoal: "#202124",
          ink: "#111214",
          cream: "#FFF8EC",
          blush: "#FFE7D4"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255, 122, 0, 0.24)",
        soft: "0 20px 60px rgba(32, 33, 36, 0.1)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
