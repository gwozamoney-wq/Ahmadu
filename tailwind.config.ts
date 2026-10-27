import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F3F6FA",
          100: "#E4EBF3",
          200: "#C3D2E3",
          300: "#93AECB",
          400: "#5B81A9",
          500: "#37608D",
          600: "#244B72",
          700: "#18395A",
          800: "#102B46",
          900: "#0B2036",
          950: "#071524",
        },
        gold: {
          50: "#FBF7EE",
          100: "#F5EDD8",
          200: "#EBD9AE",
          300: "#DFC283",
          400: "#D4AF65",
          500: "#C39A4B",
          600: "#A67C39",
          700: "#85602E",
          800: "#644828",
          900: "#45311D",
        },
        ink: "#171A1F",
        mist: "#F4F6F8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(7,21,36,0.04), 0 12px 32px -12px rgba(7,21,36,0.16)",
        lift: "0 24px 60px -24px rgba(7,21,36,0.38)",
        gold: "0 16px 40px -18px rgba(196,150,74,0.65)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        "gold-sheen": "linear-gradient(120deg, #DFC283 0%, #D4AF65 45%, #B98F49 100%)",
        "navy-fade": "linear-gradient(180deg, rgba(7,21,36,0.92) 0%, rgba(7,21,36,0.72) 55%, rgba(7,21,36,0.35) 100%)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "float-slow": "float-slow 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
