import StoryblokProvider from "@/components/storyblok/StoryblokProvider"
import Link from "next/link"
import Image from "next/image"
import MobileMenu from "@/components/MobileMenu"
import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop"
import { Geist, Geist_Mono } from "next/font/google";
import CookieBanner from "@/components/CookieBanner"
import Header from "@/components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://glinka.tech"),

  title: "Jörg Glinka | AI-Driven Growth & E-Commerce",

  description:
    "Executive Advisor für KI-gestütztes Wachstum, digitale Transformation und moderne Commerce-Strategien.",

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "AI Operations",
    "Künstliche Intelligenz",
    "Digital Transformation",
    "E-Commerce",
    "Marketplace Growth",
    "Growth Strategy",
    "Executive Advisor",
    "KI Management",
  ],

  authors: [
    {
      name: "Jörg Glinka",
    },
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Jörg Glinka | AI-Driven Growth & E-Commerce",

    description:
      "Executive Advisor für KI-gestütztes Wachstum, digitale Transformation und moderne Commerce-Strategien.",

    url: "https://glinka.tech",

    siteName: "Jörg Glinka",

    locale: "de_DE",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Jörg Glinka | AI-Driven Growth & E-Commerce",

    description:
      "Executive Advisor für KI-gestütztes Wachstum, digitale Transformation und moderne Commerce-Strategien.",

    images: ["/og-image.jpg"],
  },
}
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://glinka.tech/#person",

      name: "Jörg Glinka",

      url: "https://glinka.tech",

      image: "https://glinka.tech/og-image.jpg",

      jobTitle:
        "Executive Advisor for AI-Driven Growth, E-Commerce & Digital Transformation",

      description:
        "Executive Advisor für KI-gestütztes Wachstum, digitale Transformation, E-Commerce und AI Operations.",

      knowsAbout: [
        "Artificial Intelligence",
        "AI Operations",
        "Process Automation",
        "Digital Transformation",
        "E-Commerce",
        "Marketplace Growth",
        "Growth Strategy",
        "AI Marketing",
        "Commerce Transformation",
        "Business Process Optimization",
      ],

      sameAs: [
        "https://www.linkedin.com/in/joerg-glinka",
      ],
    },

    {
      "@type": "ConsultingService",
      "@id": "https://glinka.tech/#service",

      name: "Jörg Glinka",

      url: "https://glinka.tech",

      description:
        "Beratung für KI-gestütztes Wachstum, digitale Transformation, AI Operations und moderne Commerce-Strategien.",

      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },

      founder: {
        "@id": "https://glinka.tech/#person",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://glinka.tech/#organization",

      name: "Jörg Glinka",

      url: "https://glinka.tech",

      logo: {
        "@type": "ImageObject",
        url: "https://glinka.tech/logo.png",
      },

      founder: {
        "@id": "https://glinka.tech/#person",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://glinka.tech/#website",

      url: "https://glinka.tech",

      name: "Jörg Glinka",

      description:
        "Executive Advisor für KI-gestütztes Wachstum, digitale Transformation und moderne Commerce-Strategien.",

      publisher: {
        "@id": "https://glinka.tech/#organization",
      },

      inLanguage: "de-DE",
    },
  ],
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData),
  }}
/>
    <Header />    
<main className="flex-1 pt-20">
  <StoryblokProvider>
  {/* <ScrollToTop /> */}
  {children}
</StoryblokProvider>
</main>
  <footer className="border-t border-white/10 px-4 md:px-6 py-10 md:py-12">
  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      {/* Left */}
      <div>
        <p className="text-zinc-500 text-sm">
          © 2026 Jörg Glinka · AI-Driven Growth & E-Commerce
        </p>

        <p className="mt-3 text-xs text-zinc-600 max-w-md leading-relaxed">
          Teile der auf dieser Website verwendeten Visualisierungen wurden mit Unterstützung generativer KI (OpenAI ChatGPT) erstellt.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap gap-6 text-sm uppercase tracking-wide text-zinc-400">

        <Link
          href="/impressum"
          className="hover:text-fuchsia-500 transition"
        >
          Impressum
        </Link>

        <Link
          href="/datenschutz"
          className="hover:text-fuchsia-500 transition"
        >
          Datenschutz
        </Link>

      </div>

    </div>

  </div>
</footer>
<CookieBanner />
</body>
    </html>
  );
}
