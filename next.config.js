/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ms-MY', 'en-US'],
    defaultLocale: 'ms-MY',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
