/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Transpile Sanity packages and ensure a single React instance is used
  transpilePackages: [
    "sanity",
    "next-sanity",
    "@sanity",
    "@sanity/ui",
    "@sanity/access-ui",
  ],
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias.react = path.resolve(__dirname, "node_modules/react");
    return config;
  },
};

export default nextConfig;
