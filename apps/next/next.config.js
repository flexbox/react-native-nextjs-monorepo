/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
}

const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  'dripsy',
  '@dripsy/core',
  'moti',
  '@motify/core',
  '@motify/components',
  'app',
])
const withFonts = require('next-fonts')

module.exports = withPlugins(
  [
    withTM,
    [
      withFonts,
      {
        enableSvg: true,
        webpack(config, options) {
          return config
        },
      },
    ],
    [withExpo, { projectRoot: __dirname }],
  ],
  nextConfig
)
