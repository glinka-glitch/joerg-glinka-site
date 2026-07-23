const faqs = [
  {
    question: "Sucht Jörg Glinka eine Fachposition oder eine Führungsposition?",
    answer:
      "Eine Führungsposition. Ich war zwölf Jahre Mitgründer und Geschäftsführer eines Unternehmens, mit voller Verantwortung für Umsatz und Ergebnis. Jetzt suche ich eine Rolle, in der ich KI-Transformation auf genau dieser Ebene verantworte, nicht als operative Einzelaufgabe.",
  },
  {
    question: "Was macht ein KI-Manager?",
    answer:
      "Ein KI-Manager identifiziert KI-Potenziale im Unternehmen, entwickelt eine KI-Strategie und verantwortet deren Umsetzung: Prozessautomatisierung, Change Management und die Frage, ob sich die Investition am Ende auszahlt.",
  },
  {
    question: "Was ist KI-Management?",
    answer:
      "KI-Management umfasst die Planung, Einführung und Steuerung von KI-Projekten in Unternehmen, von der ersten Idee bis zum laufenden Betrieb, inklusive Change Management.",
  },
  {
    question: "Welche Erfahrung bringt Jörg Glinka als KI-Manager mit?",
    answer:
      "Ich war zwölf Jahre Mitgründer und Geschäftsführer der etailer Solutions GmbH und habe die Plattform so skaliert, dass Händler heute über 500 Millionen Euro Jahresumsatz darüber abwickeln, unter anderem mit KI-gestützter Automatisierung in Produktdaten und Übersetzung. Nach dem Verkauf meiner Anteile 2025 habe ich mich gezielt in KI-Management weitergebildet und suche jetzt eine Führungsposition in diesem Bereich.",
  },
  {
    question: "Ist ein KI-Beauftragter dasselbe wie ein KI-Manager?",
    answer:
      "Im deutschsprachigen Raum werden die Begriffe weitgehend synonym verwendet. Ein KI-Beauftragter, englisch AI Manager, trägt dieselbe Verantwortung wie ein KI-Manager: KI-Strategie, KI-Adoption und die operative Umsetzung von KI-Projekten.",
  },
  {
    question: "Ist Jörg Glinka als KI-Manager zertifiziert?",
    answer:
      "Ja. Ich bin zertifizierter KI-Manager (400 Stunden) der LearnWise Academy, in Kooperation mit dem IBB und TÜV.",
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
