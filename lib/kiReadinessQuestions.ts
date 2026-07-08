export type Answer = {
  text: string
  score: 1 | 2 | 3 | 4
}

export type Question = {
  id: string
  text: string
  answers: [Answer, Answer, Answer, Answer]
}

export type Category = {
  id: string
  label: string
  questions: [Question, Question]
}

export const categories: Category[] = [
  {
    id: "daten",
    label: "Daten & Systeme",
    questions: [
      {
        id: "daten-lage",
        text: "Wo liegen Ihre wichtigsten Geschäftsdaten?",
        answers: [
          { text: "Verstreut in E-Mails, Excel-Listen und Köpfen einzelner Mitarbeiter", score: 1 },
          { text: "In mehreren Systemen, aber ohne klare Struktur", score: 2 },
          { text: "In einzelnen Fachsystemen mit teilweiser Struktur", score: 3 },
          { text: "Zentral und strukturiert in einem oder wenigen Kernsystemen", score: 4 },
        ],
      },
      {
        id: "daten-integration",
        text: "Wie gut sind Ihre Systeme miteinander verbunden?",
        answers: [
          { text: "Gar nicht – jedes System steht für sich", score: 1 },
          { text: "Vereinzelte manuelle Exporte/Importe", score: 2 },
          { text: "Einige Systeme sind per Schnittstelle verbunden", score: 3 },
          { text: "Durchgängig über APIs integriert", score: 4 },
        ],
      },
    ],
  },
  {
    id: "prozesse",
    label: "Prozesse & Automatisierung",
    questions: [
      {
        id: "prozesse-dokumentation",
        text: "Wie gut sind Ihre Kernprozesse dokumentiert?",
        answers: [
          { text: "Gar nicht – läuft nach Erfahrung Einzelner", score: 1 },
          { text: "Grob im Kopf, kaum schriftlich", score: 2 },
          { text: "Für die wichtigsten Prozesse dokumentiert", score: 3 },
          { text: "Durchgängig dokumentiert und aktuell gehalten", score: 4 },
        ],
      },
      {
        id: "prozesse-automatisierung",
        text: "Wie viele wiederkehrende Aufgaben laufen bereits automatisiert?",
        answers: [
          { text: "Keine, alles wird manuell erledigt", score: 1 },
          { text: "Ein paar einzelne Automatisierungen", score: 2 },
          { text: "Mehrere Kernprozesse sind automatisiert", score: 3 },
          { text: "Automatisierung ist die Regel, nicht die Ausnahme", score: 4 },
        ],
      },
    ],
  },
  {
    id: "team",
    label: "Team & Kultur",
    questions: [
      {
        id: "team-offenheit",
        text: "Wie steht Ihr Team neuen Technologien gegenüber?",
        answers: [
          { text: "Eher skeptisch bis ablehnend", score: 1 },
          { text: "Abwartend, wenig Eigeninitiative", score: 2 },
          { text: "Grundsätzlich offen, wenn der Nutzen klar ist", score: 3 },
          { text: "Aktiv neugierig, probiert selbst Neues aus", score: 4 },
        ],
      },
      {
        id: "team-erfahrung",
        text: "Gibt es im Team bereits praktische Erfahrung mit KI-Tools (z. B. ChatGPT, Copilot)?",
        answers: [
          { text: "Nein, niemand nutzt sowas aktiv", score: 1 },
          { text: "Ein, zwei Personen privat", score: 2 },
          { text: "Mehrere Mitarbeiter nutzen es im Arbeitsalltag", score: 3 },
          { text: "Fest im Arbeitsalltag mehrerer Teams verankert", score: 4 },
        ],
      },
    ],
  },
  {
    id: "strategie",
    label: "Strategie & Geschäftswert",
    questions: [
      {
        id: "strategie-ziele",
        text: "Haben Sie konkrete, messbare Ziele für KI-Projekte?",
        answers: [
          { text: "Nein, KI ist bislang nur ein Thema, kein Ziel", score: 1 },
          { text: "Vage Vorstellungen, nichts Messbares", score: 2 },
          { text: "Für einzelne Projekte klar definiert", score: 3 },
          { text: "Klare KPIs, an denen wir uns messen lassen", score: 4 },
        ],
      },
      {
        id: "strategie-verankerung",
        text: "Ist KI Teil Ihrer Unternehmensstrategie, oder eher Einzelinitiative?",
        answers: [
          { text: "Reine Einzelinitiative Einzelner", score: 1 },
          { text: "Wird diskutiert, ist aber nicht verankert", score: 2 },
          { text: "Teil der Strategie einzelner Bereiche", score: 3 },
          { text: "Fest in der Unternehmensstrategie verankert", score: 4 },
        ],
      },
    ],
  },
  {
    id: "ressourcen",
    label: "Ressourcen & Verantwortlichkeiten",
    questions: [
      {
        id: "ressourcen-budget",
        text: "Gibt es Budget für KI-/Digitalisierungsprojekte?",
        answers: [
          { text: "Nein, aktuell keins vorgesehen", score: 1 },
          { text: "Im Einzelfall, nach Prüfung", score: 2 },
          { text: "Ein grobes Jahresbudget ist eingeplant", score: 3 },
          { text: "Fest budgetiert mit klarer Priorisierung", score: 4 },
        ],
      },
      {
        id: "ressourcen-verantwortung",
        text: "Ist die Verantwortung für KI-Themen klar zugeordnet?",
        answers: [
          { text: "Nein, fühlt sich niemand richtig zuständig", score: 1 },
          { text: "Läuft nebenbei bei ein, zwei Personen mit", score: 2 },
          { text: "Es gibt einen klaren Ansprechpartner", score: 3 },
          { text: "Feste Rolle/Team mit Entscheidungsbefugnis", score: 4 },
        ],
      },
    ],
  },
]

export type MaturityBand = {
  id: string
  label: string
  min: number
  max: number
  description: string
}

export const maturityBands: MaturityBand[] = [
  {
    id: "einsteiger",
    label: "Einsteiger",
    min: 0,
    max: 25,
    description:
      "KI ist bei Ihnen noch kein strukturiertes Thema. Die gute Nachricht: Die größten Hebel liegen meist in den Grundlagen – Daten ordnen, Prozesse dokumentieren – nicht in komplexer Technologie.",
  },
  {
    id: "im-aufbau",
    label: "Im Aufbau",
    min: 26,
    max: 50,
    description:
      "Einzelne Bausteine sind vorhanden, aber es fehlt der rote Faden. Jetzt zahlt sich aus, KI-Initiativen zu bündeln statt sie nebeneinander laufen zu lassen.",
  },
  {
    id: "fortgeschritten",
    label: "Fortgeschritten",
    min: 51,
    max: 75,
    description:
      "Sie haben eine solide Basis aus Daten, Prozessen und Teamakzeptanz. Der nächste Schritt ist, KI-Investitionen konsequent an messbarem Geschäftswert auszurichten.",
  },
  {
    id: "ki-ready",
    label: "KI-Ready",
    min: 76,
    max: 100,
    description:
      "Daten, Prozesse, Team und Strategie ziehen bereits an einem Strang. Jetzt geht es darum, das Tempo zu halten und KI-Investitionen operativ konsequent umzusetzen.",
  },
]

export function getMaturityBand(scorePercent: number): MaturityBand {
  return (
    maturityBands.find((band) => scorePercent >= band.min && scorePercent <= band.max) ??
    maturityBands[0]
  )
}

const quickWins: Record<string, string> = {
  daten:
    "Größte Chance: Verschaffen Sie sich zuerst Überblick über Ihre wichtigsten Datenquellen und bringen Sie diese an einem Ort zusammen – ohne saubere Datenbasis bleibt jede KI-Initiative Stückwerk.",
  prozesse:
    "Größte Chance: Dokumentieren Sie zunächst Ihre 2–3 wichtigsten wiederkehrenden Prozesse. Was nicht beschrieben ist, lässt sich auch nicht automatisieren.",
  team: "Größte Chance: Schaffen Sie niedrigschwellige Berührungspunkte mit KI-Tools im Arbeitsalltag – Akzeptanz entsteht durch eigenes Ausprobieren, nicht durch Ankündigungen.",
  strategie:
    "Größte Chance: Definieren Sie für ein einzelnes KI-Projekt ein konkretes, messbares Ziel. Ein Erfolg mit klarer Zahl überzeugt mehr als jede Strategiefolie.",
  ressourcen:
    "Größte Chance: Benennen Sie eine feste Verantwortlichkeit für KI-Themen – ohne klaren Owner verlaufen selbst gute Initiativen im Sand.",
}

export function getQuickWin(categoryId: string): string {
  return quickWins[categoryId] ?? quickWins.daten
}
