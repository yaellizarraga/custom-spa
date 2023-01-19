/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'www.google.com'
  }
]

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com']
  },
  headers: securityHeaders
}

module.exports = nextConfig
