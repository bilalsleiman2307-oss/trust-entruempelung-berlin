import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://www.trust-entruempelung-berlin.de";
const phone = "03023957118";
const whatsapp = "493023957118";
const email = "entruempelung@trust-bm-service.de";
const formEmail = "entruempelung@trust-bm-service.de";
// Hier die echte Formspree-Formular-ID eintragen.
const FORM_ENDPOINT = "https://formspree.io/f/FORMULAR_ID_EINTRAGEN";
const assetVersion = "perf-1";
const phoneDisplay = "030 23957118";
const phoneHref = `tel:${phone}`;
const whatsappHref = whatsapp ? `https://wa.me/${whatsapp}` : "/kontakt/";
const whatsappAttrs = `href="${whatsappHref}" target="_blank" rel="noopener"`;
const socialImage = `${siteUrl}/assets/hero-entruempelung.jpg`;
const legalCompany = "Trust B&M Service UG (haftungsbeschränkt)";
const owner = "Bilal Sleiman";
const streetAddress = "Ramlerstr. 2a";
const postalCode = "13355";
const city = "Berlin";
const registerNumber = "HRB 288982 B";

const nav = [
  ["Startseite", "/"],
  ["Preise", "/preise/"],
  ["Einsatzgebiete", "/#einsatzgebiete"],
  ["Kontakt", "/kontakt/"],
];

const services = [
  {
    slug: "entruempelung-berlin",
    keyword: "Entrümpelung Berlin",
    short: "Entrümpelung Berlin",
    title: "Entrümpelung Berlin | Wohnung, Keller & Hausrat räumen lassen",
    description: "Entrümpelung Berlin vom professionellen Entrümpelungsdienst: Wohnung, Keller, Dachboden, Garage und Hausrat räumen lassen. Kostenlose Besichtigung, Festpreis nach Einschätzung und besenreine Übergabe.",
    h1: "Entrümpelung Berlin - Wohnung, Keller & Hausrat professionell räumen lassen",
    image: "Heller Berliner Altbauflur nach besenreiner Übergabe",
    intro: "Unsere Entrümpelung Berlin richtet sich an Privatkunden, Angehörige, Eigentümer, Hausverwaltungen und Firmen. Wir prüfen Umfang, Etage, Zugang, Parkmöglichkeit, Demontageaufwand und gewünschtes Übergabedatum, bevor ein Festpreis genannt wird.",
    includes: ["Wohnung, Haus, Keller, Dachboden und Garage", "Sperrmüll, Möbel, Hausrat und Elektrogeräte", "Entrümpelung für Privatkunden, Vermieter und Firmen"],
    situations: ["Wohnung leer räumen vor Übergabe", "Keller und Dachboden nach Jahren wieder nutzbar machen", "Hausrat nach Auszug, Sanierung oder Nachlass entfernen"],
    compareTitle: "Entrümpelung oder Sperrmüllabholung: Was ist der Unterschied?",
    compareText: "Eine Sperrmüllabholung betrifft meist einzelne Möbelstücke. Eine Entrümpelung in Berlin umfasst Planung, Tragen, Sortierung, Demontage, Entsorgung und auf Wunsch eine besenreine Übergabe ganzer Räume.",
    faq: [
      ["Was kostet eine Entrümpelung in Berlin?", "Die Kosten hängen von Menge, Etage, Zugang, Parkmöglichkeit, Demontage und Entsorgungsart ab. Für eine seriöse Entrümpelung Berlin nennen wir den Festpreis nach Fotos oder Besichtigung."],
      ["Wie lange dauert eine Entrümpelung?", "Kleine Räume sind oft an einem Tag erledigt. Ganze Wohnungen, Keller und Dachböden planen wir je nach Umfang mit passendem Team und Zeitfenster."],
      ["Kann ich kurzfristig einen Termin bekommen?", "Kurzfristige Termine sind möglich, wenn Umfang, Zugang und Entsorgungskapazität passen. Fotos und vollständige Eckdaten helfen bei der schnellen Einschätzung."],
      ["Was ist im Festpreis enthalten?", "Der Festpreis umfasst die vereinbarte Räumung, Tragen, Transport, fachgerechte Entsorgung und die besenreine Übergabe, wenn sie beauftragt wurde."],
      ["Was passiert mit Möbeln und Sperrmüll?", "Möbel und Sperrmüll werden getrennt, getragen, transportiert und fachgerecht entsorgt. Verwertbare Gegenstände können vorab für eine Wertanrechnung geprüft werden."],
      ["Wird die Wohnung besenrein übergeben?", "Ja, bei der Entrümpelung Berlin kann die besenreine Übergabe direkt vereinbart werden."],
      ["Gibt es eine Wertanrechnung?", "Wenn verwertbare Gegenstände vorhanden sind, prüfen wir realistisch, ob eine Wertanrechnung möglich ist."],
      ["Arbeitet Trust Entrümpelung auch für Hausverwaltungen?", "Ja, wir stimmen Zugang, Terminfenster, Rückfragen und Übergabe für Hausverwaltungen und Vermieter klar ab."],
    ],
    links: ["wohnungsaufloesung-berlin", "haushaltsaufloesung-berlin", "kellerentruempelung-berlin", "dachbodenentruempelung-berlin", "garagenentruempelung-berlin", "sperrmuellabholung-berlin", "preise", "kontakt"],
  },
  {
    slug: "wohnungsaufloesung-berlin",
    keyword: "Wohnungsauflösung Berlin",
    short: "Wohnungsauflösung Berlin",
    title: "Wohnungsauflösung Berlin | Wohnung besenrein räumen lassen",
    description: "Wohnungsauflösung Berlin mit Trust: Wohnung leer räumen, Möbel und Hausrat entsorgen, Wertanrechnung prüfen und besenrein übergeben. Kostenlose Besichtigung und Festpreis nach Einschätzung.",
    h1: "Wohnungsauflösung Berlin - Wohnung leer räumen und besenrein übergeben",
    image: "Besenreine Wohnung mit Licht durch Fenster",
    intro: "Eine Wohnungsauflösung Berlin braucht klare Planung, besonders wenn Übergabetermin, Vermieter, Angehörige oder Hausverwaltung beteiligt sind. Trust räumt Möbel, Hausrat, Sperrmüll und Nebenräume und bereitet die Wohnung auf Wunsch besenrein für die Übergabe vor.",
    includes: ["Möbel, Hausrat und Sperrmüll", "Küche, Teppiche, Lampen und Elektrogeräte", "Sortierung, Demontage und fachgerechte Entsorgung"],
    situations: ["Nach Umzug, Kündigung oder Pflegeheim", "Wohnungsauflösung nach Todesfall", "Übergabe an Vermieter, Eigentümer oder Hausverwaltung"],
    compareTitle: "Wohnungsauflösung oder Entrümpelung?",
    compareText: "Die Wohnungsauflösung in Berlin meint meist die komplette Räumung einer Wohnung inklusive Übergabeziel. Eine Entrümpelung kann auch einzelne Räume wie Keller, Dachboden oder Garage betreffen.",
    faq: [
      ["Was kostet eine Wohnungsauflösung in Berlin?", "Der Preis richtet sich nach Wohnungsgröße, Menge, Etage, Fahrstuhl, Parkmöglichkeit, Demontage und Entsorgung. Nach Einschätzung erhalten Sie einen klaren Festpreis."],
      ["Wie lange dauert eine Wohnungsauflösung?", "Viele Wohnungen lassen sich an einem Tag räumen. Größere Haushalte oder schwierige Zugänge planen wir mit mehr Zeit und Teamstärke."],
      ["Muss ich bei der Wohnungsauflösung vor Ort sein?", "Nicht zwingend. Schlüsselübergabe, Rückfragen und Abschluss können vorher klar abgestimmt werden."],
      ["Kann die Wohnung besenrein übergeben werden?", "Ja, die besenreine Übergabe ist ein häufiger Bestandteil unserer Wohnungsauflösung Berlin."],
      ["Was passiert mit Möbeln und Hausrat?", "Möbel und Hausrat werden sortiert, getragen, transportiert und fachgerecht entsorgt oder bei Verwertbarkeit geprüft."],
      ["Übernehmen Sie Wohnungsauflösungen nach Todesfall?", "Ja, wir arbeiten diskret und stimmen persönliche Unterlagen, Wertgegenstände und Rückfragen vorher ab."],
    ],
    links: ["entruempelung-berlin", "haushaltsaufloesung-berlin", "nachlassaufloesung-berlin", "preise", "kontakt"],
  },
  {
    slug: "haushaltsaufloesung-berlin",
    keyword: "Haushaltsauflösung Berlin",
    short: "Haushaltsauflösung Berlin",
    title: "Haushaltsauflösung Berlin | Hausrat räumen & entsorgen lassen",
    description: "Haushaltsauflösung Berlin mit Trust: Hausrat, Möbel, Sperrmüll und Gegenstände räumen, sortieren und fachgerecht entsorgen lassen. Kostenlose Besichtigung und Festpreis nach Einschätzung.",
    h1: "Haushaltsauflösung Berlin - Hausrat räumen, sortieren und entsorgen lassen",
    image: "Geordnete Kartons und Schutzmaterial vor einer Haushaltsauflösung",
    intro: "Bei einer Haushaltsauflösung Berlin geht es um mehr als Tragen. Ein kompletter Hausstand wird sortiert, verwertbare Gegenstände werden geprüft, Sperrmüll und Hausrat werden fachgerecht entsorgt und Räume werden für Übergabe, Verkauf oder Sanierung vorbereitet.",
    includes: ["Möbel, Hausrat, Kleidung, Bücher und Geschirr", "Demontage, Transport und Entsorgung", "Besenreine Übergabe nach Vereinbarung"],
    situations: ["Haushaltsauflösung nach Umzug, Pflegeheim oder Todesfall", "Diskrete Unterstützung für Angehörige und Eigentümer", "Kompletter Hausstand muss termingerecht frei werden"],
    compareTitle: "Haushaltsauflösung mit Wertanrechnung",
    compareText: "Wenn Möbel, Geräte oder Gegenstände verwertbar sind, prüfen wir vorab eine realistische Wertanrechnung. Nicht jeder Gegenstand hat Marktwert, aber die Prüfung gehört zu einer transparenten Haushaltsauflösung Berlin.",
    faq: [
      ["Was kostet eine Haushaltsauflösung in Berlin?", "Die Kosten hängen von Umfang, Etage, Tragewegen, Demontage, Entsorgung und möglicher Wertanrechnung ab."],
      ["Was wird bei einer Haushaltsauflösung mitgenommen?", "Möbel, Hausrat, Kleidung, Bücher, Geschirr, Sperrmüll und Elektrogeräte können nach Absprache geräumt werden."],
      ["Muss vorher sortiert werden?", "Nein. Wenn bestimmte Unterlagen oder Erinnerungsstücke gesichert werden sollen, besprechen wir das vor der Räumung."],
      ["Gibt es eine Wertanrechnung?", "Ja, verwertbare Gegenstände können geprüft und im Angebot berücksichtigt werden."],
      ["Ist eine besenreine Übergabe möglich?", "Ja, die Räume können nach der Haushaltsauflösung Berlin besenrein übergeben werden."],
    ],
    links: ["wohnungsaufloesung-berlin", "nachlassaufloesung-berlin", "entruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "nachlassaufloesung-berlin",
    keyword: "Nachlassauflösung Berlin",
    short: "Nachlassauflösung Berlin",
    title: "Nachlassauflösung Berlin | Diskret Wohnung & Hausrat räumen",
    description: "Nachlassauflösung Berlin mit Trust: Wohnung, Möbel und Hausrat nach Todesfall diskret räumen, Wertanrechnung prüfen und besenrein übergeben. Kostenlose Besichtigung und Einschätzung.",
    h1: "Nachlassauflösung Berlin - diskret räumen, sortieren und übergeben",
    image: "Schlüsselübergabe an Wohnungstür, Hände ohne erkennbare Gesichter",
    intro: "Eine Nachlassauflösung Berlin verlangt Ruhe, klare Absprachen und Diskretion. Wir stimmen Schlüsselübergabe, persönliche Unterlagen, Wertgegenstände, Rückfragen und Übergabe so ab, dass Angehörige nicht dauerhaft vor Ort sein müssen.",
    includes: ["Wohnung, Keller, Dachboden und Hausrat", "Sortierung nach vorherigen Vorgaben", "Übergabe an Angehörige, Vermieter oder Hausverwaltung"],
    situations: ["Wohnung nach Todesfall räumen", "Angehörige wohnen nicht in Berlin", "Nachlass muss für Kündigungsfrist oder Verkauf geordnet werden"],
    compareTitle: "Diskrete Nachlassauflösung ohne falsche Versprechen",
    compareText: "Wir versprechen keine pauschalen Erlöse. Bei verwertbaren Gegenständen prüfen wir eine realistische Wertanrechnung und dokumentieren vorab, welche Dinge besonders beachtet werden sollen.",
    faq: [
      ["Was kostet eine Nachlassauflösung in Berlin?", "Der Preis richtet sich nach Umfang, Etage, Zugang, Möbelmenge, Nebenräumen und Entsorgungsaufwand."],
      ["Können Angehörige die Nachlassauflösung aus der Ferne organisieren?", "Ja, Schlüsselübergabe, Fotos, Rückfragen und Abschluss können vorab klar abgestimmt werden."],
      ["Wie gehen Sie mit persönlichen Unterlagen um?", "Wir besprechen vorher, welche Unterlagen, Fotos oder Erinnerungsstücke gesichert werden sollen."],
      ["Ist eine Wertanrechnung möglich?", "Ja, verwertbare Gegenstände können geprüft werden. Wir bleiben dabei realistisch und transparent."],
      ["Wird die Wohnung besenrein übergeben?", "Ja, eine besenreine Übergabe kann für die Nachlassauflösung Berlin vereinbart werden."],
    ],
    links: ["wohnungsaufloesung-berlin", "haushaltsaufloesung-berlin", "entruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "firmenaufloesung-berlin",
    keyword: "Firmenauflösung Berlin",
    short: "Firmenauflösung Berlin",
    title: "Firmenauflösung Berlin | Büro, Lager & Gewerbe räumen",
    description: "Firmenauflösung Berlin mit Trust: Büro, Praxis, Lager und Gewerbeflächen räumen, Möbel demontieren, entsorgen und termingerecht übergeben. Kostenlose Besichtigung und Einschätzung.",
    h1: "Firmenauflösung Berlin - Büro, Lager und Gewerbeflächen räumen lassen",
    image: "Bürofläche nach Firmenauflösung",
    intro: "Eine Firmenauflösung Berlin braucht belastbare Zeitfenster, klare Zuständigkeiten und saubere Übergaben. Trust räumt Büros, Praxen, Lager und Gewerbeflächen mit Blick auf Zugang, Datenschutz, Demontage und Entsorgung.",
    includes: ["Büromöbel, Aktenmöbel, Regale und Lagerbestände", "Demontage, Transport und fachgerechte Entsorgung", "Übergabe an Eigentümer, Verwaltung oder Projektleitung"],
    situations: ["Büroauflösung nach Umzug", "Lagerfläche muss leer übergeben werden", "Praxen, Kanzleien oder Gewerbeeinheiten werden geräumt"],
    compareTitle: "Für Hausverwaltungen, Eigentümer und Unternehmen",
    compareText: "Wir halten Rückfragen, Zutritt, Zeitfenster und Übergabe schriftlich klar. Bei Akten oder sensiblen Gegenständen werden die Zuständigkeiten vorab besprochen.",
    faq: [
      ["Was kostet eine Firmenauflösung in Berlin?", "Die Kosten richten sich nach Fläche, Menge, Etage, Demontage, Transportwegen und Entsorgungsart."],
      ["Räumen Sie auch Büros und Praxen?", "Ja, Büroflächen, Praxen, kleine Lager und Gewerbeeinheiten gehören zur Firmenauflösung Berlin."],
      ["Können Termine außerhalb üblicher Zeiten geplant werden?", "Nach Absprache sind passende Zeitfenster möglich, wenn Objekt, Zugang und Entsorgung planbar sind."],
      ["Was passiert mit Büromöbeln?", "Büromöbel werden demontiert, getragen, transportiert und fachgerecht entsorgt oder bei Verwertbarkeit geprüft."],
      ["Arbeiten Sie für Hausverwaltungen?", "Ja, wir stimmen Auftrag, Zugang und Übergabe mit Hausverwaltungen und Eigentümern ab."],
    ],
    links: ["entruempelung-berlin", "sperrmuellabholung-berlin", "moebeltransport-berlin", "preise", "kontakt"],
  },
  {
    slug: "kellerentruempelung-berlin",
    keyword: "Kellerentrümpelung Berlin",
    short: "Kellerentrümpelung Berlin",
    title: "Kellerentrümpelung Berlin | Keller räumen & entsorgen lassen",
    description: "Kellerentrümpelung Berlin mit Trust: Kellerraum, Verschlag, Möbel, Kartons und Sperrmüll räumen lassen. Kostenlose Besichtigung und Festpreis nach Einschätzung.",
    h1: "Kellerentrümpelung Berlin - Keller räumen und entsorgen lassen",
    image: "Leerer Kellerraum nach Räumung",
    intro: "Eine Kellerentrümpelung Berlin ist oft enger, staubiger und komplizierter als gedacht. Wir prüfen Zugang, Tragewege, Licht, Etage, Parkmöglichkeit und Entsorgungsart, bevor wir den Keller räumen.",
    includes: ["Kellerraum, Kellerbox und Verschlag", "Kartons, Möbel, Hausrat und Sperrmüll", "Tragen durch Altbauflur oder Tiefgarage"],
    situations: ["Keller vor Umzug leer machen", "Keller nach Jahren wieder nutzbar machen", "Keller für Hausverwaltung oder Verkauf räumen"],
    compareTitle: "Kellerentrümpelung mit sauberer Planung",
    compareText: "Bei Berliner Altbauten planen wir Laufwege, Treppenhausschutz und Parkmöglichkeit vorab ein. So bleibt die Kellerentrümpelung Berlin für alle Beteiligten übersichtlich.",
    faq: [
      ["Was kostet eine Kellerentrümpelung in Berlin?", "Der Preis hängt von Menge, Zugang, Trageweg, Entsorgungsart und Parkmöglichkeit ab."],
      ["Muss ich den Keller vorher sortieren?", "Nein. Wenn bestimmte Gegenstände erhalten bleiben sollen, markieren oder besprechen wir sie vorher."],
      ["Räumen Sie auch Keller ohne Fahrstuhl?", "Ja, Tragewege und Treppen werden vorab in die Einschätzung einbezogen."],
      ["Was passiert mit Sperrmüll aus dem Keller?", "Sperrmüll wird getragen, transportiert und fachgerecht entsorgt."],
      ["Kann nur ein einzelner Keller geräumt werden?", "Ja, Kellerentrümpelung Berlin ist auch als einzelner Auftrag möglich."],
    ],
    links: ["entruempelung-berlin", "dachbodenentruempelung-berlin", "garagenentruempelung-berlin", "sperrmuellabholung-berlin", "kontakt"],
  },
  {
    slug: "dachbodenentruempelung-berlin",
    keyword: "Dachbodenentrümpelung Berlin",
    short: "Dachbodenentrümpelung Berlin",
    title: "Dachbodenentrümpelung Berlin | Dachboden räumen lassen",
    description: "Dachbodenentrümpelung Berlin mit Trust: Dachboden räumen, alte Möbel, Kartons, Sperrmüll und Hausrat entsorgen lassen. Kostenlose Besichtigung und Festpreis nach Einschätzung.",
    h1: "Dachbodenentrümpelung Berlin - Dachboden räumen und entsorgen lassen",
    image: "Mitarbeiter tragen Kartons aus einem Berliner Dachboden, Gesichter nicht erkennbar",
    intro: "Eine Dachbodenentrümpelung Berlin verlangt besondere Aufmerksamkeit für Tragewege, Treppenhaus, Staub, alte Möbel und die Entsorgung. Wir planen Zugang und Umfang vorab, damit der Dachboden geordnet geräumt wird.",
    includes: ["Alte Möbel, Kartons, Kisten und Sperrmüll", "Zugang, Treppenhaus und Tragewege", "Räumung für Sanierung, Verkauf oder Hausverwaltung"],
    situations: ["Dachboden vor Sanierung leeren", "Abteil im Mehrfamilienhaus räumen", "Alte Kisten und Möbel entsorgen"],
    compareTitle: "Dachboden räumen ohne Chaos im Treppenhaus",
    compareText: "Gerade in Altbauten stimmen wir Laufwege und Schutzbedarf ab. Die Dachbodenentrümpelung Berlin wird so geplant, dass Hausflur und Übergabe sauber bleiben.",
    faq: [
      ["Was kostet eine Dachbodenentrümpelung in Berlin?", "Menge, Zugang, Etage, Trageweg und Entsorgung bestimmen den Preis."],
      ["Räumen Sie auch Dachböden in Altbauten?", "Ja, Altbauten sind häufig. Wir prüfen Tragewege und Parkmöglichkeit vorab."],
      ["Was passiert mit alten Möbeln und Kartons?", "Sie werden getragen, sortiert, transportiert und fachgerecht entsorgt."],
      ["Muss ich vorher sortieren?", "Nicht zwingend. Wichtige Gegenstände können vorab markiert oder besprochen werden."],
      ["Wie lange dauert eine Dachbodenentrümpelung?", "Kleine Dachböden dauern oft nur wenige Stunden, größere Flächen planen wir nach Besichtigung."],
    ],
    links: ["entruempelung-berlin", "kellerentruempelung-berlin", "garagenentruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "garagenentruempelung-berlin",
    keyword: "Garagenentrümpelung Berlin",
    short: "Garagenentrümpelung Berlin",
    title: "Garagenentrümpelung Berlin | Garage räumen & entsorgen lassen",
    description: "Garagenentrümpelung Berlin mit Trust: Garage leer räumen, Sperrmüll, alte Möbel, Kartons und Gegenstände entsorgen lassen. Kostenlose Besichtigung und Festpreis nach Einschätzung.",
    h1: "Garagenentrümpelung Berlin - Garage räumen und Gegenstände entsorgen lassen",
    image: "Aufgeräumte Garage nach Räumung",
    intro: "Bei einer Garagenentrümpelung Berlin geht es oft um Sperrmüll, alte Möbel, Kartons, Werkzeuge und Gegenstände, die jahrelang liegen geblieben sind. Wir klären vorab, was entsorgt werden darf und welche Stoffe gesondert behandelt werden müssen.",
    includes: ["Möbel, Kartons, Werkzeuge und Sperrmüll", "Prüfung von Reifen, Farben und Sonderstoffen", "Garage räumen für Verkauf, Umzug oder Hausverwaltung"],
    situations: ["Garage wieder für Auto oder Lagerung nutzen", "Garage vor Übergabe leer machen", "Sperrmüll aus Garage entfernen"],
    compareTitle: "Was mit Sonderstoffen passiert",
    compareText: "Farben, Lacke, Öl oder andere Sonderstoffe werden nicht achtlos mitgenommen. Wir besprechen vorher, welche Entsorgung dafür geeignet ist.",
    faq: [
      ["Was kostet eine Garagenentrümpelung in Berlin?", "Der Preis hängt von Menge, Sperrmüll, Sonderstoffen, Zugang und Entsorgungsart ab."],
      ["Kann ich nur eine Garage räumen lassen?", "Ja, eine einzelne Garagenentrümpelung Berlin ist möglich."],
      ["Was passiert mit alten Reifen oder Farben?", "Solche Stoffe werden vorab besprochen und gesondert entsorgt, wenn nötig."],
      ["Nehmen Sie Sperrmüll aus der Garage mit?", "Ja, Möbel, Kartons und Sperrmüll können getragen und entsorgt werden."],
      ["Wie schnell ist ein Termin möglich?", "Das hängt von Umfang und Tourenplanung ab. Fotos helfen bei einer schnellen Einschätzung."],
    ],
    links: ["entruempelung-berlin", "kellerentruempelung-berlin", "sperrmuellabholung-berlin", "preise", "kontakt"],
  },
  {
    slug: "sperrmuellabholung-berlin",
    keyword: "Sperrmüllabholung Berlin",
    short: "Sperrmüllabholung Berlin",
    title: "Sperrmüllabholung Berlin | Möbel & Sperrmüll abholen lassen",
    description: "Sperrmüllabholung Berlin mit Trust: Möbel, Matratzen, Schränke und Sperrmüll abholen, tragen und fachgerecht entsorgen lassen. Kostenlose Besichtigung und kurzfristige Termine möglich.",
    h1: "Sperrmüllabholung Berlin - Möbel und Sperrmüll abholen lassen",
    image: "Möbel werden diskret aus einem Treppenhaus getragen, Gesichter nicht erkennbar",
    intro: "Die Sperrmüllabholung Berlin ist sinnvoll, wenn Möbel, Matratzen, Schränke oder einzelne sperrige Gegenstände aus Wohnung, Keller, Dachboden oder Garage getragen und entsorgt werden sollen.",
    includes: ["Möbel, Matratzen, Schränke und Hausrat", "Sperrmüll aus Wohnung, Keller, Dachboden oder Garage", "Tragen, Transport und fachgerechte Entsorgung"],
    situations: ["Sofa oder Schrank muss weg", "Sperrmüll steht nicht transportbereit", "Mehrere Möbelstücke sollen kurzfristig abgeholt werden"],
    compareTitle: "BSR oder Entrümpelungsfirma?",
    compareText: "Wenn Gegenstände aus der Wohnung getragen, demontiert oder kurzfristig abgeholt werden sollen, kann eine Sperrmüllabholung Berlin durch Trust sinnvoller sein als reine Selbstorganisation.",
    faq: [
      ["Was kostet eine Sperrmüllabholung in Berlin?", "Die Kosten hängen von Menge, Etage, Trageweg, Demontage und Entsorgung ab."],
      ["Welche Gegenstände gelten als Sperrmüll?", "Typisch sind Möbel, Matratzen, Schränke, Regale, Teppiche und andere sperrige Haushaltsgegenstände."],
      ["Tragen Sie Möbel aus der Wohnung?", "Ja, Tragen aus Wohnung, Keller, Dachboden oder Garage kann vereinbart werden."],
      ["Kann Sperrmüll kurzfristig abgeholt werden?", "Kurzfristige Termine sind möglich, wenn Umfang und Tourenplanung passen."],
      ["Holen Sie auch einzelne Möbelstücke ab?", "Ja, einzelne Möbelstücke können abgeholt, transportiert oder entsorgt werden."],
    ],
    links: ["entruempelung-berlin", "moebeltransport-berlin", "kellerentruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "moebeltransport-berlin",
    keyword: "Möbeltransport Berlin",
    short: "Möbeltransport Berlin",
    title: "Möbeltransport Berlin | Möbel tragen, abholen & transportieren",
    description: "Möbeltransport Berlin mit Trust: Möbel abholen, tragen, transportieren oder entsorgen lassen. Ideal für einzelne Möbelstücke, kleine Umzüge und kurzfristige Transporte in Berlin.",
    h1: "Möbeltransport Berlin - Möbel tragen, abholen und transportieren lassen",
    image: "Transporter vor Berliner Mehrfamilienhaus ohne Kennzeichen",
    intro: "Möbeltransport Berlin eignet sich für einzelne Möbelstücke, kleine Transporte und Aufträge, bei denen Tragen, Demontage oder Entsorgung direkt mitgedacht werden muss.",
    includes: ["Sofa, Schrank, Bett, Tisch und Haushaltsmöbel", "Transport mit Tragen und Demontage", "Möbeltransport oder Möbelentsorgung"],
    situations: ["Möbel von A nach B transportieren", "Einzelnes Sofa oder Schrank abholen", "Möbeltransport mit kleiner Entrümpelung kombinieren"],
    compareTitle: "Möbeltransport oder Möbelentsorgung",
    compareText: "Wenn Möbel weiter genutzt werden, organisieren wir Transport und Übergabe. Wenn sie weg sollen, kann der Möbeltransport Berlin mit fachgerechter Entsorgung kombiniert werden.",
    faq: [
      ["Was kostet ein Möbeltransport in Berlin?", "Etage, Trageweg, Adressen, Demontage und Größe der Möbel bestimmen den Preis."],
      ["Transportieren Sie einzelne Möbelstücke?", "Ja, auch einzelne Möbelstücke können angefragt werden."],
      ["Bauen Sie Möbel auch ab?", "Demontage ist nach Absprache möglich und wird vorab in die Einschätzung aufgenommen."],
      ["Tragen Sie Möbel aus höheren Etagen?", "Ja, Etage und Fahrstuhl werden bei der Planung berücksichtigt."],
      ["Kann ich Möbel auch entsorgen lassen?", "Ja, Möbeltransport Berlin kann mit Möbelentsorgung verbunden werden."],
    ],
    links: ["kleine-umzuege-berlin", "sperrmuellabholung-berlin", "entruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "kleine-umzuege-berlin",
    keyword: "Kleine Umzüge Berlin",
    short: "Kleine Umzüge Berlin",
    title: "Kleine Umzüge Berlin | Kleinumzug & Möbeltransport",
    description: "Kleine Umzüge Berlin mit Trust: Kleinumzug, Möbeltransport und einzelne Transporte für Wohnungen, Studenten, Senioren und kleine Haushalte. Kostenlose Besichtigung anfragen.",
    h1: "Kleine Umzüge Berlin - Kleinumzug und Möbeltransport aus einer Hand",
    image: "Wenige geordnete Umzugskartons in Berliner Wohnung",
    intro: "Kleine Umzüge Berlin sind ideal für 1-Zimmer-Wohnungen, WG-Zimmer, Seniorenumzüge oder wenige Möbelstücke. Trust plant Tragen, Transport, mögliche Demontage und auf Wunsch eine kleine Entrümpelung mit.",
    includes: ["1-Zimmer-Wohnung, WG-Zimmer oder wenige Möbel", "Tragen, Transport und Aufbau nach Absprache", "Kombination mit Entrümpelung oder Sperrmüllabholung"],
    situations: ["Nur ein paar Sachen umziehen", "Studentenumzug oder Seniorenumzug", "Kleiner Umzug mit Möbeltransport und Entsorgung"],
    compareTitle: "Kleinumzug mit klarer Umfangsprüfung",
    compareText: "Auch kleine Umzüge in Berlin brauchen Angaben zu Etage, Fahrstuhl, Parkmöglichkeit, Menge und Adressen. So lässt sich der Aufwand seriös einschätzen.",
    faq: [
      ["Was kostet ein kleiner Umzug in Berlin?", "Der Preis hängt von Menge, Etage, Tragewegen, Adressen, Fahrstuhl und gewünschter Hilfe ab."],
      ["Was zählt als Kleinumzug?", "Typisch sind WG-Zimmer, 1-Zimmer-Wohnungen, wenige Möbel oder einzelne Transporte."],
      ["Machen Sie auch Studentenumzüge?", "Ja, kleine Umzüge Berlin eignen sich gut für Studenten und WG-Zimmer."],
      ["Kann ich Möbeltransport und Entrümpelung kombinieren?", "Ja, Transport und Entsorgung können zusammen geplant werden."],
      ["Sind kurzfristige Termine möglich?", "Je nach Umfang und Verfügbarkeit sind kurzfristige Termine möglich."],
    ],
    links: ["moebeltransport-berlin", "sperrmuellabholung-berlin", "entruempelung-berlin", "preise", "kontakt"],
  },
];

const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

const districtAreas = [
  { name: "Mitte", slug: "mitte", context: "zentralen Altbauwohnungen, Büros und dicht bebauten Wohnhäusern" },
  { name: "Charlottenburg", slug: "charlottenburg", context: "Altbauwohnungen, Eigentumswohnungen und Gewerbeflächen rund um City West" },
  { name: "Prenzlauer Berg", slug: "prenzlauer-berg", context: "Altbauwohnungen, Dachgeschossen und Innenhoflagen" },
  { name: "Friedrichshain", slug: "friedrichshain", context: "Wohnungen, Gewerbeflächen und engen Berliner Treppenhäusern" },
  { name: "Kreuzberg", slug: "kreuzberg", context: "Altbauhäusern, Hinterhöfen und gemischten Wohn- und Gewerbeflächen" },
  { name: "Neukölln", slug: "neukoelln", context: "Wohnungen, Kellern, Dachböden und Gewerbeeinheiten" },
  { name: "Pankow", slug: "pankow", context: "Wohnhäusern, Familienwohnungen und Nebenräumen" },
  { name: "Wedding", slug: "wedding", context: "Altbauwohnungen, Kellern und dicht bewohnten Mehrfamilienhäusern" },
  { name: "Reinickendorf", slug: "reinickendorf", context: "Wohnungen, Häusern, Garagen und Nebenräumen" },
  { name: "Spandau", slug: "spandau", context: "Wohnungen, Häusern, Kellern und Gewerbeflächen" },
  { name: "Schöneberg", slug: "schoeneberg", context: "Altbauwohnungen, Eigentumswohnungen und Übergaben an Verwaltungen" },
  { name: "Steglitz", slug: "steglitz", context: "Wohnungen, Häusern, Kellern und Nachlassfällen" },
  { name: "Wilmersdorf", slug: "wilmersdorf", context: "Eigentumswohnungen, Altbauflächen und ruhigen Wohnlagen" },
  { name: "Zehlendorf", slug: "zehlendorf", context: "Häusern, Wohnungen, Garagen und größeren Haushalten" },
  { name: "Tempelhof", slug: "tempelhof", context: "Wohnungen, Gewerbeflächen, Kellern und Garagen" },
  { name: "Köpenick", slug: "koepenick", context: "Wohnungen, Häusern, Gartenlauben und Nebenräumen" },
  { name: "Treptow", slug: "treptow", context: "Wohnungen, Häusern, Kellern und Gewerbeobjekten" },
  { name: "Lichtenberg", slug: "lichtenberg", context: "Wohnungen, Plattenbauten, Kellern und Gewerbeflächen" },
  { name: "Marzahn", slug: "marzahn", context: "Wohnungen, Kellern, Garagen und größeren Wohnanlagen" },
  { name: "Hellersdorf", slug: "hellersdorf", context: "Wohnungen, Häusern, Kellern und Nachlassauflösungen" },
];

const priorityDistrictSlugs = [
  "wedding",
  "mitte",
  "prenzlauer-berg",
  "pankow",
  "reinickendorf",
  "charlottenburg",
  "neukoelln",
  "friedrichshain",
];

const localDistrictProfiles = {
  wedding: {
    location: "Wedding ist geprägt von dicht bewohnten Mehrfamilienhäusern, Altbauwohnungen, Kellerräumen und Innenhöfen. Vor einer Räumung sind Etage, Fahrstuhl, Hofzugang und Haltemöglichkeit besonders wichtig.",
    access: "Bei engen Treppenhäusern oder längeren Wegen aus dem Hinterhaus planen wir Tragewege, Teamgröße und Transport so, dass Hausflur und Übergabe sauber bleiben.",
    entruempelung: "Für Entrümpelungen in Wedding geht es häufig um Keller, Dachboden, Wohnung, Garage oder kleinere Gewerbeflächen. Entscheidend ist, was verwertet, getrennt entsorgt oder besenrein übergeben werden soll.",
    wohnungsaufloesung: "Bei Wohnungsauflösungen in Wedding steht meist die vollständige Räumung mit abgestimmtem Übergabetermin im Vordergrund, zum Beispiel nach Umzug, Pflegeheim oder Kündigung.",
    nachlassaufloesung: "Bei Nachlassauflösungen in Wedding klären wir vorab, welche Unterlagen, Erinnerungsstücke oder verwertbaren Gegenstände gesichert werden sollen, bevor Möbel und Hausrat geräumt werden.",
  },
  mitte: {
    location: "In Mitte treffen Wohnungen, Büros, Gewerbeflächen und dicht genutzte Innenstadtlagen aufeinander. Zugang, Ladezone, Aufzug und Zeitfenster sollten deshalb früh geklärt werden.",
    access: "Gerade bei zentralen Lagen hilft eine genaue Vorbereitung: Fotos, Etage, Parkmöglichkeit und Ansprechpartner vor Ort machen die Einschätzung deutlich zuverlässiger.",
    entruempelung: "Entrümpelungen in Mitte betreffen oft Wohnungen, Keller, Büros oder einzelne Gewerbeflächen. Die Leistung bleibt auf Räumung, Transport, Entsorgung und mögliche besenreine Übergabe ausgerichtet.",
    wohnungsaufloesung: "Eine Wohnungsauflösung in Mitte braucht klare Abstimmung, wenn Vermieter, Verwaltung oder Eigentümer einen festen Übergabetermin vorgeben.",
    nachlassaufloesung: "Nachlassauflösungen in Mitte werden diskret geplant, besonders wenn Angehörige nicht dauerhaft vor Ort sein können oder die Schlüsselübergabe organisiert werden muss.",
  },
  "prenzlauer-berg": {
    location: "Prenzlauer Berg hat viele Altbauten, Seitenflügel, Dachgeschosse und Innenhoflagen. Dadurch sind Treppenhaus, Durchgänge und Tragewege für die Planung besonders relevant.",
    access: "Wenn kein Fahrstuhl vorhanden ist oder Gegenstände aus Dachboden und Keller getragen werden müssen, wird der Aufwand vor der Zusage realistisch eingeschätzt.",
    entruempelung: "Bei Entrümpelungen in Prenzlauer Berg geht es häufig um Keller, Dachboden, einzelne Räume oder Wohnungen mit Hausrat, Möbeln und Sperrmüll.",
    wohnungsaufloesung: "Wohnungsauflösungen in Prenzlauer Berg werden so vorbereitet, dass Möbel, Hausrat und Nebenräume passend zum Übergabetermin geräumt werden.",
    nachlassaufloesung: "Bei Nachlassauflösungen in Prenzlauer Berg stehen ruhige Abstimmung, Sortierung persönlicher Dinge und eine nachvollziehbare Übergabe im Vordergrund.",
  },
  pankow: {
    location: "Pankow umfasst unterschiedliche Wohnsituationen: Mehrfamilienhäuser, Familienwohnungen, Häuser, Garagen und Nebenräume. Umfang und Zufahrt können daher stark variieren.",
    access: "Für die Planung sind Adresse, Etage, Fahrstuhl, Hof- oder Garagenzugang und Parkmöglichkeit hilfreich, damit Team und Fahrzeug passend vorbereitet werden.",
    entruempelung: "Entrümpelungen in Pankow können einzelne Keller, Garagen, Dachböden oder ganze Wohnungen betreffen. Wichtig ist eine klare Trennung zwischen Räumung, Entsorgung und Übergabeziel.",
    wohnungsaufloesung: "Bei Wohnungsauflösungen in Pankow geht es oft um die vollständige Räumung von Möbeln, Hausrat und Nebenräumen vor einer Übergabe.",
    nachlassaufloesung: "Nachlassauflösungen in Pankow werden mit Angehörigen, Erben oder Verwaltung abgestimmt, damit persönliche Unterlagen und verwertbare Gegenstände nicht übersehen werden.",
  },
  reinickendorf: {
    location: "Reinickendorf verbindet Wohnungen, Häuser, Garagen und größere Nebenflächen. Dadurch können Menge, Zufahrt und Tragewege je nach Objekt sehr unterschiedlich sein.",
    access: "Vor Ort zählen praktische Details: Kann ein Fahrzeug nah stehen, gibt es einen Aufzug, müssen Keller oder Garage separat geräumt werden und wer übernimmt die Übergabe?",
    entruempelung: "Entrümpelungen in Reinickendorf eignen sich für Wohnungen, Keller, Garagen, Häuser oder Gewerbeflächen, wenn Räumung und Entsorgung strukturiert geplant werden sollen.",
    wohnungsaufloesung: "Bei Wohnungsauflösungen in Reinickendorf hilft ein klarer Ablauf von Besichtigung, Angebot, Räumung und besenreiner Übergabe.",
    nachlassaufloesung: "Nachlassauflösungen in Reinickendorf werden sensibel vorbereitet, besonders wenn Angehörige Termine, Schlüssel und Rückfragen aus der Ferne koordinieren.",
  },
  charlottenburg: {
    location: "Charlottenburg hat Altbauwohnungen, Eigentumswohnungen, Büros und Gewerbeflächen in stark genutzten Lagen. Parkplatz und Zugang sollten deshalb nicht erst am Einsatztag geklärt werden.",
    access: "Bei Vorderhaus, Seitenflügel, Fahrstuhl oder engen Treppenhäusern prüfen wir, wie Möbel und Hausrat sicher aus dem Objekt getragen werden können.",
    entruempelung: "Entrümpelungen in Charlottenburg betreffen oft Wohnungen, Keller, Dachböden, Büros oder einzelne Gewerbeflächen mit Möbeln und Sperrmüll.",
    wohnungsaufloesung: "Wohnungsauflösungen in Charlottenburg werden auf den Übergabetermin ausgerichtet, damit Möbel, Hausrat und Nebenräume sauber abgearbeitet werden.",
    nachlassaufloesung: "Bei Nachlassauflösungen in Charlottenburg sind Diskretion, Sortierung persönlicher Unterlagen und Abstimmung mit Angehörigen oder Verwaltung besonders wichtig.",
  },
  neukoelln: {
    location: "Neukölln ist häufig dicht bebaut, mit Altbauwohnungen, Hinterhöfen, Kellern, Dachböden und gemischten Wohn- und Gewerbelagen. Gute Vorbereitung spart hier unnötige Wege.",
    access: "Entscheidend sind Etage, Fahrstuhl, Hofzugang, Treppenhausbreite und Parkmöglichkeit. Diese Punkte fließen in die Einschätzung vor Beginn ein.",
    entruempelung: "Entrümpelungen in Neukölln drehen sich oft um Keller, Wohnungen, Dachböden, Garagen oder kleine Gewerbeflächen mit Hausrat, Möbeln und Sperrmüll.",
    wohnungsaufloesung: "Bei Wohnungsauflösungen in Neukölln werden Möbel, Hausrat, persönliche Gegenstände und Nebenräume passend zum gewünschten Übergabeziel geplant.",
    nachlassaufloesung: "Nachlassauflösungen in Neukölln brauchen eine ruhige Abstimmung, damit Erinnerungsstücke, Unterlagen und verwertbare Gegenstände vor der Räumung berücksichtigt werden.",
  },
  friedrichshain: {
    location: "Friedrichshain hat viele Altbauten, Innenhöfe, enge Treppenhäuser und gemischte Wohn- und Gewerbeflächen. Deshalb ist die Einschätzung von Zugang und Tragewegen zentral.",
    access: "Fotos, Etage, Fahrstuhl, Hofsituation und Parkmöglichkeit helfen, Aufwand und Zeitfenster realistisch zu planen.",
    entruempelung: "Entrümpelungen in Friedrichshain passen für Wohnungen, Keller, Dachböden oder Gewerbeflächen, wenn Möbel, Hausrat und Sperrmüll geordnet entfernt werden sollen.",
    wohnungsaufloesung: "Eine Wohnungsauflösung in Friedrichshain wird auf vollständige Räumung, Nebenräume und Übergabe vorbereitet, nicht nur auf einzelne Sperrmüllstücke.",
    nachlassaufloesung: "Bei Nachlassauflösungen in Friedrichshain werden persönliche Unterlagen, Wertgegenstände und Rückfragen vor der eigentlichen Räumung besprochen.",
  },
};

const districtServiceTypes = [
  {
    key: "entruempelung",
    label: "Entrümpelung",
    slugPrefix: "entruempelung",
    baseSlug: "entruempelung-berlin",
    titleVerb: "professionell räumen lassen",
    description: (area) => `Entrümpelung ${area.name}: Wohnung, Keller, Dachboden, Garage oder Gewerbefläche räumen lassen. Kostenlose Besichtigung, Festpreis nach Einschätzung und besenreine Übergabe.`,
    intro: (area) => `Für die Entrümpelung in ${area.name} prüft Trust Entrümpelung Berlin Umfang, Zugang, Etage, Fahrstuhl, Parkmöglichkeit, Demontage und Entsorgung vorab. Gerade bei ${area.context} ist eine klare Einschätzung wichtig, damit Räumung, Transport und Übergabe zuverlässig geplant werden können.`,
    includes: ["Wohnung, Keller, Dachboden, Garage oder Gewerbefläche", "Möbel, Hausrat, Sperrmüll und Elektrogeräte", "Transport, Entsorgung und besenreine Übergabe nach Absprache"],
    situations: (area) => [`Wohnung oder Hausrat in ${area.name} räumen`, "Keller, Dachboden oder Garage wieder nutzbar machen", "Räume für Übergabe, Verkauf oder Sanierung vorbereiten"],
    compareTitle: (area) => `Entrümpelung in ${area.name} mit klarer Einschätzung`,
    compareText: (area) => `Jeder Auftrag in ${area.name} ist anders. Deshalb klären wir Menge, Zugang, Tragewege, Parkmöglichkeit und gewünschtes Übergabeziel, bevor ein Festpreis genannt wird.`,
  },
  {
    key: "wohnungsaufloesung",
    label: "Wohnungsauflösung",
    slugPrefix: "wohnungsaufloesung",
    baseSlug: "wohnungsaufloesung-berlin",
    titleVerb: "Wohnung besenrein übergeben",
    description: (area) => `Wohnungsauflösung ${area.name}: Wohnung leer räumen, Möbel und Hausrat entsorgen, Wertanrechnung prüfen und besenrein übergeben. Kostenlose Besichtigung.`,
    intro: (area) => `Eine Wohnungsauflösung in ${area.name} braucht klare Planung, besonders wenn Vermieter, Eigentümer, Angehörige oder Hausverwaltung beteiligt sind. Trust Entrümpelung Berlin räumt Möbel, Hausrat, Sperrmüll und Nebenräume und bereitet die Wohnung auf Wunsch besenrein für die Übergabe vor.`,
    includes: ["Komplette Wohnung, Küche, Möbel und Hausrat", "Keller, Dachboden und Nebenräume nach Absprache", "Besenreine Übergabe an Vermieter, Eigentümer oder Verwaltung"],
    situations: (area) => [`Wohnung in ${area.name} nach Umzug oder Kündigung räumen`, "Übergabe nach Pflegeheim, Verkauf oder Vermietung vorbereiten", "Möbel, Hausrat und Sperrmüll fachgerecht entsorgen"],
    compareTitle: (area) => `Wohnungsauflösung in ${area.name} ohne unklare Kosten`,
    compareText: (area) => `Vor der Wohnungsauflösung in ${area.name} werden Menge, Etage, Fahrstuhl, Parkmöglichkeit, Demontage und Übergabeziel geklärt. So entsteht ein nachvollziehbarer Festpreis nach Einschätzung.`,
  },
  {
    key: "nachlassaufloesung",
    label: "Nachlassauflösung",
    slugPrefix: "nachlassaufloesung",
    baseSlug: "nachlassaufloesung-berlin",
    titleVerb: "diskret räumen lassen",
    description: (area) => `Nachlassauflösung ${area.name}: Wohnung und Hausrat nach Todesfall diskret räumen, Wertanrechnung prüfen und besenrein übergeben. Kostenlose Besichtigung.`,
    intro: (area) => `Eine Nachlassauflösung in ${area.name} verlangt Ruhe, Diskretion und klare Absprachen. Trust Entrümpelung Berlin stimmt Schlüsselübergabe, persönliche Unterlagen, Wertgegenstände, Rückfragen und Übergabe so ab, dass Angehörige entlastet werden.`,
    includes: ["Wohnung, Keller, Dachboden und Hausrat im Nachlass", "Sortierung nach vorheriger Absprache", "Diskrete Räumung und besenreine Übergabe nach Wunsch"],
    situations: (area) => [`Nachlasswohnung in ${area.name} räumen`, "Angehörige wohnen nicht dauerhaft in Berlin", "Wohnung für Vermieter, Verkauf oder Verwaltung übergeben"],
    compareTitle: (area) => `Nachlassauflösung in ${area.name} mit Ruhe und Struktur`,
    compareText: (area) => `Bei Nachlassfällen in ${area.name} besprechen wir vorab, welche Unterlagen, Erinnerungsstücke oder Wertgegenstände gesichert werden sollen. Verwertbare Gegenstände können realistisch geprüft werden.`,
  },
];

function districtFaq(serviceType, area) {
  const baseFaq = [
    [`Was kostet eine ${serviceType.label} in ${area.name}?`, `Die Kosten hängen von Menge, Etage, Zugang, Fahrstuhl, Parkmöglichkeit, Demontage und Entsorgung ab. Nach Fotos oder kostenloser Besichtigung erhalten Sie eine klare Einschätzung.`],
    [`Ist eine kostenlose Besichtigung in ${area.name} möglich?`, `Ja, eine kostenlose Besichtigung in ${area.name} ist nach Absprache möglich. Fotos und Eckdaten helfen zusätzlich bei der ersten Einschätzung.`],
    [`Wie schnell ist ein Termin in ${area.name} möglich?`, `Das hängt von Umfang, Zugang und Tourenplanung ab. Wenn die Angaben vollständig sind, können auch kurzfristige Termine geprüft werden.`],
    ["Wird besenrein übergeben?", "Ja, die besenreine Übergabe kann direkt vereinbart werden, wenn sie für Vermieter, Eigentümer oder Verwaltung benötigt wird."],
    ["Was passiert mit Möbeln, Hausrat und Sperrmüll?", "Möbel, Hausrat und Sperrmüll werden getragen, transportiert, getrennt und fachgerecht entsorgt. Verwertbare Gegenstände können vorab geprüft werden."],
  ];
  const profile = localDistrictProfiles[area.slug];
  if (!profile) return baseFaq;
  const localQuestion = serviceType.key === "entruempelung"
    ? [`Was ist bei einer Entrümpelung in ${area.name} besonders wichtig?`, `Wichtig sind Angaben zu Keller, Dachboden, Wohnung oder Gewerbefläche sowie zu Etage, Fahrstuhl, Hofzugang und Parkmöglichkeit. So lässt sich die Räumung vorab realistisch planen.`]
    : serviceType.key === "wohnungsaufloesung"
      ? [`Wie läuft eine Wohnungsauflösung in ${area.name} ab?`, `Zuerst werden Umfang, Möbel, Hausrat, Nebenräume und Übergabetermin geklärt. Danach folgen Einschätzung, Angebot, Räumung und auf Wunsch die besenreine Übergabe.`]
      : [`Wie wird eine Nachlassauflösung in ${area.name} abgestimmt?`, `Vor der Räumung werden Ansprechpartner, Schlüssel, persönliche Unterlagen, Erinnerungsstücke und mögliche Wertanrechnung besprochen. Danach wird der Nachlass nach Absprache geräumt.`];
  return [...baseFaq, localQuestion];
}

function districtLinks(area, currentKey) {
  const siblingLinks = districtServiceTypes
    .filter((item) => item.key !== currentKey)
    .map((item) => `${item.slugPrefix}-${area.slug}`);
  return [...siblingLinks, "entruempelung-berlin", "wohnungsaufloesung-berlin", "nachlassaufloesung-berlin", "preise", "kontakt"];
}

function districtAreaBySlug(slug) {
  return districtAreas.find((area) => area.slug === slug);
}

function districtServiceTypeByKey(key) {
  return districtServiceTypes.find((type) => type.key === key);
}

function localServiceKeyForPage(page) {
  if (page.serviceKey) return page.serviceKey;
  if (page.slug === "wohnungsaufloesung-berlin") return "wohnungsaufloesung";
  if (page.slug === "nachlassaufloesung-berlin") return "nachlassaufloesung";
  return "entruempelung";
}

function districtSlugFor(serviceKey, areaSlug) {
  const serviceType = districtServiceTypeByKey(serviceKey) || districtServiceTypes[0];
  return `${serviceType.slugPrefix}-${areaSlug}`;
}

function priorityDistrictLinks(serviceKey, excludeAreaSlug = "", limit = 8) {
  return priorityDistrictSlugs
    .filter((slug) => slug !== excludeAreaSlug)
    .slice(0, limit)
    .map((areaSlug) => {
      const area = districtAreaBySlug(areaSlug);
      const serviceType = districtServiceTypeByKey(serviceKey) || districtServiceTypes[0];
      return {
        slug: districtSlugFor(serviceKey, areaSlug),
        label: `${serviceType.label} ${area?.name || areaSlug}`,
      };
    });
}

function serviceLocalDistrictLinks(page) {
  const coreMap = {
    "entruempelung-berlin": "entruempelung",
    "wohnungsaufloesung-berlin": "wohnungsaufloesung",
    "nachlassaufloesung-berlin": "nachlassaufloesung",
  };
  if (coreMap[page.slug]) return priorityDistrictLinks(coreMap[page.slug], "", 8);
  return priorityDistrictLinks("entruempelung", "", 4);
}

function relatedBrandenburgLinks(page) {
  const core = ["entruempelung-brandenburg", "wohnungsaufloesung-brandenburg", "haushaltsaufloesung-brandenburg", "nachlassaufloesung-brandenburg"];
  const specialMap = {
    "haushaltsaufloesung-brandenburg": ["wohnungsaufloesung-brandenburg", "nachlassaufloesung-brandenburg", "entruempelung-brandenburg", "sperrmuellabholung-brandenburg"],
    "kellerentruempelung-brandenburg": ["entruempelung-brandenburg", "dachbodenentruempelung-brandenburg", "garagenentruempelung-brandenburg", "sperrmuellabholung-brandenburg"],
    "dachbodenentruempelung-brandenburg": ["entruempelung-brandenburg", "kellerentruempelung-brandenburg", "garagenentruempelung-brandenburg", "sperrmuellabholung-brandenburg"],
    "garagenentruempelung-brandenburg": ["entruempelung-brandenburg", "kellerentruempelung-brandenburg", "dachbodenentruempelung-brandenburg", "sperrmuellabholung-brandenburg"],
    "firmenaufloesung-brandenburg": ["entruempelung-brandenburg", "moebeltransport-brandenburg", "sperrmuellabholung-brandenburg", "wohnungsaufloesung-brandenburg"],
    "sperrmuellabholung-brandenburg": ["entruempelung-brandenburg", "moebeltransport-brandenburg", "kellerentruempelung-brandenburg", "garagenentruempelung-brandenburg"],
    "moebeltransport-brandenburg": ["kleine-umzuege-brandenburg", "sperrmuellabholung-brandenburg", "entruempelung-brandenburg", "firmenaufloesung-brandenburg"],
    "kleine-umzuege-brandenburg": ["moebeltransport-brandenburg", "entruempelung-brandenburg", "wohnungsaufloesung-brandenburg", "sperrmuellabholung-brandenburg"],
  };
  const related = specialMap[page.slug] || core;
  return [page.baseServiceSlug, ...related].filter((slug, index, list) => slug !== page.slug && list.indexOf(slug) === index);
}

function makeDistrictPage(area, serviceType) {
  const keyword = `${serviceType.label} ${area.name}`;
  const localProfile = localDistrictProfiles[area.slug] || null;
  return {
    slug: `${serviceType.slugPrefix}-${area.slug}`,
    keyword,
    short: keyword,
    title: `${serviceType.label} ${area.name} | Trust Entrümpelung Berlin`,
    description: serviceType.description(area),
    h1: `${serviceType.label} ${area.name} - ${serviceType.titleVerb}`,
    image: `${serviceType.label} in ${area.name} mit klarer Planung`,
    intro: serviceType.intro(area),
    includes: serviceType.includes,
    situations: serviceType.situations(area),
    compareTitle: serviceType.compareTitle(area),
    compareText: serviceType.compareText(area),
    faq: districtFaq(serviceType, area),
    links: districtLinks(area, serviceType.key),
    type: "district",
    district: area.name,
    districtSlug: area.slug,
    serviceKey: serviceType.key,
    baseServiceSlug: serviceType.baseSlug,
    localProfile,
  };
}

const districtPages = districtAreas.flatMap((area) => districtServiceTypes.map((serviceType) => makeDistrictPage(area, serviceType)));
const districtPageBySlug = Object.fromEntries(districtPages.map((page) => [page.slug, page]));

const brandenburgPlaces = [
  "Potsdam",
  "Falkensee",
  "Oranienburg",
  "Bernau",
  "Teltow",
  "Kleinmachnow",
  "Hennigsdorf",
  "Königs Wusterhausen",
  "Wildau",
  "Ludwigsfelde",
  "Werder",
  "Nauen",
  "Strausberg",
  "Hoppegarten",
  "Blankenfelde-Mahlow",
];

const brandenburgLead = "Potsdam, Falkensee, Oranienburg, Bernau, Teltow, Kleinmachnow, Hennigsdorf, Königs Wusterhausen, Wildau, Ludwigsfelde, Werder, Nauen, Strausberg, Hoppegarten und Blankenfelde-Mahlow";

function serviceNameForArea(service, areaName) {
  return service.short.replace(" Berlin", ` ${areaName}`);
}

function normalizeAreaText(text, areaName) {
  return String(text)
    .replaceAll(" Berlin", ` ${areaName}`)
    .replaceAll(" in Berlin", ` in ${areaName}`)
    .replaceAll("Berliner ", `${areaName}er `);
}

function makeBrandenburgPage(service) {
  const keyword = serviceNameForArea(service, "Brandenburg");
  return {
    ...service,
    slug: service.slug.replace("-berlin", "-brandenburg"),
    keyword,
    short: keyword,
    title: `${keyword} | Trust Entrümpelung Berlin`,
    description: `${keyword} nach Absprache: Räume, Wohnungen, Hausrat oder Sperrmüll im Berliner Umland räumen lassen. Einsatz u. a. in ${brandenburgPlaces.slice(0, 7).join(", ")}. Kostenlose Besichtigung möglich.`,
    h1: `${keyword} - Einsatz im Berliner Umland nach Absprache`,
    image: `${keyword} in Potsdam, Falkensee und weiteren Orten in Brandenburg`,
    intro: `${keyword} ist nach Absprache im Berliner Umland möglich. Trust Entrümpelung Berlin plant Aufträge in Brandenburg sorgfältig, weil Entfernung, Parkmöglichkeit, Etage, Tragewege, Entsorgung und Zeitfenster zusammenpassen müssen. Typische Orte sind ${brandenburgLead}.`,
    includes: service.includes.map((item) => normalizeAreaText(item, "Brandenburg")),
    situations: [
      `${keyword} in Potsdam, Falkensee oder Oranienburg`,
      `Aufträge in Bernau, Teltow, Kleinmachnow oder Hennigsdorf nach Absprache`,
      `Räumung, Transport, Entsorgung und Übergabe im Berliner Umland planen`,
    ],
    compareTitle: `${keyword}: Berlin-nah planen, Aufwand realistisch einschätzen`,
    compareText: `Bei Einsätzen in Brandenburg prüfen wir zuerst Entfernung, Umfang, Zugang, Etage, Parkmöglichkeit und Entsorgungswege. So bleibt klar, ob ein Termin in Potsdam, Falkensee, Oranienburg, Bernau, Teltow, Königs Wusterhausen oder einem anderen Ort sinnvoll geplant werden kann.`,
    faq: [
      [`Bietet Trust ${keyword} an?`, `${keyword} ist nach Absprache möglich, vor allem im Berliner Umland. Dazu zählen unter anderem Potsdam, Falkensee, Oranienburg, Bernau, Teltow, Kleinmachnow, Hennigsdorf und Königs Wusterhausen.`],
      ["Welche Orte in Brandenburg kommen infrage?", `Typische Einsatzorte sind ${brandenburgLead}. Weitere Orte prüfen wir nach Entfernung, Umfang und Termin.`],
      [`Was kostet ${keyword}?`, "Die Kosten hängen von Entfernung, Menge, Etage, Zugang, Parkmöglichkeit, Demontage und Entsorgung ab. Nach Fotos oder kostenloser Besichtigung erhalten Sie eine klare Einschätzung."],
      ["Ist eine kostenlose Besichtigung möglich?", "Ja, eine kostenlose Besichtigung ist nach Absprache möglich. Bei kleineren Aufträgen reichen oft Fotos und Eckdaten für die erste Einschätzung."],
      ["Kann die Übergabe besenrein erfolgen?", "Ja, eine besenreine Übergabe kann vereinbart werden, wenn Räume, Wohnung oder Gewerbefläche entsprechend vorbereitet werden sollen."],
    ],
    links: [
      service.slug,
      "entruempelung-brandenburg",
      "wohnungsaufloesung-brandenburg",
      "nachlassaufloesung-brandenburg",
      "preise",
      "kontakt",
    ].filter((value, index, list) => value !== service.slug.replace("-berlin", "-brandenburg") && list.indexOf(value) === index),
    type: "brandenburg",
    district: "Brandenburg",
    baseServiceSlug: service.slug,
  };
}

const brandenburgPages = services.map((service) => makeBrandenburgPage(service));
const brandenburgPageBySlug = Object.fromEntries(brandenburgPages.map((page) => [page.slug, page]));

const pages = [
  {
    slug: "",
    keyword: "Entrümpelung Berlin",
    title: "Entrümpelung Berlin | Wohnungsauflösung & Haushaltsauflösung",
    description: "Trust Entrümpelung Berlin übernimmt Entrümpelung, Wohnungsauflösung, Haushaltsauflösung, Sperrmüllabholung und Nachlassauflösung in Berlin. Kostenlose Besichtigung, Festpreis nach Einschätzung und besenreine Übergabe.",
    h1: "Entrümpelung Berlin - Wohnungsauflösung, Haushaltsauflösung & besenreine Übergabe",
    type: "home",
    faq: [
      ["Was kostet eine Entrümpelung in Berlin?", "Die Kosten hängen von Menge, Etage, Zugang, Parkmöglichkeit, Demontage, Entsorgung und gewünschter Übergabe ab. Trust Entrümpelung Berlin nennt einen Festpreis nach Fotos oder Besichtigung."],
      ["Wie schnell bekomme ich einen Termin?", "Wenn Umfang und Zugang klar sind, sind auch kurzfristige Termine möglich. Fotos und vollständige Angaben beschleunigen die Einschätzung."],
      ["Was ist im Festpreis enthalten?", "Der Festpreis umfasst die vereinbarte Räumung, Tragen, Transport, Entsorgung und auf Wunsch die besenreine Übergabe."],
      ["Muss ich bei der Entrümpelung vor Ort sein?", "Nicht immer. Schlüsselübergabe, Rückfragen und Abschluss können vorher klar abgestimmt werden."],
      ["Was passiert mit Möbeln und Sperrmüll?", "Möbel und Sperrmüll werden sortiert, getragen, transportiert und fachgerecht entsorgt. Verwertbare Gegenstände können geprüft werden."],
      ["Übernehmen Sie auch Keller, Dachboden und Garage?", "Ja, Kellerentrümpelung, Dachbodenentrümpelung und Garagenentrümpelung gehören zu den Leistungen in Berlin."],
      ["Machen Sie auch Wohnungsauflösungen nach Todesfall?", "Ja, Nachlassauflösungen und Wohnungsauflösungen nach Todesfall werden diskret und mit klaren Absprachen durchgeführt."],
      ["Arbeiten Sie auch für Hausverwaltungen und Firmen?", "Ja, Trust übernimmt Entrümpelung Berlin auch für Hausverwaltungen, Eigentümer, Büros, Praxen und Gewerbeflächen."],
      ["Kann ich Fotos für die Einschätzung senden?", "Ja, Fotos von Räumen, Etage, Zugang und Gegenständen helfen bei der kostenlosen Einschätzung. Eine kostenlose Besichtigung ist nach Absprache möglich."],
      ["Sind Sie auch in Brandenburg im Einsatz?", "Berlin ist der Schwerpunkt. Angrenzendes Brandenburg ist nach Absprache möglich."],
    ],
  },
  ...services.map((service) => ({ ...service, type: "service" })),
  ...districtPages,
  ...brandenburgPages,
  {
    slug: "preise",
    keyword: "Entrümpelung Kosten Berlin",
    title: "Entrümpelung Kosten Berlin | Preise & Festpreis-Erklärung",
    description: "Was kostet eine Entrümpelung in Berlin? Trust erklärt Preisfaktoren wie Menge, Etage, Zugang, Demontage, Entsorgung und Wertanrechnung. Kostenlose Besichtigung anfragen.",
    h1: "Entrümpelung Kosten Berlin - Preise verstehen und Festpreis anfragen",
    type: "prices",
    faq: [
      ["Warum gibt es keinen seriösen Festpreis ohne Umfang?", "Entrümpelung Kosten Berlin lassen sich erst belastbar einschätzen, wenn Menge, Etage, Zugang, Parkmöglichkeit, Demontage und Entsorgung bekannt sind."],
      ["Welche Faktoren beeinflussen den Preis?", "Wohnungsgröße, Menge, Etage, Fahrstuhl, Parkmöglichkeit, Tragewege, Sonderstoffe, Demontage und Terminwunsch beeinflussen den Preis."],
      ["Ist eine kostenlose Besichtigung möglich?", "Ja, Fotos und kurze Angaben reichen oft für eine erste Einschätzung. Bei größeren Aufträgen ist eine kostenlose Besichtigung nach Absprache möglich."],
      ["Was bedeutet Wertanrechnung?", "Verwertbare Gegenstände können geprüft und realistisch im Angebot berücksichtigt werden."],
      ["Ist selbst entsorgen günstiger?", "Manchmal ja. Wenn Tragen, Transport, Zeit, Fahrzeug, Entsorgung und Übergabetermin zusammenkommen, lohnt sich häufig eine Firma."],
    ],
  },
  {
    slug: "kontakt",
    keyword: "Entrümpelung Berlin Kontakt",
    title: "Kontakt | Trust Entrümpelung Berlin",
    description: "Kontakt zu Trust Entrümpelung Berlin: Kostenlose Besichtigung für Entrümpelung, Wohnungsauflösung, Sperrmüllabholung und Haushaltsauflösung in Berlin anfragen.",
    h1: "Kontakt zu Trust Entrümpelung Berlin",
    type: "contact",
    faq: [
      ["Welche Angaben helfen bei der Anfrage?", "Für den Entrümpelung Berlin Kontakt helfen Fotos, Bezirk, Etage, Fahrstuhl, Parkmöglichkeit, Umfang und gewünschter Zeitraum."],
      ["Kann ich Fotos für die Anfrage senden?", "Ja, Fotos sind für eine schnelle Einschätzung sehr hilfreich. Eine kostenlose Besichtigung ist nach Absprache möglich."],
      ["Wie schnell bekomme ich eine Rückmeldung?", "Die Antwortzeit hängt vom Tagesgeschäft ab. Vollständige Angaben beschleunigen die Einschätzung."],
      ["Gibt es ein Formular?", "Ja, über das Formular können Sie Ihre Anfrage mit Leistung, Bezirk, Etage, Zeitraum und kurzer Beschreibung senden."],
    ],
  },
  {
    slug: "impressum",
    keyword: "Impressum Trust Entrümpelung Berlin",
    title: "Impressum | Trust Entrümpelung Berlin",
    description: "Impressum von Trust Entrümpelung Berlin mit Anbieterkennzeichnung und Kontaktmöglichkeit.",
    h1: "Impressum Trust Entrümpelung Berlin",
    type: "legal",
    legalText: `${legalCompany}\nInhaber: ${owner}\n${streetAddress}\n${postalCode} ${city}\nE-Mail: ${email}\nHandelsregister: ${registerNumber}`,
    faq: [
      ["Wie erreiche ich Trust Entrümpelung Berlin?", `Sie erreichen Trust Entrümpelung Berlin per E-Mail unter ${email}.`],
      ["Wer ist Anbieter der Website?", `Anbieter ist ${legalCompany}, Inhaber ${owner}, ${streetAddress}, ${postalCode} ${city}.`],
    ],
  },
  {
    slug: "datenschutz",
    keyword: "Datenschutz Trust Entrümpelung Berlin",
    title: "Datenschutz | Trust Entrümpelung Berlin",
    description: "Datenschutz von Trust Entrümpelung Berlin mit Hinweisen zur Kontaktaufnahme per Formular, E-Mail und Anfrage.",
    h1: "Datenschutz Trust Entrümpelung Berlin",
    type: "legal",
    legalText: "Wenn Sie Trust Entrümpelung Berlin kontaktieren, werden die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage genutzt. Dazu können Name, Kontaktdaten, Einsatzort, Beschreibung des Auftrags und freiwillig gesendete Fotos gehören. Die Angaben werden nicht für unnötige Werbung verwendet.",
    faq: [
      ["Welche Daten werden bei einer Anfrage verarbeitet?", "Verarbeitet werden die Angaben, die Sie freiwillig senden, zum Beispiel Name, E-Mail, Telefonnummer, Einsatzort, Leistungswunsch und Beschreibung."],
      ["Wofür werden die Daten genutzt?", "Die Daten werden genutzt, um Ihre Anfrage zu beantworten, den Umfang einzuschätzen und einen Termin oder eine Besichtigung vorzubereiten."],
    ],
  },
];

const trustItems = [
  ["Kostenlose Besichtigung", "Fotos oder kurze Beschreibung reichen oft für den Start. Eine Besichtigung ist nach Absprache kostenlos möglich."],
  ["Festpreis nach Besichtigung", "Umfang, Etage und Zugang werden vorher geprüft."],
  ["Besenreine Übergabe", "Auf Wunsch vorbereitet für Vermieter oder Verwaltung."],
  ["Fotos für die Einschätzung", "Schnelle Orientierung über Formular, Telefon oder E-Mail."],
  ["Berlin & Umland", "Berlin ist Schwerpunkt, Brandenburg nach Absprache."],
];

const processSteps = [
  ["Kontaktaufnahme", "Sie nennen Leistung, Bezirk, Etage, Fahrstuhl, Parkmöglichkeit und gewünschten Zeitraum."],
  ["Erste Einschätzung", "Fotos und Eckdaten helfen, Umfang, Zugang und mögliche Entsorgungswege vorab einzuordnen."],
  ["Vor-Ort-Besichtigung", "Bei größeren Aufträgen prüfen wir Räume, Möbel, Hausrat, Tragewege und Übergabeziel vor Ort."],
  ["Transparentes Angebot", "Das Angebot richtet sich nach Aufwand, Menge, Zugang, Demontage, Entsorgung und Terminwunsch."],
  ["Durchführung", "Wir räumen, sortieren, tragen, transportieren und entsorgen die vereinbarten Gegenstände."],
  ["Besenreine Übergabe", "Wenn vereinbart, werden die Räume nach der Räumung besenrein für Übergabe oder weitere Nutzung vorbereitet."],
];

const costFactors = ["Menge & Volumen", "Etage & Fahrstuhl", "Parkmöglichkeit", "Demontage", "Entsorgungsart", "Sonderstoffe", "Wertanrechnung", "Terminwunsch"];

const answerPageSlugs = new Set([
  "",
  "entruempelung-berlin",
  "wohnungsaufloesung-berlin",
  "haushaltsaufloesung-berlin",
  "nachlassaufloesung-berlin",
  "kellerentruempelung-berlin",
  "dachbodenentruempelung-berlin",
  "firmenaufloesung-berlin",
  "sperrmuellabholung-berlin",
  "moebeltransport-berlin",
  "preise",
  "kontakt",
]);

const directAnswerData = {
  "": {
    title: "Direkte Antworten zur Entrümpelung in Berlin",
    intro: "Die wichtigsten Fragen kurz beantwortet, bevor Sie eine Anfrage stellen.",
    answers: [
      ["Was macht Trust Entrümpelung Berlin?", "Trust räumt Wohnungen, Keller, Dachböden, Garagen, Gewerbeflächen und Nachlasswohnungen in Berlin. Dazu gehören Tragen, Transport, fachgerechte Entsorgung und auf Wunsch eine besenreine Übergabe."],
      ["Für wen ist der Service gedacht?", "Der Service richtet sich an Privatkunden, Angehörige, Eigentümer, Vermieter, Hausverwaltungen und Unternehmen, die Räume strukturiert frei bekommen möchten."],
      ["Welche Angaben werden für ein Angebot gebraucht?", "Hilfreich sind Fotos, Bezirk, Etage, Fahrstuhl, Parkmöglichkeit, ungefähre Menge, gewünschter Zeitraum und das Ziel der Übergabe."],
    ],
  },
  "entruempelung-berlin": {
    title: "Kurzantwort: Was umfasst eine Entrümpelung?",
    intro: "Eine Entrümpelung ist mehr als einzelne Gegenstände abholen.",
    answers: [
      ["Welche Räume werden entrümpelt?", "Geräumt werden können Wohnung, Haus, Keller, Dachboden, Garage, einzelne Zimmer und Gewerbeflächen. Der konkrete Umfang wird vor Beginn festgelegt."],
      ["Was passiert mit Hausrat und Sperrmüll?", "Möbel, Kartons, Hausrat und Sperrmüll werden getragen, getrennt, transportiert und fachgerecht entsorgt. Verwertbare Gegenstände können vorab geprüft werden."],
      ["Wann ist die Entrümpelung fertig?", "Fertig ist der Auftrag, wenn die vereinbarten Bereiche geräumt sind. Eine besenreine Übergabe kann vorab als Ziel vereinbart werden."],
    ],
  },
  "wohnungsaufloesung-berlin": {
    title: "Kurzantwort: Wann ist es eine Wohnungsauflösung?",
    intro: "Bei der Wohnungsauflösung steht die vollständige Räumung mit Übergabeziel im Mittelpunkt.",
    answers: [
      ["Was wird bei einer Wohnungsauflösung entfernt?", "Möbel, Hausrat, Sperrmüll, Elektrogeräte und nach Absprache Nebenräume wie Keller oder Dachboden werden für die Übergabe geräumt."],
      ["Für welche Situationen passt sie?", "Typisch sind Kündigung, Umzug, Pflegeheim, Verkauf, Todesfall oder eine Übergabe an Vermieter, Eigentümer oder Hausverwaltung."],
      ["Was ist anders als bei einer Entrümpelung?", "Eine Entrümpelung kann einzelne Räume betreffen. Die Wohnungsauflösung meint meist die komplette Wohnung mit Übergabetermin."],
    ],
  },
  "haushaltsaufloesung-berlin": {
    title: "Kurzantwort: Was gehört zur Haushaltsauflösung?",
    intro: "Die Haushaltsauflösung betrifft den kompletten Hausstand und persönliche Gegenstände.",
    answers: [
      ["Was wird bei einer Haushaltsauflösung geräumt?", "Geräumt werden Möbel, Kleidung, Bücher, Geschirr, Kartons, Elektrogeräte, Sperrmüll und sonstiger Hausrat nach Absprache."],
      ["Muss vorher alles sortiert werden?", "Nein. Wichtig ist nur, dass Unterlagen, Erinnerungsstücke oder Gegenstände, die bleiben sollen, vorher benannt oder markiert werden."],
      ["Was passiert mit verwertbaren Dingen?", "Verwertbare Gegenstände können vorab geprüft werden. Eine mögliche Wertanrechnung wird realistisch und nicht pauschal bewertet."],
    ],
  },
  "nachlassaufloesung-berlin": {
    title: "Kurzantwort: Wie wird ein Nachlass geräumt?",
    intro: "Bei Nachlassfällen zählen Diskretion, klare Ansprechpartner und sorgfältige Abstimmung.",
    answers: [
      ["Wer kann eine Nachlassauflösung beauftragen?", "Häufig fragen Angehörige, Erben, Eigentümer, Vermieter oder Hausverwaltungen an. Zuständigkeit, Schlüssel und Rückfragen werden vorab geklärt."],
      ["Wie wird mit Dokumenten und Erinnerungen umgegangen?", "Persönliche Unterlagen, Fotos, Erinnerungsstücke und Wertgegenstände werden vor der Räumung besprochen, damit nichts Wichtiges ungeklärt entsorgt wird."],
      ["Kann die Wohnung ohne ständige Anwesenheit geräumt werden?", "Ja, wenn Schlüsselübergabe, Ansprechpartner, Rückfragen und Übergabeziel vorher eindeutig abgestimmt sind."],
    ],
  },
  "kellerentruempelung-berlin": {
    title: "Kurzantwort: Was ist bei Kellerentrümpelungen wichtig?",
    intro: "Bei Kellern entscheiden Zugang und Trageweg oft über den Aufwand.",
    answers: [
      ["Welche Keller können geräumt werden?", "Geräumt werden können Kellerraum, Kellerbox, Verschlag oder Gemeinschaftsbereiche, sofern der Auftrag und Zugang klar abgestimmt sind."],
      ["Welche Angaben sind besonders wichtig?", "Wichtig sind Etage, Treppen, Licht, Kellerzugang, Hof oder Tiefgarage, Parkmöglichkeit und ob einzelne Gegenstände erhalten bleiben sollen."],
      ["Was wird aus dem Keller mitgenommen?", "Kartons, Möbel, Hausrat und Sperrmüll können nach Absprache getragen, transportiert und fachgerecht entsorgt werden."],
    ],
  },
  "dachbodenentruempelung-berlin": {
    title: "Kurzantwort: Wie läuft eine Dachbodenentrümpelung?",
    intro: "Dachböden brauchen gute Planung, weil Treppen, Staub und alte Gegenstände den Aufwand bestimmen.",
    answers: [
      ["Was kann vom Dachboden entfernt werden?", "Alte Möbel, Kartons, Kisten, Hausrat und Sperrmüll können geräumt werden, wenn Umfang und Zugang vorher bekannt sind."],
      ["Warum sind Treppen und Zugang so wichtig?", "Dachböden liegen oft ohne Fahrstuhl oder mit engen Tragewegen. Diese Angaben bestimmen Team, Zeit und Transportplanung."],
      ["Muss vorher sortiert werden?", "Nicht zwingend. Gegenstände, die bleiben sollen, sollten aber vor Beginn klar markiert oder genannt werden."],
    ],
  },
  "firmenaufloesung-berlin": {
    title: "Kurzantwort: Was umfasst eine Firmenauflösung?",
    intro: "Bei Gewerbeflächen sind Termine, Zuständigkeiten und Übergabe besonders wichtig.",
    answers: [
      ["Welche Flächen werden geräumt?", "Büros, Praxen, kleine Lager, Regale, Büromöbel und Gewerbeflächen können nach Absprache geräumt werden."],
      ["Wie werden Termine geplant?", "Zeitfenster, Zugang, Ansprechpartner, Etage, Parkmöglichkeit und Übergabeziel werden vorab abgestimmt, damit der Betrieb oder die Verwaltung planen kann."],
      ["Was passiert mit Büromöbeln und Lagerbeständen?", "Büromöbel, Regale und Gegenstände werden demontiert, getragen, transportiert und fachgerecht entsorgt oder bei Verwertbarkeit geprüft."],
    ],
  },
  "sperrmuellabholung-berlin": {
    title: "Kurzantwort: Wann passt eine Sperrmüllabholung?",
    intro: "Sperrmüllabholung passt, wenn einzelne oder mehrere sperrige Gegenstände abgeholt werden sollen.",
    answers: [
      ["Welche Gegenstände können abgeholt werden?", "Typisch sind Sofa, Schrank, Bett, Matratze, Regal, Tisch, Teppich und andere sperrige Haushaltsgegenstände nach Absprache."],
      ["Muss der Sperrmüll schon draußen stehen?", "Nicht unbedingt. Wenn Tragen aus Wohnung, Keller, Dachboden oder Garage gewünscht ist, wird der Aufwand vorher mit eingeplant."],
      ["Welche Angaben braucht Trust?", "Benötigt werden Menge, Fotos, Etage, Fahrstuhl, Trageweg, Parkmöglichkeit und der gewünschte Abholzeitraum."],
    ],
  },
  "moebeltransport-berlin": {
    title: "Kurzantwort: Was gehört zum Möbeltransport?",
    intro: "Der Möbeltransport kann einzelne Möbel, kleine Transporte oder Abholung und Entsorgung betreffen.",
    answers: [
      ["Welche Möbel können transportiert werden?", "Angefragt werden können einzelne Möbelstücke wie Sofa, Schrank, Bett, Tisch oder mehrere Haushaltsmöbel."],
      ["Welche Angaben sind für den Transport wichtig?", "Wichtig sind Abholadresse, Zieladresse, Etagen, Fahrstuhl, Tragewege, Parkmöglichkeit und ob Demontage nach Absprache nötig ist."],
      ["Kann Transport mit Entsorgung kombiniert werden?", "Ja, wenn Möbel nicht weiter genutzt werden sollen, kann der Möbeltransport mit Möbelentsorgung verbunden werden."],
    ],
  },
  preise: {
    title: "Direkte Antworten zu Entrümpelungskosten",
    intro: "Preise werden seriös erst nach Umfang, Zugang und Entsorgung bewertet.",
    answers: [
      ["Warum gibt es keinen pauschalen Preis?", "Eine kleine Menge im Erdgeschoss ist anders zu planen als eine volle Wohnung im Altbau. Menge, Etage, Fahrstuhl, Parken, Demontage und Entsorgung verändern den Aufwand."],
      ["Wann ist eine Besichtigung sinnvoll?", "Eine Besichtigung ist sinnvoll, wenn mehrere Räume, Nebenräume, viel Hausrat, schwierige Tragewege oder ein fester Übergabetermin betroffen sind."],
      ["Was macht ein Angebot transparenter?", "Fotos, eine kurze Beschreibung, Bezirk, Etage, Fahrstuhl, Parkmöglichkeit und gewünschter Zeitraum helfen bei einer klaren Einschätzung."],
    ],
  },
  kontakt: {
    title: "Direkte Antworten zur Anfrage",
    intro: "Je klarer die Anfrage, desto schneller lässt sich der Auftrag einschätzen.",
    answers: [
      ["Wie erreiche ich Trust Entrümpelung Berlin?", `Sie erreichen Trust Entrümpelung Berlin telefonisch unter ${phoneDisplay}, per E-Mail an ${email} oder über das Anfrageformular.`],
      ["Was sollte in der Anfrage stehen?", "Nennen Sie Leistung, Bezirk oder Adresse, Etage, Fahrstuhl, Parkmöglichkeit, ungefähre Menge, Fotos und den gewünschten Zeitraum."],
      ["Was passiert nach der Anfrage?", "Trust prüft die Angaben, stellt Rückfragen bei unklaren Punkten und stimmt bei Bedarf eine kostenlose Besichtigung oder den nächsten Schritt ab."],
    ],
  },
};

const faqEnhancements = {
  "": [
    ["Was macht Trust Entrümpelung Berlin genau?", "Trust Entrümpelung Berlin räumt Wohnungen, Keller, Dachböden, Garagen, Gewerbeflächen und Nachlasswohnungen. Dazu gehören Planung, Tragen, Transport, fachgerechte Entsorgung und auf Wunsch besenreine Übergabe."],
    ["Welche Angaben werden für ein Angebot gebraucht?", "Hilfreich sind Fotos, Bezirk, Etage, Fahrstuhl, Parkmöglichkeit, Menge, Wunschtermin und das gewünschte Übergabeziel."],
  ],
  "entruempelung-berlin": [
    ["Was ist der Unterschied zwischen Entrümpelung und Sperrmüllabholung?", "Eine Sperrmüllabholung betrifft meist einzelne sperrige Gegenstände. Eine Entrümpelung umfasst ganze Räume, Sortierung, Tragen, Transport, Entsorgung und auf Wunsch besenreine Übergabe."],
    ["Welche Räume können entrümpelt werden?", "Wohnung, Haus, Keller, Dachboden, Garage, einzelne Zimmer und Gewerbeflächen können nach Absprache geräumt werden."],
  ],
  "wohnungsaufloesung-berlin": [
    ["Was wird bei einer Wohnungsauflösung entfernt?", "Möbel, Hausrat, Sperrmüll, Elektrogeräte und nach Absprache Nebenräume wie Keller oder Dachboden werden für die Übergabe geräumt."],
    ["Worin unterscheidet sich Wohnungsauflösung von Entrümpelung?", "Eine Entrümpelung kann einzelne Räume betreffen. Eine Wohnungsauflösung meint meist die komplette Wohnung mit Übergabe an Vermieter, Eigentümer oder Hausverwaltung."],
  ],
  "haushaltsaufloesung-berlin": [
    ["Was gehört zu einer Haushaltsauflösung?", "Zur Haushaltsauflösung gehören Möbel, Hausrat, Kleidung, Bücher, Geschirr, Kartons, Elektrogeräte und Sperrmüll nach Absprache."],
    ["Wie wird mit persönlichen Gegenständen umgegangen?", "Unterlagen, Erinnerungsstücke und Gegenstände, die bleiben sollen, werden vor der Räumung besprochen oder markiert."],
  ],
  "nachlassaufloesung-berlin": [
    ["Wie läuft eine Nachlassauflösung ab?", "Zuerst werden Ansprechpartner, Schlüssel, persönliche Unterlagen, Wertgegenstände und Übergabeziel geklärt. Danach folgen Einschätzung, Angebot, Räumung und Übergabe."],
    ["Was passiert mit Dokumenten und Erinnerungsstücken?", "Dokumente, Fotos und Erinnerungsstücke werden vorab besprochen, damit wichtige Dinge nicht ungeklärt entsorgt werden."],
  ],
  "kellerentruempelung-berlin": [
    ["Was muss ich bei Kellerzugang und Tragewegen nennen?", "Wichtig sind Kellerart, Etage, Treppen, Licht, Hof- oder Tiefgaragenzugang, Parkmöglichkeit und ob Gegenstände erhalten bleiben sollen."],
    ["Welche Gegenstände können aus dem Keller geräumt werden?", "Kartons, Möbel, Hausrat und Sperrmüll können nach Absprache aus dem Keller getragen und fachgerecht entsorgt werden."],
  ],
  "dachbodenentruempelung-berlin": [
    ["Warum sind Zugang und Treppen beim Dachboden wichtig?", "Dachböden haben oft enge oder lange Tragewege. Zugang, Etage, Treppenhaus und Parkmöglichkeit bestimmen Team, Zeit und Aufwand."],
    ["Was wird aus dem Dachboden entfernt?", "Alte Möbel, Kartons, Kisten, Hausrat und Sperrmüll können nach Absprache vom Dachboden geräumt werden."],
  ],
  "firmenaufloesung-berlin": [
    ["Was wird bei einer Firmenauflösung geräumt?", "Büromöbel, Aktenmöbel, Regale, Lagerbestände und Gegenstände aus Büro, Praxis, Lager oder Gewerbefläche können geräumt werden."],
    ["Wie wird ein Termin für Gewerbeflächen abgestimmt?", "Zeitfenster, Ansprechpartner, Zugang, Etage, Parkmöglichkeit und Übergabeziel werden vorab besprochen."],
  ],
  "sperrmuellabholung-berlin": [
    ["Welche Sperrmüll-Gegenstände können abgeholt werden?", "Typisch sind Sofa, Schrank, Bett, Matratze, Regal, Tisch, Teppich und andere sperrige Haushaltsgegenstände nach Absprache."],
    ["Welche Angaben sind für die Abholung wichtig?", "Benötigt werden Fotos, Menge, Etage, Fahrstuhl, Trageweg, Parkmöglichkeit und der gewünschte Abholzeitraum."],
  ],
  "moebeltransport-berlin": [
    ["Welche Angaben braucht Trust für einen Möbeltransport?", "Wichtig sind Abholadresse, Zieladresse, Etagen, Fahrstuhl, Tragewege, Parkmöglichkeit, Möbelmaße und ob Demontage nach Absprache nötig ist."],
    ["Geht es auch um einzelne Möbelstücke?", "Ja, auch einzelne Möbelstücke wie Sofa, Schrank, Bett oder Tisch können angefragt werden."],
  ],
  preise: [
    ["Warum ist eine Besichtigung oft sinnvoll?", "Eine Besichtigung ist sinnvoll, wenn mehrere Räume, Nebenräume, schwierige Tragewege, viel Hausrat oder ein fester Übergabetermin betroffen sind."],
    ["Welche Angaben beeinflussen das Angebot?", "Menge, Etage, Fahrstuhl, Parkmöglichkeit, Tragewege, Demontage, Entsorgungsart, Terminwunsch und mögliche Wertanrechnung beeinflussen das Angebot."],
  ],
  kontakt: [
    ["Welche Angaben sollte ich in die Anfrage schreiben?", "Schreiben Sie Leistung, Bezirk oder Adresse, Etage, Fahrstuhl, Parkmöglichkeit, ungefähre Menge, Fotos und den gewünschten Zeitraum in die Anfrage."],
    ["Wie erreiche ich Trust Entrümpelung Berlin?", `Telefonisch unter ${phoneDisplay}, per E-Mail an ${email} oder über das Anfrageformular auf dieser Seite.`],
  ],
};

for (const page of pages) {
  const additions = faqEnhancements[page.slug];
  if (!additions) continue;
  const existing = new Set(page.faq.map(([question]) => question));
  for (const item of additions) {
    if (!existing.has(item[0])) {
      page.faq.push(item);
      existing.add(item[0]);
    }
  }
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function urlFor(slug) {
  return slug ? `/${slug}/` : "/";
}

function absoluteUrl(slug) {
  return `${siteUrl}${urlFor(slug)}`;
}

function navHtml() {
  return nav.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join("");
}

function serviceNavHtml() {
  return services.map((service) => `<a href="/${service.slug}/">${esc(service.short)}</a>`).join("");
}

function desktopNavHtml() {
  return `<a href="/">Startseite</a>
    <div class="nav-dropdown">
      <button class="nav-dropdown-button" type="button" aria-haspopup="true">Leistungen</button>
      <div class="nav-dropdown-panel">
        ${serviceNavHtml()}
      </div>
    </div>
    <a href="/preise/">Preise</a>
    <a href="/#einsatzgebiete">Einsatzgebiete</a>
    <a href="/kontakt/">Kontakt</a>`;
}

function mobileNavHtml() {
  return `<a href="/">Startseite</a>
    <button class="mobile-submenu-button" type="button" aria-expanded="false" data-mobile-submenu-button>Leistungen</button>
    <div class="mobile-submenu" data-mobile-submenu>
      ${serviceNavHtml()}
    </div>
    <a href="/preise/">Preise</a>
    <a href="/#einsatzgebiete">Einsatzgebiete</a>
    <a href="/kontakt/">Kontakt</a>`;
}

function headerHtml() {
  return `<header class="site-header">
    <div class="container-wide header-inner">
      <a class="brand" href="/" aria-label="Trust Entrümpelung Berlin Startseite">
        <img class="brand-logo" src="/assets/logo-trust-transparent.png?v=${assetVersion}" alt="Trust Entrümpelung Berlin" width="1200" height="300" decoding="async">
      </a>
      <nav class="desktop-nav" aria-label="Hauptnavigation">${desktopNavHtml()}</nav>
      <div class="header-actions">
        <a class="button button-secondary" href="${phoneHref}">${phoneDisplay}</a>
        <a class="button button-primary" href="/kontakt/">Kostenlose Besichtigung</a>
      </div>
      <button class="menu-toggle" type="button" aria-label="Menü öffnen" aria-expanded="false" data-menu-button><span></span><span></span></button>
    </div>
    <div class="mobile-menu" data-mobile-menu>
      <nav aria-label="Mobile Navigation">
        ${mobileNavHtml()}
        <a href="/impressum/">Impressum</a>
        <a href="/datenschutz/">Datenschutz</a>
      </nav>
    </div>
  </header>`;
}

function breadcrumbHtml(page) {
  if (!page.slug) return "";
  const items = [`<a href="/">Startseite</a>`];
  if (page.type === "service") {
    items.push(`<a href="/#leistungen">Leistungen</a>`);
  } else if (page.type === "district") {
    items.push(`<a href="/#einsatzgebiete">Einsatzgebiete</a>`);
    items.push(`<a href="/${page.baseServiceSlug}/">${esc(serviceBySlug[page.baseServiceSlug]?.short || "Hauptleistung")}</a>`);
  } else if (page.type === "brandenburg") {
    items.push(`<a href="/#einsatzgebiete">Einsatzgebiete</a>`);
    items.push(`<a href="/${page.baseServiceSlug}/">${esc(serviceBySlug[page.baseServiceSlug]?.short || "Hauptleistung")}</a>`);
  } else if (page.type === "prices") {
    items.push(`<a href="/entruempelung-berlin/">Entrümpelung Berlin</a>`);
  }
  items.push(`<span>${esc(page.keyword)}</span>`);
  return `<div class="container breadcrumb" aria-label="Breadcrumb">${items.join(" / ")}</div>`;
}

function heroHtml(page, text, image = "Heller Berliner Altbauflur nach besenreiner Übergabe") {
  const heroTitle = page.slug ? page.keyword : "Entrümpelung Berlin";
  return `<section class="hero">
    <div class="hero-shell">
      <div class="container-wide hero-grid">
        <div class="hero-copy">
          <h1><span>${esc(heroTitle)}</span></h1>
          <p class="lead">${esc(text)}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="/kontakt/">Jetzt anfragen</a>
            <a class="button button-secondary" href="/kontakt/">Kostenlose Besichtigung</a>
            <a class="button button-secondary" href="${phoneHref}">${phoneDisplay}</a>
            ${whatsapp ? `<a class="button button-whatsapp" ${whatsappAttrs}>WhatsApp-Anfrage</a>` : ""}
          </div>
          <ul class="hero-points">
            <li>Terminplanung nach kurzer Prüfung</li>
            <li>Kostenlose Besichtigung möglich</li>
            <li>Keine versteckten Kosten</li>
            <li>Festpreis nach Einschätzung</li>
            <li>Räumung, Transport, Entsorgung</li>
            <li>Besenreine Übergabe möglich</li>
          </ul>
        </div>
        <aside class="quote-panel" aria-label="Kostenlose Besichtigung und Einschätzung">
          <h2>Kostenlose Besichtigung vorbereiten</h2>
          <p>Fotos und Eckdaten helfen für eine erste Orientierung. Bei größeren Aufträgen prüfen wir den Umfang vor Ort.</p>
          <ol class="quote-steps">
            <li><span>1</span>Bezirk, Etage und Fahrstuhl nennen</li>
            <li><span>2</span>Fotos von Räumen und Gegenständen senden</li>
            <li><span>3</span>Umfang prüfen und Termin abstimmen</li>
          </ol>
          <a class="button button-primary" href="/kontakt/">Anfrage starten</a>
          <div class="hero-photo-note">${esc(image)} · klare Einschätzung vor Beginn</div>
        </aside>
      </div>
    </div>
  </section>`;
}

function trustBarHtml() {
  return "";
}

function homeSeoIntroHtml() {
  return `<section class="seo-intro"><div class="container seo-intro-box">
    <h2>Entrümpelung Berlin - Wohnungsauflösung, Haushaltsauflösung & Sperrmüllabholung</h2>
    <p>Sie suchen eine zuverlässige Entrümpelungsfirma in Berlin, die Wohnungen, Keller, Dachböden, Garagen oder Gewerbeflächen sauber räumt? Trust Entrümpelung Berlin übernimmt Entrümpelungen, Wohnungsauflösungen, Haushaltsauflösungen und Sperrmüllabholungen in ganz Berlin - strukturiert, diskret und mit klarer Einschätzung vor Beginn der Arbeiten.</p>
    <p>Ob einzelne Räume entrümpelt werden sollen, eine komplette Wohnung leer geräumt werden muss oder eine besenreine Übergabe nach Umzug, Todesfall oder Haushaltsauflösung ansteht: Wir prüfen den Umfang, klären Zugang, Etage, Parkmöglichkeit, Demontage und Entsorgung und erstellen auf Wunsch einen Festpreis nach Besichtigung. So wissen Sie vorher, was gemacht wird, welche Kosten entstehen und wann die Räume wieder frei übergeben werden können.</p>
    <p>Unser Entrümpelungsdienst in Berlin unterstützt Privatkunden, Angehörige, Eigentümer, Vermieter, Hausverwaltungen und Unternehmen. Wir räumen Möbel, Hausrat, Sperrmüll, Elektrogeräte, Kartons und sonstige Gegenstände, trennen verwertbare Materialien und sorgen für eine fachgerechte Entsorgung. Wenn verwertbare Gegenstände vorhanden sind, kann eine Wertanrechnung geprüft werden.</p>
    <p>Von der ersten Anfrage bis zur besenreinen Übergabe haben Sie einen klaren Ansprechpartner. Schildern Sie kurz den Fall über das Formular, telefonisch oder per E-Mail - wir geben Ihnen eine erste Einschätzung und planen den nächsten Schritt.</p>
  </div></section>`;
}

const eeatPageSlugs = new Set(["", "entruempelung-berlin", "wohnungsaufloesung-berlin", "haushaltsaufloesung-berlin", "nachlassaufloesung-berlin", "preise", "kontakt"]);

function shouldShowTrustSection(page) {
  return eeatPageSlugs.has(page.slug);
}

function companyTrustHtml(page) {
  if (!shouldShowTrustSection(page)) return "";
  return `<section class="section-soft"><div class="container split">
    <div><span class="eyebrow">Unternehmen & Verantwortung</span><h2>Trust Entrümpelung Berlin: klare Angaben, klare Abläufe</h2><p>Trust Entrümpelung Berlin ist der Außenauftritt der ${esc(legalCompany)} mit Sitz in ${esc(streetAddress)}, ${esc(postalCode)} ${esc(city)}. Die Kontaktaufnahme ist telefonisch unter <a href="${phoneHref}">${phoneDisplay}</a>, per E-Mail an ${email} oder über das Anfrageformular möglich.</p><p>Das Einsatzgebiet umfasst Berlin. Aufträge im Berliner Umland und in Brandenburg werden nach Umfang, Entfernung und Terminmöglichkeit geprüft.</p></div>
    <div class="card"><h3>Was vor einem Angebot geprüft wird</h3><ul class="mini-list"><li>Leistung, Räume und gewünschtes Übergabeziel</li><li>Menge, Etage, Fahrstuhl und Tragewege</li><li>Parkmöglichkeit, Demontage und Entsorgungsart</li><li>Wertanrechnung nur bei tatsächlich verwertbaren Gegenständen</li></ul></div>
  </div></section>`;
}

function disposalTrustHtml(page) {
  if (!shouldShowTrustSection(page)) return "";
  const nachlassText = page.slug === "nachlassaufloesung-berlin"
    ? `<p>Bei Nachlassauflösungen werden persönliche Unterlagen, Erinnerungsstücke und verwertbare Gegenstände vor der Räumung besprochen, damit nichts Wichtiges ohne Abstimmung entfernt wird.</p>`
    : "";
  return `<section><div class="container split">
    <div class="card"><h3>Entsorgung und Verwertung</h3><p>Möbel, Hausrat, Sperrmüll und sonstige Gegenstände werden nach Auftrag getrennt, getragen, transportiert und fachgerecht entsorgt. Verwertbare Gegenstände können vorab realistisch geprüft werden.</p>${nachlassText}</div>
    <div><span class="eyebrow">Transparenz</span><h2>Kein pauschaler Preis ohne Umfang</h2><p>Ein seriöses Angebot hängt von Menge, Zugang, Etage, Parkmöglichkeit, Demontage, Entsorgungsart und Terminwunsch ab. Deshalb erfolgt die Einschätzung anhand von Fotos, Eckdaten oder einer Besichtigung vor Ort.</p><a class="card-link" href="/preise/">Preisfaktoren ansehen</a></div>
  </div></section>`;
}

function servicesGridHtml() {
  return `<section id="leistungen" class="section-soft"><div class="container">
    <div class="section-intro"><h2>Was soll in Berlin geräumt werden?</h2><p>Wählen Sie die passende Leistung für Wohnung, Keller, Dachboden, Garage, Sperrmüll, Nachlass oder Gewerbe.</p></div>
    <div class="grid-3">${services.map((service) => `<article class="card">
      <h3>${esc(service.short)}</h3>
      <p>${esc(service.intro)}</p>
      <ul class="mini-list"><li>Festpreis nach Einschätzung</li><li>Transport und Entsorgung</li><li>Besenreine Übergabe möglich</li></ul>
      <a class="card-link" href="/${service.slug}/">Details und Ablauf ansehen</a>
    </article>`).join("")}</div>
  </div></section>`;
}

function processHtml(keyword = "Entrümpelung Berlin") {
  return `<section id="ablauf" class="process-section"><div class="container">
    <div class="section-intro section-intro-center"><h2>Unsere Vorgehensweise bei ${esc(keyword)}</h2><p>Der Ablauf ist klar gehalten: Anfrage, Einschätzung, Angebot und Umsetzung. So wissen Sie vor Beginn, was gemacht wird und welche Kosten entstehen.</p></div>
    <div class="timeline process-band">${processSteps.map(([title, text], index) => `<div class="step"><span class="step-number">${index + 1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></div>`).join("")}</div>
    <div class="process-action"><a class="button button-primary" href="/kontakt/">Festpreis nach Besichtigung erhalten</a></div>
  </div></section>`;
}

function costsHtml(keyword = "Entrümpelung in Berlin") {
  return `<section class="section-soft"><div class="container">
    <div class="section-intro"><h2>Was kostet eine ${esc(keyword)}?</h2><p>Lockpreise helfen selten, wenn Umfang, Etage oder Entsorgung unklar sind. Wir prüfen die relevanten Faktoren und erklären, warum ein Festpreis erst nach Einschätzung seriös ist.</p></div>
    <div class="cost-grid">${costFactors.map((factor) => `<div class="cost-factor"><strong>${esc(factor)}</strong><p>Wird in die Einschätzung aufgenommen, bevor ein Festpreis genannt wird.</p></div>`).join("")}</div>
    <div class="info-box"><h3>Warum erst Einschätzung, dann Festpreis?</h3><p>Eine Wohnung im Erdgeschoss mit Fahrstuhl und Parkmöglichkeit ist anders zu planen als ein Berliner Altbau mit engem Treppenhaus. Deshalb werden Menge, Zugang, Demontage, Entsorgungsart und Terminwunsch vorher geklärt.</p></div>
  </div></section>`;
}

function sensitiveHtml() {
  return `<section><div class="container split">
    <div><span class="eyebrow">Sensible Fälle</span><h2>Wohnungsauflösung, Nachlass und klare Absprachen</h2><p>Bei Todesfall, Pflegeheim oder Zeitdruck ist eine ruhige Organisation wichtiger als große Versprechen. Wenn Angehörige nicht dauerhaft vor Ort sein können, stimmen wir Schlüsselübergabe, Rückfragen und Abschluss vorher klar ab.</p><a class="card-link" href="/nachlassaufloesung-berlin/">Nachlassauflösung Berlin ansehen</a></div>
    <div class="card"><h3>Was wir vorher klären</h3><ul class="mini-list"><li>Schlüsselübergabe und Ansprechpartner</li><li>Persönliche Unterlagen und Wertgegenstände</li><li>Vermieter, Verwaltung und Übergabeziel</li><li>Räume, Nebenräume und gewünschter Termin</li></ul></div>
  </div></section>`;
}

function b2bHtml() {
  return `<section class="section-blue"><div class="container split">
    <div><span class="eyebrow">Gewerbe & Verwaltung</span><h2>Firmenauflösung, Büroauflösung und Aufträge für Hausverwaltungen</h2><p>Für Hausverwaltungen, Eigentümer, Makler, Büros, Praxen und Lagerflächen zählen Terminfenster, saubere Dokumentation und zuverlässige Übergabe. Trust plant Zugang, Laufwege, Demontage und Entsorgung sachlich vor.</p></div>
    <div class="grid-2"><div class="card"><h3>Für Verwaltungen</h3><p>Räumung nach Auszug, Nachlass oder Übergabefrist mit klarer Abstimmung.</p></div><div class="card"><h3>Für Firmen</h3><p>Büromöbel, Regale, Lagerbestände und Gewerbeflächen strukturiert räumen.</p></div></div>
  </div></section>`;
}

function areasHtml() {
  return `<section id="einsatzgebiete" class="area-map-section"><div class="container">
    <div class="section-intro"><h2>Entrümpelung, Wohnungsauflösung und Nachlassauflösung in Berliner Bezirken</h2><p>Wählen Sie Ihren Bezirk und direkt die passende Leistung. Jede Kachel führt zu Informationen für den jeweiligen Berliner Einsatzort.</p></div>
    <div class="area-grid">${districtAreas.map((area, index) => `<article class="area-card">
      <div class="area-rank">${String(index + 1).padStart(2, "0")}</div>
      <h3>${esc(area.name)}</h3>
      <div class="area-links">
        ${districtServiceTypes.map((serviceType) => `<a href="/${serviceType.slugPrefix}-${area.slug}/">${esc(serviceType.label)} ${esc(area.name)}</a>`).join("")}
      </div>
    </article>`).join("")}</div>
    <div class="brandenburg-panel">
      <div>
        <h3>Brandenburg nach Absprache</h3>
        <p>Auch im Berliner Umland prüfen wir passende Einsätze, zum Beispiel in ${esc(brandenburgLead)}.</p>
      </div>
      <div class="brandenburg-links">
        ${brandenburgPages.map((page) => `<a href="/${page.slug}/">${esc(page.keyword)}</a>`).join("")}
      </div>
    </div>
  </div></section>`;
}

function directAnswersHtml(page) {
  if (!answerPageSlugs.has(page.slug)) return "";
  const data = directAnswerData[page.slug];
  if (!data) return "";
  return `<section class="section-soft direct-answers"><div class="container">
    <div class="section-intro section-intro-center"><h2>${esc(data.title)}</h2><p>${esc(data.intro)}</p></div>
    <div class="grid-3">${data.answers.map(([question, answer]) => `<article class="card"><span class="card-kicker">Kurz beantwortet</span><h3>${esc(question)}</h3><p>${esc(answer)}</p></article>`).join("")}</div>
  </div></section>`;
}

function faqHtml(page) {
  return `<section id="faq" class="section-soft"><div class="container">
    <div class="section-intro"><h2>Häufige Fragen zur ${esc(page.keyword)}</h2><p>Klicken Sie auf eine Frage, um die Antwort zu öffnen.</p></div>
    <div class="faq-list">${page.faq.map(([q, a]) => `<details class="faq-item"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div>
  </div></section>`;
}

function ctaHtml(page) {
  return `<section><div class="container"><div class="cta-panel">
    <div><h2>Kostenlose Besichtigung und Einschätzung für Ihre ${esc(page.keyword)}</h2><p>Senden Sie Fotos, Bezirk, Etage, Fahrstuhl, Parkmöglichkeit und gewünschten Zeitraum. Wir prüfen den Umfang und melden uns mit einer klaren Einschätzung zurück. Bei größeren Aufträgen ist eine kostenlose Besichtigung möglich.</p></div>
    <div class="cta-actions"><a class="button button-primary" href="${phoneHref}">Telefon ${phoneDisplay}</a><a class="button button-secondary" href="/kontakt/">Direkt anfragen</a><a class="button button-secondary" href="#anfrageformular">Formular nutzen</a></div>
  </div></div></section>`;
}

function inquiryFormHtml(page) {
  const serviceOptions = [
    page.keyword,
    ...services.map((service) => service.short),
    "Sonstiges",
  ].filter((value, index, list) => list.indexOf(value) === index);

  return `<section id="anfrageformular" class="inquiry-section"><div class="container inquiry-layout">
    <div class="inquiry-note">
      <span class="eyebrow">Anfrageformular</span>
      <h2>Kurze Anfrage für ${esc(page.keyword)}</h2>
      <p>Beschreiben Sie kurz, was geräumt werden soll. Bezirk, Etage, Fahrstuhl, Parkmöglichkeit und gewünschter Zeitraum helfen bei einer schnellen Einschätzung.</p>
      <ul class="mini-list"><li>Kostenlose Besichtigung möglich</li><li>Klare Einschätzung vor Beginn</li><li>Festpreis nach Umfang und Zugang</li></ul>
    </div>
    <form class="inquiry-form" action="${FORM_ENDPOINT}" method="post" data-static-form data-form-endpoint="${FORM_ENDPOINT}">
      <h2>Anfrage senden</h2>
      <p>Ihre Anfrage geht an ${formEmail}. Wir melden uns in der Regel innerhalb von 24 Stunden zurück.</p>
      <input type="hidden" name="source_page" value="${esc(page.keyword)}">
      <input type="hidden" name="_subject" value="Neue Anfrage Trust Entruempelung Berlin - ${esc(page.keyword)}">
      <label class="hp-field" aria-hidden="true">Website<input name="_gotcha" tabindex="-1" autocomplete="off"></label>
      <div class="form-grid">
        <label>Name<input name="name" autocomplete="name" required></label>
        <label>Telefon<input name="phone" type="tel" autocomplete="tel" required></label>
        <label>E-Mail<input name="email" type="email" autocomplete="email" required></label>
        <label>Ort / Bezirk<input name="area" autocomplete="street-address" required></label>
        <label>Welche Leistung?<select name="service" required>${serviceOptions.map((option) => `<option>${esc(option)}</option>`).join("")}</select></label>
        <label>Objektart<select name="object_type"><option>Bitte ausw&auml;hlen</option><option>Wohnung</option><option>Haus</option><option>Keller</option><option>Dachboden</option><option>Garage</option><option>Gewerbefl&auml;che</option><option>Sonstiges</option></select></label>
        <label>Etage / Aufzug<input name="floor_elevator" placeholder="z. B. 3. OG, kein Aufzug" autocomplete="off"></label>
        <label class="span-2">Kurzbeschreibung<textarea name="message" required placeholder="Was soll geräumt werden? Gibt es Keller, Dachboden, Garage oder Sperrmüll?"></textarea></label>
        <label>Wunschtermin<input name="preferred_date" autocomplete="off"></label>
        <label>R&uuml;ckrufzeit<input name="callback_time" placeholder="z. B. vormittags oder ab 16 Uhr" autocomplete="off"></label>
        <label class="span-2 consent-field"><input name="privacy_consent" type="checkbox" value="yes" required><span>Ich habe die <a href="/datenschutz/">Datenschutzerkl&auml;rung</a> gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden.</span></label>
      </div>
      <div class="form-actions">
        <button class="button button-primary" type="submit">Anfrage absenden</button>
      </div>
      <div class="form-status" data-form-status role="status" aria-live="polite" tabindex="-1"></div>
      <p>Datenschutz-Hinweis: Die Angaben werden zur Bearbeitung Ihrer Anfrage an ${formEmail} übermittelt.</p>
    </form>
  </div></section>`;
}

function localLinkHubHtml(page) {
  if (page.type === "service") {
    const links = serviceLocalDistrictLinks(page);
    const serviceKey = localServiceKeyForPage(page);
    const serviceType = districtServiceTypeByKey(serviceKey);
    return `<section><div class="container"><div class="section-intro"><h2>${esc(serviceType.label)} in wichtigen Berliner Bezirken</h2><p>Direkt zu passenden lokalen Seiten für zentrale Berliner Einsatzgebiete.</p></div><div class="area-links">${links.map((link) => `<a href="/${link.slug}/">${esc(link.label)}</a>`).join("")}</div></div></section>`;
  }

  if (page.type === "district") {
    const serviceKey = localServiceKeyForPage(page);
    const links = priorityDistrictLinks(serviceKey, page.districtSlug, 5);
    return `<section><div class="container"><div class="section-intro"><h2>Weitere passende Berliner Bezirke</h2><p>Wenn der Einsatzort angrenzt oder noch nicht feststeht, helfen diese lokalen Seiten weiter.</p></div><div class="area-links"><a href="/${page.baseServiceSlug}/">${esc(serviceBySlug[page.baseServiceSlug]?.short || "Hauptleistung Berlin")}</a>${links.map((link) => `<a href="/${link.slug}/">${esc(link.label)}</a>`).join("")}</div></div></section>`;
  }

  if (page.type === "brandenburg") {
    const related = relatedBrandenburgLinks(page);
    return `<section><div class="container"><div class="section-intro"><h2>Weitere Seiten für Berlin und Brandenburg</h2><p>Passende Leistungen für Berlin und das Berliner Umland nach Absprache.</p></div><div class="area-links">${related.map((slug) => {
      const target = serviceBySlug[slug] || brandenburgPageBySlug[slug];
      return `<a href="/${slug}/">${esc(target?.short || target?.keyword || slug)}</a>`;
    }).join("")}</div></div></section>`;
  }

  return "";
}

function districtLocalContentHtml(page) {
  if (page.type !== "district" || !page.localProfile) return "";
  const serviceText = page.localProfile[page.serviceKey] || page.localProfile.entruempelung;
  const focusTitle = page.serviceKey === "entruempelung"
    ? "Lokale Planung für Räume, Hausrat und Entsorgung"
    : page.serviceKey === "wohnungsaufloesung"
      ? "Lokale Planung für vollständige Wohnungsübergaben"
      : "Lokale Planung für sensible Nachlassfälle";
  return `<section><div class="container split">
    <div><span class="eyebrow">Lokaler Bezug</span><h2>${esc(page.keyword)} mit Blick auf Zugang und Übergabe</h2><p>${esc(page.localProfile.location)}</p><p>${esc(page.localProfile.access)}</p></div>
    <div class="card"><h3>${esc(focusTitle)}</h3><p>${esc(serviceText)}</p><ul class="mini-list"><li>Besichtigung oder Einschätzung anhand von Fotos</li><li>Angebot passend zu Umfang, Etage und Zugang</li><li>Räumung, Transport und Übergabe nach Absprache</li></ul></div>
  </div></section>`;
}

function internalLinksHtml(page) {
  const linkSlugs = page.links || ["entruempelung-berlin", "wohnungsaufloesung-berlin", "haushaltsaufloesung-berlin", "preise", "kontakt"];
  const linkIntro = page.type === "brandenburg" ? "Diese Seiten helfen bei der Einordnung und führen zu passenden Leistungen für Berlin und das Berliner Umland." : "Diese Seiten helfen bei der Einordnung und führen zu verwandten Leistungen in Berlin.";
  return `<section><div class="container"><div class="section-intro"><h2>Passende nächste Seiten</h2><p>${linkIntro}</p></div><div class="grid-3">${linkSlugs.map((slug) => {
    const target = serviceBySlug[slug] || districtPageBySlug[slug] || brandenburgPageBySlug[slug] || pages.find((item) => item.slug === slug);
    return `<a class="card" href="/${slug}/"><span class="card-kicker">Weitere Leistung</span><h3>${esc(target?.keyword || slug)}</h3><p>Ablauf, Einschätzung und Anfrage für diese Leistung ansehen.</p></a>`;
  }).join("")}<a class="card" href="#faq"><span class="card-kicker">Fragen</span><h3>FAQ zu ${esc(page.keyword)}</h3><p>Antworten zu Ablauf, Kosten, Besichtigung und Übergabe ansehen.</p></a></div></div></section>`;
}

function footerHtml() {
  return `<footer class="site-footer"><div class="container-wide">
    <div class="footer-grid">
      <div><img class="footer-logo" src="/assets/logo-trust-transparent.png?v=${assetVersion}" alt="Trust Entrümpelung Berlin" width="1200" height="300" loading="lazy" decoding="async"><div class="footer-title">Trust Entrümpelung Berlin</div><p>Trust Entrümpelung Berlin übernimmt Entrümpelungen, Wohnungsauflösungen, Haushaltsauflösungen, Sperrmüllabholungen und Firmenauflösungen in Berlin. Unser Schwerpunkt liegt auf klarer Planung, transparenter Einschätzung, fachgerechter Entsorgung und besenreiner Übergabe.</p><p>Telefon: <a href="${phoneHref}">${phoneDisplay}</a><br>E-Mail: ${email}</p></div>
      <div><div class="footer-title">Leistungen</div><a href="/entruempelung-berlin/">Entrümpelung Berlin</a><a href="/wohnungsaufloesung-berlin/">Wohnungsauflösung Berlin</a><a href="/haushaltsaufloesung-berlin/">Haushaltsauflösung Berlin</a><a href="/nachlassaufloesung-berlin/">Nachlassauflösung Berlin</a><a href="/firmenaufloesung-berlin/">Firmenauflösung Berlin</a><a href="/sperrmuellabholung-berlin/">Sperrmüllabholung Berlin</a></div>
      <div><div class="footer-title">Räume & Spezialfälle</div><a href="/kellerentruempelung-berlin/">Kellerentrümpelung Berlin</a><a href="/dachbodenentruempelung-berlin/">Dachbodenentrümpelung Berlin</a><a href="/garagenentruempelung-berlin/">Garagenentrümpelung Berlin</a><a href="/moebeltransport-berlin/">Möbeltransport Berlin</a><a href="/kleine-umzuege-berlin/">Kleine Umzüge Berlin</a><a href="/entruempelung-berlin/">Messie-Wohnung entrümpeln</a></div>
      <div><div class="footer-title">Einsatzgebiete</div><a href="/#einsatzgebiete">Berlin Mitte</a><a href="/#einsatzgebiete">Wedding</a><a href="/#einsatzgebiete">Pankow</a><a href="/#einsatzgebiete">Charlottenburg</a><a href="/#einsatzgebiete">Neukölln</a><a href="/#einsatzgebiete">Spandau</a><a href="/entruempelung-brandenburg/">Entrümpelung Brandenburg</a><a href="/wohnungsaufloesung-brandenburg/">Wohnungsauflösung Brandenburg</a><a href="/nachlassaufloesung-brandenburg/">Nachlassauflösung Brandenburg</a></div>
      <div><div class="footer-title">Unternehmen</div><a href="/#leistungen">Über uns</a><a href="/#ablauf">Ablauf</a><a href="/preise/">Preise</a><a href="/kontakt/">Kontakt</a><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a></div>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Trust Entrümpelung Berlin</span><span>Entrümpelung, Wohnungsauflösung und Sperrmüllabholung in Berlin.</span></div>
  </div></footer>
  <div class="mobile-callbar"><a class="button button-primary" href="${phoneHref}">Anrufen</a>${whatsapp ? `<a class="button button-whatsapp" ${whatsappAttrs}>WhatsApp</a>` : `<a class="button button-secondary" href="/kontakt/">Anfrage</a>`}</div>`;
}

function schema(page) {
  const pageUrl = absoluteUrl(page.slug);
  const graph = [
    {"@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Trust Entrümpelung Berlin", legalName: legalCompany, url: `${siteUrl}/`, logo: `${siteUrl}/assets/logo-trust-transparent.png`, image: `${siteUrl}/assets/logo-trust-transparent.png`, email, telephone: phoneDisplay, contactPoint: {"@type": "ContactPoint", telephone: phoneDisplay, email, contactType: "customer service", areaServed: ["Berlin", "Brandenburg"], availableLanguage: ["de"]}},
    {"@type": "LocalBusiness", "@id": `${siteUrl}/#localbusiness`, name: "Trust Entrümpelung Berlin", legalName: legalCompany, url: `${siteUrl}/`, image: `${siteUrl}/assets/hero-entruempelung.jpg`, email, telephone: phoneDisplay, address: {"@type": "PostalAddress", streetAddress, postalCode, addressLocality: city, addressCountry: "DE"}, contactPoint: {"@type": "ContactPoint", telephone: phoneDisplay, email, contactType: "customer service", areaServed: ["Berlin", "Brandenburg"], availableLanguage: ["de"]}, areaServed: ["Berlin", ...brandenburgPlaces], serviceType: [...services.map((item) => item.keyword), ...brandenburgPages.map((item) => item.keyword)]},
    {"@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: page.title, description: page.description},
    {"@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb`, itemListElement: [
      {"@type": "ListItem", position: 1, name: "Startseite", item: `${siteUrl}/`},
      ...(page.slug ? [{"@type": "ListItem", position: 2, name: page.keyword, item: pageUrl}] : []),
    ]},
    {"@type": "FAQPage", "@id": `${pageUrl}#faq`, mainEntity: page.faq.map(([q, a]) => ({"@type": "Question", name: q, acceptedAnswer: {"@type": "Answer", text: a}}))},
  ];

  if (page.type === "home") {
    graph.push({"@type": "WebSite", "@id": `${siteUrl}/#website`, name: "Trust Entrümpelung Berlin", url: `${siteUrl}/`});
  }

  if (page.type === "service" || page.type === "district" || page.type === "brandenburg") {
    graph.push({"@type": "Service", "@id": `${pageUrl}#service`, name: page.keyword, serviceType: page.keyword, provider: {"@id": `${siteUrl}/#localbusiness`}, areaServed: {"@type": page.district ? "AdministrativeArea" : "City", name: page.district || "Berlin"}, description: page.description});
  }

  return `<script type="application/ld+json">${JSON.stringify({"@context": "https://schema.org", "@graph": graph})}</script>`;
}

function metaDescription(description) {
  const text = description.replace(/\s+/g, " ").trim();
  if (text.length <= 160) return text;
  const limit = 157;
  const boundary = text.lastIndexOf(" ", limit);
  const clipped = text.slice(0, boundary > 145 ? boundary : limit).replace(/[,:;–-]\s*$/, "").trim();
  return `${clipped}.`;
}

function headHtml(page) {
  const canonical = absoluteUrl(page.slug);
  const description = metaDescription(page.description);
  return `<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${socialImage}">
  <meta property="og:site_name" content="Trust Entrümpelung Berlin">
  <meta property="og:locale" content="de_DE">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${socialImage}">
  <link rel="preload" as="image" href="/assets/hero-entruempelung.jpg" fetchpriority="high">
  <link rel="stylesheet" href="/assets/css/styles.min.css?v=${assetVersion}">
  ${schema(page)}`;
}

function homeContent(page) {
  return [
    heroHtml(page, "Trust Entrümpelung Berlin übernimmt Entrümpelungen, Wohnungsauflösungen, Haushaltsauflösungen und Sperrmüllabholungen in ganz Berlin. Strukturiert geplant, transparent eingeschätzt und auf Wunsch besenrein übergeben."),
    homeSeoIntroHtml(),
    `<section class="home-method"><div class="container"><div class="section-intro section-intro-center"><h2>Entrümpelung in Berlin mit Struktur, Festpreis und besenreiner Übergabe</h2><p>Nach drei Sekunden soll klar sein, was Trust macht: Räume frei machen, Hausrat sortieren, Möbel tragen, Sperrmüll entsorgen und Übergaben vorbereiten.</p></div><div class="method-band"><div class="method-item"><span class="method-icon">1</span><h3>Wohnung leer räumen</h3><p>Für Auszug, Kündigung, Verkauf, Pflegeheim oder Nachlass mit abgestimmtem Übergabeziel.</p></div><div class="method-item"><span class="method-icon">2</span><h3>Keller, Dachboden und Garage</h3><p>Räume werden nicht nur leer, sondern nutzbar und auf Wunsch besenrein vorbereitet.</p></div><div class="method-item"><span class="method-icon">3</span><h3>Möbel und Sperrmüll</h3><p>Tragen, Transport und Entsorgung werden passend zum Umfang geplant.</p></div></div></div></section>`,
    servicesGridHtml(),
    processHtml("Entrümpelung Berlin"),
    costsHtml("Entrümpelung in Berlin"),
    sensitiveHtml(),
    b2bHtml(),
    areasHtml(),
    inquiryFormHtml(page),
    faqHtml(page),
    ctaHtml(page),
  ].join("");
}

function serviceContent(page) {
  return [
    heroHtml(page, page.intro, page.image),
    trustBarHtml(),
    companyTrustHtml(page),
    directAnswersHtml(page),
    `<section id="leistungen"><div class="container"><div class="section-intro"><h2>Professionelle ${esc(page.keyword)}: Was wir übernehmen</h2><p>${esc(page.keyword)} wird so geplant, dass Umfang, Zugang, Transport, Entsorgung und Übergabe zusammenpassen.</p></div><div class="grid-3">${page.includes.map((item) => `<div class="card"><span class="card-kicker">Leistungsbereich</span><h3>${esc(item)}</h3><p>Der Umfang wird vor Beginn sauber aufgenommen, damit Angebot, Team und Zeitfenster zum Auftrag passen.</p></div>`).join("")}</div></div></section>`,
    `<section class="section-blue"><div class="container"><div class="section-intro"><h2>Typische Situationen für ${esc(page.keyword)}</h2><p>Viele Anfragen entstehen durch Auszug, Übergabe, Nachlass, Sanierung oder Platzmangel. Entscheidend ist eine klare Einschätzung vor Beginn.</p></div><div class="grid-3">${page.situations.map((item) => `<div class="card"><h3>${esc(item)}</h3><p>Zugang, Etage, Tragewege, Parkmöglichkeit und Entsorgung werden passend zu dieser Situation geplant.</p></div>`).join("")}</div></div></section>`,
    processHtml(page.keyword),
    costsHtml(page.keyword),
    `<section><div class="container split"><div><h2>${esc(page.compareTitle)}</h2><p>${esc(page.compareText)}</p></div><div class="card"><h3>Vor der Einschätzung hilfreich</h3><ul class="mini-list"><li>Fotos der Räume und Gegenstände</li><li>Bezirk, Etage und Fahrstuhl</li><li>Parkmöglichkeit und Tragewege</li><li>Wunschtermin und Übergabeziel</li></ul></div></div></section>`,
    districtLocalContentHtml(page),
    disposalTrustHtml(page),
    localLinkHubHtml(page),
    internalLinksHtml(page),
    inquiryFormHtml(page),
    faqHtml(page),
    ctaHtml(page),
  ].join("");
}

function pricesContent(page) {
  return [
    heroHtml(page, "Entrümpelung Kosten Berlin lassen sich seriös erklären, aber nicht pauschal versprechen. Entscheidend sind Umfang, Etage, Zugang, Parkmöglichkeit, Demontage, Entsorgung und mögliche Wertanrechnung.", "Ruhige Preisbesprechung mit Fotos, Notizen und klarer Umfangsliste"),
    trustBarHtml(),
    companyTrustHtml(page),
    directAnswersHtml(page),
    costsHtml("Entrümpelung in Berlin"),
    disposalTrustHtml(page),
    `<section><div class="container split"><div><h2>Selbst entsorgen oder Firma beauftragen?</h2><p>Selbstentsorgung kann sinnvoll sein, wenn wenige Gegenstände, Fahrzeug, Zeit und Helfer vorhanden sind. Eine Entrümpelungsfirma lohnt sich, wenn Tragewege, große Möbel, Entsorgung, Übergabedruck oder mehrere Räume zusammenkommen.</p></div><div class="card"><h3>Für den Festpreis relevant</h3><ul class="mini-list"><li>Wohnungsgröße und Menge</li><li>Etage, Fahrstuhl und Parkmöglichkeit</li><li>Demontage, Küche, Teppich oder Lampen</li><li>Sondermüll und Entsorgungsart</li><li>Wertanrechnung und Terminwunsch</li></ul></div></div></section>`,
    internalLinksHtml(page),
    inquiryFormHtml(page),
    faqHtml(page),
    ctaHtml(page),
  ].join("");
}

function contactContent(page) {
  return [
    heroHtml(page, "Für den Entrümpelung Berlin Kontakt helfen Fotos, Bezirk, Etage, Fahrstuhl, Parkmöglichkeit, gewünschter Zeitraum und eine kurze Beschreibung. So kann Trust den Umfang schneller einschätzen.", "Kontaktaufnahme mit Fotos und kurzer Objektbeschreibung"),
    trustBarHtml(),
    companyTrustHtml(page),
    directAnswersHtml(page),
    `<section><div class="container contact-layout"><div class="card"><h2>Kontaktwege</h2><p>Sie erreichen Trust Entrümpelung Berlin telefonisch, per E-Mail oder über das Anfrageformular. Für eine erste Einschätzung helfen Fotos, Bezirk, Etage und eine kurze Beschreibung.</p><ul class="mini-list"><li>Telefon: ${phoneDisplay}</li><li>E-Mail: ${email}</li><li>Kostenlose Besichtigung bei größeren Aufträgen</li><li>Einsatzgebiet: Berlin und Berliner Umland</li></ul><div class="hero-actions"><a class="button button-primary" href="${phoneHref}">Jetzt anrufen</a><a class="button button-secondary" href="#anfrageformular">Anfrage senden</a></div></div><div class="card"><h2>Was wir für die Einschätzung brauchen</h2><ul class="mini-list"><li>Fotos von Räumen und Gegenständen</li><li>Bezirk, Etage und Fahrstuhl</li><li>Parkmöglichkeit und Tragewege</li><li>Wunschtermin und Übergabeziel</li></ul></div></div></section>`,
    disposalTrustHtml(page),
    inquiryFormHtml(page),
    faqHtml(page),
    ctaHtml(page),
  ].join("");
}

function legalContent(page) {
  const legalBody = page.slug === "impressum"
    ? `<section><div class="container"><div class="card legal-card"><h2>Anbieterkennzeichnung</h2><pre>${esc(page.legalText)}</pre></div></div></section>`
    : `<section><div class="container"><div class="card"><h2>Datenschutzhinweise</h2><p>${esc(page.legalText)}</p></div></div></section>`;
  return [
    heroHtml(page, page.slug === "impressum" ? "Hier finden Sie die Anbieterkennzeichnung von Trust Entrümpelung Berlin." : "Hier finden Sie Hinweise dazu, wie Angaben aus Anfragen verarbeitet werden.", "Kontakt, Anbieterangaben und klare Verantwortlichkeit"),
    legalBody,
    faqHtml(page),
    ctaHtml(page),
  ].join("");
}

function bodyContent(page) {
  if (page.type === "home") return homeContent(page);
  if (page.type === "service") return serviceContent(page);
  if (page.type === "district") return serviceContent(page);
  if (page.type === "brandenburg") return serviceContent(page);
  if (page.type === "prices") return pricesContent(page);
  if (page.type === "contact") return contactContent(page);
  return legalContent(page);
}

function render(page) {
  const bodyClass = `page-${page.type} route-${page.slug || "home"}`;
  return `<!doctype html>
<html lang="de">
<head>
  ${headHtml(page)}
</head>
<body class="${bodyClass}">
  ${headerHtml()}
  <main>
    ${breadcrumbHtml(page)}
    ${bodyContent(page)}
  </main>
  ${footerHtml()}
  <script src="/assets/js/main.min.js?v=${assetVersion}" defer></script>
</body>
</html>
`;
}

function xmlEsc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function pagePriority(page) {
  if (page.type === "home") return "1.0";
  if (page.slug === "entruempelung-berlin") return "0.9";
  if (page.type === "service") return "0.8";
  if (page.type === "prices" || page.type === "contact") return "0.7";
  if (page.type === "district" || page.type === "brandenburg") return "0.6";
  return "0.3";
}

function pageChangefreq(page) {
  if (page.type === "home") return "weekly";
  if (page.type === "legal") return "yearly";
  return "monthly";
}

function writeSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages.map((page) => `  <url>
    <loc>${xmlEsc(absoluteUrl(page.slug))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${pageChangefreq(page)}</changefreq>
    <priority>${pagePriority(page)}</priority>
  </url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  fs.writeFileSync(path.join(root, "sitemap.xml"), xml, "utf8");
}

function writeRobots() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
  fs.writeFileSync(path.join(root, "robots.txt"), robots, "utf8");
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>+~])\s*/g, "$1")
    .replace(/;}/g, "}")
    .replace(/\s*!important/g, "!important")
    .trim();
}

function minifyJs(js) {
  return js
    .replace(/^\s*\/\/.*$/gm, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}();,:=<>!+\-*/])\s*/g, "$1")
    .trim();
}

function writeOptimizedAssets() {
  const cssPath = path.join(root, "assets", "css", "styles.css");
  const jsPath = path.join(root, "assets", "js", "main.js");
  const css = fs.readFileSync(cssPath, "utf8");
  const js = fs.readFileSync(jsPath, "utf8");
  fs.writeFileSync(path.join(root, "assets", "css", "styles.min.css"), minifyCss(css), "utf8");
  fs.writeFileSync(path.join(root, "assets", "js", "main.min.js"), minifyJs(js), "utf8");
}

writeOptimizedAssets();

for (const page of pages) {
  const dir = page.slug ? path.join(root, page.slug) : root;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), render(page), "utf8");
}

writeSitemap();
writeRobots();

console.log(`Generated ${pages.length} pages, sitemap.xml and robots.txt.`);
