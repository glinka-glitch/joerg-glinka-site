const faqs = [
  {
    question: "Was ist das aktuelle Geschäftsmodell von Jörg Glinka?",
    answer:
      "Nach meinem Exit 2025 als CEO der etailer Solutions GmbH biete ich Strategic Advisory & Consulting an — spezialisiert auf KI-Integration, Digital Transformation und die Skalierung digitaler Plattformen. Ich arbeite mit Unternehmen zusammen, die diese Herausforderungen meistern wollen, und bringe meine 25 Jahre operative Erfahrung und 12 Jahre CEO-Expertise ein.",
  },
  {
    question: "Was macht ein KI-Consultant?",
    answer:
      "Ein KI-Consultant berät Unternehmen bei der Entwicklung und Umsetzung von KI-Strategien. Das umfasst: Identifizierung von KI-Potenzialen, Entwicklung von Use Cases, Change Management bei der Einführung und die Frage, wie KI als Geschäftstreiber wirkt — nicht nur als Technologie.",
  },
  {
    question: "Was ist der Unterschied zwischen Advisory und operative Umsetzung?",
    answer:
      "Advisory bedeutet strategische Beratung und Konzeption — ich arbeite mit deinen Teams zusammen, entwickle Strategien und helfe bei Entscheidungen. Operative Umsetzung ist die tägliche Implementierung. Ich konzentriere mich auf die strategische Seite, basierend auf meinen 25 Jahren operative Erfahrung.",
  },
  {
    question: "Welche Erfahrung bringt Jörg Glinka als Consultant mit?",
    answer:
      "12 Jahre Mitgründer & CEO der etailer Solutions GmbH — ich skalierte die Plattform von null auf 500+ Mio. € Jahresumsatz. Das umfasst: KI-Integration in Produktdaten und Prozessen, Aufbau komplexer Systemarchitekturen (ERP, PIM, Payment, Marktplätze), Change Management, Stakeholder-Führung und profitables Wachstum. Diese Erfahrung ist die Basis meiner Advisory.",
  },
  {
    question: "Ist Jörg Glinka als KI-Manager zertifiziert?",
    answer:
      "Ja. Ich bin zertifizierter KI-Manager (400 Stunden) der LearnWise Academy, in Kooperation mit dem IBB und TÜV. Diese Zertifizierung ergänzt meine 25 Jahre praktische Erfahrung in digitaler Transformation.",
  },
  {
    question: "Welche Unternehmen profitieren am meisten von diesem Consulting?",
    answer:
      "Unternehmen, die KI nicht als isoliertes Tech-Projekt sehen, sondern als integralen Bestandteil ihrer Geschäftstransformation. Besonders E-Commerce-Plattformen, Retailer mit digitalen Zielen und Organisationen, die Skalierung mit KI verbinden wollen. Ideal: 50+ Mio. € Umsatz, etablierte Prozesse, ambitionierte Wachstumsziele.",
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
