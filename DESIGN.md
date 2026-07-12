# Trust Entruempelung Berlin Designsystem

Dieses Designsystem ist die verbindliche Grundlage fuer die Website von Trust Entruempelung Berlin. Es uebersetzt allgemeine DESIGN.md-Prinzipien in eine eigene, serieuze Gestaltung fuer einen deutschen Entruempelungsbetrieb. Es kopiert keine fremde Marke.

## Markenwirkung und Designziele

Trust Entruempelung Berlin soll ruhig, verlaesslich, klar und hochwertig wirken. Die Website muss sofort zeigen: Hier arbeitet ein organisierter Dienstleister, der Raeume sauber frei macht, Termine abstimmt und transparent einschaetzt.

Ziele:
- serioeser lokaler Dienstleistungsbetrieb statt SaaS-, Startup- oder KI-Optik
- klare Lesbarkeit vor dekorativen Effekten
- helle, saubere Flaechen mit Blau als Vertrauensfarbe
- einfache Orientierung auf Smartphone und Desktop
- starke, aber nicht laute Handlungsaufforderungen
- keine erfundenen Bewertungen, Preise, Auszeichnungen oder Versprechen

## Farbpalette

Primaerfarbe:
- Trust Navy: `#324E66`
  Einsatz: Header-Akzente, Primaerbuttons, Footer, Prozess- und Vertrauensflaechen.

Sekundaerfarben:
- Trust Steel: `#5F7B94`
  Einsatz: Hover-Zustaende, dezente Akzente, Icons, Kicker.
- Trust Mist: `#E8EFF4`
  Einsatz: helle Infobereiche, Fokus-Umfeld, dezente Linienflaechen.
- Trust Line: `#D7E1E9`
  Einsatz: Rahmen, Trennlinien, Formularfelder.

Hintergrundfarben:
- Page Warm White: `#F7F4F3`
  Einsatz: Seitenhintergrund, ruhige Abschnittsabgrenzung.
- Surface White: `#FFFFFF`
  Einsatz: Karten, Header, Formulare, Hauptabschnitte.
- Surface Soft: `#F8FAFB`
  Einsatz: dezente Unterflaechen.

Textfarben:
- Text Strong: `#101114`
  Einsatz: Headlines, Navigation, wichtige Labels.
- Text Body: `#2A3037`
  Einsatz: Fliesstext.
- Text Muted: `#586370`
  Einsatz: Beschreibungen, Meta-Informationen.
- Text Inverted: `#FFFFFF`
  Einsatz: dunkle blaue Flaechen.

Sonderfarbe:
- WhatsApp Green: `#25D366`
  Nur fuer WhatsApp-Buttons erlaubt.

Nicht erlaubt:
- Lila Verlaeufe
- Neonfarben
- Beige/braune Dominanz
- zu viele Blauabstufungen auf einer Flaeche

## Typografie

Schriftfamilie:
- Systemschrift: `"Inter", "Segoe UI", Arial, Helvetica, sans-serif`
- Keine dekorativen Schriften.

Schriftgroessen:
- H1 Desktop: `clamp(34px, 4vw, 52px)`
- H1 Mobile: maximal ca. `40px`
- H2: `clamp(26px, 2.8vw, 38px)`
- H3: `clamp(20px, 1.6vw, 24px)`
- Body: `16px`
- Kleine Hinweise: `14px`

Zeilenhoehen:
- Headlines: `1.08` bis `1.18`
- Body: `1.62`
- Buttons: `1.15`

Regeln:
- Keine uebergrossen Hero-Ueberschriften.
- Ueberschriften sind klar und sachlich.
- Lange Textbloecke erhalten begrenzte Breite.

## Abstands- und Rastersystem

Basis: 4/8-System.

Tokens:
- `--space-1: 4px`
- `--space-2: 8px`
- `--space-3: 12px`
- `--space-4: 16px`
- `--space-5: 24px`
- `--space-6: 32px`
- `--space-7: 48px`
- `--space-8: 64px`

Abschnittsabstaende:
- Desktop: 56-72px
- Tablet: 44-60px
- Mobile: 36-48px

Container:
- Standard: `1180px`
- Breit: `1320px`
- Schmaler Text: `820px`
- Mobile Rand: 20-24px

Grid:
- Desktop: 3-4 Spalten je nach Inhalt
- Tablet: 2 Spalten
- Mobile: 1 Spalte, Hero-Vorteile duerfen bei Platz 2 Spalten behalten

## Breakpoints

- `360px`: sehr kleine Smartphones
- `390px`: Standard-Smartphones
- `768px`: Tablet / grosse Smartphones
- `1024px`: Tablet quer / kleine Laptops
- `1440px`: grosse Desktop-Ansicht

Navigation wechselt spaetestens bei `1080px` in das Mobile-Menue, damit der Header nicht quetscht.

## Border-Radius

- UI-Elemente: `4px`
- Karten und Panels: `6px`
- Keine pillenfoermigen Standard-Startup-Karten.
- Keine stark runden KI-Template-Boxen.

## Schatten

Schatten sind sparsam und weich:
- Soft: `0 12px 28px rgba(16, 17, 20, .06)`
- Card: `0 18px 38px rgba(16, 17, 20, .08)`

Keine schweren, farbigen oder schwebenden Schatten.

## Buttons und Call-to-Actions

Primaerbutton:
- Hintergrund `#324E66`
- Text weiss
- klare Rechteckform mit 4px Radius
- Mindesthoehe 48px

Sekundaerbutton:
- weiss
- dunkler Text
- Linie `#D7E1E9`

WhatsApp:
- nur `#25D366`
- darf sichtbar sein, aber nicht das gesamte Design dominieren

Regeln:
- Buttons haben sichtbare Hover- und Fokuszustaende.
- Touch-Ziele mindestens 44px hoch/breit.
- Keine zu vielen gleich starken Buttons in einem Block.

## Navigation

Desktop:
- kompakter Header
- Logo links
- Hauptnavigation klar und dunkel
- Leistungen als Dropdown
- Kontakt- und Anruf-CTA sichtbar

Mobile:
- Zwei-Strich-Menue bleibt erhalten
- Reihenfolge entspricht Desktop
- Leistungen erst nach Tippen sichtbar
- Menue darf nicht horizontal scrollen

## Hero-Bereiche

Hero:
- nutzt vorhandenes Bildmaterial
- Bild vollflaechig und ruhig abgedunkelt
- Text gut lesbar
- keine Textboxen mit schwerem Hintergrund
- H1 kurz und sachlich
- Vorteile reduziert, klar und scanbar

Nicht erlaubt:
- riesige Marketing-Heroes
- dunkle, unlesbare Bilder
- plakative Rabatte oder kuenstliche Versprechen
- Split-SaaS-Heroes

## Leistungs- und Informationskarten

Karten:
- weiss, klare Linie, dezenter Schatten
- kurze Ueberschrift, lesbarer Text
- Icon/Kicker klein und konsistent
- nicht ueberladen

Prozess- und Vertrauenselemente:
- koennen blau hinterlegt sein
- klare drei Schritte
- nicht als eine ueberfuellte Gesamtbox

## Formulare

Formulare:
- Labels immer sichtbar
- Felder mindestens 48px hoch
- deutliche Rahmen
- Fokuszustand mit Trust Mist / Trust Steel
- Fehlermeldungen duerfen nicht nur ueber Farbe funktionieren

Formulare duerfen keine Inhalte verdecken und muessen auf Mobile einspaltig laufen.

## Bilder und Icons

Bilder:
- vorhandene Bilder verwenden
- ruhig, realistisch, nicht stockig ueberinszeniert
- Hero-Bild mit Overlay fuer Lesbarkeit

Icons:
- sparsam
- einfache Linien-/Blockicons
- keine fremden Markenicons ausser technisch notwendige Kontaktkontexte

## Footer

Footer:
- Trust Navy Hintergrund
- Logo auf weisser Flaeche, falls sonst nicht lesbar
- klare Spalten
- Links gut anklickbar
- keine Platzhalterdaten

## Fokus- und Hover-Zustaende

Fokus:
- `outline: 3px solid #9DB6C9`
- `outline-offset: 3px`

Hover:
- dezent
- keine grossen Bewegungen
- Karten heben sich maximal ueber Rahmen/Schatten ab

## Mobile Regeln

- Mobile zuerst denken
- Keine horizontalen Scrollbalken
- Header kompakt halten
- Callbar darf Inhalte nicht verdecken
- Buttons in der Callbar muessen gut tippbar sein
- Karten werden einspaltig, ausser kompakte Hero-Vorteile duerfen zweispaltig bleiben
- Text darf nicht ueberlaufen oder ueberlappen

## Barrierefreiheit

- ausreichende Kontraste
- sichtbarer Tastaturfokus
- semantische Buttons und Links
- klare Formularlabels
- keine Animationen, die Inhalte verstecken
- `prefers-reduced-motion` respektieren

## Erlaubte Gestaltungsmuster

- helle Abschnitte mit klarer Typografie
- blaue Vertrauens- oder Prozessflaechen
- dezente Karten mit Linie und Schatten
- klare Listen und FAQ-Akkordeons
- kompakter Header
- mobile Callbar fuer Anfrage, Anruf und WhatsApp

## Ausdruecklich verbotene Gestaltungsmuster

- KI-Template-Look mit generischen Karten und uebertriebenen Rundungen
- SaaS-/Startup-Hero mit abstrakten Verlaeufen
- lila oder bunte Verlaeufe
- erfundene Bewertungen, Preise, Auszeichnungen oder Garantien
- uebergrosse Headlines
- versteckte Inhalte durch Scrollanimation
- ueberladene Karten
- kopierte Markenlogos oder geschuetzte Inhalte
- horizontales Scrollen auf Mobile
