import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopack: {
      root: ".",
    },
  },
  images: {
    unoptimized: true, // For local screenshot loading
  },
};

export default nextConfig;
