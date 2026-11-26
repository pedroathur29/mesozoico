import type { Config } from "tailwindcss";

// Paleta extraída da logo oficial da TECHNOVA.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1320px" } },
    extend: {
      colors: {
        brand: {
          50: "#EEF4FF",
          100: "#DCE7FF",
          200: "#B6CCFF",
          300: "#86A9FF",
          400: "#4D7DFD",
          500: "#1A5DFC",
          600: "#0153FC",
          700: "#0042D1",
          800: "#0436A6",
          900: "#0A2D7F",
        },
        navy: {
          50: "#F2F5FA",
          100: "#E3E9F3",
          200: "#C5D0E3",
          300: "#94A5C4",
          400: "#5E739B",
          500: "#3A4F78",
          600: "#22365E",
          700: "#13264B",
          800: "#0A1C45",
          900: "#02153F",
          950: "#010D29",
        },
        graphite: "#1F2937",
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["'Montserrat Variable'", "Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "0.875rem", "2xl": "1.125rem" },
      boxShadow: {
        card: "0 1px 2px rgba(2,21,63,0.04), 0 4px 16px -4px rgba(2,21,63,0.08)",
        lift: "0 2px 4px rgba(2,21,63,0.04), 0 16px 40px -12px rgba(2,21,63,0.18)",
        focus: "0 0 0 4px rgba(1,83,252,0.18)",
      },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "none" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slide-in-right": { from: { transform: "translateX(100%)" }, to: { transform: "none" } },
        "slide-in-left": { from: { transform: "translateX(-100%)" }, to: { transform: "none" } },
        pulse_ring: { "0%": { transform: "scale(.8)", opacity: ".7" }, "100%": { transform: "scale(2.2)", opacity: "0" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
      },
      animation: {
        "fade-up": "fade-up .6s cubic-bezier(.2,.7,.2,1) both",
        "fade-in": "fade-in .3s ease-out both",
        "slide-in-right": "slide-in-right .32s cubic-bezier(.2,.8,.2,1) both",
        "slide-in-left": "slide-in-left .32s cubic-bezier(.2,.8,.2,1) both",
        "pulse-ring": "pulse_ring 2.4s cubic-bezier(.2,.6,.4,1) infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
