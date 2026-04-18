import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // enable Cache Components so `'use cache'` directives take effect
  cacheComponents: true,
  images: {
    qualities:[75, 90, 100],
    // unoptimized: true,
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      //   pathname: "/**",
      // },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dri0l6ps0/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
