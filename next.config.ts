import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/top-blog-hang-dau',
        destination: '/blogs',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/dashboard/overview',
        destination: '/dashboard/overview-new',
        permanent: true, // Status code 308 - Điều hướng vĩnh viễn
      },
    ]
  },
};

export default nextConfig;
