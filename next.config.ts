import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80],
    // Storyblok URLs are content-hashed (a new image gets a new filename),
    // so a long TTL can't serve a stale image — it just avoids re-running
    // the optimization pipeline on every cache-cold visit.
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
    ],
  },
};

export default nextConfig;