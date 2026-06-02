import Link from "next/link"

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden px-6 pt-20 pb-32 flex items-start">
      {/* Glow Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-fuchsia-600/20 blur-[90px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      <div className="max-w-3xl mx-auto relative text-center">
        <div className="inline-block bg-yellow-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
          Nachricht erfolgreich gesendet
        </div>

        <h1 className="text-5xl md:text-7xl font-black uppercase editorial-title leading-[0.9]">
          Vielen Dank
        </h1>

        <p className="mt-10 text-zinc-300 text-xl leading-relaxed">
          Vielen Dank für Ihre Nachricht.  
          Ich werde mich schnellstmöglich bei Ihnen melden.
        </p>

        <div className="mt-14">
          <Link
            href="/"
            className="bg-fuchsia-600 hover:bg-fuchsia-500 transition-all duration-300 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide shadow-2xl hover:scale-105 hover:shadow-[0_20px_60px_rgba(217,70,239,0.45)]"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  )
}