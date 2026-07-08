async function getContactData() {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/contact?version=published&token=${process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN}`,
    {
      next: { revalidate: 60 },
    }
  )

  const data = await res.json()

  return data.story?.content || {}
}

import type { Metadata } from "next"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Gespräch vereinbaren | Jörg Glinka",

  description:
    "Sie suchen einen KI-Prozessmanager mit Erfahrung in digitaler Transformation. Ich suche genau diese Stelle. Schreiben Sie mir.",

  keywords: [
    "KI-Manager Kontakt",
    "KI-Prozessmanager Festanstellung",
    "KI-Manager einstellen",
    "KI-Manager für Unternehmen",
    "Gespräch vereinbaren KI-Manager",
  ],

  alternates: {
    canonical: "https://www.glinka.tech/contact",
  },

  openGraph: {
    title: "Gespräch vereinbaren | Jörg Glinka",
    description:
      "Sie suchen einen KI-Prozessmanager mit Erfahrung in digitaler Transformation. Ich suche genau diese Stelle. Schreiben Sie mir.",
    url: "https://www.glinka.tech/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}
export default async function ContactPage() {
  const blok = await getContactData()

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
            Contact
          </div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Badge */}
          <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
            Kontakt
          </div>

          {/* Headline */}
          <h1 className="type-h1 max-w-none md:max-w-5xl">
            {blok.headline}
          </h1>

          {/* Divider */}
          <div className="mt-6 w-20 h-[4px] bg-cyan-400 rounded-full"></div>

          {/* Text */}
          <p className="type-lead mt-6 max-w-[38ch] md:max-w-4xl">
            {blok.text}
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="relative px-4 md:px-6 pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-6 md:gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="editorial-card bg-zinc-900 border border-white/10 rounded-[2rem] p-6 md:p-10">

            {/* EMAIL */}
            <div>
              <p className="type-label">
                E-Mail
              </p>

              <p className="mt-3 text-xl md:text-3xl font-black break-words">
                {blok.email}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 md:mt-14 rounded-[2rem] bg-cyan-400/5 border border-cyan-400/20 p-8 md:p-10 flex flex-col gap-6">

              <p className="type-label !text-cyan-400 mb-3">Direkttermin</p>

              <p className="text-zinc-300 text-lg leading-relaxed">
                Oder buchen Sie direkt einen Termin — ohne das Formular abzuschicken.
              </p>

              <a
                href="https://calendly.com/glinka-ylcr/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex btn-primary self-start"
              >
                Gespräch vereinbaren
              </a>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <ContactForm />

        </div>

      </section>
{/* Page Navigation */}
<section className="relative z-[9999] px-4 md:px-6 py-12 md:py-20 border-t border-white/10">

  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col items-start gap-4">

      <Link
        href="/"
        className="inline-flex btn-primary"
      >
        Zur Startseite
      </Link>

      <a
        href="#page-top"
        className="btn-ghost"
      >
        ↑ Nach oben
      </a>

    </div>

  </div>

</section>
    </main>
  )
}
