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
          dark: "#2a2c38",
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
        "about-text": {
          DEFAULT: "#171717",
          dark: "#E8E8E8",
        },
        "about-heading": {
          DEFAULT: "#402BDC",
          dark: "#4635C2",
        },
        "blog-icon":{
          DEFAULT:"#BACCE1",
          dark: "#3F5A79",

        },
        "blog-category":{
          DEFAULT:"#000000",
          dark:"#FFFFFF",
        },
        "blog-title":{
          DEFAULT:"#183354",
          dark:"#B1C7E1",
        },
       "blog-text":{
        DEFAULT:"#545E69",
        dark:"#98A0A9",
       },
       "blog-date":{
        DEFAULT:"#6D757F",
        dark:"#828890",
       },
       "date-icon":{
        DEFAULT:"#6D757F",
        dark:"#42464B",
       },
       "blog-category-button":{
        DEFAULT:"#D0F3FC",
        dark:"#19768E",
       },
       "services-button":{
        DEFAULT:"#473BF0",
        dark:"#241C97",
       },
       "services-paragraph":{
        DEFAULT:"#161C2D",
        dark:"#D4D9E7",
       },
       "services-text":{
        DEFAULT:"#161C2D",
        dark:"#E7D4D5",
       },
      
      },
    },
  },
  plugins: [],
};
export default config;
