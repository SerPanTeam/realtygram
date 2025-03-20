/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.panchenko.work'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.panchenko.work',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Отключаем оптимизацию изображений Next.js
  },
};

export default nextConfig;

