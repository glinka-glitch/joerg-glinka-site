import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://www.glinka.tech/sitemap.xml",

    host: "https://www.glinka.tech",
  };
}