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
    "25 Jahre digitale Führung, davon 12 Jahre als Mitgründer und Geschäftsführer. Jörg Glinka sucht eine Führungsposition in KI-Transformation und digitaler Transformation (Festanstellung, Remote, deutschlandweit).",

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "KI-Transformation",
    "Leitung KI-Transformation",
    "KI-Manager",
    "KI-Manager Festanstellung",
    "KI-Prozessmanager",
    "KI-Prozessmanagement",
    "KI-Management",
    "AI Manager",
    "KI-Beauftragter",
    "Digitale Transformation Führungsposition",
    "Prozessautomatisierung",
    "KI-Adoption",
    "KI-Integration",
    "E-Commerce",
    "Change Management",
    "Festanstellung",
  ],

  authors: [
    {
      name: "Jörg Glinka",
    },
  ],

  openGraph: {
    title: "Jörg Glinka | KI-Transformation & Digitalisierung",

    description:
      "25 Jahre digitale Führung, davon 12 Jahre als Mitgründer und Geschäftsführer. Jörg Glinka sucht eine Führungsposition in KI-Transformation und digitaler Transformation (Festanstellung, Remote, deutschlandweit).",

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
      "25 Jahre digitale Führung, davon 12 Jahre als Mitgründer und Geschäftsführer. Jörg Glinka sucht eine Führungsposition in KI-Transformation und digitaler Transformation (Festanstellung, Remote, deutschlandweit).",

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

      jobTitle: "KI-Transformation & Digitalisierung",

      description:
        "Mitgründer und 12 Jahre Geschäftsführer der etailer Solutions GmbH (500+ Mio. € Plattform-GMV). Sucht jetzt eine Führungsposition in KI-Transformation und digitaler Transformation, Remote (deutschlandweit).",

      seeks: {
        "@type": "Demand",
        name: "Führungsposition in KI-Transformation & digitaler Transformation (Remote, deutschlandweit)",
        description:
          "Sucht eine Führungsposition (Festanstellung), in der KI-Transformation und digitale Transformation auf Leitungsebene verantwortet werden, mit Grundlage in 25 Jahren operativer Geschäftsführung. Remote-Position, deutschlandweit.",
        availableAtOrFrom: {
          "@type": "Place",
          name: "Remote (Deutschland)",
        },
      },

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
        "Mitgründer und 12 Jahre Geschäftsführer der etailer Solutions GmbH (500+ Mio. € Plattform-GMV). Sucht jetzt eine Führungsposition in KI-Transformation und digitaler Transformation, Remote (deutschlandweit).",

      publisher: {
        "@id": "https://www.glinka.tech/#organization",
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
