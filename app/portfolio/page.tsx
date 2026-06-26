import Image from "next/image"
import { renderRichText } from "@storyblok/react"
import { fetchStory } from "@/lib/storyblok"
import type { Metadata } from "next"
import Link from "next/link"
export const metadata: Metadata = {
  title: "Portfolio | Projekte, Transformation & Wachstum",
  description:
    "Ausgewählte Projekte, digitale Transformationen und AI-Driven Growth Initiativen von Jörg Glinka.",

  alternates: {
    canonical: "https://www.glinka.tech/portfolio",
  },

  openGraph: {
    title: "Portfolio | Jörg Glinka",
    description:
      "Digitale Transformation, Commerce-Wachstum und AI Operations.",
    url: "/portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default async function PortfolioPage() {
  const blok = await fetchStory("portfolio")

  return (
   <main
  id="page-top"
  className="relative min-h-screen bg-black text-white overflow-hidden scroll-mt-24 md:scroll-mt-28"
>

      {/* Glow Effects */}
      <div className="absolute top-[-300px] left-[-200px] w-[700px] h-[700px] bg-cyan-400/15 blur-[180px] rounded-full -z-10"></div>

      <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-cyan-400/10 blur-[200px] rounded-full -z-10"></div>

{/* HERO */}
<section className="relative isolate px-4 md:px-6 pt-4 md:pt-8 pb-6 md:pb-10 overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-cyan-400/15 blur-[160px] rounded-full"></div>

  <div className="absolute top-[200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[180px] rounded-full"></div>

  {/* Background Typography */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    <div className="absolute top-24 left-0 text-[18vw] leading-none font-black text-white/[0.03] uppercase tracking-[-0.08em] whitespace-nowrap">
      Transformation
    </div>

  </div>

  <div className="relative z-10 max-w-7xl mx-auto">

{/* Badge */}
{blok.hero_badge && (
  <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
    {blok.hero_badge}
  </div>
)}

{blok.hero_headline && (
  <div className="max-w-none md:max-w-none">

   <h1 className="type-display max-w-none break-words hyphens-auto">
      {blok.hero_headline}
    </h1>

  </div>
)}

    {/* Divider */}
    <div className="mt-6 md:mt-10 w-24 md:w-32 h-[4px] bg-cyan-400 rounded-full"></div>

    {/* Text */}
    {blok.hero_text && (
  <div
    className="type-lead mt-10 max-w-[90ch]"
    dangerouslySetInnerHTML={{
      __html: renderRichText(blok.hero_text) || "",
    }}
  />
)}

  </div>
</section>

      {/* FEATURE VISUAL */}
      {false && blok.hero_image?.filename && (
        <section className="px-4 md:px-6 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">

                            <Image
  src={blok.hero_image.filename}
  alt="Transformation Leadership"
  width={1800}
  height={1000}
  sizes="100vw"
  quality={80}
  className="w-full h-full object-cover"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            </div>

          </div>
        </section>
      )}

      {/* IMPACT */}
<section className="px-4 md:px-6 py-12 md:py-16">

  <div className="max-w-7xl mx-auto">

    <div className="mb-10">

      <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
        Impact
      </div>

      <h2 className="type-h1">
        Messbare Wirkung
      </h2>

    </div>

  {blok.metrics?.length > 0 && (

  <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-12 md:gap-16">

    {blok.metrics.map((item: any) => (

      <div
  key={item._uid}
  className="
  border-t
  border-white/10
  pt-6
  "
>

        <div className="text-4xl md:text-5xl font-black text-cyan-400">
          {item.value}
        </div>

        <div className="text-zinc-400 uppercase text-sm tracking-wide mt-3 leading-snug">
          {item.label}
        </div>

      </div>

    ))}

  </div>

)}

  </div>

</section>

      {/* CASES */}
      {blok.portfolio_items?.length > 0 && (
        <section className="px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">

            <div className="mb-24">
             <h2 className="type-h1">
  Die drei Hebel für nachhaltiges Wachstum
</h2>

<p className="type-lead mt-6 max-w-4xl">
  Wachstum entsteht nicht durch einzelne Maßnahmen.
Sondern durch das Zusammenspiel von Geschäftsmodell,
Technologie und Führung.
</p>
            </div>

            <div className="space-y-24">

              {blok.portfolio_items.map((item: any, index: number) => (
                <div
  key={item._uid}
  className={`grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center overflow-hidden ${
    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
  }`}
>

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                  

                    {item.image?.filename && (
  <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 aspect-[16/10]">

    <Image
      src={item.image.filename}
      alt={item.title || "Portfolio Image"}
      width={1400}
      height={1000}
      sizes="(max-width: 1024px) 100vw, 50vw"
      quality={80}
      className="w-full h-full object-cover"
    />

  </div>
)}
                  </div>

                  {/* CONTENT */}
                  <div className="w-full">

                    {item.category && (
                      <div className="text-cyan-400 uppercase tracking-[0.2em] text-base md:text-lg font-bold">
                        {item.category}
                      </div>
                    )}

                    {item.title && (
                      <h3 className="type-h1 mt-4 md:mt-6">
                        {item.title}
                      </h3>
                    )}

                    <div className="mt-12 space-y-10">

                      {item.challenge && (
                        <div>
                          <div className="type-label !text-cyan-400 !text-base md:!text-lg mb-3">
                            Focus
                          </div>

                          <p className="type-body mt-3">
                            {item.challenge}
                          </p>
                        </div>
                      )}

                      {item.outcome && (
                        <div>
                          <div className="type-label !text-cyan-400 !text-base md:!text-lg mb-3">
                            Impact
                          </div>

                          <p className="type-body mt-3">
                            {item.outcome}
                          </p>
                        </div>
                      )}

                    </div>

                    {item.tags?.length > 0 && (
                      <div className="mt-12 flex flex-wrap gap-4">

                        {item.tags.map((tag: any, index: number) => (
                          <div
                            key={index}
                            className="px-5 py-2 rounded-full bg-cyan-400/15 text-cyan-400 text-xs uppercase tracking-[0.15em]"
                          >
                            {tag}
                          </div>
                        ))}

                      </div>
                    )}

                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      )}

      {/* PHILOSOPHY */}
{(blok.philosophy_headline || blok.philosophy_text) && (
  <section className="px-4 md:px-6 py-16 md:py-24 border-t border-white/10">

    <div className="max-w-7xl mx-auto">

      {blok.philosophy_badge && (
        <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-10">
          {blok.philosophy_badge}
        </div>
      )}

      <div className="lg:grid lg:grid-cols-[1.4fr_0.9fr] lg:gap-24 lg:items-start">

        <div>
          {blok.philosophy_headline && (
            <h2 className="type-h1 max-w-none md:max-w-5xl">
              {blok.philosophy_headline}
            </h2>
          )}
        </div>

        <div>
          {blok.philosophy_text && (
            <div
              className="type-lead mt-6 lg:mt-0 max-w-none prose prose-invert prose-p:text-zinc-300"
              dangerouslySetInnerHTML={{
                __html: renderRichText(blok.philosophy_text) || "",
              }}
            />
          )}
        </div>

      </div>

    </div>

  </section>
)}

      {/* CTA */}
{(blok.cta_headline || blok.cta_text) && (
  <section className="px-4 md:px-6 py-16 md:py-24 border-t border-white/10">

    <div className="max-w-7xl mx-auto">

      {blok.cta_badge && (
        <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-10">
          {blok.cta_badge}
        </div>
      )}

      <div className="lg:grid lg:grid-cols-[1.4fr_0.9fr] lg:gap-24 lg:items-start">

        {/* LEFT COLUMN */}
        <div>

          {blok.cta_headline && (
            <h2 className="type-h1 max-w-none md:max-w-5xl">
              {blok.cta_headline}
            </h2>
          )}

        </div>

        {/* RIGHT COLUMN */}
        <div>

          {blok.cta_text && (
            <div
              className="type-lead mt-6 lg:mt-0 max-w-[34ch] prose prose-invert prose-p:text-zinc-300"
              dangerouslySetInnerHTML={{
                __html: renderRichText(blok.cta_text) || "",
              }}
            />
          )}

          <div className="mt-10 md:mt-12">
            <Link
              href="/contact"
              className="inline-flex btn-secondary gap-3 w-full sm:w-auto"
            >
              Jetzt Kontakt aufnehmen!
            </Link>
          </div>

        </div>

      </div>

    </div>

  </section>
)}
{/* Page Navigation */}
<section className="px-6 md:px-6 py-12 md:py-16 border-t border-white/10">

  <div className="max-w-7xl mx-auto">

    <h3 className="type-h2">
      Wo liegen Ihre größten Wachstumshebel?
    </h3>

    <p className="type-body max-w-4xl mb-10">
      Ob digitale Transformation, KI-Integration, operative Skalierung oder Wachstum – gemeinsam identifizieren wir die Maßnahmen mit der größten Wirkung für Ihr Unternehmen.
    </p>

    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

      <Link
        href="/contact#contact-form"
        className="inline-flex btn-primary"
      >
        Strategiegespräch vereinbaren
      </Link>

     <a href="#page-top" className="btn-ghost">
  ↑ Nach oben
</a>

    </div>

  </div>

</section>
    </main>
  )
}