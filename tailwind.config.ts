import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        blackmain1: '#14141C',
        blackmain2: '#161620',
        blackmain3: '#161620',
      },
      backgroundImage: {
        'banner-dark': "url('/assets/banner-dark.png')",
        'banner-white': "url('/assets/banner-white.png')",
        'm-banner-dark': "url('/assets/mobile-banner-dark.png')",
        'm-banner-white': "url('/assets/mobile-banner-white.png')",
      },
      height: {
        'screen-minus-nav-width': "calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
}
export default config
