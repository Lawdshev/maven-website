import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      colors: {
        // Light mode colors
        background: {
          DEFAULT: "#ffffff",
          dark: "#010101",
        },
        foreground: {
          DEFAULT: "#171717",
          dark: "#ededed",
        },
        nav: {
          DEFAULT: "#170f49",
          dark: "#c2bcea",
        },
        "button-bg": {
          DEFAULT: "#1e5993",
          dark: "#193551",
        },
        "footer-text": {
          DEFAULT: "#6f6c90",
          dark: "#767490",
        },
        "icon-text": {
          DEFAULT: "#170f49",
          dark: "#c2bcea",
        },
        "social-icon": {
          DEFAULT: "#1e5993",
          dark: "#2a2c38",
        },
        border: {
          DEFAULT: "#eff0f6",
          dark: "#282b3e",
        },
        "footer-border": {
          DEFAULT: "#d9dbe9",
          dark: "#282b3e",
        },
        "insight-text": {
          DEFAULT: "#111827",
          dark: "#dae0ec",
        },
        "insight-heading": {
          DEFAULT: "#1e5993",
          dark: "#78a7d5",
        },
        "blog-category": {
          DEFAULT: "#183354",
          dark: "#78a7d5",
        },
        "blog-date": {
          DEFAULT: "#6f6c90",
          dark: "#767490",
        },
        "blog-text": {
          DEFAULT: "#6f6c90",
          dark: "#767490",
        },
        "blog-icon": {
          DEFAULT: "#6f6c90",
          dark: "#767490",
        },
        "date-icon": {
          DEFAULT: "#6f6c90",
          dark: "#767490",
        },
      },
    },
  },
  plugins: [],
};
export default config;
