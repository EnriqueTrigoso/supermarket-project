/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['pvljogumgjnzfsbjpyke.supabase.co'],
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
}

module.exports = nextConfig
