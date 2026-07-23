# Content-Entwurf glinka.tech — KI-Transformation auf Führungsebene

Leitidee: KI-Transformation bleibt das inhaltliche Leitthema, jetzt auf Führungsebene benannt statt als Fachreferenten-Titel. Commerce/Growth/CEO-Erfahrung wird zum Beleg dafür, dass die Führungsebene glaubwürdig ist, nicht zur zweiten, gleichrangigen Säule. "KI-Manager" und "KI-Prozessmanager" bleiben als Suchbegriffe erhalten (echtes Suchvolumen laut Jobbörsen-Recherche), tauchen aber nicht mehr als alleiniger Haupttitel auf.

**Bereits im Code umgesetzt** (siehe Abschnitt am Ende): Meta-Tags, JSON-LD, FAQ, llms.txt/llms-full.txt, Header/Footer, Architektur-Grafik-Bug, Portfolio-Overrides.

**Unten zum Einpflegen:** alle Storyblok-Felder. Ich habe dafür nur einen Lesezugriff auf Storyblok, du musst diese Texte selbst ins CMS eintragen (oder mir einen Management-Token geben, dann kann ich das auch automatisiert pushen).

---

## 1. Startseite (Story: `joerg-glinka-website`)

**hero_badge** — unverändert lassen ("Bereit für die nächste Aufgabe"), war nicht auffällig.

**hero_title_line_1/2/3** — unverändert lassen. Die aktuelle H1 ist eine Nutzenaussage, kein Jobtitel, und war nicht das Problem.

**hero_text** (Haupttext unter der H1) — ersetzen:

> Alt: "25 Jahre lang habe ich digitale Unternehmen aufgebaut und skaliert, zuletzt zwölf Jahre als Mitgründer und Geschäftsführer der etailer Solutions GmbH. Im Anschluss übernahm ich im Rahmen einer definierten Transitionsphase die Rolle des Chief Marketing Officer (CMO), um einen strukturierten Wissenstransfer sowie die geordnete Übergabe operativer Verantwortlichkeiten sicherzustellen. Nach Abschluss dieser Phase richte ich meinen beruflichen Fokus konsequent auf die Themen KI-Management, Prozessautomatisierung und digitale Transformation aus. Als KI-Manager und Prozessautomatisierer verantworte ich KI-Strategie, Automatisierung und die operative Umsetzung mit klarem Blick auf messbare Ergebnisse."

> **Neu:** "25 Jahre lang habe ich digitale Unternehmen aufgebaut und skaliert, zuletzt zwölf Jahre als Mitgründer und Geschäftsführer der etailer Solutions GmbH. Nach dem Verkauf meiner Anteile 2025 habe ich die Übergabe an das neue Team noch für eine befristete Zeit als CMO begleitet, das war Teil der Vereinbarung mit dem neuen Eigentümer. Diese Phase ist abgeschlossen. Jetzt suche ich eine Führungsposition, in der ich KI-Transformation genauso verantworte, wie ich zuvor ein Unternehmen verantwortet habe."

**icp_eyebrow, icp_headline** — unverändert ("Was ich mitbringe" / "Erfahrung, die Wirkung erzeugt").

**icp_text** — ersetzen (entfernt Passiv-Konstruktion und die künstliche Dreier-Aufzählung):

> Alt: "**KI war für mich nie Selbstzweck.** Bereits Jahre vor ChatGPT haben wir KI eingesetzt, um operative Probleme im internationalen E-Commerce zu lösen. Durch intelligente Datenlogiken und automatisierte Produktübersetzungen konnten neue Märkte schneller erschlossen, Prozesse beschleunigt und Produktdaten deutlich effizienter gepflegt werden. Seitdem gilt für mich ein Grundsatz: **KI ist dann erfolgreich, wenn sie messbaren Geschäftswert erzeugt.**"

> **Neu:** "KI war für mich nie Selbstzweck. Schon Jahre vor ChatGPT haben wir bei etailer KI eingesetzt, um ein konkretes Problem zu lösen: Produktdaten für den internationalen Handel zu pflegen und zu übersetzen, ohne dass jede neue Sprache ein eigenes Team braucht. Das hat funktioniert, messbar. Seitdem gilt für mich ein Grundsatz: KI ist erfolgreich, wenn sie sich in Zahlen zeigt, nicht in Präsentationen."

(Fettungen können entfallen, die Überschrift trägt die Struktur schon.)

Die 6 Stat-Kacheln darunter (70 % weniger Bearbeitungszeit, 500M GMV etc.) sind im Code hinterlegt, nicht in Storyblok, und bleiben unverändert. Die waren nie das Problem.

**architecture_badge** — ändern von "KI-Management" zu **"KI-Transformation"** (Konsistenz mit dem neuen Leitbegriff). architecture_headline ("Vom Fundament zur Interaktion") bleibt.

**challenge_headline** — ersetzen:
> Alt: "Worauf ich mich fokussiere: Prozessoptimierung & KI-Management"
> **Neu:** "Worauf ich mich fokussiere: KI-Transformation und operative Umsetzung"

**challenge_intro** — unverändert ("Schwerpunkte, die meine Arbeit definieren:").

**challenge_items** — neu sortieren, Punkt 4 (Floskel) ersetzen:

1. KI-Projekte von reiner Aufmerksamkeit zu messbarem Geschäftswert führen. *(unverändert, war schon gut, jetzt an Position 1)*
2. Strategie und operative Umsetzung wieder zusammenführen. *(unverändert, jetzt Position 2)*
3. **Neu, ersetzt die Floskel:** Teams durch KI-Transformation führen, ohne sie zu überfordern.
4. Wachstum, das hinter Erwartungen zurückbleibt, wieder in Fahrt bringen. *(unverändert, jetzt Position 4, als Beleg statt Leitthema)*
5. Digitale Geschäftsmodelle skalieren, ohne Profitabilität zu opfern. *(unverändert, Position 5)*

Gestrichen: "Führungsteams Orientierung und Klarheit in komplexen Transformationsphasen geben." Das war die vom Manager zitierte Floskel.

**services_headline, services_text** — unverändert ("Drei Bereiche, in denen ich Wirkung erziele" / "Als Teil des Teams, mit Verantwortung für Ergebnisse.").

**services[]** — neu sortieren und Karte 1 und 3 überarbeiten:

**Karte 1** (vorher "KI-Management", jetzt zuerst):
- tag: **"KI-Transformation"**
- title: "KI in messbare Ergebnisse übersetzen" *(unverändert)*
- description: Alt hatte eine Nicht-X-sondern-Y-Konstruktion ("Nicht dort, wo sie nur Aufmerksamkeit erzeugt."). **Neu:** "Ich setze KI dort ein, wo sie operative Wirkung entfaltet: in Automatisierung, Datenqualität und Entscheidungsprozessen."

**Karte 2** (vorher "Organisation", jetzt Mitte):
- tag: **"Führung & Veränderung"** (vorher "Organisation")
- title: "Veränderung führen und verankern" *(unverändert)*
- description: unverändert ("Ich führe Veränderungsprozesse so, dass Teams die Richtung verstehen und mitarbeiten wollen. Das klingt einfacher als es ist.") — das ist der einzige Satz mit echter Haltung in diesem Abschnitt, unbedingt behalten.

**Karte 3** (vorher "Growth", jetzt zuletzt, als Beleg reformuliert):
- tag: **"Track Record"** (vorher "Growth")
- title: **"Wachstum, das ich nachweisen kann"** (vorher "Wachstum wirksam skalieren")
- description: **Neu:** "Zwölf Jahre habe ich als Mitgründer und Geschäftsführer genau das gemacht: eine Organisation durch Wachstumsphasen geführt und dabei die Profitabilität nicht aus dem Blick verloren. Diese Erfahrung ist die Basis für die Führungsrolle, die ich jetzt suche."

---

## 2. About-Seite (Story: `about_page`)

**hero_badge** — unverändert ("About").

**hero_headline** — ersetzen (passt jetzt auch besser zur eigenen Mobile-Regel von max. 4 Wörtern):
> Alt: "Erfahrung aus Wachstum und Umsetzung"
> **Neu:** "Von Wachstum zu KI-Transformation"

**hero_text** — fast unverändert, nur letzter Satz geschärft:
> Alt letzter Satz: "Jetzt suche ich eine neue Position, in der ich das dauerhaft verantworte."
> **Neu:** "Jetzt suche ich eine Führungsposition, in der ich das dauerhaft verantworte."
(Rest des Absatzes bleibt: die Anfang-2000er-Analogie und die Vibe-Coding-Erwähnung haben Stimme, nichts daran ändern.)

**story_badge, story_headline** — unverändert ("Mein Weg" / "Zwölf Jahre etailer. Was ich daraus mitgenommen habe").

**story_text** — 4 der 5 Absätze bleiben wortgleich. Nach dem Satz "2025 habe ich meine Anteile verkauft." wird ein neuer Absatz eingefügt, der die CMO-Frage direkt beantwortet:

> ... 2023 stieg ein PE-Investor ein. Das Unternehmen hatte etwas aufgebaut, das professionelle Investoren für kaufenswert hielten. Das war der Grund. 2025 habe ich meine Anteile verkauft.
>
> **Neuer Absatz:** "Der neue Eigentümer wollte für die Übergabe Kontinuität. Deshalb habe ich die operative Rolle noch eine Zeit lang weitergeführt, zuletzt als CMO, verantwortlich für Wissenstransfer und eine geordnete Übergabe an das neue Team. Diese Phase ist inzwischen abgeschlossen."
>
> Heute wickeln Händler wie Fahrrad-XXL, Bike-Discount, Fritz Berger und weitere über 500 Millionen Euro Jahresumsatz über die Plattform ab. ...

Das ist genau die Antwort auf die Manager-Frage "warum wird aus einem Gesellschafter ein Angestellter": neuer Eigentümer wollte Kontinuität, du hast die Übergabe befristet begleitet, fertig, keine Dramatik.

**focus_badge, focus_headline, focus_intro** — unverändert.

**focus_1/2/3** — neu sortieren:

1. (vorher "AI Operations", jetzt zuerst) title: **"KI-Transformation"** (Deutsch statt Englisch, konsistent mit dem Rest der Seite). Text unverändert: "Ich schaue, wo KI echten operativen Wert schafft, und bringe das in die Organisation. Pilotprojekte interessieren mich wenig. Was ich aufbaue, soll laufen." — guter Satz mit Haltung, nicht anfassen.
2. "Transformation & Change" (unverändert, jetzt Position 2). Text unverändert: "Ich führe Veränderungsprozesse so, dass Teams die Richtung verstehen und mitarbeiten wollen. Das klingt einfacher als es ist."
3. "Commerce Transformation" (jetzt zuletzt, als Beleg). Text **neu**: "Ich habe digitale Geschäftsmodelle von null aufgebaut und über zwölf Jahre auf mehr als 500 Millionen Euro Plattformumsatz skaliert. Diese Erfahrung ist die Grundlage, auf der ich heute KI-Transformation verantworte, nicht eine zweite, getrennte Kompetenz."

**Skills-Sektion** — unverändert, war nie das Problem.

**timeline_items** — zwei Einträge anpassen:

Eintrag "2013–2025 · Mitgründer & CEO, etailer Solutions GmbH":
> Alt: "... Ab Oktober 2025 verantwortete ich als CMO Wachstum und Marktentwicklung bis zu meinem Ausstieg."
> **Neu:** "... Nach dem Anteilsverkauf 2025 habe ich die Übergabe befristet als CMO begleitet, verantwortlich für Wachstum und Marktentwicklung."

Eintrag "2026 · KI-Prozessmanager, heute" → Titel ändern zu **"2026 · KI-Transformation, heute"**. Text:
> Alt: "Ende 2025 habe ich meine Anteile an etailer Solutions verkauft. Seither: über 600 Stunden Weiterbildung in KI-Management, bei LearnWise Academy, IBM und AWS, dazu DSGVO und EU AI Act. Ich suche eine Führungsposition in Festanstellung."

**Bitte vorher prüfen:** Die "600 Stunden bei LearnWise Academy, IBM und AWS" tauchen so nirgendwo in deinem hinterlegten Profil auf (dort stehen 400 Std. LearnWise-Zertifikat + 50 Std. Prompt Engineering + 50 Std. KI-Tools + ein Zertifikat "Digitalisierte Arbeitswelt 4.0", macht rechnerisch rund 500 Std., keine IBM/AWS-Kurse). Entweder du hast diese Kurse tatsächlich gemacht und es fehlt nur in deinem Profil, dann bitte ergänzen, oder das war eine KI-Erfindung aus einer früheren Überarbeitung. Sicherer Vorschlag, bis du das geklärt hast:

> **Neu:** "Ende 2025 habe ich meine Anteile an etailer Solutions verkauft. Seither: über 500 Stunden Weiterbildung in KI-Management (LearnWise Academy, Prompt Engineering, KI-Tools für Unternehmen), dazu DSGVO und EU AI Act. Ich suche eine Führungsposition in Festanstellung."

---

## 3. Portfolio-Seite (Story: `portfolio`)

**hero_badge, hero_headline** — unverändert ("Kompetenzen" / "Transformation mit messbarer Wirkung").

**hero_text** — letzter Satz geschärft:
> Alt: "Diese Erfahrung bringe ich jetzt in eine neue Position ein."
> **Neu:** "Diese Erfahrung bringe ich jetzt in eine Führungsposition mit Fokus auf KI-Transformation ein."

**metrics** — unverändert (12 Jahre / 500+ Mio. € / 100+ Projekte), solide Zahlen.

**portfolio_items** — Reihenfolge in Storyblok ändern (die vier Karten per Drag & Drop neu anordnen), Titel bleiben identisch:

1. "KI in operative Ergebnisse übersetzen" *(war Position 2, jetzt 1)*
2. "Transformation & Change" *(war Position 4, jetzt 2)*
3. "Digitales Geschäftsmodell skalieren" *(unverändert, Position 3)*
4. "Profitables Wachstum" *(war Position 1, jetzt 4, letzter Punkt, als Beleg)*

**Wichtig, technischer Hinweis:** In `app/portfolio/page.tsx` überschreiben zwei Code-Konstanten (`challengeOverrides`, `outcomeOverrides`) die Storyblok-Texte für einzelne Titel, unabhängig davon, was im CMS steht. Ich habe das in Code direkt mit angepasst (siehe unten), du musst hier nichts in Storyblok ändern außer der Reihenfolge. Falls du die Ansatz-/Einbringen-Texte für diese vier Karten später im CMS bearbeitest, prüfe erst, ob der Titel in einer der beiden Override-Listen steht, sonst siehst du keine Änderung auf der Seite und wunderst dich zu Recht.

**philosophy_headline, philosophy_text, cta_badge, cta_headline** — unverändert, waren nie das Problem.

---

## 4. Kontakt-Seite (Story: `contact`)

Hier ist mir beim Redigieren ein Verstoß gegen eure eigene Projektregel aufgefallen: Die CLAUDE.md schreibt ausdrücklich Kandidaten-Perspektive vor ("Ich bringe mit", "Ich suche"), nicht Anbieter-Perspektive ("Ich unterstütze", "Meine Kunden"). Der aktuelle Kontakt-Text verstößt genau dagegen:

**headline** — ersetzen:
> Alt: "Lassen Sie uns Wachstum neu definieren"
> **Neu:** "Lassen Sie uns über die nächste Aufgabe sprechen"

**text** — ersetzen:
> Alt: "Ich unterstütze Unternehmen bei KI-gestütztem Wachstum, moderner Commerce-Transformation und nachhaltiger digitaler Skalierung." *(reine Anbieter-Sprache, genau das Gegenteil eurer eigenen Regel)*
> **Neu:** "Sie suchen jemanden, der KI-Transformation auf Führungsebene verantwortet, mit 25 Jahren operativer Erfahrung im Rücken. Ich suche genau diese Aufgabe."

email, location — unverändert.

---

## 5. Bereits im Code umgesetzt (kein Storyblok nötig)

- **Architektur-Grafik-Bug behoben:** `components/JoergGlinkaWebsite.jsx` lädt das Diagramm jetzt aus `public/ki-architektur.webp` (1720×1120, korrekte Auflösung) statt aus dem Storyblok-Feld, das auf eine 230×150-Vorschaugrafik zeigte.
- **Meta-Tags** (Titel, Description, Keywords, OpenGraph, Twitter) auf allen vier Seiten sowie im Root-Layout aktualisiert: Leitbegriff jetzt "Leitung KI-Transformation & Digitalisierung", "KI-Manager"/"KI-Prozessmanager" bleiben in den Keywords für die Suchreichweite erhalten.
- **JSON-LD** (`app/layout.tsx`): `jobTitle`, `description`, `seeks` und `knowsAbout` der Person entsprechend angepasst.
- **FAQ** (`components/FAQSection.jsx`): neue erste Frage "Sucht Jörg Glinka eine Fachposition oder eine Führungsposition?", die übrigen fünf Fragen sprachlich gestrafft (Passiv raus, ein Absatz mit konkreten Zahlen ergänzt).
- **llms.txt / llms-full.txt** neu geschrieben: Leitbegriff, Terminologie-Mapping (KI-Manager/KI-Prozessmanager/KI-Beauftragter/AI Manager bleiben als Synonyme benannt, wichtig für KI-Suchmaschinen), CMO-Übergang jetzt auch hier in einem Satz erklärt statt verschwiegen.
- **Header/Footer:** Subline und Copyright-Zeile einheitlich auf "Leitung KI-Transformation & Digitalisierung" gesetzt.
- **Portfolio-Overrides** (`challengeOverrides`/`outcomeOverrides`) um den neu formulierten Beleg-Text für "Profitables Wachstum" ergänzt.
- Alle neu geschriebenen Texte wurden auf Em-Dashes, Passiv-Konstruktionen, Floskeln und künstliche Dreier-Aufzählungen geprüft (Humanizer-Skill).

## 6. Bitte vor dem Deploy prüfen

1. **Foto:** Startseite nutzt weiterhin ein KI-generiertes Bild (Dateiname verrät es: `chatgpt-image-...`). Über die Storyblok-Oberfläche das `hero_image`-Asset der Startseite gegen ein echtes Foto tauschen, zum Beispiel das gleiche wie auf der About-Seite (`IMG_4146.webp`), oder ein neues.
2. **Weiterbildungsstunden-Diskrepanz** (siehe oben, About-Timeline): IBM/AWS-Kurse verifizieren oder streichen.
3. **Live-Seite weicht vom lokalen Repo ab:** Beim Nachrecherchieren ist aufgefallen, dass die aktuell live auf glinka.tech ausgelieferte Kontaktseite andere Meta-Tags und einen anderen Header-Untertitel zeigt als das, was im lokalen Repo steht (z. B. "KI & Transformation" statt "KI-Management" in der Kopfzeile, andere Meta-Keywords). Das deutet auf einen nicht gepushten oder nicht deployten Zwischenstand hin. Bitte vor dem nächsten Push kurz `git status` und `git log` gegen den aktuellen Vercel-Deploy prüfen, damit nichts überschrieben wird, was live schon anders und möglicherweise absichtlich geändert war.
4. **Kleinere, optionale Konsistenzfrage:** Die vier Portfolio-Kategorien sind auf Englisch getaggt ("AI / Productivity / Operations" etc.), während der Rest der Seite konsequent Deutsch ist. Nicht Teil dieses Auftrags, aber bei Gelegenheit angleichen.

## 7. Nichts-vergessen-Checkliste

- [x] CMO-Story ehrlich erzählt (Startseite kurz, About ausführlich, Timeline konsistent)
- [x] Berater-Floskel "Orientierung und Klarheit in komplexen Transformationsphasen" entfernt
- [x] Weitere Floskeln/Passiv-Konstruktionen im bestehenden Text gefunden und ersetzt (icp_text, Services-Karte KI-Management)
- [x] Ein Leitthema (KI-Transformation, Führungsebene), Commerce/Growth als Beleg statt gleichrangige Säule, konsistent auf Home, About, Portfolio
- [x] Architektur-Grafik-Bug behoben (Code)
- [x] SEO/GEO: Meta-Tags, JSON-LD, llms.txt, llms-full.txt, FAQ konsistent zum neuen Leitthema, Suchbegriffe "KI-Manager"/"KI-Prozessmanager" bleiben erhalten
- [x] Anbieter-Sprache auf der Kontaktseite gefunden (Verstoß gegen eigene CLAUDE.md-Regel) und auf Kandidaten-Perspektive korrigiert
- [x] Humanizer-Pass: keine Em-Dashes, keine forcierten Dreier-Aufzählungen, kein "nicht nur X, sondern Y", Passiv wo sinnvoll aufgelöst
- [ ] **Offen, braucht dich:** Foto-Austausch Startseite, Weiterbildungsstunden-Klärung, Storyblok-Felder einpflegen, git/Deploy-Abgleich vor dem Push
