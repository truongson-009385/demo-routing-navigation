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
};

export default nextConfig;
