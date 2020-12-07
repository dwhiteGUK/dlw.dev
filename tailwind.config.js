const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.ts', './src/**/*.tsx'],
  },
  darkMode: 'class',
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      orange: colors.orange,
      gray: colors.gray,
      lightBlue: colors.lightBlue,
      cyan: colors.cyan,
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
            a: {
              color: theme('colors.orange.500'),
              '&:hover': {
                color: theme('colors.white'),
                background: theme('colors.black'),
              },
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
            a: {
              color: theme('colors.orange.500'),
              '&:hover': {
                color: theme('colors.black'),
                background: theme('colors.white'),
              },
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
