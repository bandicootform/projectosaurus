import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bandicootform.vercel.app",
        pathname: "/work/**",
      },
    ],
  },
};

export default nextConfig;
