/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  experimental: {
    appDir: true
  },
  webpack: (config, { dev, isServer }) => {
    // extend your webpack configuration here
    config.resolve.alias['~'] = path.join(__dirname, './src');

    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false
      }
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
