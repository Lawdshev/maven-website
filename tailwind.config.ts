import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // We'll toggle .dark on <html>
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        nav: 'var(--nav)',
        buttonBg: 'var(--button-bg)',
        footerText: 'var(--footer-text)',
        border: 'var(--border)',
        footerBorder: 'var(--footer-border)',
        socialIcon: 'var(--social-icon)',
        iconText: 'var(--icon-text)',
        insighttext: 'var(--insight-text)',
        insightHeading: 'var(--insight-heading)',
      },
    },
  },
  plugins: [],
}

export default config
