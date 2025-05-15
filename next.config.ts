import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

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

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
