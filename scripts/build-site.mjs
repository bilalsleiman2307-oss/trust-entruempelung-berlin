import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://www.trust-entruempelung-berlin.de";
const phone = "03023957118";
const whatsapp = "";
const email = "entruempelung@trust-bm-service.de";
const formEmail = "entruempelung@trust-bm-service.de";
const assetVersion = "design-mix-27";
const phoneDisplay = "030 23957118";
const phoneHref = `tel:${phone}`;
const whatsappHref = whatsapp ? `https://wa.me/${whatsapp}` : "/kontakt/";
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
      ["Kann ich kurzfristig einen Termin bekommen?", "Kurzfristige Termine sind möglich, wenn Umfang, Zugang und Entsorgungskapazität passen. Fotos per WhatsApp helfen bei der schnellen Einschätzung."],
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
  return [
    [`Was kostet eine ${serviceType.label} in ${area.name}?`, `Die Kosten hängen von Menge, Etage, Zugang, Fahrstuhl, Parkmöglichkeit, Demontage und Entsorgung ab. Nach Fotos oder kostenloser Besichtigung erhalten Sie eine klare Einschätzung.`],
    [`Ist eine kostenlose Besichtigung in ${area.name} möglich?`, `Ja, eine kostenlose Besichtigung in ${area.name} ist nach Absprache möglich. Fotos per WhatsApp helfen zusätzlich bei der ersten Einschätzung.`],
    [`Wie schnell ist ein Termin in ${area.name} möglich?`, `Das hängt von Umfang, Zugang und Tourenplanung ab. Wenn die Angaben vollständig sind, können auch kurzfristige Termine geprüft werden.`],
    ["Wird besenrein übergeben?", "Ja, die besenreine Übergabe kann direkt vereinbart werden, wenn sie für Vermieter, Eigentümer oder Verwaltung benötigt wird."],
    ["Was passiert mit Möbeln, Hausrat und Sperrmüll?", "Möbel, Hausrat und Sperrmüll werden getragen, transportiert, getrennt und fachgerecht entsorgt. Verwertbare Gegenstände können vorab geprüft werden."],
  ];
}

function districtLinks(area, currentKey) {
  const siblingLinks = districtServiceTypes
    .filter((item) => item.key !== currentKey)
    .map((item) => `${item.slugPrefix}-${area.slug}`);
  return [...siblingLinks, "entruempelung-berlin", "wohnungsaufloesung-berlin", "nachlassaufloesung-berlin", "preise", "kontakt"];
}

function makeDistrictPage(area, serviceType) {
  const keyword = `${serviceType.label} ${area.name}`;
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
      ["Wie schnell bekomme ich einen Termin?", "Wenn Umfang und Zugang klar sind, sind auch kurzfristige Termine möglich. Fotos per WhatsApp beschleunigen die Einschätzung."],
      ["Was ist im Festpreis enthalten?", "Der Festpreis umfasst die vereinbarte Räumung, Tragen, Transport, Entsorgung und auf Wunsch die besenreine Übergabe."],
      ["Muss ich bei der Entrümpelung vor Ort sein?", "Nicht immer. Schlüsselübergabe, Rückfragen und Abschluss können vorher klar abgestimmt werden."],
      ["Was passiert mit Möbeln und Sperrmüll?", "Möbel und Sperrmüll werden sortiert, getragen, transportiert und fachgerecht entsorgt. Verwertbare Gegenstände können geprüft werden."],
      ["Übernehmen Sie auch Keller, Dachboden und Garage?", "Ja, Kellerentrümpelung, Dachbodenentrümpelung und Garagenentrümpelung gehören zu den Leistungen in Berlin."],
      ["Machen Sie auch Wohnungsauflösungen nach Todesfall?", "Ja, Nachlassauflösungen und Wohnungsauflösungen nach Todesfall werden diskret und mit klaren Absprachen durchgeführt."],
      ["Arbeiten Sie auch für Hausverwaltungen und Firmen?", "Ja, Trust übernimmt Entrümpelung Berlin auch für Hausverwaltungen, Eigentümer, Büros, Praxen und Gewerbeflächen."],
      ["Kann ich Fotos per WhatsApp schicken?", "Ja, Fotos von Räumen, Etage, Zugang und Gegenständen helfen bei der kostenlosen Einschätzung. Eine kostenlose Besichtigung ist nach Absprache möglich."],
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
      ["Kann ich Fotos per WhatsApp senden?", "Ja, Fotos sind für eine schnelle Einschätzung sehr hilfreich. Eine kostenlose Besichtigung ist nach Absprache möglich."],
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
  ["WhatsApp mit Fotos möglich", "Schnelle Orientierung ohne lange Vortermine."],
  ["Berlin & Umland", "Berlin ist Schwerpunkt, Brandenburg nach Absprache."],
];

const processSteps = [
  ["Ihre Anfrage", "Senden Sie uns Fotos, Bezirk, Etage, Fahrstuhl und den gewünschten Zeitraum."],
  ["Unser Angebot", "Wir prüfen Umfang, Zugang, Parkmöglichkeit und nennen nach Einschätzung einen klaren Festpreis."],
  ["Die Umsetzung", "Wir räumen, sortieren, transportieren, entsorgen und übergeben auf Wunsch besenrein."],
];

const costFactors = ["Menge & Volumen", "Etage & Fahrstuhl", "Parkmöglichkeit", "Demontage", "Entsorgungsart", "Sonderstoffe", "Wertanrechnung", "Terminwunsch"];

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
        <img class="brand-logo" src="/assets/logo-trust-transparent.png?v=${assetVersion}" alt="Trust Entrümpelung Berlin">
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
  return `<div class="container breadcrumb"><a href="/">Startseite</a> / <span>${esc(page.keyword)}</span></div>`;
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
            <a class="button button-whatsapp" href="${whatsappHref}">WhatsApp-Anfrage</a>
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
    <p>Von der ersten Anfrage bis zur besenreinen Übergabe haben Sie einen klaren Ansprechpartner. Senden Sie uns Fotos per WhatsApp oder schildern Sie kurz den Fall - wir geben Ihnen eine erste Einschätzung und planen den nächsten Schritt.</p>
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

function faqHtml(page) {
  return `<section class="section-soft"><div class="container">
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
    <form class="inquiry-form" action="/kontaktformular.php" method="post" enctype="multipart/form-data">
      <h2>Anfrage senden</h2>
      <p>Ihre Anfrage geht an ${formEmail}. Wir melden uns in der Regel innerhalb von 24 Stunden zurück.</p>
      <input type="hidden" name="source_page" value="${esc(page.keyword)}">
      <label class="hp-field">Website<input name="website" tabindex="-1" autocomplete="off"></label>
      <div class="form-grid">
        <label>Name<input name="name" autocomplete="name"></label>
        <label>Telefon<input name="phone" autocomplete="tel"></label>
        <label>E-Mail<input name="email" type="email" autocomplete="email"></label>
        <label>Bezirk / Adresse<input name="area"></label>
        <label>Welche Leistung?<select name="service">${serviceOptions.map((option) => `<option>${esc(option)}</option>`).join("")}</select></label>
        <label>Etage / Fahrstuhl<input name="floor" placeholder="z. B. 3. OG, kein Fahrstuhl"></label>
        <label class="span-2">Kurzbeschreibung<textarea name="message" placeholder="Was soll geräumt werden? Gibt es Keller, Dachboden, Garage oder Sperrmüll?"></textarea></label>
        <label>Wunschtermin<input name="date"></label>
        <label>Fotos<input name="photos" type="file" multiple></label>
      </div>
      <div class="form-actions">
        <button class="button button-primary" type="submit">Anfrage absenden</button>
      </div>
      <p>Datenschutz-Hinweis: Die Angaben werden zur Bearbeitung Ihrer Anfrage an ${formEmail} übermittelt.</p>
    </form>
  </div></section>`;
}

function internalLinksHtml(page) {
  const linkSlugs = page.links || ["entruempelung-berlin", "wohnungsaufloesung-berlin", "haushaltsaufloesung-berlin", "preise", "kontakt"];
  const linkIntro = page.type === "brandenburg" ? "Diese Seiten helfen bei der Einordnung und führen zu passenden Leistungen für Berlin und das Berliner Umland." : "Diese Seiten helfen bei der Einordnung und führen zu verwandten Leistungen in Berlin.";
  return `<section><div class="container"><div class="section-intro"><h2>Passende nächste Seiten</h2><p>${linkIntro}</p></div><div class="grid-3">${linkSlugs.map((slug) => {
    const target = serviceBySlug[slug] || districtPageBySlug[slug] || brandenburgPageBySlug[slug] || pages.find((item) => item.slug === slug);
    return `<a class="card" href="/${slug}/"><span class="card-kicker">Weitere Leistung</span><h3>${esc(target?.keyword || slug)}</h3><p>Ablauf, Einschätzung und Anfrage für diese Leistung ansehen.</p></a>`;
  }).join("")}</div></div></section>`;
}

function footerHtml() {
  return `<footer class="site-footer"><div class="container-wide">
    <div class="footer-grid">
      <div><img class="footer-logo" src="/assets/logo-trust-transparent.png?v=${assetVersion}" alt="Trust Entrümpelung Berlin"><div class="footer-title">Trust Entrümpelung Berlin</div><p>Trust Entrümpelung Berlin übernimmt Entrümpelungen, Wohnungsauflösungen, Haushaltsauflösungen, Sperrmüllabholungen und Firmenauflösungen in Berlin. Unser Schwerpunkt liegt auf klarer Planung, transparenter Einschätzung, fachgerechter Entsorgung und besenreiner Übergabe.</p><p>Telefon: <a href="${phoneHref}">${phoneDisplay}</a><br>E-Mail: ${email}</p></div>
      <div><div class="footer-title">Leistungen</div><a href="/entruempelung-berlin/">Entrümpelung Berlin</a><a href="/wohnungsaufloesung-berlin/">Wohnungsauflösung Berlin</a><a href="/haushaltsaufloesung-berlin/">Haushaltsauflösung Berlin</a><a href="/nachlassaufloesung-berlin/">Nachlassauflösung Berlin</a><a href="/firmenaufloesung-berlin/">Firmenauflösung Berlin</a><a href="/sperrmuellabholung-berlin/">Sperrmüllabholung Berlin</a></div>
      <div><div class="footer-title">Räume & Spezialfälle</div><a href="/kellerentruempelung-berlin/">Kellerentrümpelung Berlin</a><a href="/dachbodenentruempelung-berlin/">Dachbodenentrümpelung Berlin</a><a href="/garagenentruempelung-berlin/">Garagenentrümpelung Berlin</a><a href="/moebeltransport-berlin/">Möbeltransport Berlin</a><a href="/kleine-umzuege-berlin/">Kleine Umzüge Berlin</a><a href="/entruempelung-berlin/">Messie-Wohnung entrümpeln</a></div>
      <div><div class="footer-title">Einsatzgebiete</div><a href="/#einsatzgebiete">Berlin Mitte</a><a href="/#einsatzgebiete">Wedding</a><a href="/#einsatzgebiete">Pankow</a><a href="/#einsatzgebiete">Charlottenburg</a><a href="/#einsatzgebiete">Neukölln</a><a href="/#einsatzgebiete">Spandau</a><a href="/entruempelung-brandenburg/">Entrümpelung Brandenburg</a><a href="/wohnungsaufloesung-brandenburg/">Wohnungsauflösung Brandenburg</a><a href="/nachlassaufloesung-brandenburg/">Nachlassauflösung Brandenburg</a></div>
      <div><div class="footer-title">Unternehmen</div><a href="/#leistungen">Über uns</a><a href="/#ablauf">Ablauf</a><a href="/preise/">Preise</a><a href="/kontakt/">Kontakt</a><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a></div>
    </div>
    <div class="footer-bottom"><span>© ${new Date().getFullYear()} Trust Entrümpelung Berlin</span><span>Entrümpelung, Wohnungsauflösung und Sperrmüllabholung in Berlin.</span></div>
  </div></footer>
  <div class="mobile-callbar"><a class="button button-secondary" href="/kontakt/">Anfrage</a><a class="button button-primary" href="${phoneHref}">Anrufen</a><a class="button button-whatsapp" href="${whatsappHref}">WhatsApp</a></div>`;
}

function schema(page) {
  const pageUrl = absoluteUrl(page.slug);
  const graph = [
    {"@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Trust Entrümpelung Berlin", legalName: legalCompany, url: `${siteUrl}/`, logo: `${siteUrl}/assets/logo-trust-transparent.png`, email, telephone: phoneDisplay},
    {"@type": "LocalBusiness", "@id": `${siteUrl}/#localbusiness`, name: "Trust Entrümpelung Berlin", legalName: legalCompany, url: `${siteUrl}/`, email, telephone: phoneDisplay, address: {"@type": "PostalAddress", streetAddress, postalCode, addressLocality: city, addressCountry: "DE"}, areaServed: ["Berlin", ...brandenburgPlaces], serviceType: [...services.map((item) => item.keyword), ...brandenburgPages.map((item) => item.keyword)]},
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

function headHtml(page) {
  const canonical = absoluteUrl(page.slug);
  return `<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical}">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="0">
  <link rel="stylesheet" href="/assets/css/styles.css?v=${assetVersion}">
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
    `<section id="leistungen"><div class="container"><div class="section-intro"><h2>Professionelle ${esc(page.keyword)}: Was wir übernehmen</h2><p>${esc(page.keyword)} wird so geplant, dass Umfang, Zugang, Transport, Entsorgung und Übergabe zusammenpassen.</p></div><div class="grid-3">${page.includes.map((item) => `<div class="card"><span class="card-kicker">Leistungsbereich</span><h3>${esc(item)}</h3><p>Der Umfang wird vor Beginn sauber aufgenommen, damit Angebot, Team und Zeitfenster zum Auftrag passen.</p></div>`).join("")}</div></div></section>`,
    `<section class="section-blue"><div class="container"><div class="section-intro"><h2>Typische Situationen für ${esc(page.keyword)}</h2><p>Viele Anfragen entstehen durch Auszug, Übergabe, Nachlass, Sanierung oder Platzmangel. Entscheidend ist eine klare Einschätzung vor Beginn.</p></div><div class="grid-3">${page.situations.map((item) => `<div class="card"><h3>${esc(item)}</h3><p>Zugang, Etage, Tragewege, Parkmöglichkeit und Entsorgung werden passend zu dieser Situation geplant.</p></div>`).join("")}</div></div></section>`,
    processHtml(page.keyword),
    costsHtml(page.keyword),
    `<section><div class="container split"><div><h2>${esc(page.compareTitle)}</h2><p>${esc(page.compareText)}</p></div><div class="card"><h3>Vor der Einschätzung hilfreich</h3><ul class="mini-list"><li>Fotos der Räume und Gegenstände</li><li>Bezirk, Etage und Fahrstuhl</li><li>Parkmöglichkeit und Tragewege</li><li>Wunschtermin und Übergabeziel</li></ul></div></div></section>`,
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
    costsHtml("Entrümpelung in Berlin"),
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
    `<section><div class="container contact-layout"><div class="card"><h2>Kontaktwege</h2><p>Sie erreichen Trust Entrümpelung Berlin telefonisch, per E-Mail oder über das Anfrageformular. Für eine erste Einschätzung helfen Fotos, Bezirk, Etage und eine kurze Beschreibung.</p><ul class="mini-list"><li>Telefon: ${phoneDisplay}</li><li>E-Mail: ${email}</li><li>Kostenlose Besichtigung bei größeren Aufträgen</li><li>Einsatzgebiet: Berlin und Berliner Umland</li></ul><div class="hero-actions"><a class="button button-primary" href="${phoneHref}">Jetzt anrufen</a><a class="button button-secondary" href="#anfrageformular">Anfrage senden</a></div></div><div class="card"><h2>Was wir für die Einschätzung brauchen</h2><ul class="mini-list"><li>Fotos von Räumen und Gegenständen</li><li>Bezirk, Etage und Fahrstuhl</li><li>Parkmöglichkeit und Tragewege</li><li>Wunschtermin und Übergabeziel</li></ul></div></div></section>`,
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
  return `<!doctype html>
<html lang="de">
<head>
  ${headHtml(page)}
</head>
<body>
  ${headerHtml()}
  <main>
    ${breadcrumbHtml(page)}
    ${bodyContent(page)}
  </main>
  ${footerHtml()}
  <script src="/assets/js/main.js?v=${assetVersion}" defer></script>
</body>
</html>
`;
}

for (const page of pages) {
  const dir = page.slug ? path.join(root, page.slug) : root;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), render(page), "utf8");
}

console.log(`Generated ${pages.length} pages.`);
