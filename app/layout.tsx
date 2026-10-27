import Link from "next/link"
import Image from "next/image"
import MobileMenu from "@/components/MobileMenu"
import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop"
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic"
import Header from "@/components/Header"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Not needed for first paint — code-split into its own chunk instead of the
// main bundle. `ssr: false` isn't allowed here (Server Component), so it
// still renders on the server but hydrates from a separate chunk.
const CookieBanner = dynamic(() => import("@/components/CookieBanner"))

export const metadata: Metadata = {
  metadataBase: new URL("https://www.glinka.tech/"),

  title: "Jörg Glinka | KI-Transformation & Digitalisierung",

  description:
    "25 Jahre digitale Transformation. Mitgründer und CEO der etailer Solutions GmbH (500+ Mio. € GMV). Expertise in KI-Integration, E-Commerce und Plattform-Skalierung.",

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "KI-Transformation",
    "Digital Transformation",
    "E-Commerce",
    "Plattform-Skalierung",
    "KI-Integration",
    "Change Management",
    "Digitale Strategie",
    "CEO",
    "Entrepreneurship",
    "Digital Leadership",
  ],

  authors: [
    {
      name: "Jörg Glinka",
    },
  ],

  openGraph: {
    title: "Jörg Glinka | KI-Transformation & Digitalisierung",

    description:
      "25 Jahre digitale Transformation. Mitgründer und CEO der etailer Solutions GmbH. Expertise in KI-Integration, E-Commerce und Plattform-Skalierung.",

    url: "https://www.glinka.tech/",

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

    title: "Jörg Glinka | KI-Transformation & Digitalisierung",

    description:
      "25 Jahre digitale Transformation. Mitgründer und CEO der etailer Solutions GmbH. Expertise in KI-Integration, E-Commerce und Plattform-Skalierung.",

    images: ["/og-image.jpg"],
  },
}
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.glinka.tech/#person",

      name: "Jörg Glinka",

      url: "https://www.glinka.tech/",

      image: "https://www.glinka.tech/og-image.jpg",

      jobTitle: "Founder, CEO | KI-Transformation",

      description:
        "Mitgründer und ehemaliger CEO der etailer Solutions GmbH (500+ Mio. € Plattform-GMV). 25 Jahre digitale Transformation, Plattform-Skalierung und KI-Integration.",

      knowsAbout: [
        "KI-Transformation",
        "KI-Management",
        "KI-Manager",
        "KI-Prozessmanagement",
        "Artificial Intelligence",
        "AI Operations",
        "Process Automation",
        "Digital Transformation",
        "E-Commerce",
        "Change Management",
        "Business Process Optimization",
      ],

      sameAs: [
        "https://www.linkedin.com/in/joerg-glinka",
        "https://www.xing.com/profile/Joerg_Glinka",
      ],

      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "KI-Manager:in",
          recognizedBy: {
            "@type": "Organization",
            name: "LearnWise Academy",
          },
          description: "Zertifikatslehrgang, 400 Stunden",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "Prompt-Engineering",
          description: "Weiterbildung, 50 Stunden",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "KI-basierte Tools und Techniken für Unternehmen",
          description: "Weiterbildung, 50 Stunden",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "Digitalisierte Arbeitswelt 4.0",
        },
      ],

      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "SAE Institute (SAE International Technology College)",
        description: "Multimedia-Producer-Diplom, 1998",
      },

      homeLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Olpe",
          postalCode: "57462",
          addressRegion: "Nordrhein-Westfalen",
          addressCountry: "DE",
        },
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.glinka.tech/#organization",

      name: "Jörg Glinka",

      url: "https://www.glinka.tech/",

      logo: {
        "@type": "ImageObject",
        url: "https://www.glinka.tech/logo.png",
      },

      sameAs: [
        "https://www.linkedin.com/in/joerg-glinka",
        "https://www.xing.com/profile/Joerg_Glinka",
      ],

      contactPoint: {
        "@type": "ContactPoint",
        contactType: "business",
        url: "https://www.glinka.tech/contact",
      },

      founder: {
        "@id": "https://www.glinka.tech/#person",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://www.glinka.tech/#website",

      url: "https://www.glinka.tech/",

      name: "Jörg Glinka",

      description:
        "Mitgründer und 12 Jahre Geschäftsführer der etailer Solutions GmbH (500+ Mio. € Plattform-GMV). 25 Jahre digitale Transformation, Plattform-Skalierung und KI-Integration.",

      publisher: {
        "@id": "https://www.glinka.tech/#organization",
      },

      author: {
        "@id": "https://www.glinka.tech/#person",
      },

      inLanguage: "de-DE",

      // Keine echte interne Suche vorhanden. Google-Site-Suche als
      // pragmatischer SearchAction-Fallback, damit das WebSite-Schema
      // vollständig ist. Bei einer echten Suchfunktion hier austauschen.
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.google.com/search?q=site:glinka.tech+{search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },

      // Wird bei jedem Deploy (Vercel-Build) automatisch neu gesetzt.
      dateModified: new Date().toISOString().slice(0, 10),

      datePublished: "2026-06-01",
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="llms" href="/llms.txt" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData),
  }}
/>
        {/* Plain <a> tags sind hier bewusst: <noscript>-Inhalt muss ohne
            JavaScript funktionieren, next/link setzt clientseitige
            Hydration voraus und waere hier wirkungslos. */}
        {/* eslint-disable @next/next/no-html-link-for-pages */}
        <noscript>
          <div style={{ padding: "2rem", maxWidth: "60ch" }}>
            <h1>Jörg Glinka | KI-Transformation & Digitalisierung</h1>
            <p>
              25 Jahre digitale Transformation. Mitgründer und 12 Jahre Geschäftsführer der etailer Solutions GmbH (500+ Mio. € Plattform-GMV). Expertise in KI-Integration, E-Commerce und Plattform-Skalierung.
            </p>
            <nav>
              <a href="/">Startseite</a> · <a href="/about">Werdegang</a> ·{" "}
              <a href="/portfolio">Kompetenzen</a> ·{" "}
              <a href="/ki-readiness-check">KI-Readiness-Check</a> ·{" "}
              <a href="/contact">Kontakt</a>
            </nav>
            <p>E-Mail: joerg@glinka.tech · 57462 Olpe, Deutschland</p>
          </div>
        </noscript>
        {/* eslint-enable @next/next/no-html-link-for-pages */}
    <Header />
<main className="flex-1">
<ScrollToTop />
{children}
</main>
  <footer className="border-t border-white/10 px-4 md:px-6 py-10 md:py-12">
  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      {/* Left */}
      <div>
        <p className="text-zinc-400 text-sm">
          © 2026 Jörg Glinka · KI-Transformation & Digitalisierung
        </p>

        <p className="mt-3 text-xs text-zinc-400 max-w-md leading-relaxed">
          Teile dieser Website wurden mit Unterstützung generativer KI (OpenAI ChatGPT, Anthropic Claude) erstellt.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap gap-6 text-sm uppercase tracking-wide text-zinc-400">

  <a
    href="https://www.linkedin.com/in/joerg-glinka"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition"
  >
    LinkedIn
  </a>

  <a
    href="https://www.xing.com/profile/Joerg_Glinka"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition"
  >
    Xing
  </a>

  <Link
    href="/impressum"
    className="hover:text-cyan-400 transition"
  >
    Impressum
  </Link>

  <Link
    href="/datenschutz"
    className="hover:text-cyan-400 transition"
  >
    Datenschutz
  </Link>

</div>

    </div>

  </div>
</footer>
<CookieBanner />
<Analytics />
<SpeedInsights />
</body>
    </html>
  );
}
