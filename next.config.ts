import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remote pattern for temporary reference photography (see lib/images.ts).
    // Remove once real RNOW-owned imagery is hosted locally in /public/images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
