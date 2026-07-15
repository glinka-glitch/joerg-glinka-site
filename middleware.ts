import { NextRequest, NextResponse } from "next/server";

// Static JSON-LD blocks (app/layout.tsx structuredData, components/FAQSection.jsx
// faqStructuredData) are allowlisted by hash instead of nonce. Their content never
// changes per-request, and a hash avoids the nonce-hiding hydration warning browsers
// trigger when they strip the reflected `nonce` attribute after using it.
// Recompute with: curl the page, hash the exact <script> content (see git history of
// this file for the one-liner used originally).
const STATIC_SCRIPT_HASHES = [
  "'sha256-O69U+8+UAH8gscuBOnKB03LrGwsc5N+c0Cr+T7rhkaU='", // app/layout.tsx structuredData
  "'sha256-gq0HhRYnUUfsT30ae/G3I3Xo5q4F+pjXuAOYESuRe18='", // components/FAQSection.jsx faqStructuredData
];

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV !== "production";

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${STATIC_SCRIPT_HASHES.join(" ")} https: 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
    style-src 'self' 'unsafe-inline';
    img-src 'self' https://a.storyblok.com data: blob:;
    font-src 'self';
    connect-src 'self';
    frame-src 'none';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self' https://app.storyblok.com;
    upgrade-insecure-requests;
  `;
  const contentSecurityPolicy = cspHeader.replace(/\s{2,}/g, " ").trim();

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", contentSecurityPolicy);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|pem)$).*)",
  ],
};
