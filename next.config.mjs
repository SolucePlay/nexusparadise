/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [], 
  allowedDevOrigins: ['90.23.51.22'],

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig