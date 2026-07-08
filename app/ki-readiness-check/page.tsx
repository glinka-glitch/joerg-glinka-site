import type { Metadata } from "next"
import KiReadinessCheck from "@/components/KiReadinessCheck"

export const metadata: Metadata = {
  title: "KI-Readiness-Check | Jörg Glinka",

  description:
    "Kostenloser Selbsttest: Wie bereit ist Ihr Unternehmen für KI? 10 Fragen, sofortiges Ergebnis mit Handlungsempfehlungen – entwickelt von einem KI-Manager mit 25 Jahren Erfahrung.",

  keywords: [
    "KI-Readiness-Check",
    "KI-Reifegrad",
    "KI-Selbsttest",
    "KI-Assessment",
    "KI-Manager Tool",
  ],

  alternates: {
    canonical: "https://www.glinka.tech/ki-readiness-check",
  },

  openGraph: {
    title: "KI-Readiness-Check | Jörg Glinka",
    description:
      "Kostenloser Selbsttest: Wie bereit ist Ihr Unternehmen für KI? 10 Fragen, sofortiges Ergebnis mit Handlungsempfehlungen – entwickelt von einem KI-Manager mit 25 Jahren Erfahrung.",
    url: "https://www.glinka.tech/ki-readiness-check",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function KiReadinessCheckPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div
        id="page-top"
        className="scroll-mt-24 md:scroll-mt-28"
      />

      {/* Glow Effects */}
      <div className="absolute top-[-250px] left-[-150px] w-[800px] h-[800px] bg-cyan-400/30 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="absolute bottom-[-300px] right-[-150px] w-[800px] h-[800px] bg-cyan-400/25 blur-[220px] rounded-full pointer-events-none"></div>

      {/* HERO */}
      <section className="relative isolate px-4 md:px-6 pt-8 md:pt-20 pb-10 md:pb-16 overflow-hidden">

        {/* Background Typography */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-0 text-[18vw] leading-none font-black text-white/[0.03] uppercase tracking-[-0.08em] whitespace-nowrap">
            Readiness
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Badge */}
          <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
            KI-Readiness-Check
          </div>

          {/* Headline */}
          <h1 className="type-h1 max-w-none md:max-w-5xl">
            Wie KI-ready ist Ihr Unternehmen?
          </h1>

          {/* Divider */}
          <div className="mt-6 w-20 h-[4px] bg-cyan-400 rounded-full"></div>

          {/* Text */}
          <p className="type-lead mt-6 max-w-[38ch] md:max-w-4xl">
            10 Fragen, 2 Minuten, sofortiges Ergebnis mit konkreten nächsten Schritten – kein Preis, keine Anmeldung.
          </p>

        </div>
      </section>

      {/* CHECK */}
      <section className="relative px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <KiReadinessCheck />
        </div>
      </section>

    </main>
  )
}
