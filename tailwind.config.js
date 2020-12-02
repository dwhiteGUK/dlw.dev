const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.ts', './src/**/*.tsx'],
  },
  darkMode: 'class',
  theme: {
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      white: colors.white,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            h1: {
              color: theme('colors.gray.900'),
            },
            h2: {
              color: theme('colors.gray.900'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.50'),
            h1: {
              color: theme('colors.gray.50'),
            },
            h2: {
              color: theme('colors.gray.50'),
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
  future: {
    purgeLayersByDefault: true,
  },
};
