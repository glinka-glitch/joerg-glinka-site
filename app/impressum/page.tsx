async function getSettings() {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/settings?version=published&token=${process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN}`,
    {
      next: { revalidate: 60 },
    }
  )

  const data = await res.json()

  return data.story?.content || {}
}
export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
}
export default async function ImpressumPage() {
  const settings = await getSettings()

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-fuchsia-600/20 blur-[90px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      {/* HERO */}
      <section className="relative isolate px-4 md:px-6 pt-6 md:pt-16 pb-16 md:pb-24 overflow-hidden">


        {/* Background Typography */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute top-20 left-0 text-[18vw] leading-none font-black text-white/[0.03] uppercase tracking-[-0.08em] whitespace-nowrap">
            Legal
          </div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Badge */}
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
            Rechtliches
          </div>

          {/* Headline */}
          <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black uppercase leading-[0.88] tracking-[-0.06em]">
            Impressum
          </h1>

          {/* Divider */}
          <div className="mt-6 md:mt-6 md:mt-10 w-24 md:w-32 h-[4px] bg-fuchsia-600 rounded-full"></div>

          {/* Intro */}
          <p className="mt-6 md:mt-12 text-zinc-300 text-lg md:text-2xl leading-relaxed max-w-4xl">
            Angaben gemäß § 5 TMG sowie Informationen zur verantwortlichen Stelle dieser Website.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="relative px-4 md:px-6 pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-6xl space-y-12 md:space-y-20">

            {/* COMPANY */}
            <section className="border-b border-white/10 pb-16">

              <h2 className="max-w-5xl text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
                Angaben gemäß § 5 TMG
              </h2>

              <div className="mt-6 md:mt-10 max-w-4xl text-zinc-300 text-base md:text-xl leading-relaxed whitespace-pre-line">
                {settings.company_name}
                {"\n"}
                {settings.address}
              </div>

            </section>

            {/* CONTACT */}
            <section className="border-b border-white/10 pb-16">

              <h2 className="max-w-5xl text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
                Kontakt
              </h2>

              <div className="mt-6 md:mt-10 max-w-4xl space-y-4 text-zinc-300 text-base md:text-xl leading-relaxed">

                <p>{settings.email}</p>

                <p>{settings.phone}</p>

                <p>{settings.website}</p>

              </div>

            </section>

            {/* VAT */}
            {settings.vat_id && (
              <section className="border-b border-white/10 pb-16">

                <h2 className="max-w-5xl text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
                  Umsatzsteuer-ID
                </h2>

                <p className="mt-6 md:mt-10 max-w-4xl text-zinc-300 text-base md:text-xl leading-relaxed">
                  {settings.vat_id}
                </p>

              </section>
            )}

            {/* RESPONSIBLE */}
            <section>

              <h2 className="max-w-5xl text-2xl sm:text-3xl md:text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
                Verantwortlich für den Inhalt
              </h2>

              <p className="mt-6 md:mt-6 md:mt-10 max-w-4xl text-zinc-300 text-base md:text-xl leading-relaxed">
                {settings.company_name}
              </p>

            </section>

          </div>

        </div>

      </section>

    </main>
  )
}