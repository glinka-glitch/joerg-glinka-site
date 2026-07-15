import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  // No X-Frame-Options: it only supports DENY/SAMEORIGIN, which can't express
  // "allow framing from app.storyblok.com" the way CSP frame-ancestors (set in
  // middleware.ts) can. frame-ancestors is the modern replacement and is what
  // all current browsers honor, so this legacy header would just conflict.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // HSTS is production-only: the local dev server uses a self-signed cert
  // (--experimental-https), and HSTS removes the browser's "proceed anyway"
  // click-through on cert errors — a single cert hiccup would permanently
  // lock localhost out of HTTPS for the max-age duration.
  ...(process.env.NODE_ENV === "production"
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
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