import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // enable Cache Components so `'use cache'` directives take effect
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
