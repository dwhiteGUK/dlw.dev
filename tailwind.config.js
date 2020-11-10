module.exports = {
  important: true,
  purge: {
    content: ['./pages/**/*.tsx'],
  },
  theme: {},
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  future: {
    purgeLayersByDefault: true,
  },
};
