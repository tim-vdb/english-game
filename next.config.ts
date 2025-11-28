import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: "**.ufs.sh", },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
    qualities: [25, 50, 75, 100],
  },
  experimental: {
    authInterrupts: true,
    // Include Prisma generated files in the build output
    outputFileTracingIncludes: {
      '/api/**/*': ['./src/generated/**/*'],
      '/*': ['./src/generated/**/*'],
    },
  },
};

export default nextConfig;
