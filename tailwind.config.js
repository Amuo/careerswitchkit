/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: "#3792E8",
        "accent-hover": "#6EB0EE",
        "dark-base": "#070719",
        "dark-secondary": "#10102D",
        "brand-bg": "#070719",
        "brand-surface": "#111124",
        "brand-primary": "#a0c9ff",
        "brand-on-primary": "#003259",
        "brand-accent": "#3792E8",
        "brand-surface-variant": "#333347",
        "brand-on-surface": "#e2e0fa",
        "brand-on-surface-variant": "#c0c7d3",
        "brand-container-low": "#1a1a2d",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "border-spin": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-spin": "border-spin 8s linear infinite",
      },
    },
  },
  plugins: [],
}

