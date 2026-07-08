const faqs = [
  {
    question: "Was macht ein KI-Manager?",
    answer:
      "Ein KI-Manager identifiziert KI-Potenziale im Unternehmen, entwickelt KI-Strategien und verantwortet deren operative Umsetzung. Dazu gehören KI-Adoption, Prozessautomatisierung, Change Management und die Messung von KI-Investitionen in Geschäftswert.",
  },
  {
    question: "Was ist KI-Management?",
    answer:
      "KI-Management umfasst die strategische Planung, Implementierung und Steuerung von KI-Initiativen in Unternehmen. Es verbindet technisches Verständnis mit operativer Umsetzungskompetenz und Change Management.",
  },
  {
    question: "Welche Erfahrung bringt Jörg Glinka als KI-Manager mit?",
    answer:
      "Jörg Glinka ist KI-Manager mit 25 Jahren Erfahrung in digitaler Transformation, E-Commerce und KI-Integration. Er hat KI-Prozesse aufgebaut, Automatisierungsprojekte verantwortet und KI-Investitionen in messbaren Geschäftswert übersetzt.",
  },
  {
    question: "Ist ein KI-Beauftragter dasselbe wie ein KI-Manager?",
    answer:
      "Die Begriffe werden im deutschsprachigen Raum weitgehend synonym verwendet. Ein KI-Beauftragter (englisch: AI Manager) übernimmt dieselbe Rolle wie ein KI-Manager: Verantwortung für KI-Strategie, KI-Adoption und die operative Umsetzung von KI-Projekten im Unternehmen.",
  },
  {
    question: "Ist Jörg Glinka als KI-Manager zertifiziert?",
    answer:
      "Ja. Jörg Glinka ist zertifizierter KI-Manager (400 Stunden) der LearnWise Academy, in Kooperation mit dem IBB und TÜV.",
  },
]

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function FAQSection() {
  return (
    <section className="px-4 md:px-6 py-14 md:py-20 border-t border-white/10">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="max-w-7xl mx-auto">

        <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
          FAQ
        </div>

        <h2 className="type-h1 break-words max-w-full md:max-w-6xl">
          Häufig gestellte Fragen
        </h2>

        <div className="mt-12 md:mt-16 flex flex-col">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="py-7 md:py-9 border-b border-white/10"
            >
              <h3 className="type-h3">
                {faq.question}
              </h3>

              <p className="mt-4 type-body max-w-4xl">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
