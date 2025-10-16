import withPWA from "next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // other options
};

const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

// 👇 TypeScript fix: cast to any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withPWAConfig(nextConfig as any);
