/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Generates a static HTML export (SSG)
  distDir: 'dist',  // Outputs to 'dist' folder so Vercel finds it
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;