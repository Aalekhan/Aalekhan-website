import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add basePath if your repo name is not your-username.github.io
  basePath: '/Aalekhan-website',
  assetPrefix: '/Aalekhan-website/',
};

export default nextConfig;
