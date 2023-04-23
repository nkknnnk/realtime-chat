/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'cdn.vectorstock.com', 'i.ibb.co']
  }
}

module.exports = nextConfig
