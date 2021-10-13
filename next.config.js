/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/styles')],
  },
  // exclude: path.resolve(__dirname, 'src/assets/icons'),
  webpack: (config) => {
    // Resolve modules in src dir
    config.resolve.modules.push(path.resolve(__dirname, 'src'));
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: 'babel-loader' },
        {
          loader: '@svgr/webpack',
          options: {
            babel: false,
          },
        },
      ],
    });
    return config;
  },
};
