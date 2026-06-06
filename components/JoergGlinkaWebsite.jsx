import Image from "next/image"
import { renderRichText } from "@storyblok/react"
import FadeIn from './animations/FadeIn'
import Link from "next/link";
import { Menu } from 'lucide-react'

export default function JoergGlinkaWebsite({ blok }) {
  const methodologyItems = blok?.methodology_items || []
  const portfolioItems = blok?.portfolio_items || []
  const companies = [
  {
    name: "Trusted Shops",
    logo: "/logos/trusted-shops.svg",
    url: "https://www.trustedshops.de",
    size: "h-8 md:h-10",
  },
  {
    name: "BNP Paribas",
    logo: "/logos/bnp-paribas.svg",
    url: "https://group.bnpparibas",
    size: "h-8 md:h-10",
  },
  {
    name: "Lautsprecher Teufel",
    logo: "/logos/teufel.svg",
    url: "https://teufel.de",
    size: "h-10 md:h-12",
  },
  {
    name: "Fritz Berger",
    logo: "/logos/fritz-berger.svg",
    url: "https://www.fritz-berger.de",
    size: "h-10 md:h-12",
  },
  {
    name: "Fahrrad XXL",
    logo: "/logos/fahrrad-xxl.svg",
    url: "https://www.fahrrad-xxl.de",
    size: "h-8 md:h-10",
  },
  {
    name: "Bike Discount",
    logo: "/logos/bike-discount.svg",
    url: "https://www.bike-discount.de",
    size: "h-8 md:h-10",
  },
  {
    name: "SCHELL",
    logo: "/logos/schell.svg",
    url: "https://www.schell.eu",
    size: "h-6 md:h-8",
  },
  {
    name: "CJD",
    logo: "/logos/cjd.svg",
    url: "https://www.cjd.de",
    size: "h-7 md:h-8",
  },
]

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

  <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-start">

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
        leading-[0.82]
        tracking-[-0.06em]
        whitespace-pre-line
        "
      >
        {`${blok?.hero_title_line_1 || "Digitales"}\n${blok?.hero_title_line_2 || "Wachstum"}\n${blok?.hero_title_line_3 || "neu denken"}`}
      </h1>

      <div className="mt-8 w-24 h-[4px] bg-fuchsia-600 rounded-full"></div>

      <p className="mt-8 max-w-[32ch] md:max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
        {blok?.hero_text ||
          "Ich unterstütze Unternehmen dabei, durch KI-gestützte Marketing-Systeme, moderne E-Commerce-Strategien und digitale Transformation nachhaltig zu wachsen."}
      </p>
      {blok.hero_subtext && (
  <p className="mt-5 text-sm md:text-base text-zinc-500 leading-relaxed max-w-[42ch]">
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

    <div className="relative w-full max-w-[620px] mx-auto order-1 lg:order-2">

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
       {/* EXPERIENCE */}
{blok?.experience_headline && (
<section className="px-4 md:px-6 pt-8 md:pt-10 pb-14 md:pb-16">

    <div className="max-w-7xl mx-auto">

      <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
        Trusted By
      </div>

      <h2 className="text-[1.9rem] sm:text-[2.2rem] md:text-6xl lg:text-7xl font-black uppercase leading-[0.88] tracking-[-0.03em] break-words">
  {blok.experience_headline}
</h2>
   
    {blok.experience_companies && (
<div className="mt-10">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 items-center">

    {companies.map((company) => (
  <a
    key={company.name}
    href={company.url}
    target="_blank"
    rel="noopener noreferrer"
    title={company.name}
    aria-label={`Website von ${company.name} öffnen`}
    className="
  flex
  items-center
  justify-center
  h-16
  md:h-20
  opacity-90
  hover:opacity-100
  hover:-translate-y-1
  transition-all
  duration-300
"
  >
    <Image
  src={company.logo}
  alt={company.name}
  width={240}
  height={80}
  className={`${company.size} w-auto max-w-full object-contain`}
/>
  </a>
))}

  </div>
  {blok.experience_text && (
  <div className="mt-8 mb-10 text-zinc-300 text-lg leading-relaxed max-w-[40ch] md:max-w-4xl">
  <div className="mt-10 max-w-4xl">
  <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
    Mehr als 25 Jahre Erfahrung in E-Commerce, digitaler Transformation und Wachstum.
  </p>
</div>
</div>
)}
</div>


)}  

{/* ICP SECTION */}

<section className="relative px-4 md:px-6 py-14 md:py-20">
  <div className="max-w-7xl mx-auto">

    {/* Eyebrow */}
    <div className="inline-block bg-fuchsia-600 text-white text-xs md:text-sm font-bold uppercase tracking-[0.15em] px-4 py-2 mb-6">
      {blok.icp_eyebrow}
    </div>

    {/* Headline */}
    <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] max-w-5xl">
      {blok.icp_headline}
    </h2>

    {/* Intro */}
    <p className="mt-8 text-zinc-300 text-lg md:text-xl leading-relaxed max-w-4xl">
      {blok.icp_text}
    </p>
  </div>
</section>

{/* Services */}
<section className="relative px-4 md:px-6 py-10 md:py-16">
  <div className="max-w-7xl mx-auto">
   <div className="mb-10 md:mb-12">

  <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
    Services
  </div>

  <h2 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-[-0.03em]">
    {blok?.services_headline || "Leistungen & Expertise"}
  </h2>

  <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-4xl font-semibold">    {blok?.services_text ||
      "KI-gestützte Wachstumsstrategien, Commerce-Transformation und moderne digitale Systeme für nachhaltige Skalierung."}
  </p>

</div>   


    <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {blok?.services?.map((service) => (
        <FadeIn key={service._uid}>
          <div className="editorial-card bg-zinc-900 border border-white/10 rounded-3xl p-10 md:p-12 h-full">            <div
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
    </div>

  </section>
)}

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