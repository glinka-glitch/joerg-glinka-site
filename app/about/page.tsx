import { storyblokEditable } from "@storyblok/react/rsc"
import Image from "next/image"
import Link from "next/link"
import { fetchStory } from "@/lib/storyblok"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Werdegang | Jörg Glinka – KI-Manager & Digitale Transformation",

  description:
    "KI-Manager mit 25 Jahren Erfahrung: Mein Weg von E-Commerce bis KI-Management – und warum ich jetzt in Festanstellung wechsle.",

  keywords: [
    "KI-Manager Werdegang",
    "KI-Manager Lebenslauf",
    "Digitale Transformation Erfahrung",
    "E-Commerce Geschäftsführer",
    "CEO Digitale Transformation",
    "Change Management Erfahrung",
    "KI-Manager Festanstellung",
  ],

  alternates: {
    canonical: "https://www.glinka.tech/about",
  },

  openGraph: {
    title: "Werdegang | Jörg Glinka – KI-Manager & Digitale Transformation",

    description:
      "KI-Manager mit 25 Jahren Erfahrung: Mein Weg von E-Commerce bis KI-Management – und warum ich jetzt in Festanstellung wechsle.",

    url: "https://www.glinka.tech/about",

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
  <div
  id="page-top"
  className="scroll-mt-24 md:scroll-mt-28"
/>
  {/* Navigation */}

      {/* Glow Effects */}
      <div className="absolute pointer-events-none top-[-200px] left-[-200px] w-[800px] h-[800px] bg-cyan-400/25 blur-[200px] rounded-full"></div>

      <div className="absolute pointer-events-none bottom-[-200px] right-[-200px] w-[900px] h-[900px] bg-yellow-400/15 blur-[220px] rounded-full"></div>

      {/* HERO */}
      <section className="relative isolate px-4 md:px-6 pt-4 md:pt-8 pb-6 md:pb-10 overflow-hidden">

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
            <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
              {blok.hero_badge || "About"}
            </div>

            {/* Headline */}
            <h1 className="type-h1 max-w-[18ch] md:max-w-5xl whitespace-pre-line break-words hyphens-auto" lang="de">
              {blok.hero_headline || "Digitale Transformation als Lebenswerk"}
            </h1>

            {/* Divider */}
            <div className="mt-8 w-24 h-[4px] bg-cyan-400 rounded-full"></div>

            {/* Text */}
            <div className="type-lead mt-8 max-w-[38ch] md:max-w-4xl">
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
            </div>

          {/* RIGHT */}
          <div className="relative w-full max-w-[620px] mx-auto order-1 lg:order-2">

            <div className="absolute -inset-4 border-4 border-cyan-400 rounded-3xl"></div>

            {blok.image?.filename && (
              <div className="relative z-10 overflow-hidden rounded-3xl aspect-[4/5]">
                <Image
                  src={blok.image.filename}
                  alt="Jörg Glinka"
                  width={800}
                  height={1000}
                  priority
                  fetchPriority="high"
                  className="w-full h-full object-cover shadow-[0_20px_60px_rgba(34,211,238,0.2)]"
                />
              </div>
            )}

          </div>

        </div>

      </section>

      {/* STORY */}
      <section className="px-4 md:px-6 py-10 md:py-16 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
            {blok.story_badge || "Executive Story"}
          </div>

          <h2 className="type-h1 whitespace-pre-line break-words">
  {blok.story_headline ||
    "Digitale Transformation mit unternehmerischem Fokus"}
</h2>

          <div className="type-lead mt-6 max-w-[40ch] md:max-w-4xl">
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
{/* FOCUS AREAS */}

<section className="px-4 md:px-6 py-16 md:py-24 border-t border-white/10">

  <div className="max-w-7xl mx-auto">

    <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
      {blok.focus_badge}
    </div>

    <h2 className="type-h1">
      {blok.focus_headline}
    </h2>

    <p className="type-body mt-8">
      {blok.focus_intro}
    </p>

    <div className="mt-16 border-t border-white/10">

      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="grid md:grid-cols-[120px_1fr] gap-8 py-10 border-b border-white/10"
        >

          <div className="text-5xl md:text-6xl font-black text-cyan-400">
            {blok[`focus_${i}_number`]}
          </div>

          <div>

            <h3 className="type-h2">
              {blok[`focus_${i}_title`]}
            </h3>

            <p className="type-body mt-4 max-w-3xl">
              {blok[`focus_${i}_text`]}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

      {/* SKILLS */}
      <section className="px-4 md:px-6 py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">

          <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
            Skills
          </div>

          <h2 className="type-h1 mb-16">Kompetenzen & Tools</h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16">

            <div>
              <p className="type-label !text-cyan-400 mb-6">KI & Prozessmanagement</p>
              <div className="flex flex-wrap gap-3">
                {["KI-Strategie & KI-Adoption", "KI-Implementierung & Use Case Discovery", "KI-gestützte Prozessoptimierung", "Prozessautomatisierung", "KI Governance"].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-base leading-snug">
                    {skill}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full border border-dashed border-white/20 text-zinc-600 text-sm">+</span>
              </div>
            </div>

            <div>
              <p className="type-label !text-cyan-400 mb-6">Transformation & Beratung</p>
              <div className="flex flex-wrap gap-3">
                {["Digitale Transformation", "Change Management", "Stakeholder Management", "Workshop-Moderation", "Business-IT-Alignment", "Systemintegration"].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-base leading-snug">
                    {skill}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full border border-dashed border-white/20 text-zinc-600 text-sm">+</span>
              </div>
            </div>

            <div>
              <p className="type-label !text-cyan-400 mb-6">Organisation & Steuerung</p>
              <div className="flex flex-wrap gap-3">
                {["Operating Models", "KPI-basierte Unternehmenssteuerung", "Datengetriebene Entscheidungsfindung", "Organisationsentwicklung", "Prompt Engineering"].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-base leading-snug">
                    {skill}
                  </span>
                ))}
                <span className="px-4 py-2 rounded-full border border-dashed border-white/20 text-zinc-600 text-sm">+</span>
              </div>
            </div>

          </div>

          <div className="mt-14 pt-10 border-t border-white/10">
            <p className="type-label !text-cyan-400 mb-6">Tools & Technologien</p>
            <div className="flex flex-wrap gap-3">
              {["ChatGPT", "Claude", "Gemini", "Microsoft Copilot", "Langdock", "Veritas One", "n8n", "Lovable", "DeepL"].map(tool => (
                <span key={tool} className="px-4 py-2 rounded-full bg-cyan-400/15 text-cyan-400 text-sm uppercase tracking-[0.12em]">
                  {tool}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full border border-dashed border-cyan-400/25 text-cyan-400/30 text-xs uppercase tracking-[0.12em]">+</span>
            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-4 md:px-6 py-16 md:py-20 border-t border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
            Werdegang
          </div>

          <h2 className="type-h1">
            Was meine Arbeit geprägt hat
          </h2>

          <div className="mt-10 md:mt-12 max-w-5xl space-y-8 md:space-y-12 border-l border-cyan-400/30 pl-6 md:pl-10">

            {blok.timeline_items?.map((item: any) => (
              <div key={item._uid} className="relative">

                <div className="absolute -left-[31px] md:-left-[49px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-400"></div>

                <h3 className="type-h3">
                  {item.title}
                </h3>

                <p className="type-body mt-4">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Page Navigation */}
<section className="px-4 md:px-6 py-12 md:py-20 border-t border-white/10">
  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

      {/* LEFT */}

      <div className="max-w-4xl">

        <h3 className="type-h2 max-w-[12ch] md:max-w-none mb-4">
          Bereit für das erste Gespräch?
        </h3>

        <p className="type-body max-w-[36ch] md:max-w-2xl">
          Sie suchen jemanden, der digitale Transformation operativ umsetzt. Ich tue das seit Jahren. Lassen Sie uns sprechen.
        </p>

      </div>

      {/* RIGHT */}

      <div className="flex flex-col items-start lg:items-end gap-8">

        <Link
          href="/contact"
          className="inline-flex btn-primary"
        >
          Gespräch vereinbaren
        </Link>

        <Link
          href="#page-top"
          className="btn-ghost"
        >
          ↑ Nach oben
        </Link>

      </div>

    </div>

  </div>

</section>
    </main>
  )
}