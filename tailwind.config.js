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
      green: colors.green,
      purple: colors.purple,
      yellow: colors.yellow,
      pink: colors.pink,
      blue: colors.blue,
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
            h3: {
              color: theme('colors.gray.900'),
            },
            h4: {
              color: theme('colors.gray.900'),
            },
            a: {
              color: theme('colors.orange.500'),
              '&:hover': {
                color: theme('colors.white'),
                background: theme('colors.black'),
              },
              code: { color: theme('colors.blue.400') },
            },
            strong: {
              color: theme('colors.black'),
            },
            code: { color: theme('colors.pink.500') },
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
            h3: {
              color: theme('colors.gray.50'),
            },
            h4: {
              color: theme('colors.gray.50'),
            },
            a: {
              color: theme('colors.orange.500'),
              '&:hover': {
                color: theme('colors.black'),
                background: theme('colors.white'),
              },
            },
            strong: {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
  future: {
    purgeLayersByDefault: true,
  },
};
