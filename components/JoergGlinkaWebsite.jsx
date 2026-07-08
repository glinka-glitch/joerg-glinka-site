import Image from "next/image"
import FadeIn from './animations/FadeIn'
import Link from "next/link"
import { renderRichText } from "@storyblok/react"
import FAQSection from "./FAQSection"

export default function JoergGlinkaWebsite({ blok }) {
  const methodologyItems = blok?.methodology_items || []
  const portfolioItems = blok?.portfolio_items || []

  return (
<main
  className="relative min-h-screen bg-black text-white overflow-hidden"
>
<div
  id="page-top"
  className="scroll-mt-24 md:scroll-mt-28"
/>
    <div className="absolute pointer-events-none top-[-200px] left-[-200px] w-[800px] h-[800px] bg-cyan-400/30 blur-[130px] rounded-full"></div>

<div className="absolute pointer-events-none top-[20%] right-[-200px] w-[800px] h-[800px] bg-yellow-400/20 blur-[140px] rounded-full"></div>

<div className="absolute pointer-events-none bottom-[-200px] left-[20%] w-[700px] h-[700px] bg-cyan-400/25 blur-[130px] rounded-full"></div>
      {/* Navigation */}
{/* HERO */}
<section
  className="relative isolate px-4 md:px-6 pt-4 md:pt-8 pb-6 md:pb-10 overflow-hidden"
>

  <div
  className="
  relative z-10
  max-w-7xl
  mx-auto
  grid
  lg:grid-cols-[1.15fr_0.85fr]
  gap-12
  xl:gap-20
  items-start
  "
>

    {/* LEFT */}

    <div className="order-2 lg:order-1">

      <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
        {blok?.hero_badge || "KI-gestützte Commerce-Transformation"}
      </div>

     <h1 className="type-display max-w-[620px] whitespace-pre-line hyphens-auto break-words" lang="de">
        {`${blok?.hero_title_line_1 || "Digitale"}\n${blok?.hero_title_line_2 || "Transformation"}\n${blok?.hero_title_line_3 || "& KI"}`}
      </h1>

      <div className="mt-8 w-24 h-[4px] bg-cyan-400 rounded-full"></div>

      <p className="type-lead mt-8 max-w-2xl">
        {blok?.hero_text ||
          "Ich unterstütze Unternehmen dabei, durch KI-gestützte Marketing-Systeme, moderne E-Commerce-Strategien und digitale Transformation nachhaltig zu wachsen."}
      </p>
      {blok.hero_subtext && (
 <p className="mt-5 text-base text-zinc-400 leading-7 max-w-2xl">
    {blok.hero_subtext}
  </p>
)}

     {/* EXECUTIVE TRUST BAR */}

<div className="mt-12 md:mt-14">

  <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-10 lg:gap-16">

    {/* ITEM 1 */}
    <div>
      <div className="text-4xl md:text-5xl font-black text-white">
        {blok.stat_1_value}
      </div>

      <div className="type-label !text-cyan-400 mt-2">
        {blok.stat_1_label}
      </div>
    </div>

    <div className="hidden lg:block w-px h-12 bg-cyan-400" />

    {/* ITEM 2 */}
    <div>
      <div className="text-4xl md:text-5xl font-black text-white">
        {blok.stat_2_value}
      </div>

      <div className="type-label !text-cyan-400 mt-2">
        {blok.stat_2_label}
      </div>
    </div>

    <div className="hidden lg:block w-px h-12 bg-cyan-400" />

    {/* ITEM 3 */}
    <div>
      <div className="text-4xl md:text-5xl font-black text-white">
        {blok.stat_3_value}
      </div>

      <div className="type-label !text-cyan-400 mt-2">
        {blok.stat_3_label}
      </div>
    </div>

  </div>
  </div>
 </div>
    {/* RIGHT */}

    <div className="relative w-full max-w-[620px] xl:max-w-[680px] mx-auto order-1 lg:order-2">

      <div className="absolute -inset-4 border-4 border-cyan-400 rounded-3xl"></div>

      {blok?.hero_image?.filename && (
        <div className="relative z-10 overflow-hidden rounded-3xl aspect-[4/5]">

          <Image
            src={blok.hero_image.filename}
            alt="Jörg Glinka"
            width={800}
            height={1000}
            priority
            className="w-full h-full object-cover shadow-[0_20px_60px_rgba(34,211,238,0.2)]"
          />

        </div>
      )}

    </div>

  </div>

</section>

{/* ICP SECTION */}

<section className="relative px-4 md:px-6 py-14 md:py-20">
  <div className="max-w-7xl mx-auto">

    {/* Eyebrow */}
    <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
      {blok.icp_eyebrow}
    </div>

    {/* Headline */}
    <h2 className="type-h1">
      {blok.icp_headline}
    </h2>

    {/* Intro */}
    <div
      className="type-lead mt-8 rich-text"
      dangerouslySetInnerHTML={{ __html: renderRichText(blok.icp_text) || "" }}
    />

    {/* Impact Cards */}
    <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {[
        "70 % weniger Bearbeitungszeit durch KI-gestützte Produktdatenpflege.",
        "Automatisierte Produktübersetzungen in alle von DeepL unterstützten Zielsprachen.",
        "+60 % Umsatzwachstum nach Einführung der etailer Suite durch integrierte End-to-End-Prozesse.",
        "+200 % organische Sichtbarkeit durch konsequente Technical-SEO-Optimierung.",
        "Nahtlose Systemintegration durch flexible API- und Schnittstellenanbindungen für Aufträge, Bestände, Preise sowie Kunden- und Produktdaten.",
        "50 % niedrigere Kosten für den Betrieb der integrierten E-Commerce-Plattform gegenüber Satellitensystemen ohne Integration.",
      ].map((text, i) => (
        <div
          key={i}
          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 px-6 py-5"
        >
          <span className="mt-1 shrink-0 text-cyan-400 text-lg font-black leading-none">→</span>
          <p className="text-zinc-300 text-base md:text-lg leading-snug">{text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ARCHITECTURE GRAPHIC */}
{blok.architecture_image?.filename && (
  <section className="px-4 md:px-6 py-14 md:py-20 border-t border-white/10">
    <div className="max-w-7xl mx-auto">

      {blok.architecture_badge && (
        <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
          {blok.architecture_badge}
        </div>
      )}

      {blok.architecture_headline && (
        <h2 className="type-h1 mb-10">
          {blok.architecture_headline}
        </h2>
      )}

      <div className="overflow-hidden rounded-[2rem] border border-white/10">
        <Image
          src={blok.architecture_image.filename}
          alt="KI-Management Architektur – Sieben Ebenen"
          width={1720}
          height={1120}
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={85}
          className="w-full h-auto"
        />
      </div>

    </div>
  </section>
)}

{/* CHALLENGES */}

<section className="px-4 md:px-6 py-14 md:py-20 border-t border-white/10">

  <div className="max-w-7xl mx-auto">

    <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
      {blok.challenge_badge}
    </div>

    <h2 className="type-h1 break-words max-w-full md:max-w-6xl">
  {blok.challenge_headline}
</h2>

    <p className="type-lead mt-8 max-w-5xl">
      {blok.challenge_intro}
    </p>

    <div className="mt-14 flex flex-col">

      {blok.challenge_items?.map((item, index) => (

        <div
          key={item._uid}
          className="grid grid-cols-[48px_1fr] md:grid-cols-[72px_1fr] gap-6 md:gap-10 py-7 md:py-9 border-b border-white/10"
        >

          <div className="text-3xl md:text-5xl font-black text-cyan-400 leading-none tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </div>

          <p className="text-xl md:text-2xl font-bold leading-relaxed text-white self-center">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* Services */}
<section className="relative px-4 md:px-6 py-10 md:py-16">
  <div className="max-w-7xl mx-auto">
   <div className="mb-10 md:mb-12">

  <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
    Kompetenzen
  </div>

 <h2 className="type-h1 break-words max-w-full md:max-w-6xl">
    {blok?.services_headline || "Leistungen & Expertise"}
  </h2>

  <p className="type-lead mt-6 max-w-5xl font-semibold">    {blok?.services_text ||
      "KI-gestützte Wachstumsstrategien, Commerce-Transformation und moderne digitale Systeme für nachhaltige Skalierung."}
  </p>

</div>   


    <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {blok?.services?.map((service) => (
        <FadeIn key={service._uid}>
          <div className="editorial-card bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-10 h-full">            <div
  className="
  inline-block
  bg-cyan-400
  text-black
  px-4
  py-2
  text-xs
  font-black
  uppercase
  tracking-[0.18em]
  rotate-[-2deg]
  mb-8
  "
>
  {service.tag}
</div>

            <h3 className="type-h3 break-words">
              <span className="whitespace-pre-line">
  {service.title}
</span>
            </h3>

            <p className="mt-6 type-body">
              {service.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
  </section>

      {/* Testimonials — entfernt, bis echte Referenzen vorhanden */}

<FAQSection />

{/* Page Navigation */}
<section className="px-4 md:px-6 py-8 md:py-16">

  <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 md:pt-8 relative z-50">

    <h3 className="type-h2 mb-4">
      Mein Werdegang & Motivation
    </h3>

    <p className="type-body max-w-[36ch] md:max-w-2xl mb-8">
      25 Jahre Erfahrung in digitaler Transformation. Was mich antreibt und warum ich jetzt eine Festanstellung suche.
    </p>

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

      <Link
        href="/about"
        className="inline-flex btn-primary"
      >
        Mein Werdegang
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