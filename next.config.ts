import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: "**.ufs.sh", },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
    qualities: [25, 50, 75, 100],
  },
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
