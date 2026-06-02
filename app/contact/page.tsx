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
import ConsentMap from "@/components/ConsentMap"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Kontakt | Jörg Glinka",
  description:
    "Kontaktieren Sie Jörg Glinka für AI-Driven Growth, E-Commerce und digitale Transformationsprojekte.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Kontakt | Jörg Glinka",
    description:
      "Jetzt Strategiegespräch mit Jörg Glinka vereinbaren.",
    url: "https://glinka.tech/contact",
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
<div id="page-top" />
      {/* Glow Effects */}
      <div className="absolute top-[-250px] left-[-150px] w-[600px] h-[600px] bg-fuchsia-600/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[-300px] right-[-150px] w-[600px] h-[600px] bg-fuchsia-500/10 blur-[180px] rounded-full"></div>

      {/* HERO */}
      <section className="relative isolate px-4 md:px-6 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">

        {/* Background Typography */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute top-20 left-0 text-[18vw] leading-none font-black text-white/[0.03] uppercase tracking-[-0.08em] whitespace-nowrap">
            Contact
          </div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Badge */}
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
            Kontakt
          </div>

          {/* Headline */}
          <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase leading-[0.88] tracking-[-0.06em]">
            {blok.headline}
          </h1>

          {/* Divider */}
          <div className="mt-6 md:mt-10 w-24 md:w-32 h-[4px] bg-fuchsia-600 rounded-full"></div>

          {/* Text */}
          <p className="mt-6 md:mt-12 text-zinc-300 text-lg md:text-2xl leading-relaxed max-w-4xl">
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
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                E-Mail
              </p>

              <p className="mt-3 text-xl md:text-3xl font-black break-words">
                {blok.email}
              </p>
            </div>

            {/* LOCATION */}
            <div className="mt-10 md:mt-14">

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Standort
              </p>

              <p className="mt-3 text-xl md:text-3xl font-black break-words">
                {blok.location}
              </p>

            </div>

            {/* MAP */}
            <div className="mt-10 md:mt-14 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

              <ConsentMap />

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <ContactForm />

        </div>

      </section>
{/* Page Navigation */}
<section className="px-4 md:px-6 py-20 border-t border-white/10">

  <div className="max-w-7xl mx-auto">

    <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">
      Zurück zur Startseite
    </h3>

    <p className="text-zinc-400 max-w-2xl mb-10">
      Vielen Dank für Ihr Interesse. Erfahren Sie mehr über meine Expertise,
      Projekte und Strategien für nachhaltiges digitales Wachstum.
    </p>

    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

      <Link
        href="/"
        className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 font-black uppercase tracking-wide rounded-full hover:scale-105 transition-all duration-300"
      >
        Zur Startseite
      </Link>

      <a
        href="#page-top"
        className="font-bold uppercase tracking-wide text-yellow-400 hover:text-yellow-300 transition-colors"
      >
        ↑ Nach oben
      </a>

    </div>

  </div>

</section>
    </main>
  )
}
