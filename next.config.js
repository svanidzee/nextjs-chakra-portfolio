/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds/',
          outputPath: 'static/sounds/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });
    return config;
  },
  images: {
    domains: ['media.graphassets.com', 'www.codewars.com'],
  },
};
