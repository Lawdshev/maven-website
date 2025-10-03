import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
      darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#2A2C38',
        },
        foreground: {
          DEFAULT: '#171717',
          dark: '#ededed',
        },
        nav: {
          DEFAULT: '#170F49',
          dark: '#C2BCEA',
        },
        buttonBg:{
          DEFAULT: '#1E5993',
          dark: '#193551',
        },
        footerText: {
          DEFAULT: '#6F6C90',
          dark: '#767490',
        },
        border: {
          DEFAULT: "#EFF0F6",
          dark: "#1F2130"
        },
        footerBorder: {
          DEFAULT: "#D9DBE9",
          dark: "#282B3E"
        },
        socialIcon: {
          DEFAULT: '#1E5993',
          dark: '#2A2C38',
        },
        iconText: {
          DEFAULT: '#170F49',
          dark: '#C2BCEA',
        },
        insighttext: {
          DEFAULT: "#111827",
          dark: "#DAE0EC",
        },
        insightHeading: {
          DEFAULT: "#1E5993",
          dark: "#78A7D5",
        }
      },
    },
  },
  plugins: [],
}

export default config
