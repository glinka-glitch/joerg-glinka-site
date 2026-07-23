#!/usr/bin/env node
/**
 * Storyblok Content-Update-Skript (Juli 2026)
 * ---------------------------------------------
 * Setzt die im Chat vereinbarten Textänderungen (KI-Transformation auf
 * Führungsebene, CMO-Story, FAQ-Konsistenz etc.) auf den vier Stories
 * home / about_page / portfolio / contact.
 *
 * WARUM EIN SKRIPT STATT DIREKTER API-CALLS AUS DEM CHAT:
 * Das Sandbox-Netzwerk von Claude blockt api.storyblok.com und
 * mapi.storyblok.com (Allowlist-Proxy, 403 blocked-by-allowlist). Von
 * deinem Rechner aus funktioniert der Zugriff normal, deshalb läuft
 * dieses Skript bei dir lokal.
 *
 * SICHERHEIT ZUM TOKEN:
 * Der Token steht NICHT im Skript, sondern kommt nur zur Laufzeit aus
 * einer Umgebungsvariable. Nach dem Lauf: Token in Storyblok
 * (Einstellungen -> Meine Konto -> Personal Access Tokens) widerrufen
 * oder rotieren.
 *
 * BENUTZUNG:
 *   STORYBLOK_MANAGEMENT_TOKEN=sb_pat_xxx node scripts/storyblok-update.mjs
 *     -> Dry Run: zeigt nur an, was sich ändern würde, schreibt nichts.
 *
 *   STORYBLOK_MANAGEMENT_TOKEN=sb_pat_xxx node scripts/storyblok-update.mjs --apply
 *     -> Schreibt die Änderungen als Draft (unveröffentlichte Version).
 *        Publish machst du danach selbst in Storyblok, nach Gegenlesen.
 *
 * Node 18+ erforderlich (eingebautes fetch).
 */

const SPACE_ID = "292767764806271";
const API_HOST = process.env.STORYBLOK_API_HOST || "https://mapi.storyblok.com";
const TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;
const APPLY = process.argv.includes("--apply");
const ONLY = (process.argv.find((a) => a.startsWith("--only=")) || "")
  .replace("--only=", "")
  .split(",")
  .filter(Boolean);
const DUMP = (process.argv.find((a) => a.startsWith("--dump=")) || "").replace(
  "--dump=",
  ""
);

if (!TOKEN) {
  console.error(
    "Fehlt: STORYBLOK_MANAGEMENT_TOKEN als Umgebungsvariable setzen.\n" +
      "Beispiel: STORYBLOK_MANAGEMENT_TOKEN=sb_pat_xxx node scripts/storyblok-update.mjs"
  );
  process.exit(1);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function api(path, options = {}, attempt = 1) {
  const res = await fetch(`${API_HOST}/v1/spaces/${SPACE_ID}${path}`, {
    ...options,
    headers: {
      Authorization: TOKEN,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  if (res.status === 429 && attempt <= 5) {
    const wait = attempt * 1500;
    console.warn(`  [rate limit] warte ${wait}ms und versuche erneut (Versuch ${attempt + 1}/6)...`);
    await sleep(wait);
    return api(path, options, attempt + 1);
  }
  if (!res.ok) {
    throw new Error(
      `HTTP ${res.status} bei ${path}: ${
        typeof body === "string" ? body : JSON.stringify(body)
      }`
    );
  }
  // Throttle: Storyblok Management API erlaubt 6 req/s, wir bleiben deutlich
  // darunter, damit Dry-Run + Apply direkt hintereinander nicht kollidieren.
  await sleep(400);
  return body;
}

async function listStories() {
  const data = await api(`/stories?per_page=100`);
  return data.stories || [];
}

async function getStory(id) {
  const data = await api(`/stories/${id}`);
  return data.story;
}

async function putStory(id, content) {
  return api(`/stories/${id}`, {
    method: "PUT",
    body: JSON.stringify({ story: { content } }),
  });
}

async function resolveStory(candidateSlugs, allStories) {
  for (const slug of candidateSlugs) {
    const match = allStories.find(
      (s) => s.slug === slug || s.full_slug === slug
    );
    if (match) return match;
  }
  return null;
}

// ---- Richtext-Helfer -------------------------------------------------

function findParagraphIndex(doc, matchSubstr) {
  if (!doc?.content) return -1;
  return doc.content.findIndex((node) => {
    if (node.type !== "paragraph" || !node.content) return false;
    const text = node.content.map((c) => c.text || "").join("");
    return text.includes(matchSubstr);
  });
}

function plainParagraph(text) {
  return { type: "paragraph", content: [{ type: "text", text }] };
}

function setParagraphText(doc, index, newText) {
  doc.content[index] = plainParagraph(newText);
}

function insertParagraphAfter(doc, index, newText) {
  doc.content.splice(index + 1, 0, plainParagraph(newText));
}

// ---- Diff-Logging ------------------------------------------------------

const diffs = [];
function logDiff(story, field, oldVal, newVal) {
  if (oldVal === newVal) return;
  diffs.push({ story, field, oldVal, newVal });
}

// ---- Patch: Home (slug "home", CLAUDE.md nennt "joerg-glinka-website",
//      Code fetcht tatsächlich "home" -> beide Slugs werden versucht) ----

function patchHome(content) {
  const c = structuredClone(content);

  logDiff("home", "hero_text", c.hero_text, "");
  c.hero_text =
    "25 Jahre lang habe ich digitale Unternehmen aufgebaut und skaliert, zuletzt zwölf Jahre als Mitgründer und Geschäftsführer der etailer Solutions GmbH. Nach dem Verkauf meiner Anteile 2025 habe ich die Übergabe an das neue Team noch für eine befristete Zeit als CMO begleitet, das war Teil der Vereinbarung mit dem neuen Eigentümer. Diese Phase ist abgeschlossen. Jetzt suche ich eine Führungsposition, in der ich KI-Transformation genauso verantworte, wie ich zuvor ein Unternehmen verantwortet habe.";

  if (c.icp_text?.content) {
    logDiff("home", "icp_text", "(richtext, 2 Absätze)", "(neu geschrieben)");
    c.icp_text = {
      type: "doc",
      content: [
        plainParagraph(
          "KI war für mich nie Selbstzweck. Schon Jahre vor ChatGPT haben wir bei etailer KI eingesetzt, um ein konkretes Problem zu lösen: Produktdaten für den internationalen Handel zu pflegen und zu übersetzen, ohne dass jede neue Sprache ein eigenes Team braucht. Das hat funktioniert, messbar."
        ),
        plainParagraph(
          "Seitdem gilt für mich ein Grundsatz: KI ist erfolgreich, wenn sie sich in Zahlen zeigt, nicht in Präsentationen."
        ),
      ],
    };
  }

  logDiff("home", "architecture_badge", c.architecture_badge, "KI-Transformation");
  c.architecture_badge = "KI-Transformation";

  logDiff("home", "challenge_headline", c.challenge_headline, "");
  c.challenge_headline =
    "Worauf ich mich fokussiere: KI-Transformation und operative Umsetzung";

  if (Array.isArray(c.challenge_items)) {
    const byText = (t) =>
      c.challenge_items.find((i) => (i.text || "").includes(t));

    const floskel = byText("Orientierung und Klarheit");
    if (floskel) {
      floskel.text = "Teams durch KI-Transformation führen, ohne sie zu überfordern.";
    } else {
      console.warn(
        "  [warn] Floskel-Item ('Orientierung und Klarheit...') in challenge_items nicht gefunden, bitte manuell prüfen."
      );
    }

    const order = [
      "KI-Projekte von reiner Aufmerksamkeit",
      "Strategie und operative Umsetzung",
      "Teams durch KI-Transformation führen",
      "Wachstum, das hinter Erwartungen",
      "Digitale Geschäftsmodelle skalieren",
    ];
    const reordered = order
      .map((needle) => byText(needle))
      .filter(Boolean);
    if (reordered.length === c.challenge_items.length) {
      logDiff("home", "challenge_items order", "alt", "KI-Themen zuerst, Growth zuletzt");
      c.challenge_items = reordered;
    } else {
      console.warn(
        `  [warn] challenge_items: nur ${reordered.length}/${c.challenge_items.length} Items per Textsuche gefunden, Reihenfolge NICHT geändert. Bitte manuell in Storyblok sortieren.`
      );
    }
  }

  if (Array.isArray(c.services)) {
    const byTitle = (t) => c.services.find((s) => s.title === t);

    const kiCard = byTitle("KI in messbare Ergebnisse übersetzen");
    if (kiCard) {
      kiCard.tag = "KI-Transformation";
      kiCard.description =
        "Ich setze KI dort ein, wo sie operative Wirkung entfaltet: in Automatisierung, Datenqualität und Entscheidungsprozessen.";
    } else {
      console.warn("  [warn] Service-Karte 'KI in messbare Ergebnisse übersetzen' nicht gefunden.");
    }

    const orgCard = byTitle("Veränderung führen und verankern");
    if (orgCard) {
      orgCard.tag = "Führung & Veränderung";
    } else {
      console.warn("  [warn] Service-Karte 'Veränderung führen und verankern' nicht gefunden.");
    }

    const growthCard = byTitle("Wachstum wirksam skalieren");
    if (growthCard) {
      growthCard.tag = "Track Record";
      growthCard.title = "Wachstum, das ich nachweisen kann";
      growthCard.description =
        "Zwölf Jahre habe ich als Mitgründer und Geschäftsführer genau das gemacht: eine Organisation durch Wachstumsphasen geführt und dabei die Profitabilität nicht aus dem Blick verloren. Diese Erfahrung ist die Basis für die Führungsrolle, die ich jetzt suche.";
    } else {
      console.warn("  [warn] Service-Karte 'Wachstum wirksam skalieren' nicht gefunden.");
    }

    if (kiCard && orgCard && growthCard) {
      logDiff("home", "services order", "Growth/KI/Organisation", "KI/Führung/Track Record");
      c.services = [kiCard, orgCard, growthCard];
    }
  }

  return c;
}

// ---- Patch: About (slug "about_page") ----------------------------------

function patchAbout(content) {
  const c = structuredClone(content);

  logDiff("about", "hero_headline", c.hero_headline, "Von Wachstum zu KI-Transformation");
  c.hero_headline = "Von Wachstum zu KI-Transformation";

  // hero_text und story_text: der tatsächliche Draft-Inhalt (per --dump=about
  // geprüft) weicht deutlich von der veröffentlichten Version ab, auf der der
  // erste Entwurf beruhte (u.a. Anbieter-Sprache "unterstütze Unternehmen
  // dabei...", keine Führungsposition-Formulierung, andere Absatzreihenfolge).
  // Fragiles Absatz-Matching auf den alten Text ergibt hier keinen Sinn,
  // deshalb komplette, saubere Neufassung statt Teil-Patch.
  if (c.hero_text?.content) {
    logDiff("about", "hero_text", "(Anbieter-Sprache, Draft)", "(Kandidaten-Perspektive, neu)");
    c.hero_text = {
      type: "doc",
      content: [
        plainParagraph(
          "2013 habe ich die etailer Solutions GmbH mitgegründet und sie in den folgenden zwölf Jahren als Geschäftsführer zu einer leistungsfähigen E-Commerce-Plattform für den Omnichannel-Handel aufgebaut. Digitale Geschäftsmodelle aufbauen und skalieren, das zieht sich durch mehr als zwei Jahrzehnte meiner Laufbahn."
        ),
        plainParagraph(
          "Gerade fühlt es sich an wie Anfang der 2000er, als das Internet Unternehmen grundlegend verändert hat. Mit modernen KI-Tools baue ich heute Workflows und Automatisierungen, für die früher ein ganzes Entwicklerteam nötig gewesen wäre. Jetzt suche ich eine Führungsposition, in der ich das dauerhaft verantworte."
        ),
      ],
    };
  }

  if (c.story_text?.content) {
    logDiff("about", "story_text", "(Draft, CMO-Floskel)", "(neu, CMO ehrlich erklärt)");
    c.story_text = {
      type: "doc",
      content: [
        plainParagraph(
          'Zehn Jahre lang haben wir etailer Solutions aus eigenen Mitteln am Standort Olpe aufgebaut und profitabel gehalten. Business Insider schrieb 2018 über uns: „Es muss nicht immer Berlin sein", ein Satz, der bis heute stimmt.'
        ),
        plainParagraph(
          "Gleichzeitig zieht mich die Metropolregion Köln und das Rhein-Ruhr-Gebiet an. Ich habe dort einige Jahre gelebt, kenne das Netzwerk und die Unternehmensdichte in meinen Themenfeldern."
        ),
        plainParagraph(
          "2023 stieg ein Private-Equity-Investor ein. Das war ein Zeichen, dass wir etwas aufgebaut hatten, das professionelle Investoren für kaufenswert hielten."
        ),
        plainParagraph(
          "2025 habe ich meine Anteile verkauft. Der neue Eigentümer wollte für die Übergabe Kontinuität, deshalb habe ich die operative Rolle noch eine Zeit lang weitergeführt, zuletzt als CMO, verantwortlich für Wissenstransfer und eine geordnete Übergabe an das neue Team. Diese Phase ist inzwischen abgeschlossen."
        ),
        plainParagraph(
          "Aktuell wickeln namhafte Onlineshops über 500 Millionen Euro Jahresumsatz über die etailer Plattform ab. Die Software wurde auf Open-Source-Basis komplett in Deutschland entwickelt."
        ),
        plainParagraph(
          "Was ich in diesen Jahren gelernt habe, lässt sich nicht in Zertifikate packen: wie man eine Produktorganisation aufbaut, die skaliert, wenn das Budget knapp ist. Wie man ein Team durch Wachstum führt, ohne zu verlieren, was es erfolgreich gemacht hat. Genau das bringe ich in eine Führungsposition ein."
        ),
      ],
    };
  }

  logDiff("about", "focus_1_title", c.focus_1_title, "KI-Transformation");
  c.focus_1_title = "KI-Transformation";
  c.focus_1_text =
    "Ich schaue, wo KI echten operativen Wert schafft, und bringe das in die Organisation. Pilotprojekte interessieren mich wenig. Was ich aufbaue, soll laufen.";

  c.focus_2_title = "Transformation & Change";
  c.focus_2_text =
    "Ich führe Veränderungsprozesse so, dass Teams die Richtung verstehen und mitarbeiten wollen. Das klingt einfacher als es ist.";

  c.focus_3_title = "Commerce Transformation";
  logDiff("about", "focus_3_text", c.focus_3_text, "(neu, als Beleg formuliert)");
  c.focus_3_text =
    "Ich habe digitale Geschäftsmodelle von null aufgebaut und über zwölf Jahre auf mehr als 500 Millionen Euro Plattformumsatz skaliert. Diese Erfahrung ist die Grundlage, auf der ich heute KI-Transformation verantworte, nicht eine zweite, getrennte Kompetenz.";

  if (Array.isArray(c.timeline_items)) {
    const ceoEntry = c.timeline_items.find((i) =>
      (i.title || "").includes("Mitgründer & CEO")
    );
    if (ceoEntry) {
      ceoEntry.text = ceoEntry.text.replace(
        /Ab Oktober 2025.*$/s,
        "Nach dem Anteilsverkauf 2025 habe ich die Übergabe befristet als CMO begleitet, verantwortlich für Wachstum und Marktentwicklung."
      );
      logDiff("about", "timeline: Mitgründer & CEO", "alt", "neu (CMO-Satz präzisiert)");
    } else {
      console.warn("  [warn] timeline_items: 'Mitgründer & CEO'-Eintrag nicht gefunden.");
    }

    const nowEntry = c.timeline_items.find((i) => (i.title || "").startsWith("2026"));
    if (nowEntry) {
      logDiff("about", "timeline: heute (Titel)", nowEntry.title, "2026 · KI-Transformation, heute");
      nowEntry.title = "2026 · KI-Transformation, heute";
      if ((nowEntry.text || "").includes("IBM und AWS")) {
        console.warn(
          "  [ACHTUNG] Der Text dieses Eintrags erwähnt '600 Stunden bei LearnWise Academy, IBM und AWS'. " +
            "Das deckt sich nicht mit deinem hinterlegten Profil (400h LearnWise + 50h + 50h + Digitalisierte " +
            "Arbeitswelt 4.0, kein IBM/AWS). Skript ändert den Text NICHT automatisch, bitte erst klären, dann " +
            "manuell in Storyblok anpassen oder mir Bescheid geben, dann ergänze ich es hier."
        );
      }
    } else {
      console.warn("  [warn] timeline_items: Eintrag mit Titel ab '2026' nicht gefunden.");
    }
  }

  return c;
}

// ---- Patch: Portfolio (slug "portfolio") -------------------------------

function patchPortfolio(content) {
  const c = structuredClone(content);

  if (c.hero_text?.content) {
    const idx = findParagraphIndex(c.hero_text, "neue Position ein");
    if (idx >= 0) {
      setParagraphText(
        c.hero_text,
        idx,
        "Diese Erfahrung bringe ich jetzt in eine Führungsposition mit Fokus auf KI-Transformation ein."
      );
      logDiff("portfolio", "hero_text (letzter Satz)", "neue Position ein", "Führungsposition mit Fokus auf KI-Transformation");
    } else {
      console.warn("  [warn] hero_text: Zielsatz nicht gefunden, bitte manuell prüfen.");
    }
  }

  if (Array.isArray(c.portfolio_items)) {
    const byTitle = (t) => c.portfolio_items.find((i) => i.title === t);
    const order = [
      "KI in operative Ergebnisse übersetzen",
      "Transformation & Change",
      "Digitales Geschäftsmodell skalieren",
      "Profitables Wachstum",
    ];
    const reordered = order.map((t) => byTitle(t)).filter(Boolean);
    if (reordered.length === c.portfolio_items.length) {
      logDiff("portfolio", "portfolio_items order", "Wachstum zuerst", "KI zuerst, Wachstum als Beleg zuletzt");
      c.portfolio_items = reordered;
    } else {
      console.warn(
        `  [warn] portfolio_items: nur ${reordered.length}/${c.portfolio_items.length} per Titel gefunden, Reihenfolge NICHT geändert.`
      );
    }
  }

  return c;
}

// ---- Patch: Contact (slug "contact") -----------------------------------

function patchContact(content) {
  const c = structuredClone(content);

  logDiff("contact", "headline", c.headline, "Lassen Sie uns über die nächste Aufgabe sprechen");
  c.headline = "Lassen Sie uns über die nächste Aufgabe sprechen";

  logDiff("contact", "text", c.text, "(Kandidaten-Perspektive statt Anbieter-Sprache)");
  c.text =
    "Sie suchen jemanden, der KI-Transformation auf Führungsebene verantwortet, mit 25 Jahren operativer Erfahrung im Rücken. Ich suche genau diese Aufgabe.";

  return c;
}

// ---- Main ---------------------------------------------------------------

const STORIES = [
  { name: "home", slugs: ["home", "joerg-glinka-website"], patch: patchHome },
  { name: "about", slugs: ["about_page", "about"], patch: patchAbout },
  { name: "portfolio", slugs: ["portfolio"], patch: patchPortfolio },
  { name: "contact", slugs: ["contact"], patch: patchContact },
];

async function main() {
  const allStories = await listStories();

  if (DUMP) {
    const target = STORIES.find((s) => s.name === DUMP);
    const slugs = target ? target.slugs : [DUMP];
    const match = await resolveStory(slugs, allStories);
    if (!match) {
      console.error(`Keine Story mit Slug ${slugs.join(" / ")} gefunden.`);
      process.exit(1);
    }
    const story = await getStory(match.id);
    console.log(JSON.stringify(story.content, null, 2));
    return;
  }

  console.log(`Modus: ${APPLY ? "APPLY (schreibt Draft)" : "DRY RUN (zeigt nur Diff)"}\n`);
  console.log(
    "Gefundene Stories im Space:",
    allStories.map((s) => s.full_slug || s.slug).join(", "),
    "\n"
  );

  const targets = ONLY.length
    ? STORIES.filter((s) => ONLY.includes(s.name))
    : STORIES;

  for (const target of targets) {
    try {
      const match = await resolveStory(target.slugs, allStories);
      if (!match) {
        console.warn(`[${target.name}] Keine Story mit Slug ${target.slugs.join(" / ")} gefunden, übersprungen.\n`);
        continue;
      }

      console.log(`== ${target.name} (Story-ID ${match.id}, Slug "${match.slug}") ==`);
      const story = await getStory(match.id);
      const before = diffs.length;
      const patchedContent = target.patch(story.content);
      const changed = diffs.slice(before);

      if (changed.length === 0) {
        console.log("  Keine Änderungen erkannt.\n");
        continue;
      }

      for (const d of changed) {
        console.log(`  - ${d.field}: geändert`);
      }

      if (APPLY) {
        await putStory(match.id, patchedContent);
        console.log(`  -> als Draft gespeichert. Bitte in Storyblok gegenlesen und selbst veröffentlichen.\n`);
      } else {
        console.log("  -> Dry Run, nichts geschrieben.\n");
      }
    } catch (err) {
      console.error(`  [FEHLER bei ${target.name}]: ${err.message}`);
      console.error(`  -> ${target.name} übersprungen, weiter mit der nächsten Story.\n`);
    }
  }

  if (!APPLY) {
    console.log(
      "Das war ein Dry Run. Wenn die Diffs oben passen, nochmal mit --apply aufrufen."
    );
  } else {
    console.log(
      "Fertig. Bitte in Storyblok pro geänderter Seite gegenlesen und auf Publish klicken.\n" +
        "Danach: Token in Storyblok widerrufen oder rotieren."
    );
  }
}

main().catch((err) => {
  console.error("\nFehler:", err.message);
  process.exit(1);
});
