/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/composants/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1080px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        Bleuclair: '#8ECAE6',
        Bleu: '#219EBC',
        Bleufonce: '#023047',
        Jaune: '#FFB703',
        Orange: '#FB8500',

        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },

        main: {
          xDark: 'var(--main-xDark)',
          dark: 'var(--main-dark)',
          DEFAULT: 'var(--main)',
          light: 'var(--main-light)',
          xLight: 'var(--main-xLight)',

          border: 'var(--main-border)',
          text: 'var(--main-text)',
        },

        secondary: {
          orange: {
            DEFAULT: 'var(--secondary-color-one)',
            border: 'var(--secondary-color-one-border)',
          },
          yellow: {
            DEFAULT: 'var(--secondary-color)',
            border: 'var(--secondary-border)',
          },
          text: 'var(--secondary-text)',
        },

        customWhite: {
          0: 'var(--white-0)',
          100: 'var(--white-100)',
          200: 'var(--white-200)',
          300: 'var(--white-300)',
          400: 'var(--white-400)',
          500: 'var(--white-500)',
          600: 'var(--white-600)',
          700: 'var(--white-700)',
          800: 'var(--white-800)',
          900: 'var(--white-900)',
          950: 'var(--white-950)',
        },

        customBlack: {
          0: 'var(--black-0)',
          100: 'var(--black-100)',
          200: 'var(--black-200)',
          300: 'var(--black-300)',
          400: 'var(--black-400)',
          500: 'var(--black-500)',
          600: 'var(--black-600)',
          700: 'var(--black-700)',
          800: 'var(--black-800)',
          900: 'var(--black-900)',
          950: 'var(--black-950)',
        },
      },
    },
  },
  plugins: [],
};
