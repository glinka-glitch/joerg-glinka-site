const faqs = [
  {
    question: "Was ist die Expertise von Jörg Glinka?",
    answer:
      "25 Jahre digitale Transformation, 12 Jahre als Mitgründer und CEO der etailer Solutions GmbH. Expertise in KI-Integration, E-Commerce-Skalierung, Change Management und organisationales Wachstum. Ich verstehe KI nicht als isolierte Technologie, sondern als integraler Bestandteil von Geschäftsstrategie.",
  },
  {
    question: "Was hat Jörg Glinka als CEO aufgebaut?",
    answer:
      "Bei etailer Solutions: Eine E-Commerce-Plattform, die heute über 500 Millionen Euro Jahresumsatz abwickelt. Aufgebaut von null. Das umfasst: KI-Integration in Produktdaten und Prozessen, komplexe Systemarchitekturen (ERP, PIM, Payment, Marktplätze), Change Management bei Wachstum und Skalierung von Teams. Verkauf der Anteile 2025.",
  },
  {
    question: "Welche Zertifizierungen hat Jörg Glinka?",
    answer:
      "Zertifizierter KI-Manager (400 Stunden) der LearnWise Academy in Kooperation mit IBB und TÜV. Diese Zertifizierung ergänzt 25 Jahre praktische Erfahrung in digitaler Transformation.",
  },
  {
    question: "Wie verstehen Sie KI-Integration?",
    answer:
      "KI ist erfolgreich, wenn sie sich in Zahlen zeigt, nicht in Präsentationen. Bei etailer habe ich KI eingesetzt, um konkrete Probleme zu lösen: Produktdaten für internationalen Handel ohne dass jede neue Sprache ein eigenes Team brauchte. KI war nie Selbstzweck, sondern Werkzeug für Geschäftsziele.",
  },
  {
    question: "Wo ist Jörg Glinka erreichbar?",
    answer:
      "Kontakt unter glinka.tech/contact. Ich freue mich auf den Austausch über digitale Transformation, KI-Strategien oder Entrepreneurship.",
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
