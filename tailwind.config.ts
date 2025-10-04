import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Toggle via .dark on <html>
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "var(--nav)",
        buttonBg: "var(--button-bg)",
        footerText: "var(--footer-text)",
        border: "var(--border)",
        footerBorder: "var(--footer-border)",
        socialIcon: "var(--social-icon)",
        iconText: "var(--icon-text)",
        insighttext: "var(--insight-text)",
        insightHeading: "var(--insight-heading)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
      },
      fontWeight: {
        heading: "700",
        subheading: "600",
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: "700",
          lineHeight: "1.2",
        },
        "p, span, a, li": {
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontWeight: "400",
        },
      });
    }),
  ],
};

export default config;
