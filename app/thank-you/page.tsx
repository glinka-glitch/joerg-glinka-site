import Link from "next/link"

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden px-6 pt-20 pb-32 flex items-start">
      {/* Glow Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-400/15 blur-[90px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-yellow-400/10 blur-[100px] rounded-full"></div>

      <div className="max-w-3xl mx-auto relative text-center">
        <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-8">
          Nachricht erfolgreich gesendet
        </div>

        <h1 className="type-h1">
          Vielen Dank
        </h1>

        <p className="type-lead mt-10">
          Vielen Dank für Ihre Nachricht.  
          Ich werde mich schnellstmöglich bei Ihnen melden.
        </p>

        <div className="mt-14">
          <Link
            href="/"
            className="inline-flex btn-secondary"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  )
}