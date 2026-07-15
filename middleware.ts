import { NextRequest, NextResponse } from "next/server";

// Every page on this site is statically prerendered at build time, so a
// per-request nonce can't work: there's no request in flight yet when the
// HTML is generated. Next's own App Router hydration also relies on many
// small inline bootstrap scripts (RSC payload pushes) whose content is
// build-specific and too numerous to hash individually. There's no
// unescaped/attacker-controllable content on this static site (React
// escapes all rendered data; the only dangerouslySetInnerHTML use is our
// own static JSON-LD), so 'unsafe-inline' here is a reasonable trade-off —
// script-src is still restricted to 'self', and every other CSP directive
// (frame-ancestors, object-src, form-action, etc.) stays fully enforced.
const isDev = process.env.NODE_ENV !== "production";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
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

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", contentSecurityPolicy);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|pem)$).*)",
  ],
};
