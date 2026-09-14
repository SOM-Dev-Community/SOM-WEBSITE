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
  async redirects() {
    return [
      // "Learn More" links point at SOM's products, which live on the Explore page.
      { source: "/learn-more", destination: "/explore", permanent: false },
    ];
  },
};

export default nextConfig;
