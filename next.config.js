/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    serverActions: {} // ✅ Correct format
  }
};

module.exports = nextConfig;
