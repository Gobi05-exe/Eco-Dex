import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Enable SWC minification for better performance
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during build process
  },
  images: {
    domains: ['ui-avatars.com', 'another-domain.com'], // Add your image domains here
  },
};

export default nextConfig;
