import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves this repo as static assets, not a Next.js
  // server — static export produces a plain `out/` folder it can host
  // directly. Every route in this site is prerendered, so this is safe.
  output: "export",
  images: {
    // Static export can't run the Image Optimization API (no server),
    // so images are served as-is. next/image still handles responsive
    // `sizes`/lazy-loading on the client either way.
    unoptimized: true,
  },
};

export default nextConfig;
