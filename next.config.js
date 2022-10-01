/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tmdb.org', 'themoviedb.org','www.instagram.com'],
  },
}

module.exports = nextConfig
