module.exports = {
  important: true,
  purge: {
    content: ['./pages/**/*.tsx'],
  },
  darkMode: 'class',
  theme: {
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
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
  future: {
    purgeLayersByDefault: true,
  },
};
