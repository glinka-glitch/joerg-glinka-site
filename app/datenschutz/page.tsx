import { renderRichText } from "@storyblok/react"

async function getPrivacyData() {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/datenschutz?version=published&token=${process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN}`,
    {
      next: { revalidate: 60 },
    }
  )

  const data = await res.json()

  return data.story?.content || {}
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Jörg Glinka",

  description:
    "Informationen zur Verarbeitung personenbezogener Daten und zu Ihren Datenschutzrechten auf glinka.tech.",

  robots: {
    index: false,
    follow: true,
  },

  alternates: {
    canonical: "https://www.glinka.tech/datenschutz",
  },
};
export default async function DatenschutzPage() {
  const blok = await getPrivacyData()

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-400/15 blur-[90px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      {/* HERO */}
      <section className="relative isolate px-4 md:px-6 pt-6 md:pt-16 pb-16 md:pb-24 overflow-hidden">

        {/* Background Typography */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-0 text-[22vw] md:text-[18vw] leading-none font-black text-white/[0.03] uppercase tracking-[-0.08em] whitespace-nowrap">
            Privacy
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
            DSGVO
          </div>

          <h1 className="type-h1 max-w-5xl">
            Datenschutz
          </h1>

          <div className="mt-6 md:mt-10 w-24 md:w-32 h-[4px] bg-cyan-400 rounded-full"></div>

          <p className="type-lead mt-6 md:mt-12 max-w-4xl">
            Informationen zur Verarbeitung personenbezogener Daten auf dieser Website gemäß DSGVO.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="relative px-4 md:px-6 pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-6xl">

            <div className="space-y-12 md:space-y-20">

              {blok.sections?.length ? (
                blok.sections.map((section: any) => (
                  <section
                    key={section._uid}
                    className="border-b border-white/10 pb-10 md:pb-16"
                  >

                    <h2 className="type-h2 max-w-5xl">
                      {section.headline}
                    </h2>

                    <div
                      className="
                        mt-6 md:mt-10
  max-w-5xl
  prose
  prose-invert
  prose-base md:prose-lg
                        prose-p:text-zinc-300
                        prose-headings:text-white
                        prose-strong:text-white
                        prose-li:text-zinc-300
                        prose-a:text-cyan-400
                        prose-a:no-underline
                        prose-a:hover:text-cyan-300
                        prose-ul:my-6
                        prose-ol:my-6
                        prose-p:leading-8
                        max-w-none
                      "
                      dangerouslySetInnerHTML={{
                        __html: renderRichText(section.content) || "",
                      }}
                    />

                  </section>
                ))
              ) : (
                <div className="text-zinc-400">
                  Keine Datenschutz-Inhalte vorhanden.
                </div>
              )}

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}