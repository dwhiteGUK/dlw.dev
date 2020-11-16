/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  distDir: 'build',
  publicRuntimeConfig: {
    // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    config.resolve.alias['~'] = path.join(__dirname, './src');
    // extend your webpack configuration here
    return config;
  },
});
