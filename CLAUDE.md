@AGENTS.md

# glinka.tech — Projektdokumentation

## Stack

| Schicht | Technologie |
|---------|-------------|
| Framework | Next.js 16.2.6 (App Router) |
| Styling | Tailwind CSS v4 |
| CMS | Storyblok |
| Hosting | Vercel |
| Domain | glinka.tech (registriert bei united-domains.de) |
| Lokale Entwicklung | `npm run dev` → localhost:3010 |

---

## Positionierung der Website

Die Website richtet sich an **potenzielle Arbeitgeber** (Festanstellung / CDO / CTO / VP-Ebene) — nicht an Kunden oder Interessenten für Beratungsleistungen.

**Sprache:** Kandidaten-Perspektive ("Ich bringe mit", "Ich suche"), nicht Anbieter-Perspektive ("Ich unterstütze", "Meine Kunden").

**Zielposition:** KI-Prozessmanagement & Digitale Transformation in Festanstellung.

---

## Architektur — Welche Inhalte wo gepflegt werden

### In Storyblok gepflegt (CMS)
Alle Fließtexte, Headlines, Badges, Bilder auf diesen Stories:

| Story-Slug | Seite |
|-----------|-------|
| `joerg-glinka-website` | Startseite |
| `about_page` | About / Werdegang |
| `portfolio` | Portfolio / Referenzen |
| `contact` | Kontaktseite |

### Im Quellcode gepflegt (hardcodiert)
- **Header:** Subline, Button-Text ("Gespräch vereinbaren"), Navigation
- **Footer:** Text, Copyright
- **Meta-Tags:** title, description, OG-Tags (je Page-Datei)
- **Structured Data:** JSON-LD in `app/layout.tsx`
- **About-Seite:** Seitennavigation CTA-Texte am Ende
- **Portfolio-Seite:** Seitennavigation CTA-Texte am Ende, Cases-Überschrift
- **Sitemap:** `app/sitemap.ts`
- **llms.txt / llms-full.txt:** `public/`-Ordner

---

## Tailwind CSS v4 — Wichtige Besonderheiten

```css
/* Import-Syntax (nicht @tailwind base/components/utilities) */
@import "tailwindcss";

/* Custom Tokens */
@theme inline { ... }

/* Custom Utilities */
@layer utilities { ... }
```

**Spezifitätsprobleme** → `!important`-Modifier verwenden:
```jsx
className="type-label !text-cyan-400 !text-base"
```

**Element+Klasse-Selektoren** müssen als separate Overrides definiert werden:
```css
h2.type-h1 { font-size: 4rem; }
h3.type-h1 { font-size: 3.25rem; }
```

**H1-Farbe** muss *außerhalb* von `@layer utilities` stehen (Spezifität):
```css
h1.type-h1, h1.type-display { color: #f4f4f5; }
```

---

## Typografie-System (`app/globals.css`)

```
.type-display  2.8rem → 3rem (sm) → 3.75rem (md) → 5rem (lg)
.type-h1       2rem   → 3rem (sm) → 3.75rem (md) → 4.5rem (lg)
h2.type-h1     1.75rem → 3rem (sm) → 3.75rem (md) → 4rem (lg), letter-spacing: -0.03em
h3.type-h1     1.5rem → 2rem (sm) → 2.75rem (md) → 3.25rem (lg)
.type-h2       1.5rem → 1.875rem (sm) → 2.25rem (md) → 3rem (lg)
.type-h3       1.25rem → 1.875rem (md)
.type-lead     1.25rem → 1.5rem (md), color: zinc-300
.type-body     1.25rem → 1.5rem (md), color: zinc-400
.type-label    0.875rem, uppercase, zinc-500
```

---

## Button-Klassen (`app/globals.css`)

| Klasse | Aussehen | Verwendung |
|--------|----------|------------|
| `btn-primary` | Gelb (yellow-400) | Primäre CTAs |
| `btn-secondary` | Cyan (cyan-400) | Sekundäre CTAs |
| `btn-ghost` | Gelb transparent | "↑ Nach oben"-Links |

**Konsistenz:** Überall `"Gespräch vereinbaren"` — nie "Termin vereinbaren" oder "Strategiegespräch vereinbaren".

---

## Farbpalette

| Farbe | Verwendung |
|-------|------------|
| `cyan-400` | Akzentfarbe, Badges, Divider, Stat-Labels, Pfeile, Buttons |
| `yellow-400` | Primäre CTA-Buttons |
| `zinc-300` | `.type-lead` (Fließtext hell) |
| `zinc-400` | `.type-body` (Fließtext normal) |
| `zinc-500` | `.type-label` (Labels) |
| `white/10` | Border-Farbe für Karten und Trennlinien |

---

## Storyblok Feldstruktur

### Story: `joerg-glinka-website` (Startseite)

```
hero_badge         Badge-Text oben
hero_title_line_1  Erste Zeile Hauptheadline (type-display)
hero_title_line_2  Zweite Zeile
hero_title_line_3  Dritte Zeile
hero_text          Lead-Text (plain text)
hero_subtext       Kleinerer Subtext (leer lassen)
hero_image         Profilbild (nicht aktiv gerendert)
stat_1_value       Kennzahl 1 (z.B. "25+")
stat_1_label       Label Kennzahl 1
stat_2_value       Kennzahl 2
stat_2_label       Label Kennzahl 2
stat_3_value       Kennzahl 3
stat_3_label       Label Kennzahl 3
icp_eyebrow        Eyebrow über ICP-Headline
icp_headline       ICP-Bereich Headline
icp_text           ICP-Bereich Fließtext
challenge_badge    Badge Challenge-Bereich
challenge_headline Challenge-Headline
challenge_intro    Challenge-Intro-Text
challenge_items[]  Arrow-Liste (Pfeile + cyan Text)
  └── .text        Text des Listenpunkts
services_headline  Services-Überschrift
services_text      Services-Intro
services[]         Service-Karten
  └── .tag         Tag/Kategorie
  └── .title       Karten-Titel
  └── .description Karten-Text
testimonials[]     Testimonials (unverändert lassen)
```

**Hinweis:** `methodology_items` und `portfolio_items` werden in Storyblok geladen aber nie gerendert (Dead Code in `JoergGlinkaWebsite.jsx`).

### Story: `about_page` (About-Seite)

```
hero_badge         Badge
hero_headline      H1 (kurz halten für Mobile — max. 4 Wörter)
hero_text          Lead-Text (Rich Text)
image              Profilbild
story_badge        Badge Story-Bereich
story_headline     Story-Headline
story_text         Story-Fließtext (Rich Text, persönlicher Werdegang)
focus_badge        Badge Fokus-Bereich
focus_headline     Fokus-Headline
focus_intro        Fokus-Intro-Text
focus_1_number     "01"
focus_1_title      Fokus-Punkt 1 Titel
focus_1_text       Fokus-Punkt 1 Text
focus_2_number     "02"
focus_2_title      Fokus-Punkt 2 Titel
focus_2_text       Fokus-Punkt 2 Text
focus_3_number     "03"
focus_3_title      Fokus-Punkt 3 Titel
focus_3_text       Fokus-Punkt 3 Text
timeline_items[]   Werdegang-Timeline
  └── .title       Positions-/Stationsbezeichnung
  └── .text        Beschreibung (1–2 Sätze)
```

### Story: `portfolio` (Portfolio-Seite)

```
hero_badge         Badge
hero_headline      H1 (type-display)
hero_text          Lead-Text (Rich Text)
metrics[]          Kennzahlen-Leiste
  └── .value       Wert (z.B. "+200%")
  └── .label       Beschriftung
portfolio_items[]  Fallstudien (abwechselndes 2-Spalten-Layout)
  └── .category    Kategorie-Label (cyan, uppercase)
  └── .title       Projekt-Titel (H3)
  └── .image       Projektbild
  └── .challenge   "Focus"-Text
  └── .outcome     "Impact"-Text
  └── .tags[]      Tag-Chips
philosophy_badge   Badge Philosophie-Bereich
philosophy_headline Philosophie-Headline
philosophy_text    Philosophie-Text (Rich Text)
cta_badge          Badge CTA-Bereich
cta_headline       CTA-Headline
cta_text           CTA-Text (Rich Text)
```

### Story: `contact` (Kontaktseite)

```
headline           H1
text               Lead-Text
email              E-Mail-Adresse
location           Standort-Text
```

---

## Git-Workflow

**Commits aus dem Sandbox funktionieren, Push nicht.** HTTP 403 vom Proxy.

→ Push immer manuell im Terminal:
```bash
cd /Users/jorgglinka/joerg-glinka-site
git push origin main
```

Falls HEAD.lock blockiert:
```bash
rm /Users/jorgglinka/joerg-glinka-site/.git/HEAD.lock
```

---

## SEO

- **Sitemap:** `app/sitemap.ts` (6 Seiten, alle korrekt konfiguriert)
- **Google Search Console:** Eigentümer glinka@gmail.com, Domain-Verifizierung via DNS TXT bei united-domains.de
- **og-image:** `public/og-image.jpg` (1200×630)
- **llms.txt:** `public/llms.txt` und `public/llms-full.txt` — kandidaten-sprachig
- **Structured Data:** JSON-LD in `app/layout.tsx` (jobTitle: "KI-Prozessmanagement & Digitale Transformation")

---

## Bekannte offene Punkte

1. **Dead Code:** `methodology_items` und `portfolio_items` in `JoergGlinkaWebsite.jsx` (Zeilen 6–7) werden geladen aber nie gerendert. Kann entfernt werden.
2. **Storyblok-Bereinigung:** Felder `subtitle`, `hero_subtext`, `icp_card_1/2/3`, `results_*`, `experience_*` in der Home-Story werden nicht mehr gerendert — können in Storyblok geleert oder gelöscht werden.
3. **Timeline-Items (About):** Noch mit Placeholder-Daten — echte CV-Daten eintragen.
4. **Portfolio-Items:** Noch mit alten Inhalten — auf neue Positionierung (Kandidatensprache) aktualisieren.
