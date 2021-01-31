/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  webpack: (config, { isServer }) => {
    // extend your webpack configuration here
    config.resolve.alias['~'] = path.join(__dirname, './src');

    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
