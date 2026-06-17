import Image from "next/image"
import FadeIn from './animations/FadeIn'
import Link from "next/link";

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
    <div className="absolute -z-10 top-[-120px] left-[-120px] w-[320px] h-[320px] bg-fuchsia-600/15 blur-[20px] rounded-full"></div>

<div className="absolute -z-10 top-[25%] right-[-120px] w-[380px] h-[380px] bg-yellow-400/10 blur-[20px] rounded-full"></div>

<div className="absolute -z-10 bottom-[-120px] left-[20%] w-[280px] h-[280px] bg-fuchsia-500/10 blur-[20px] rounded-full"></div>
      {/* Navigation */}
{/* HERO */}
<section
  className="relative isolate px-4 md:px-6 pt-4 md:pt-8 pb-6 md:pb-10 overflow-hidden"
>

  <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-start">

    {/* LEFT */}

    <div className="order-2 lg:order-1">

      <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
        {blok?.hero_badge || "KI-gestützte Commerce-Transformation"}
      </div>

      <h1
  className="
  text-[2.9rem]
  sm:text-6xl
  md:text-7xl
  lg:text-8xl
  font-black
  uppercase
  leading-[0.88]
  tracking-[-0.045em]
  whitespace-pre-line
  "
>
        {`${blok?.hero_title_line_1 || "Digitales"}\n${blok?.hero_title_line_2 || "Wachstum"}\n${blok?.hero_title_line_3 || "neu denken"}`}
      </h1>

      <div className="mt-8 w-24 h-[4px] bg-fuchsia-600 rounded-full"></div>

      <p className="mt-8 max-w-2xl text-lg md:text-xl text-zinc-300 leading-8">
        {blok?.hero_text ||
          "Ich unterstütze Unternehmen dabei, durch KI-gestützte Marketing-Systeme, moderne E-Commerce-Strategien und digitale Transformation nachhaltig zu wachsen."}
      </p>
      {blok.hero_subtext && (
 <p className="mt-5 text-base text-zinc-500 leading-7 max-w-2xl">
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

      <div className="text-zinc-500 uppercase tracking-[0.12em] text-sm mt-2">
        {blok.stat_1_label}
      </div>
    </div>

    <div className="hidden lg:block w-px h-12 bg-white/10" />

    {/* ITEM 2 */}
    <div>
      <div className="text-4xl md:text-5xl font-black text-white">
        {blok.stat_2_value}
      </div>

      <div className="text-zinc-500 uppercase tracking-[0.12em] text-sm mt-2">
        {blok.stat_2_label}
      </div>
    </div>

    <div className="hidden lg:block w-px h-12 bg-white/10" />

    {/* ITEM 3 */}
    <div>
      <div className="text-4xl md:text-5xl font-black text-white">
        {blok.stat_3_value}
      </div>

      <div className="text-zinc-500 uppercase tracking-[0.12em] text-sm mt-2">
        {blok.stat_3_label}
      </div>
    </div>

  </div>
  </div>
 </div>
    {/* RIGHT */}

    <div className="relative w-full max-w-[720px] mx-auto order-1 lg:order-2">

      <div className="absolute -inset-4 border-4 border-fuchsia-600 rounded-3xl"></div>

      {blok?.hero_image?.filename && (
        <div className="relative z-10 overflow-hidden rounded-3xl">

          <Image
            src={blok.hero_image.filename}
            alt="Jörg Glinka"
            width={800}
            height={800}
            priority
            className="w-full h-auto object-cover shadow-[0_20px_60px_rgba(217,70,239,0.25)]"
          />

        </div>
      )}

    </div>

  </div>

</section>

{/* TRUST BUILDING */}
<section className="px-4 md:px-6 pt-10 pb-16">
  <div className="max-w-7xl mx-auto">

    <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
      Erfahrung
    </div>

   <h2
  className="
  text-[1.8rem]
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  font-black
  uppercase
  leading-[0.92]
  tracking-[-0.04em]
  break-words
  max-w-full
  md:max-w-6xl
  "
>
      Transformation, die Wirkung erzeugt
    </h2>

    <p className="
mt-8
text-zinc-300
text-lg
md:text-xl
leading-8
max-w-5xl
">
      Von E-Commerce über Plattformstrategien bis zu KI-gestützter Transformation:
      Ich begleite Unternehmen dabei, Technologie nicht nur einzuführen, sondern in nachhaltigen Geschäftswert zu übersetzen.
      25+ Jahre Erfahrung sind dabei kein Selbstzweck, sondern die Grundlage für bessere Entscheidungen in komplexen Veränderungssituationen.

    </p>

  </div>
</section>

{/* ICP SECTION */}

<section className="relative px-4 md:px-6 py-14 md:py-20">
  <div className="max-w-7xl mx-auto">

    {/* Eyebrow */}
    <div className="inline-block bg-fuchsia-600 text-white text-xs md:text-sm font-bold uppercase tracking-[0.15em] px-4 py-2 mb-6">
      {blok.icp_eyebrow}
    </div>

    {/* Headline */}
    <h2 className="
text-4xl
sm:text-5xl
md:text-7xl font-black uppercase leading-[0.92] tracking-[-0.04em] max-w-6xl">
      {blok.icp_headline}
    </h2>

    {/* Intro */}
    <p className="mt-8 text-zinc-300 text-lg md:text-xl leading-relaxed max-w-5xl
leading-8">
      {blok.icp_text}
    </p>
  </div>
</section>

{/* CHALLENGES */}

<section className="px-4 md:px-6 py-14 md:py-20 border-t border-white/10">

  <div className="max-w-7xl mx-auto">

    <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
      {blok.challenge_badge}
    </div>

    <h2
  className="
  text-[1.8rem]
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  font-black
  uppercase
  leading-[0.92]
  tracking-[-0.04em]
  break-words
  max-w-full
  md:max-w-6xl
  "
>
  {blok.challenge_headline}
</h2>

    <p
      className="
      mt-8
      text-zinc-300
      text-lg
      md:text-xl
      leading-8
      max-w-5xl
      "
    >
      {blok.challenge_intro}
    </p>

    <div className="mt-14 grid md:grid-cols-2 gap-6">

      {blok.challenge_items?.map((item) => (

        <div
          key={item._uid}
          className="
          border
          border-white/10
          rounded-3xl
          p-8
          bg-zinc-900/50
          "
        >

          <div className="flex items-start gap-4">

            <div
              className="
              w-3
              h-3
              rounded-full
              bg-fuchsia-600
              mt-3
              flex-shrink-0
              "
            />

            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              {item.text}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* Services */}
<section className="relative px-4 md:px-6 py-10 md:py-16">
  <div className="max-w-7xl mx-auto">
   <div className="mb-10 md:mb-12">

  <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
    Services
  </div>

 <h2
  className="
  text-[1.8rem]
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  font-black
  uppercase
  leading-[0.92]
  tracking-[-0.04em]
  break-words
  max-w-full
  md:max-w-6xl
  "
>
    {blok?.services_headline || "Leistungen & Expertise"}
  </h2>

  <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-5xl
leading-8 font-semibold">    {blok?.services_text ||
      "KI-gestützte Wachstumsstrategien, Commerce-Transformation und moderne digitale Systeme für nachhaltige Skalierung."}
  </p>

</div>   


    <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {blok?.services?.map((service) => (
        <FadeIn key={service._uid}>
          <div className="editorial-card bg-zinc-900 border border-white/10 rounded-3xl p-12 md:p-14 h-full">            <div
  className="
  inline-block
  bg-fuchsia-600
  text-white
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

            <h3 className="text-2xl md:text-3xl font-black uppercase leading-[0.95] break-words">
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

      {/* Testimonials */}
<section className="relative px-4 md:px-6 py-10 md:py-16">
  <div className="max-w-7xl mx-auto">
    <FadeIn>
      <div className="mb-6 md:mb-8">
        <div className="
inline-block
bg-fuchsia-600
text-white
px-4
py-2
text-xs
font-black
uppercase
tracking-[0.18em]
rotate-[-2deg]
mb-8
">
          Trust & Impact
        </div>

        <h2 className="
  text-[2.2rem]
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  font-black
  uppercase
  leading-[0.9]
  tracking-[-0.03em]
  max-w-none
">
  Warum Kunden mit mir arbeiten
</h2>
      </div>
    </FadeIn>
  <div className="max-w-5xl space-y-10">
  {blok?.testimonials?.map((item) => (
    <FadeIn key={item._uid}>
      <div className="border-t border-white/10 pt-8">

        <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.95] mb-4">
          {item.Headline}
        </h3>

        <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl">
  {item.Text}
</p>

      </div>
    </FadeIn>
  ))}
</div>
  </div>
</section>
{/* Page Navigation */}
<section className="px-4 md:px-6 py-8 md:py-16">

  <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 md:pt-8 relative z-50">

    <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.95] mb-4">
      Lernen Sie die Person hinter den Ergebnissen kennen
    </h3>

    <p className="text-zinc-400 max-w-[36ch] md:max-w-2xl mb-8 leading-relaxed">
      Erfahren Sie mehr über meinen Werdegang, meine Erfahrungen und die Prinzipien,
      die erfolgreiche digitale Transformation und nachhaltiges Wachstum ermöglichen.
    </p>

    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

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

</main>
  )
}