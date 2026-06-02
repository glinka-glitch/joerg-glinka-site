import { storyblokEditable } from "@storyblok/react/rsc"
import Image from "next/image"
import Link from "next/link"
import { fetchStory } from "@/lib/storyblok"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Über Jörg Glinka | AI-Driven Growth & E-Commerce",

  description:
    "Erfahren Sie mehr über Jörg Glinka, Executive Advisor für KI-gestütztes Wachstum, digitale Transformation und moderne Commerce-Strategien.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "Über Jörg Glinka | AI-Driven Growth & E-Commerce",

    description:
      "Erfahren Sie mehr über Jörg Glinka, Executive Advisor für KI-gestütztes Wachstum, digitale Transformation und moderne Commerce-Strategien.",

    url: "https://glinka.tech/about",

    images: ["/og-image.jpg"],
  },
}
export default async function AboutPage() {
  const blok = await fetchStory("about_page")

  return (
   <main
  {...storyblokEditable(blok)}
  className="relative min-h-screen bg-black text-white overflow-hidden"
>
  <div id="page-top" />

  {/* Navigation */}

      {/* Glow Effects */}
      <div className="absolute -z-10 top-[-200px] left-[-200px] w-[600px] h-[600px] bg-fuchsia-600/20 blur-[90px] rounded-full"></div>

      <div className="absolute -z-10 bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      {/* HERO */}
      <section className="relative isolate px-4 md:px-6 pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden">

        {/* Background Typography */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute top-20 left-0 text-[18vw] leading-none font-black text-white/[0.03] uppercase tracking-[-0.08em] whitespace-nowrap">
            About
          </div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* LEFT */}
          <div className="order-2 lg:order-1">

            {/* Badge */}
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
              {blok.hero_badge || "About"}
            </div>

            {/* Headline */}
            <h1
  className="
  text-[2.9rem]
  sm:text-6xl
  md:text-7xl
  lg:text-8xl
  font-black
  uppercase
  leading-[0.82]
  tracking-[-0.06em]
  whitespace-pre-line
  max-w-none
  "
>
              {blok.hero_headline || "Strategy\nGrowth\nTransformation"}
            </h1>

            {/* Divider */}
            <div className="mt-8 w-24 h-[4px] bg-fuchsia-600 rounded-full"></div>

            {/* Text */}
            <div className="mt-8 max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
              {blok.hero_text?.content ? (
                blok.hero_text.content.map((item: any, index: number) => (
                  <p key={index} className="mb-6">
                    {item.content?.[0]?.text}
                  </p>
                ))
              ) : (
                <p>
                  Ich unterstütze Unternehmen dabei, nachhaltiges Wachstum durch moderne E-Commerce-Strategien, KI-gestützte Systeme und digitale Transformation zu realisieren.
                </p>
              )}
            </div>

            {/* STATS */}
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="editorial-card bg-zinc-900 border border-white/10 rounded-3xl p-6">
                <div className="text-3xl font-black text-white">
                  {blok.stat_1_value || "20+"}
                </div>

                <div className="text-zinc-500 uppercase text-sm mt-2 leading-tight">
                  {blok.stat_1_label || "Jahre Erfahrung"}
                </div>
              </div>

              <div className="editorial-card bg-zinc-900 border border-white/10 rounded-3xl p-6">
                <div className="text-xl md:text-2xl font-black text-white whitespace-nowrap leading-none">
                  {blok.stat_2_value || "E-Commerce"}
                </div>

                <div className="text-zinc-500 uppercase text-sm mt-2 leading-tight">
                  {blok.stat_2_label || "Wachstum"}
                </div>
              </div>

              <div className="editorial-card bg-zinc-900 border border-white/10 rounded-3xl p-6">
                <div className="text-3xl font-black text-white">
                  {blok.stat_3_value || "AI"}
                </div>

                <div className="text-zinc-500 uppercase text-sm mt-2 leading-tight">
                  {blok.stat_3_label || "Transformation"}
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative w-full max-w-[620px] mx-auto order-1 lg:order-2">

            <div className="absolute -inset-4 border-4 border-fuchsia-600 rounded-3xl"></div>

            {blok.image?.filename && (
              <div className="relative z-10 overflow-hidden rounded-3xl">
                <Image
                  src={blok.image.filename}
                  alt="Jörg Glinka"
                  width={800}
                  height={800}
                  priority
                  fetchPriority="high"
                  className="w-full h-auto object-cover shadow-[0_20px_60px_rgba(217,70,239,0.25)]"
                />
              </div>
            )}

          </div>

        </div>

      </section>

      {/* STORY */}
      <section className="px-4 md:px-6 py-16 md:py-20 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="inline-block bg-fuchsia-600 text-white px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
            {blok.story_badge || "Executive Story"}
          </div>

          <h2
  className="
  max-w-[16ch]
  md:max-w-5xl
  text-[1.65rem]
  sm:text-4xl
  md:text-6xl
  lg:text-7xl
  font-black
  uppercase
  tracking-[-0.04em]
  leading-[0.95]
  whitespace-pre-line
  "
>
  {blok.story_headline ||
    "Digitale Transformation mit unternehmerischem Fokus"}
</h2>

          <div className="mt-6 max-w-4xl text-zinc-300 text-lg md:text-xl leading-relaxed">
            {blok.story_text?.content ? (
              blok.story_text.content.map((item: any, index: number) => (
                <p key={index} className="mb-6">
                  {item.content?.[0]?.text}
                </p>
              ))
            ) : (
              <p>
                Seit über zwei Jahrzehnten begleite ich Unternehmen bei der Entwicklung digitaler Geschäftsmodelle, skalierbarer E-Commerce-Strukturen und nachhaltiger Wachstumsstrategien.
              </p>
            )}
          </div>

        </div>

      </section>

      {/* EXPERTISE */}
      <section className="px-4 md:px-6 py-16 md:py-20 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
            Expertise
          </div>

          <h2
  className="
  max-w-[16ch]
  md:max-w-5xl
  text-[1.65rem]
  sm:text-4xl
  md:text-6xl
  lg:text-7xl
  font-black
  uppercase
  tracking-[-0.04em]
  leading-[0.95]
  "
>
            Leistungen &
            Kompetenzfelder
          </h2>

          <div className="mt-10 md:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            {blok.expertise_items?.map((item: any) => (
              <div
                key={item._uid}
                className="editorial-card bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-fuchsia-500/50 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(217,70,239,0.15)] transition duration-500"
              >

                <h3 className="text-2xl font-black uppercase leading-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-zinc-400 leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TIMELINE */}
      <section className="px-4 md:px-6 py-16 md:py-20 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="inline-block bg-fuchsia-600 text-white px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
            Journey
          </div>

          <h2
  className="
  max-w-[16ch]
  md:max-w-5xl
  text-[1.65rem]
  sm:text-4xl
  md:text-6xl
  lg:text-7xl
  font-black
  uppercase
  tracking-[-0.04em]
  leading-[0.95]
  "
>
            Meine Expertise aus 25+ Jahren Erfahrung
          </h2>

          <div className="mt-10 md:mt-12 max-w-5xl space-y-8 md:space-y-12 border-l border-fuchsia-500/30 pl-6 md:pl-10">

            {blok.timeline_items?.map((item: any) => (
              <div key={item._uid} className="relative">

                <div className="absolute -left-[31px] md:-left-[49px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-fuchsia-600"></div>

                <h3 className="text-xl md:text-3xl font-black uppercase leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Page Navigation */}
<section className="px-6 py-24 border-t border-white/10">

  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

      {/* LEFT */}

      <div className="max-w-4xl">

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-[0.95] mb-5">
          Wo liegen Ihre größten Wachstumshebel?
        </h3>

        <p className="text-zinc-400 text-lg leading-relaxed">
          Ob digitale Transformation, KI-Integration,
          operative Skalierung oder Wachstum –
          gemeinsam identifizieren wir die Maßnahmen
          mit der größten Wirkung für Ihr Unternehmen.
        </p>

      </div>

      {/* RIGHT */}

      <div className="flex flex-col items-start lg:items-end gap-8">

        <a
          href="/contact"
          className="
          inline-flex
          items-center
          justify-center
          bg-yellow-400
          text-black
          px-8
          py-4
          font-black
          uppercase
          tracking-wide
          rounded-full
          hover:scale-105
          transition-all
          duration-300
          "
        >
          Strategiegespräch vereinbaren
        </a>

        <a
          href="#page-top"
          className="
          font-bold
          uppercase
          tracking-wide
          text-yellow-400
          hover:text-yellow-300
          transition-colors
          "
        >
          ↑ Nach oben
        </a>

      </div>

    </div>

  </div>

</section>
    </main>
  )
}