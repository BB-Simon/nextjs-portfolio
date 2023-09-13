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
        blackmain4: '#212130',
      },
      backgroundImage: {
        'banner-dark': "url('/assets/banner-dark.png')",
        'banner-white': "url('/assets/banner-white.png')",
        'm-banner-dark': "url('/assets/mobile-banner-dark.png')",
        'm-banner-white': "url('/assets/mobile-banner-white.png')",
        'contact-dark': "url('/assets/contact-dark.png')",
        'contact-white': "url('/assets/contact-white.png')",
        'm-contact-dark': "url('/assets/mobile-contact-dark.png')",
        'm-contact-white': "url('/assets/mobile-contact-white.png')",
      },
      height: {
        'screen-minus-nav-width': "calc(100vh - 64px)",
      },
    },
  },
  plugins: [],
}
export default config
