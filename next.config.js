/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  distDir: 'build',
  publicRuntimeConfig: {
    // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
  },
  webpack: (config) => {
    config.resolve.alias['~'] = path.join(__dirname, './src');
    // extend your webpack configuration here
    return config;
  },
};
