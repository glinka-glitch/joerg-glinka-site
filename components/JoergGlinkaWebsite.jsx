import Image from "next/image"
import { renderRichText } from "@storyblok/react"
import FadeIn from './animations/FadeIn'
import Link from "next/link";
import { Menu } from 'lucide-react'

export default function JoergGlinkaWebsite({ blok }) {
  const methodologyItems = blok?.methodology_items || []
  const portfolioItems = blok?.portfolio_items || []

  return (
<div
  className="relative bg-black text-white min-h-[100dvh] font-sans overflow-x-hidden"
>
  <div id="page-top" />
    <div className="absolute -z-10 top-[-120px] left-[-120px] w-[320px] h-[320px] bg-fuchsia-600/15 blur-[20px] rounded-full"></div>

<div className="absolute -z-10 top-[25%] right-[-120px] w-[380px] h-[380px] bg-yellow-400/10 blur-[20px] rounded-full"></div>

<div className="absolute -z-10 bottom-[-120px] left-[20%] w-[280px] h-[280px] bg-fuchsia-500/10 blur-[20px] rounded-full"></div>
      {/* Navigation */}

      {/* Hero */}
      <section className="relative px-4 md:px-6 pt-6 md:pt-16 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

  <div className="relative z-10 order-2 lg:order-1">
  <div className="absolute -inset-4 border-4 border-fuchsia-600 rotate-3 rounded-3xl"></div>

<Image
  src={blok?.hero_image?.filename}
  alt="Jörg Glinka"
  width={700}
  height={700}
  priority
  className="relative rounded-3xl object-cover w-full h-auto"
/>

  <div className="relative z-10 order-1 lg:order-2">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
              {blok?.hero_badge ||
                'KI-gestützte Commerce-Transformation'}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-black tracking-[-0.05em] uppercase">
              {blok?.hero_title_line_1 || 'Digitales'}
              <br />
              {blok?.hero_title_line_2 || 'Wachstum'}
              <br />
              {blok?.hero_title_line_3 || 'neu denken'}
            </h2>

            <p className="mt-8 text-lg md:text-xl text-zinc-300 leading-relaxed font-normal max-w-2xl">
              {blok?.hero_text ||
                'Ich unterstütze Unternehmen dabei, durch KI-gestützte Marketing-Systeme, moderne E-Commerce-Strategien und digitale Transformation nachhaltig zu wachsen.'}
            </p>

            {/* Stats */}
            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10">
                <div className="text-xl md:text-2xl text-white-500 whitespace-nowrap font-black leading-none">
                  {blok?.stat_1_value || '20+'}
                </div>

                <div className="text-sm text-zinc-400 uppercase tracking-wide mt-2">
                  {blok?.stat_1_label || 'Jahre Erfahrung'}
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10">
                <div className="text-xl md:text-2xl text-white-500 whitespace-nowrap font-black leading-none">
                  {blok?.stat_2_value || '8-Figure'}
                </div>

                <div className="text-sm text-zinc-400 uppercase tracking-wide mt-2">
                  {blok?.stat_2_label || 'Wachstumsimpact'}
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-3xl border border-white/10">
                <div className="text-xl md:text-2xl text-white-500 whitespace-nowrap font-black leading-none">
                  {blok?.stat_3_value || 'AI'}
                </div>

                <div className="text-sm text-zinc-400 uppercase tracking-wide mt-2">
                  {blok?.stat_3_label || 'Transformation'}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
<section className="relative px-6 pt-10 pb-16">
  <div className="max-w-7xl mx-auto">
      <div className="flex items-end justify-between gap-10 flex-wrap mb-20">
        <div>
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
            Services
          </div>

<h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-[-0.05em]">
  {blok?.services_headline || "Leistungen & Expertise"}
</h2>
        </div>

<p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl font-semibold">
  {blok?.services_text ||
    "KI-gestützte Wachstumsstrategien, Commerce-Transformation und moderne digitale Systeme für nachhaltige Skalierung."}
</p>
      </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blok?.services?.map((service) => (
        <FadeIn key={service._uid}>
          <div className="editorial-card bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-10 h-full">
            <div className="inline-block bg-fuchsia-600 text-white px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
              {service.tag}
            </div>

            <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight break-words">
              <span className="whitespace-pre-line">
  {service.title}
</span>
            </h3>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
  </section>
      </section>
      {/* EXPERIENCE */}
{blok?.experience_headline && (
 <section className="px-4 md:px-6 pt-0 pb-20 border-t border-white/10 -mt-16">

    <div className="max-w-7xl mx-auto">

      <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
        Erfahrung
      </div>

      <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.05em] max-w-5xl">
        {blok.experience_headline}
      </h2>

      {blok.experience_text && (
  <div className="mt-8 text-zinc-300 text-lg leading-relaxed max-w-4xl">
  <p>
    Von internationalem E-Commerce über Omnichannel-Handel bis hin zu digitaler
    Transformation im Mittelstand: In den vergangenen Jahren habe ich Unternehmen
    unterschiedlichster Größenordnungen beim Aufbau, der Skalierung und
    Weiterentwicklung digitaler Geschäftsmodelle begleitet.
  </p>

  <p className="mt-6">
    Dazu zählen Marken, Händler und Organisationen aus den Bereichen Consumer
    Goods, Outdoor, Spielwaren, Fahrrad, Home & Living, B2B und Non-Profit.
  </p>
</div>
)}
<h3 className="text-sm uppercase tracking-[0.25em] text-zinc-500 mb-8">
  Ausgewählte Stationen & Projekte
</h3>
    {blok.experience_companies && (
      

  <div className="mt-12 mb-20 grid md:grid-cols-3 lg:grid-cols-4 gap-4">

    {[
      "Trusted Shops",
      "Lautsprecher Teufel",
      "Fritz Berger",
      "Fahrrad XXL",
      "Bike Discount",
      "VBS Hobby Service",
      "DW Shop",
      "Close Up",
      "PIKO Spielwaren",
      "Streetbuzz",
      "CJD",
      "SCHELL"
    ].map((company, index) => (

      <div
        key={index}
        className="border border-white/5 bg-zinc-950 rounded-xl px-6 py-5 text-center text-zinc-300 hover:border-fuchsia-500 transition-all duration-300"
      >
        {company}
      </div>

    ))}

  </div>

)}  


    </div>

  </section>
)}
      {/* Testimonials */}
<section className="relative px-6 pt-0 pb-0 md:pb-2 -mt-20 md:-mt-26">
  <div className="max-w-7xl mx-auto">
    <FadeIn>
      <div className="mb-10 md:mb-20">
        <div className="inline-block bg-fuchsia-600 text-white px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
          Trust & Impact
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase editorial-title">
          Vertrauen durch
          <br />
          Ergebnisse
        </h2>
      </div>
    </FadeIn>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {blok?.testimonials?.map((item) => (
    <FadeIn key={item._uid}>
      <div className="editorial-card bg-zinc-900 border border-white/10 rounded-3xl p-10 h-full hover:border-fuchsia-500/30 transition-all duration-300">

        <div className="mb-6">
          <span className="text-fuchsia-400 text-xs font-black uppercase tracking-[0.25em]">
            {item.Category}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-6">
          {item.Headline}
        </h3>

        <p className="text-zinc-300 text-lg leading-relaxed">
          {item.Text}
        </p>

      </div>
    </FadeIn>
  ))}
</div>
  </div>
</section>
{/* Page Navigation */}
<section className="px-6 py-6 md:py-24">

  <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 md:pt-16 relative z-50">

    <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">
      Lernen Sie die Person hinter den Ergebnissen kennen
    </h3>

    <p className="text-zinc-400 max-w-2xl mb-10">
      Erfahren Sie mehr über meinen Werdegang, meine Erfahrungen und die Prinzipien,
      die erfolgreiche digitale Transformation und nachhaltiges Wachstum ermöglichen.
    </p>

    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

      <Link
        href="/about"
        className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 font-black uppercase tracking-wide rounded-full hover:scale-105 transition-all duration-300"
      >
        Erfahren Sie mehr über mich
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
    </div>
  )
}