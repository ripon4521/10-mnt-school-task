import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'cdn.10minuteschool.com',
      's3.ap-southeast-1.amazonaws.com' // Add this line
      // If you have images from other external domains, add them here too
      // 'example.com',
      // 'another-image-cdn.net',
    ],
  },
};

export default nextConfig;