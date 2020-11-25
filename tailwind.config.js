module.exports = {
  important: true,
  purge: {
    content: ['./pages/**/*.tsx'],
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            p: {
              color: '#fff',
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
  future: {
    purgeLayersByDefault: true,
  },
};
