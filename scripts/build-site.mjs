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
const whatsappHref = whatsapp ? `https://api.whatsapp.com/send?phone=${whatsapp}` : "/kontakt/";
const whatsappAttrs = `href="${whatsappHref}"`;
const socialImage = `${siteUrl}/assets/hero-entruempelung.jpg`;
const legalCompany = "Trust B&M Service UG (haftungsbeschrÃ¤nkt)";
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
    keyword: "EntrÃ¼mpelung Berlin",
    short: "EntrÃ¼mpelung Berlin",
    title: "EntrÃ¼mpelung Berlin | Wohnung, Keller & Hausrat rÃ¤umen lassen",
    description: "EntrÃ¼mpelung Berlin vom professionellen EntrÃ¼mpelungsdienst: Wohnung, Keller, Dachboden, Garage und Hausrat rÃ¤umen lassen. Kostenlose Besichtigung, Festpreis nach EinschÃ¤tzung und besenreine Ãœbergabe.",
    h1: "EntrÃ¼mpelung Berlin - Wohnung, Keller & Hausrat professionell rÃ¤umen lassen",
    image: "Heller Berliner Altbauflur nach besenreiner Ãœbergabe",
    intro: "Unsere EntrÃ¼mpelung Berlin richtet sich an Privatkunden, AngehÃ¶rige, EigentÃ¼mer, Hausverwaltungen und Firmen. Wir prÃ¼fen Umfang, Etage, Zugang, ParkmÃ¶glichkeit, Demontageaufwand und gewÃ¼nschtes Ãœbergabedatum, bevor ein Festpreis genannt wird.",
    includes: ["Wohnung, Haus, Keller, Dachboden und Garage", "SperrmÃ¼ll, MÃ¶bel, Hausrat und ElektrogerÃ¤te", "EntrÃ¼mpelung fÃ¼r Privatkunden, Vermieter und Firmen"],
    situations: ["Wohnung leer rÃ¤umen vor Ãœbergabe", "Keller und Dachboden nach Jahren wieder nutzbar machen", "Hausrat nach Auszug, Sanierung oder Nachlass entfernen"],
    compareTitle: "EntrÃ¼mpelung oder SperrmÃ¼llabholung: Was ist der Unterschied?",
    compareText: "Eine SperrmÃ¼llabholung betrifft meist einzelne MÃ¶belstÃ¼cke. Eine EntrÃ¼mpelung in Berlin umfasst Planung, Tragen, Sortierung, Demontage, Entsorgung und auf Wunsch eine besenreine Ãœbergabe ganzer RÃ¤ume.",
    faq: [
      ["Was kostet eine EntrÃ¼mpelung in Berlin?", "Die Kosten hÃ¤ngen von Menge, Etage, Zugang, ParkmÃ¶glichkeit, Demontage und Entsorgungsart ab. FÃ¼r eine seriÃ¶se EntrÃ¼mpelung Berlin nennen wir den Festpreis nach Fotos oder Besichtigung."],
      ["Wie lange dauert eine EntrÃ¼mpelung?", "Kleine RÃ¤ume sind oft an einem Tag erledigt. Ganze Wohnungen, Keller und DachbÃ¶den planen wir je nach Umfang mit passendem Team und Zeitfenster."],
      ["Kann ich kurzfristig einen Termin bekommen?", "Kurzfristige Termine sind mÃ¶glich, wenn Umfang, Zugang und EntsorgungskapazitÃ¤t passen. Fotos und vollstÃ¤ndige Eckdaten helfen bei der schnellen EinschÃ¤tzung."],
      ["Was ist im Festpreis enthalten?", "Der Festpreis umfasst die vereinbarte RÃ¤umung, Tragen, Transport, fachgerechte Entsorgung und die besenreine Ãœbergabe, wenn sie beauftragt wurde."],
      ["Was passiert mit MÃ¶beln und SperrmÃ¼ll?", "MÃ¶bel und SperrmÃ¼ll werden getrennt, getragen, transportiert und fachgerecht entsorgt. Verwertbare GegenstÃ¤nde kÃ¶nnen vorab fÃ¼r eine Wertanrechnung geprÃ¼ft werden."],
      ["Wird die Wohnung besenrein Ã¼bergeben?", "Ja, bei der EntrÃ¼mpelung Berlin kann die besenreine Ãœbergabe direkt vereinbart werden."],
      ["Gibt es eine Wertanrechnung?", "Wenn verwertbare GegenstÃ¤nde vorhanden sind, prÃ¼fen wir realistisch, ob eine Wertanrechnung mÃ¶glich ist."],
      ["Arbeitet Trust EntrÃ¼mpelung auch fÃ¼r Hausverwaltungen?", "Ja, wir stimmen Zugang, Terminfenster, RÃ¼ckfragen und Ãœbergabe fÃ¼r Hausverwaltungen und Vermieter klar ab."],
    ],
    links: ["wohnungsaufloesung-berlin", "haushaltsaufloesung-berlin", "kellerentruempelung-berlin", "dachbodenentruempelung-berlin", "garagenentruempelung-berlin", "sperrmuellabholung-berlin", "preise", "kontakt"],
  },
  {
    slug: "wohnungsaufloesung-berlin",
    keyword: "WohnungsauflÃ¶sung Berlin",
    short: "WohnungsauflÃ¶sung Berlin",
    title: "WohnungsauflÃ¶sung Berlin | Wohnung besenrein rÃ¤umen lassen",
    description: "WohnungsauflÃ¶sung Berlin mit Trust: Wohnung leer rÃ¤umen, MÃ¶bel und Hausrat entsorgen, Wertanrechnung prÃ¼fen und besenrein Ã¼bergeben. Kostenlose Besichtigung und Festpreis nach EinschÃ¤tzung.",
    h1: "WohnungsauflÃ¶sung Berlin - Wohnung leer rÃ¤umen und besenrein Ã¼bergeben",
    image: "Besenreine Wohnung mit Licht durch Fenster",
    intro: "Eine WohnungsauflÃ¶sung Berlin braucht klare Planung, besonders wenn Ãœbergabetermin, Vermieter, AngehÃ¶rige oder Hausverwaltung beteiligt sind. Trust rÃ¤umt MÃ¶bel, Hausrat, SperrmÃ¼ll und NebenrÃ¤ume und bereitet die Wohnung auf Wunsch besenrein fÃ¼r die Ãœbergabe vor.",
    includes: ["MÃ¶bel, Hausrat und SperrmÃ¼ll", "KÃ¼che, Teppiche, Lampen und ElektrogerÃ¤te", "Sortierung, Demontage und fachgerechte Entsorgung"],
    situations: ["Nach Umzug, KÃ¼ndigung oder Pflegeheim", "WohnungsauflÃ¶sung nach Todesfall", "Ãœbergabe an Vermieter, EigentÃ¼mer oder Hausverwaltung"],
    compareTitle: "WohnungsauflÃ¶sung oder EntrÃ¼mpelung?",
    compareText: "Die WohnungsauflÃ¶sung in Berlin meint meist die komplette RÃ¤umung einer Wohnung inklusive Ãœbergabeziel. Eine EntrÃ¼mpelung kann auch einzelne RÃ¤ume wie Keller, Dachboden oder Garage betreffen.",
    faq: [
      ["Was kostet eine WohnungsauflÃ¶sung in Berlin?", "Der Preis richtet sich nach WohnungsgrÃ¶ÃŸe, Menge, Etage, Fahrstuhl, ParkmÃ¶glichkeit, Demontage und Entsorgung. Nach EinschÃ¤tzung erhalten Sie einen klaren Festpreis."],
      ["Wie lange dauert eine WohnungsauflÃ¶sung?", "Viele Wohnungen lassen sich an einem Tag rÃ¤umen. GrÃ¶ÃŸere Haushalte oder schwierige ZugÃ¤nge planen wir mit mehr Zeit und TeamstÃ¤rke."],
      ["Muss ich bei der WohnungsauflÃ¶sung vor Ort sein?", "Nicht zwingend. SchlÃ¼sselÃ¼bergabe, RÃ¼ckfragen und Abschluss kÃ¶nnen vorher klar abgestimmt werden."],
      ["Kann die Wohnung besenrein Ã¼bergeben werden?", "Ja, die besenreine Ãœbergabe ist ein hÃ¤ufiger Bestandteil unserer WohnungsauflÃ¶sung Berlin."],
      ["Was passiert mit MÃ¶beln und Hausrat?", "MÃ¶bel und Hausrat werden sortiert, getragen, transportiert und fachgerecht entsorgt oder bei Verwertbarkeit geprÃ¼ft."],
      ["Ãœbernehmen Sie WohnungsauflÃ¶sungen nach Todesfall?", "Ja, wir arbeiten diskret und stimmen persÃ¶nliche Unterlagen, WertgegenstÃ¤nde und RÃ¼ckfragen vorher ab."],
    ],
    links: ["entruempelung-berlin", "haushaltsaufloesung-berlin", "nachlassaufloesung-berlin", "preise", "kontakt"],
  },
  {
    slug: "haushaltsaufloesung-berlin",
    keyword: "HaushaltsauflÃ¶sung Berlin",
    short: "HaushaltsauflÃ¶sung Berlin",
    title: "HaushaltsauflÃ¶sung Berlin | Hausrat rÃ¤umen & entsorgen lassen",
    description: "HaushaltsauflÃ¶sung Berlin mit Trust: Hausrat, MÃ¶bel, SperrmÃ¼ll und GegenstÃ¤nde rÃ¤umen, sortieren und fachgerecht entsorgen lassen. Kostenlose Besichtigung und Festpreis nach EinschÃ¤tzung.",
    h1: "HaushaltsauflÃ¶sung Berlin - Hausrat rÃ¤umen, sortieren und entsorgen lassen",
    image: "Geordnete Kartons und Schutzmaterial vor einer HaushaltsauflÃ¶sung",
    intro: "Bei einer HaushaltsauflÃ¶sung Berlin geht es um mehr als Tragen. Ein kompletter Hausstand wird sortiert, verwertbare GegenstÃ¤nde werden geprÃ¼ft, SperrmÃ¼ll und Hausrat werden fachgerecht entsorgt und RÃ¤ume werden fÃ¼r Ãœbergabe, Verkauf oder Sanierung vorbereitet.",
    includes: ["MÃ¶bel, Hausrat, Kleidung, BÃ¼cher und Geschirr", "Demontage, Transport und Entsorgung", "Besenreine Ãœbergabe nach Vereinbarung"],
    situations: ["HaushaltsauflÃ¶sung nach Umzug, Pflegeheim oder Todesfall", "Diskrete UnterstÃ¼tzung fÃ¼r AngehÃ¶rige und EigentÃ¼mer", "Kompletter Hausstand muss termingerecht frei werden"],
    compareTitle: "HaushaltsauflÃ¶sung mit Wertanrechnung",
    compareText: "Wenn MÃ¶bel, GerÃ¤te oder GegenstÃ¤nde verwertbar sind, prÃ¼fen wir vorab eine realistische Wertanrechnung. Nicht jeder Gegenstand hat Marktwert, aber die PrÃ¼fung gehÃ¶rt zu einer transparenten HaushaltsauflÃ¶sung Berlin.",
    faq: [
      ["Was kostet eine HaushaltsauflÃ¶sung in Berlin?", "Die Kosten hÃ¤ngen von Umfang, Etage, Tragewegen, Demontage, Entsorgung und mÃ¶glicher Wertanrechnung ab."],
      ["Was wird bei einer HaushaltsauflÃ¶sung mitgenommen?", "MÃ¶bel, Hausrat, Kleidung, BÃ¼cher, Geschirr, SperrmÃ¼ll und ElektrogerÃ¤te kÃ¶nnen nach Absprache gerÃ¤umt werden."],
      ["Muss vorher sortiert werden?", "Nein. Wenn bestimmte Unterlagen oder ErinnerungsstÃ¼cke gesichert werden sollen, besprechen wir das vor der RÃ¤umung."],
      ["Gibt es eine Wertanrechnung?", "Ja, verwertbare GegenstÃ¤nde kÃ¶nnen geprÃ¼ft und im Angebot berÃ¼cksichtigt werden."],
      ["Ist eine besenreine Ãœbergabe mÃ¶glich?", "Ja, die RÃ¤ume kÃ¶nnen nach der HaushaltsauflÃ¶sung Berlin besenrein Ã¼bergeben werden."],
    ],
    links: ["wohnungsaufloesung-berlin", "nachlassaufloesung-berlin", "entruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "nachlassaufloesung-berlin",
    keyword: "NachlassauflÃ¶sung Berlin",
    short: "NachlassauflÃ¶sung Berlin",
    title: "NachlassauflÃ¶sung Berlin | Diskret Wohnung & Hausrat rÃ¤umen",
    description: "NachlassauflÃ¶sung Berlin mit Trust: Wohnung, MÃ¶bel und Hausrat nach Todesfall diskret rÃ¤umen, Wertanrechnung prÃ¼fen und besenrein Ã¼bergeben. Kostenlose Besichtigung und EinschÃ¤tzung.",
    h1: "NachlassauflÃ¶sung Berlin - diskret rÃ¤umen, sortieren und Ã¼bergeben",
    image: "SchlÃ¼sselÃ¼bergabe an WohnungstÃ¼r, HÃ¤nde ohne erkennbare Gesichter",
    intro: "Eine NachlassauflÃ¶sung Berlin verlangt Ruhe, klare Absprachen und Diskretion. Wir stimmen SchlÃ¼sselÃ¼bergabe, persÃ¶nliche Unterlagen, WertgegenstÃ¤nde, RÃ¼ckfragen und Ãœbergabe so ab, dass AngehÃ¶rige nicht dauerhaft vor Ort sein mÃ¼ssen.",
    includes: ["Wohnung, Keller, Dachboden und Hausrat", "Sortierung nach vorherigen Vorgaben", "Ãœbergabe an AngehÃ¶rige, Vermieter oder Hausverwaltung"],
    situations: ["Wohnung nach Todesfall rÃ¤umen", "AngehÃ¶rige wohnen nicht in Berlin", "Nachlass muss fÃ¼r KÃ¼ndigungsfrist oder Verkauf geordnet werden"],
    compareTitle: "Diskrete NachlassauflÃ¶sung ohne falsche Versprechen",
    compareText: "Wir versprechen keine pauschalen ErlÃ¶se. Bei verwertbaren GegenstÃ¤nden prÃ¼fen wir eine realistische Wertanrechnung und dokumentieren vorab, welche Dinge besonders beachtet werden sollen.",
    faq: [
      ["Was kostet eine NachlassauflÃ¶sung in Berlin?", "Der Preis richtet sich nach Umfang, Etage, Zugang, MÃ¶belmenge, NebenrÃ¤umen und Entsorgungsaufwand."],
      ["KÃ¶nnen AngehÃ¶rige die NachlassauflÃ¶sung aus der Ferne organisieren?", "Ja, SchlÃ¼sselÃ¼bergabe, Fotos, RÃ¼ckfragen und Abschluss kÃ¶nnen vorab klar abgestimmt werden."],
      ["Wie gehen Sie mit persÃ¶nlichen Unterlagen um?", "Wir besprechen vorher, welche Unterlagen, Fotos oder ErinnerungsstÃ¼cke gesichert werden sollen."],
      ["Ist eine Wertanrechnung mÃ¶glich?", "Ja, verwertbare GegenstÃ¤nde kÃ¶nnen geprÃ¼ft werden. Wir bleiben dabei realistisch und transparent."],
      ["Wird die Wohnung besenrein Ã¼bergeben?", "Ja, eine besenreine Ãœbergabe kann fÃ¼r die NachlassauflÃ¶sung Berlin vereinbart werden."],
    ],
    links: ["wohnungsaufloesung-berlin", "haushaltsaufloesung-berlin", "entruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "firmenaufloesung-berlin",
    keyword: "FirmenauflÃ¶sung Berlin",
    short: "FirmenauflÃ¶sung Berlin",
    title: "FirmenauflÃ¶sung Berlin | BÃ¼ro, Lager & Gewerbe rÃ¤umen",
    description: "FirmenauflÃ¶sung Berlin mit Trust: BÃ¼ro, Praxis, Lager und GewerbeflÃ¤chen rÃ¤umen, MÃ¶bel demontieren, entsorgen und termingerecht Ã¼bergeben. Kostenlose Besichtigung und EinschÃ¤tzung.",
    h1: "FirmenauflÃ¶sung Berlin - BÃ¼ro, Lager und GewerbeflÃ¤chen rÃ¤umen lassen",
    image: "BÃ¼roflÃ¤che nach FirmenauflÃ¶sung",
    intro: "Eine FirmenauflÃ¶sung Berlin braucht belastbare Zeitfenster, klare ZustÃ¤ndigkeiten und saubere Ãœbergaben. Trust rÃ¤umt BÃ¼ros, Praxen, Lager und GewerbeflÃ¤chen mit Blick auf Zugang, Datenschutz, Demontage und Entsorgung.",
    includes: ["BÃ¼romÃ¶bel, AktenmÃ¶bel, Regale und LagerbestÃ¤nde", "Demontage, Transport und fachgerechte Entsorgung", "Ãœbergabe an EigentÃ¼mer, Verwaltung oder Projektleitung"],
    situations: ["BÃ¼roauflÃ¶sung nach Umzug", "LagerflÃ¤che muss leer Ã¼bergeben werden", "Praxen, Kanzleien oder Gewerbeeinheiten werden gerÃ¤umt"],
    compareTitle: "FÃ¼r Hausverwaltungen, EigentÃ¼mer und Unternehmen",
    compareText: "Wir halten RÃ¼ckfragen, Zutritt, Zeitfenster und Ãœbergabe schriftlich klar. Bei Akten oder sensiblen GegenstÃ¤nden werden die ZustÃ¤ndigkeiten vorab besprochen.",
    faq: [
      ["Was kostet eine FirmenauflÃ¶sung in Berlin?", "Die Kosten richten sich nach FlÃ¤che, Menge, Etage, Demontage, Transportwegen und Entsorgungsart."],
      ["RÃ¤umen Sie auch BÃ¼ros und Praxen?", "Ja, BÃ¼roflÃ¤chen, Praxen, kleine Lager und Gewerbeeinheiten gehÃ¶ren zur FirmenauflÃ¶sung Berlin."],
      ["KÃ¶nnen Termine auÃŸerhalb Ã¼blicher Zeiten geplant werden?", "Nach Absprache sind passende Zeitfenster mÃ¶glich, wenn Objekt, Zugang und Entsorgung planbar sind."],
      ["Was passiert mit BÃ¼romÃ¶beln?", "BÃ¼romÃ¶bel werden demontiert, getragen, transportiert und fachgerecht entsorgt oder bei Verwertbarkeit geprÃ¼ft."],
      ["Arbeiten Sie fÃ¼r Hausverwaltungen?", "Ja, wir stimmen Auftrag, Zugang und Ãœbergabe mit Hausverwaltungen und EigentÃ¼mern ab."],
    ],
    links: ["entruempelung-berlin", "sperrmuellabholung-berlin", "moebeltransport-berlin", "preise", "kontakt"],
  },
  {
    slug: "kellerentruempelung-berlin",
    keyword: "KellerentrÃ¼mpelung Berlin",
    short: "KellerentrÃ¼mpelung Berlin",
    title: "KellerentrÃ¼mpelung Berlin | Keller rÃ¤umen & entsorgen lassen",
    description: "KellerentrÃ¼mpelung Berlin mit Trust: Kellerraum, Verschlag, MÃ¶bel, Kartons und SperrmÃ¼ll rÃ¤umen lassen. Kostenlose Besichtigung und Festpreis nach EinschÃ¤tzung.",
    h1: "KellerentrÃ¼mpelung Berlin - Keller rÃ¤umen und entsorgen lassen",
    image: "Leerer Kellerraum nach RÃ¤umung",
    intro: "Eine KellerentrÃ¼mpelung Berlin ist oft enger, staubiger und komplizierter als gedacht. Wir prÃ¼fen Zugang, Tragewege, Licht, Etage, ParkmÃ¶glichkeit und Entsorgungsart, bevor wir den Keller rÃ¤umen.",
    includes: ["Kellerraum, Kellerbox und Verschlag", "Kartons, MÃ¶bel, Hausrat und SperrmÃ¼ll", "Tragen durch Altbauflur oder Tiefgarage"],
    situations: ["Keller vor Umzug leer machen", "Keller nach Jahren wieder nutzbar machen", "Keller fÃ¼r Hausverwaltung oder Verkauf rÃ¤umen"],
    compareTitle: "KellerentrÃ¼mpelung mit sauberer Planung",
    compareText: "Bei Berliner Altbauten planen wir Laufwege, Treppenhausschutz und ParkmÃ¶glichkeit vorab ein. So bleibt die KellerentrÃ¼mpelung Berlin fÃ¼r alle Beteiligten Ã¼bersichtlich.",
    faq: [
      ["Was kostet eine KellerentrÃ¼mpelung in Berlin?", "Der Preis hÃ¤ngt von Menge, Zugang, Trageweg, Entsorgungsart und ParkmÃ¶glichkeit ab."],
      ["Muss ich den Keller vorher sortieren?", "Nein. Wenn bestimmte GegenstÃ¤nde erhalten bleiben sollen, markieren oder besprechen wir sie vorher."],
      ["RÃ¤umen Sie auch Keller ohne Fahrstuhl?", "Ja, Tragewege und Treppen werden vorab in die EinschÃ¤tzung einbezogen."],
      ["Was passiert mit SperrmÃ¼ll aus dem Keller?", "SperrmÃ¼ll wird getragen, transportiert und fachgerecht entsorgt."],
      ["Kann nur ein einzelner Keller gerÃ¤umt werden?", "Ja, KellerentrÃ¼mpelung Berlin ist auch als einzelner Auftrag mÃ¶glich."],
    ],
    links: ["entruempelung-berlin", "dachbodenentruempelung-berlin", "garagenentruempelung-berlin", "sperrmuellabholung-berlin", "kontakt"],
  },
  {
    slug: "dachbodenentruempelung-berlin",
    keyword: "DachbodenentrÃ¼mpelung Berlin",
    short: "DachbodenentrÃ¼mpelung Berlin",
    title: "DachbodenentrÃ¼mpelung Berlin | Dachboden rÃ¤umen lassen",
    description: "DachbodenentrÃ¼mpelung Berlin mit Trust: Dachboden rÃ¤umen, alte MÃ¶bel, Kartons, SperrmÃ¼ll und Hausrat entsorgen lassen. Kostenlose Besichtigung und Festpreis nach EinschÃ¤tzung.",
    h1: "DachbodenentrÃ¼mpelung Berlin - Dachboden rÃ¤umen und entsorgen lassen",
    image: "Mitarbeiter tragen Kartons aus einem Berliner Dachboden, Gesichter nicht erkennbar",
    intro: "Eine DachbodenentrÃ¼mpelung Berlin verlangt besondere Aufmerksamkeit fÃ¼r Tragewege, Treppenhaus, Staub, alte MÃ¶bel und die Entsorgung. Wir planen Zugang und Umfang vorab, damit der Dachboden geordnet gerÃ¤umt wird.",
    includes: ["Alte MÃ¶bel, Kartons, Kisten und SperrmÃ¼ll", "Zugang, Treppenhaus und Tragewege", "RÃ¤umung fÃ¼r Sanierung, Verkauf oder Hausverwaltung"],
    situations: ["Dachboden vor Sanierung leeren", "Abteil im Mehrfamilienhaus rÃ¤umen", "Alte Kisten und MÃ¶bel entsorgen"],
    compareTitle: "Dachboden rÃ¤umen ohne Chaos im Treppenhaus",
    compareText: "Gerade in Altbauten stimmen wir Laufwege und Schutzbedarf ab. Die DachbodenentrÃ¼mpelung Berlin wird so geplant, dass Hausflur und Ãœbergabe sauber bleiben.",
    faq: [
      ["Was kostet eine DachbodenentrÃ¼mpelung in Berlin?", "Menge, Zugang, Etage, Trageweg und Entsorgung bestimmen den Preis."],
      ["RÃ¤umen Sie auch DachbÃ¶den in Altbauten?", "Ja, Altbauten sind hÃ¤ufig. Wir prÃ¼fen Tragewege und ParkmÃ¶glichkeit vorab."],
      ["Was passiert mit alten MÃ¶beln und Kartons?", "Sie werden getragen, sortiert, transportiert und fachgerecht entsorgt."],
      ["Muss ich vorher sortieren?", "Nicht zwingend. Wichtige GegenstÃ¤nde kÃ¶nnen vorab markiert oder besprochen werden."],
      ["Wie lange dauert eine DachbodenentrÃ¼mpelung?", "Kleine DachbÃ¶den dauern oft nur wenige Stunden, grÃ¶ÃŸere FlÃ¤chen planen wir nach Besichtigung."],
    ],
    links: ["entruempelung-berlin", "kellerentruempelung-berlin", "garagenentruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "garagenentruempelung-berlin",
    keyword: "GaragenentrÃ¼mpelung Berlin",
    short: "GaragenentrÃ¼mpelung Berlin",
    title: "GaragenentrÃ¼mpelung Berlin | Garage rÃ¤umen & entsorgen lassen",
    description: "GaragenentrÃ¼mpelung Berlin mit Trust: Garage leer rÃ¤umen, SperrmÃ¼ll, alte MÃ¶bel, Kartons und GegenstÃ¤nde entsorgen lassen. Kostenlose Besichtigung und Festpreis nach EinschÃ¤tzung.",
    h1: "GaragenentrÃ¼mpelung Berlin - Garage rÃ¤umen und GegenstÃ¤nde entsorgen lassen",
    image: "AufgerÃ¤umte Garage nach RÃ¤umung",
    intro: "Bei einer GaragenentrÃ¼mpelung Berlin geht es oft um SperrmÃ¼ll, alte MÃ¶bel, Kartons, Werkzeuge und GegenstÃ¤nde, die jahrelang liegen geblieben sind. Wir klÃ¤ren vorab, was entsorgt werden darf und welche Stoffe gesondert behandelt werden mÃ¼ssen.",
    includes: ["MÃ¶bel, Kartons, Werkzeuge und SperrmÃ¼ll", "PrÃ¼fung von Reifen, Farben und Sonderstoffen", "Garage rÃ¤umen fÃ¼r Verkauf, Umzug oder Hausverwaltung"],
    situations: ["Garage wieder fÃ¼r Auto oder Lagerung nutzen", "Garage vor Ãœbergabe leer machen", "SperrmÃ¼ll aus Garage entfernen"],
    compareTitle: "Was mit Sonderstoffen passiert",
    compareText: "Farben, Lacke, Ã–l oder andere Sonderstoffe werden nicht achtlos mitgenommen. Wir besprechen vorher, welche Entsorgung dafÃ¼r geeignet ist.",
    faq: [
      ["Was kostet eine GaragenentrÃ¼mpelung in Berlin?", "Der Preis hÃ¤ngt von Menge, SperrmÃ¼ll, Sonderstoffen, Zugang und Entsorgungsart ab."],
      ["Kann ich nur eine Garage rÃ¤umen lassen?", "Ja, eine einzelne GaragenentrÃ¼mpelung Berlin ist mÃ¶glich."],
      ["Was passiert mit alten Reifen oder Farben?", "Solche Stoffe werden vorab besprochen und gesondert entsorgt, wenn nÃ¶tig."],
      ["Nehmen Sie SperrmÃ¼ll aus der Garage mit?", "Ja, MÃ¶bel, Kartons und SperrmÃ¼ll kÃ¶nnen getragen und entsorgt werden."],
      ["Wie schnell ist ein Termin mÃ¶glich?", "Das hÃ¤ngt von Umfang und Tourenplanung ab. Fotos helfen bei einer schnellen EinschÃ¤tzung."],
    ],
    links: ["entruempelung-berlin", "kellerentruempelung-berlin", "sperrmuellabholung-berlin", "preise", "kontakt"],
  },
  {
    slug: "sperrmuellabholung-berlin",
    keyword: "SperrmÃ¼llabholung Berlin",
    short: "SperrmÃ¼llabholung Berlin",
    title: "SperrmÃ¼llabholung Berlin | MÃ¶bel & SperrmÃ¼ll abholen lassen",
    description: "SperrmÃ¼llabholung Berlin mit Trust: MÃ¶bel, Matratzen, SchrÃ¤nke und SperrmÃ¼ll abholen, tragen und fachgerecht entsorgen lassen. Kostenlose Besichtigung und kurzfristige Termine mÃ¶glich.",
    h1: "SperrmÃ¼llabholung Berlin - MÃ¶bel und SperrmÃ¼ll abholen lassen",
    image: "MÃ¶bel werden diskret aus einem Treppenhaus getragen, Gesichter nicht erkennbar",
    intro: "Die SperrmÃ¼llabholung Berlin ist sinnvoll, wenn MÃ¶bel, Matratzen, SchrÃ¤nke oder einzelne sperrige GegenstÃ¤nde aus Wohnung, Keller, Dachboden oder Garage getragen und entsorgt werden sollen.",
    includes: ["MÃ¶bel, Matratzen, SchrÃ¤nke und Hausrat", "SperrmÃ¼ll aus Wohnung, Keller, Dachboden oder Garage", "Tragen, Transport und fachgerechte Entsorgung"],
    situations: ["Sofa oder Schrank muss weg", "SperrmÃ¼ll steht nicht transportbereit", "Mehrere MÃ¶belstÃ¼cke sollen kurzfristig abgeholt werden"],
    compareTitle: "BSR oder EntrÃ¼mpelungsfirma?",
    compareText: "Wenn GegenstÃ¤nde aus der Wohnung getragen, demontiert oder kurzfristig abgeholt werden sollen, kann eine SperrmÃ¼llabholung Berlin durch Trust sinnvoller sein als reine Selbstorganisation.",
    faq: [
      ["Was kostet eine SperrmÃ¼llabholung in Berlin?", "Die Kosten hÃ¤ngen von Menge, Etage, Trageweg, Demontage und Entsorgung ab."],
      ["Welche GegenstÃ¤nde gelten als SperrmÃ¼ll?", "Typisch sind MÃ¶bel, Matratzen, SchrÃ¤nke, Regale, Teppiche und andere sperrige HaushaltsgegenstÃ¤nde."],
      ["Tragen Sie MÃ¶bel aus der Wohnung?", "Ja, Tragen aus Wohnung, Keller, Dachboden oder Garage kann vereinbart werden."],
      ["Kann SperrmÃ¼ll kurzfristig abgeholt werden?", "Kurzfristige Termine sind mÃ¶glich, wenn Umfang und Tourenplanung passen."],
      ["Holen Sie auch einzelne MÃ¶belstÃ¼cke ab?", "Ja, einzelne MÃ¶belstÃ¼cke kÃ¶nnen abgeholt, transportiert oder entsorgt werden."],
    ],
    links: ["entruempelung-berlin", "moebeltransport-berlin", "kellerentruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "moebeltransport-berlin",
    keyword: "MÃ¶beltransport Berlin",
    short: "MÃ¶beltransport Berlin",
    title: "MÃ¶beltransport Berlin | MÃ¶bel tragen, abholen & transportieren",
    description: "MÃ¶beltransport Berlin mit Trust: MÃ¶bel abholen, tragen, transportieren oder entsorgen lassen. Ideal fÃ¼r einzelne MÃ¶belstÃ¼cke, kleine UmzÃ¼ge und kurzfristige Transporte in Berlin.",
    h1: "MÃ¶beltransport Berlin - MÃ¶bel tragen, abholen und transportieren lassen",
    image: "Transporter vor Berliner Mehrfamilienhaus ohne Kennzeichen",
    intro: "MÃ¶beltransport Berlin eignet sich fÃ¼r einzelne MÃ¶belstÃ¼cke, kleine Transporte und AuftrÃ¤ge, bei denen Tragen, Demontage oder Entsorgung direkt mitgedacht werden muss.",
    includes: ["Sofa, Schrank, Bett, Tisch und HaushaltsmÃ¶bel", "Transport mit Tragen und Demontage", "MÃ¶beltransport oder MÃ¶belentsorgung"],
    situations: ["MÃ¶bel von A nach B transportieren", "Einzelnes Sofa oder Schrank abholen", "MÃ¶beltransport mit kleiner EntrÃ¼mpelung kombinieren"],
    compareTitle: "MÃ¶beltransport oder MÃ¶belentsorgung",
    compareText: "Wenn MÃ¶bel weiter genutzt werden, organisieren wir Transport und Ãœbergabe. Wenn sie weg sollen, kann der MÃ¶beltransport Berlin mit fachgerechter Entsorgung kombiniert werden.",
    faq: [
      ["Was kostet ein MÃ¶beltransport in Berlin?", "Etage, Trageweg, Adressen, Demontage und GrÃ¶ÃŸe der MÃ¶bel bestimmen den Preis."],
      ["Transportieren Sie einzelne MÃ¶belstÃ¼cke?", "Ja, auch einzelne MÃ¶belstÃ¼cke kÃ¶nnen angefragt werden."],
      ["Bauen Sie MÃ¶bel auch ab?", "Demontage ist nach Absprache mÃ¶glich und wird vorab in die EinschÃ¤tzung aufgenommen."],
      ["Tragen Sie MÃ¶bel aus hÃ¶heren Etagen?", "Ja, Etage und Fahrstuhl werden bei der Planung berÃ¼cksichtigt."],
      ["Kann ich MÃ¶bel auch entsorgen lassen?", "Ja, MÃ¶beltransport Berlin kann mit MÃ¶belentsorgung verbunden werden."],
    ],
    links: ["kleine-umzuege-berlin", "sperrmuellabholung-berlin", "entruempelung-berlin", "preise", "kontakt"],
  },
  {
    slug: "kleine-umzuege-berlin",
    keyword: "Kleine UmzÃ¼ge Berlin",
    short: "Kleine UmzÃ¼ge Berlin",
    title: "Kleine UmzÃ¼ge Berlin | Kleinumzug & MÃ¶beltransport",
    description: "Kleine UmzÃ¼ge Berlin mit Trust: Kleinumzug, MÃ¶beltransport und einzelne Transporte fÃ¼r Wohnungen, Studenten, Senioren und kleine Haushalte. Kostenlose Besichtigung anfragen.",
    h1: "Kleine UmzÃ¼ge Berlin - Kleinumzug und MÃ¶beltransport aus einer Hand",
    image: "Wenige geordnete Umzugskartons in Berliner Wohnung",
    intro: "Kleine UmzÃ¼ge Berlin sind ideal fÃ¼r 1-Zimmer-Wohnungen, WG-Zimmer, SeniorenumzÃ¼ge oder wenige MÃ¶belstÃ¼cke. Trust plant Tragen, Transport, mÃ¶gliche Demontage und auf Wunsch eine kleine EntrÃ¼mpelung mit.",
    includes: ["1-Zimmer-Wohnung, WG-Zimmer oder wenige MÃ¶bel", "Tragen, Transport und Aufbau nach Absprache", "Kombination mit EntrÃ¼mpelung oder SperrmÃ¼llabholung"],
    situations: ["Nur ein paar Sachen umziehen", "Studentenumzug oder Seniorenumzug", "Kleiner Umzug mit MÃ¶beltransport und Entsorgung"],
    compareTitle: "Kleinumzug mit klarer UmfangsprÃ¼fung",
    compareText: "Auch kleine UmzÃ¼ge in Berlin brauchen Angaben zu Etage, Fahrstuhl, ParkmÃ¶glichkeit, Menge und Adressen. So lÃ¤sst sich der Aufwand seriÃ¶s einschÃ¤tzen.",
    faq: [
      ["Was kostet ein kleiner Umzug in Berlin?", "Der Preis hÃ¤ngt von Menge, Etage, Tragewegen, Adressen, Fahrstuhl und gewÃ¼nschter Hilfe ab."],
      ["Was zÃ¤hlt als Kleinumzug?", "Typisch sind WG-Zimmer, 1-Zimmer-Wohnungen, wenige MÃ¶bel oder einzelne Transporte."],
      ["Machen Sie auch StudentenumzÃ¼ge?", "Ja, kleine UmzÃ¼ge Berlin eignen sich gut fÃ¼r Studenten und WG-Zimmer."],
      ["Kann ich MÃ¶beltransport und EntrÃ¼mpelung kombinieren?", "Ja, Transport und Entsorgung kÃ¶nnen zusammen geplant werden."],
      ["Sind kurzfristige Termine mÃ¶glich?", "Je nach Umfang und VerfÃ¼gbarkeit sind kurzfristige Termine mÃ¶glich."],
    ],
    links: ["moebeltransport-berlin", "sperrmuellabholung-berlin", "entruempelung-berlin", "preise", "kontakt"],
  },
];

const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

const districtAreas = [
  { name: "Mitte", slug: "mitte", context: "zentralen Altbauwohnungen, BÃ¼ros und dicht bebauten WohnhÃ¤usern" },
  { name: "Charlottenburg", slug: "charlottenburg", context: "Altbauwohnungen, Eigentumswohnungen und GewerbeflÃ¤chen rund um City West" },
  { name: "Prenzlauer Berg", slug: "prenzlauer-berg", context: "Altbauwohnungen, Dachgeschossen und Innenhoflagen" },
  { name: "Friedrichshain", slug: "friedrichshain", context: "Wohnungen, GewerbeflÃ¤chen und engen Berliner TreppenhÃ¤usern" },
  { name: "Kreuzberg", slug: "kreuzberg", context: "AltbauhÃ¤usern, HinterhÃ¶fen und gemischten Wohn- und GewerbeflÃ¤chen" },
  { name: "NeukÃ¶lln", slug: "neukoelln", context: "Wohnungen, Kellern, DachbÃ¶den und Gewerbeeinheiten" },
  { name: "Pankow", slug: "pankow", context: "WohnhÃ¤usern, Familienwohnungen und NebenrÃ¤umen" },
  { name: "Wedding", slug: "wedding", context: "Altbauwohnungen, Kellern und dicht bewohnten MehrfamilienhÃ¤usern" },
  { name: "Reinickendorf", slug: "reinickendorf", context: "Wohnungen, HÃ¤usern, Garagen und NebenrÃ¤umen" },
  { name: "Spandau", slug: "spandau", context: "Wohnungen, HÃ¤usern, Kellern und GewerbeflÃ¤chen" },
  { name: "SchÃ¶neberg", slug: "schoeneberg", context: "Altbauwohnungen, Eigentumswohnungen und Ãœbergaben an Verwaltungen" },
  { name: "Steglitz", slug: "steglitz", context: "Wohnungen, HÃ¤usern, Kellern und NachlassfÃ¤llen" },
  { name: "Wilmersdorf", slug: "wilmersdorf", context: "Eigentumswohnungen, AltbauflÃ¤chen und ruhigen Wohnlagen" },
  { name: "Zehlendorf", slug: "zehlendorf", context: "HÃ¤usern, Wohnungen, Garagen und grÃ¶ÃŸeren Haushalten" },
  { name: "Tempelhof", slug: "tempelhof", context: "Wohnungen, GewerbeflÃ¤chen, Kellern und Garagen" },
  { name: "KÃ¶penick", slug: "koepenick", context: "Wohnungen, HÃ¤usern, Gartenlauben und NebenrÃ¤umen" },
  { name: "Treptow", slug: "treptow", context: "Wohnungen, HÃ¤usern, Kellern und Gewerbeobjekten" },
  { name: "Lichtenberg", slug: "lichtenberg", context: "Wohnungen, Plattenbauten, Kellern und GewerbeflÃ¤chen" },
  { name: "Marzahn", slug: "marzahn", context: "Wohnungen, Kellern, Garagen und grÃ¶ÃŸeren Wohnanlagen" },
  { name: "Hellersdorf", slug: "hellersdorf", context: "Wohnungen, HÃ¤usern, Kellern und NachlassauflÃ¶sungen" },
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
    location: "Wedding ist geprÃ¤gt von dicht bewohnten MehrfamilienhÃ¤usern, Altbauwohnungen, KellerrÃ¤umen und InnenhÃ¶fen. Vor einer RÃ¤umung sind Etage, Fahrstuhl, Hofzugang und HaltemÃ¶glichkeit besonders wichtig.",
    access: "Bei engen TreppenhÃ¤usern oder lÃ¤ngeren Wegen aus dem Hinterhaus planen wir Tragewege, TeamgrÃ¶ÃŸe und Transport so, dass Hausflur und Ãœbergabe sauber bleiben.",
    entruempelung: "FÃ¼r EntrÃ¼mpelungen in Wedding geht es hÃ¤ufig um Keller, Dachboden, Wohnung, Garage oder kleinere GewerbeflÃ¤chen. Entscheidend ist, was verwertet, getrennt entsorgt oder besenrein Ã¼bergeben werden soll.",
    wohnungsaufloesung: "Bei WohnungsauflÃ¶sungen in Wedding steht meist die vollstÃ¤ndige RÃ¤umung mit abgestimmtem Ãœbergabetermin im Vordergrund, zum Beispiel nach Umzug, Pflegeheim oder KÃ¼ndigung.",
    nachlassaufloesung: "Bei NachlassauflÃ¶sungen in Wedding klÃ¤ren wir vorab, welche Unterlagen, ErinnerungsstÃ¼cke oder verwertbaren GegenstÃ¤nde gesichert werden sollen, bevor MÃ¶bel und Hausrat gerÃ¤umt werden.",
  },
  mitte: {
    location: "In Mitte treffen Wohnungen, BÃ¼ros, GewerbeflÃ¤chen und dicht genutzte Innenstadtlagen aufeinander. Zugang, Ladezone, Aufzug und Zeitfenster sollten deshalb frÃ¼h geklÃ¤rt werden.",
    access: "Gerade bei zentralen Lagen hilft eine genaue Vorbereitung: Fotos, Etage, ParkmÃ¶glichkeit und Ansprechpartner vor Ort machen die EinschÃ¤tzung deutlich zuverlÃ¤ssiger.",
    entruempelung: "EntrÃ¼mpelungen in Mitte betreffen oft Wohnungen, Keller, BÃ¼ros oder einzelne GewerbeflÃ¤chen. Die Leistung bleibt auf RÃ¤umung, Transport, Entsorgung und mÃ¶gliche besenreine Ãœbergabe ausgerichtet.",
    wohnungsaufloesung: "Eine WohnungsauflÃ¶sung in Mitte braucht klare Abstimmung, wenn Vermieter, Verwaltung oder EigentÃ¼mer einen festen Ãœbergabetermin vorgeben.",
    nachlassaufloesung: "NachlassauflÃ¶sungen in Mitte werden diskret geplant, besonders wenn AngehÃ¶rige nicht dauerhaft vor Ort sein kÃ¶nnen oder die SchlÃ¼sselÃ¼bergabe organisiert werden muss.",
  },
  "prenzlauer-berg": {
    location: "Prenzlauer Berg hat viele Altbauten, SeitenflÃ¼gel, Dachgeschosse und Innenhoflagen. Dadurch sind Treppenhaus, DurchgÃ¤nge und Tragewege fÃ¼r die Planung besonders relevant.",
    access: "Wenn kein Fahrstuhl vorhanden ist oder GegenstÃ¤nde aus Dachboden und Keller getragen werden mÃ¼ssen, wird der Aufwand vor der Zusage realistisch eingeschÃ¤tzt.",
    entruempelung: "Bei EntrÃ¼mpelungen in Prenzlauer Berg geht es hÃ¤ufig um Keller, Dachboden, einzelne RÃ¤ume oder Wohnungen mit Hausrat, MÃ¶beln und SperrmÃ¼ll.",
    wohnungsaufloesung: "WohnungsauflÃ¶sungen in Prenzlauer Berg werden so vorbereitet, dass MÃ¶bel, Hausrat und NebenrÃ¤ume passend zum Ãœbergabetermin gerÃ¤umt werden.",
    nachlassaufloesung: "Bei NachlassauflÃ¶sungen in Prenzlauer Berg stehen ruhige Abstimmung, Sortierung persÃ¶nlicher Dinge und eine nachvollziehbare Ãœbergabe im Vordergrund.",
  },
  pankow: {
    location: "Pankow umfasst unterschiedliche Wohnsituationen: MehrfamilienhÃ¤user, Familienwohnungen, HÃ¤user, Garagen und NebenrÃ¤ume. Umfang und Zufahrt kÃ¶nnen daher stark variieren.",
    access: "FÃ¼r die Planung sind Adresse, Etage, Fahrstuhl, Hof- oder Garagenzugang und ParkmÃ¶glichkeit hilfreich, damit Team und Fahrzeug passend vorbereitet werden.",
    entruempelung: "EntrÃ¼mpelungen in Pankow kÃ¶nnen einzelne Keller, Garagen, DachbÃ¶den oder ganze Wohnungen betreffen. Wichtig ist eine klare Trennung zwischen RÃ¤umung, Entsorgung und Ãœbergabeziel.",
    wohnungsaufloesung: "Bei WohnungsauflÃ¶sungen in Pankow geht es oft um die vollstÃ¤ndige RÃ¤umung von MÃ¶beln, Hausrat und NebenrÃ¤umen vor einer Ãœbergabe.",
    nachlassaufloesung: "NachlassauflÃ¶sungen in Pankow werden mit AngehÃ¶rigen, Erben oder Verwaltung abgestimmt, damit persÃ¶nliche Unterlagen und verwertbare GegenstÃ¤nde nicht Ã¼bersehen werden.",
  },
  reinickendorf: {
    location: "Reinickendorf verbindet Wohnungen, HÃ¤user, Garagen und grÃ¶ÃŸere NebenflÃ¤chen. Dadurch kÃ¶nnen Menge, Zufahrt und Tragewege je nach Objekt sehr unterschiedlich sein.",
    access: "Vor Ort zÃ¤hlen praktische Details: Kann ein Fahrzeug nah stehen, gibt es einen Aufzug, mÃ¼ssen Keller oder Garage separat gerÃ¤umt werden und wer Ã¼bernimmt die Ãœbergabe?",
    entruempelung: "EntrÃ¼mpelungen in Reinickendorf eignen sich fÃ¼r Wohnungen, Keller, Garagen, HÃ¤user oder GewerbeflÃ¤chen, wenn RÃ¤umung und Entsorgung strukturiert geplant werden sollen.",
    wohnungsaufloesung: "Bei WohnungsauflÃ¶sungen in Reinickendorf hilft ein klarer Ablauf von Besichtigung, Angebot, RÃ¤umung und besenreiner Ãœbergabe.",
    nachlassaufloesung: "NachlassauflÃ¶sungen in Reinickendorf werden sensibel vorbereitet, besonders wenn AngehÃ¶rige Termine, SchlÃ¼ssel und RÃ¼ckfragen aus der Ferne koordinieren.",
  },
  charlottenburg: {
    location: "Charlottenburg hat Altbauwohnungen, Eigentumswohnungen, BÃ¼ros und GewerbeflÃ¤chen in stark genutzten Lagen. Parkplatz und Zugang sollten deshalb nicht erst am Einsatztag geklÃ¤rt werden.",
    access: "Bei Vorderhaus, SeitenflÃ¼gel, Fahrstuhl oder engen TreppenhÃ¤usern prÃ¼fen wir, wie MÃ¶bel und Hausrat sicher aus dem Objekt getragen werden kÃ¶nnen.",
    entruempelung: "EntrÃ¼mpelungen in Charlottenburg betreffen oft Wohnungen, Keller, DachbÃ¶den, BÃ¼ros oder einzelne GewerbeflÃ¤chen mit MÃ¶beln und SperrmÃ¼ll.",
    wohnungsaufloesung: "WohnungsauflÃ¶sungen in Charlottenburg werden auf den Ãœbergabetermin ausgerichtet, damit MÃ¶bel, Hausrat und NebenrÃ¤ume sauber abgearbeitet werden.",
    nachlassaufloesung: "Bei NachlassauflÃ¶sungen in Charlottenburg sind Diskretion, Sortierung persÃ¶nlicher Unterlagen und Abstimmung mit AngehÃ¶rigen oder Verwaltung besonders wichtig.",
  },
  neukoelln: {
    location: "NeukÃ¶lln ist hÃ¤ufig dicht bebaut, mit Altbauwohnungen, HinterhÃ¶fen, Kellern, DachbÃ¶den und gemischten Wohn- und Gewerbelagen. Gute Vorbereitung spart hier unnÃ¶tige Wege.",
    access: "Entscheidend sind Etage, Fahrstuhl, Hofzugang, Treppenhausbreite und ParkmÃ¶glichkeit. Diese Punkte flieÃŸen in die EinschÃ¤tzung vor Beginn ein.",
    entruempelung: "EntrÃ¼mpelungen in NeukÃ¶lln drehen sich oft um Keller, Wohnungen, DachbÃ¶den, Garagen oder kleine GewerbeflÃ¤chen mit Hausrat, MÃ¶beln und SperrmÃ¼ll.",
    wohnungsaufloesung: "Bei WohnungsauflÃ¶sungen in NeukÃ¶lln werden MÃ¶bel, Hausrat, persÃ¶nliche GegenstÃ¤nde und NebenrÃ¤ume passend zum gewÃ¼nschten Ãœbergabeziel geplant.",
    nachlassaufloesung: "NachlassauflÃ¶sungen in NeukÃ¶lln brauchen eine ruhige Abstimmung, damit ErinnerungsstÃ¼cke, Unterlagen und verwertbare GegenstÃ¤nde vor der RÃ¤umung berÃ¼cksichtigt werden.",
  },
  friedrichshain: {
    location: "Friedrichshain hat viele Altbauten, InnenhÃ¶fe, enge TreppenhÃ¤user und gemischte Wohn- und GewerbeflÃ¤chen. Deshalb ist die EinschÃ¤tzung von Zugang und Tragewegen zentral.",
    access: "Fotos, Etage, Fahrstuhl, Hofsituation und ParkmÃ¶glichkeit helfen, Aufwand und Zeitfenster realistisch zu planen.",
    entruempelung: "EntrÃ¼mpelungen in Friedrichshain passen fÃ¼r Wohnungen, Keller, DachbÃ¶den oder GewerbeflÃ¤chen, wenn MÃ¶bel, Hausrat und SperrmÃ¼ll geordnet entfernt werden sollen.",
    wohnungsaufloesung: "Eine WohnungsauflÃ¶sung in Friedrichshain wird auf vollstÃ¤ndige RÃ¤umung, NebenrÃ¤ume und Ãœbergabe vorbereitet, nicht nur auf einzelne SperrmÃ¼llstÃ¼cke.",
    nachlassaufloesung: "Bei NachlassauflÃ¶sungen in Friedrichshain werden persÃ¶nliche Unterlagen, WertgegenstÃ¤nde und RÃ¼ckfragen vor der eigentlichen RÃ¤umung besprochen.",
  },
};

const districtServiceTypes = [
  {
    key: "entruempelung",
    label: "EntrÃ¼mpelung",
    slugPrefix: "entruempelung",
    baseSlug: "entruempelung-berlin",
    titleVerb: "professionell rÃ¤umen lassen",
    description: (area) => `EntrÃ¼mpelung ${area.name}: Wohnung, Keller, Dachboden, Garage oder GewerbeflÃ¤che rÃ¤umen lassen. Kostenlose Besichtigung, Festpreis nach EinschÃ¤tzung und besenreine Ãœbergabe.`,
    intro: (area) => `FÃ¼r die EntrÃ¼mpelung in ${area.name} prÃ¼ft Trust EntrÃ¼mpelung Berlin Umfang, Zugang, Etage, Fahrstuhl, ParkmÃ¶glichkeit, Demontage und Entsorgung vorab. Gerade bei ${area.context} ist eine klare EinschÃ¤tzung wichtig, damit RÃ¤umung, Transport und Ãœbergabe zuverlÃ¤ssig geplant werden kÃ¶nnen.`,
    includes: ["Wohnung, Keller, Dachboden, Garage oder GewerbeflÃ¤che", "MÃ¶bel, Hausrat, SperrmÃ¼ll und ElektrogerÃ¤te", "Transport, Entsorgung und besenreine Ãœbergabe nach Absprache"],
    situations: (area) => [`Wohnung oder Hausrat in ${area.name} rÃ¤umen`, "Keller, Dachboden oder Garage wieder nutzbar machen", "RÃ¤ume fÃ¼r Ãœbergabe, Verkauf oder Sanierung vorbereiten"],
    compareTitle: (area) => `EntrÃ¼mpelung in ${area.name} mit klarer EinschÃ¤tzung`,
    compareText: (area) => `Jeder Auftrag in ${area.name} ist anders. Deshalb klÃ¤ren wir Menge, Zugang, Tragewege, ParkmÃ¶glichkeit und gewÃ¼nschtes Ãœbergabeziel, bevor ein Festpreis genannt wird.`,
  },
  {
    key: "wohnungsaufloesung",
    label: "WohnungsauflÃ¶sung",
    slugPrefix: "wohnungsaufloesung",
    baseSlug: "wohnungsaufloesung-berlin",
    titleVerb: "Wohnung besenrein Ã¼bergeben",
    description: (area) => `WohnungsauflÃ¶sung ${area.name}: Wohnung leer rÃ¤umen, MÃ¶bel und Hausrat entsorgen, Wertanrechnung prÃ¼fen und besenrein Ã¼bergeben. Kostenlose Besichtigung.`,
    intro: (area) => `Eine WohnungsauflÃ¶sung in ${area.name} braucht klare Planung, besonders wenn Vermieter, EigentÃ¼mer, AngehÃ¶rige oder Hausverwaltung beteiligt sind. Trust EntrÃ¼mpelung Berlin rÃ¤umt MÃ¶bel, Hausrat, SperrmÃ¼ll und NebenrÃ¤ume und bereitet die Wohnung auf Wunsch besenrein fÃ¼r die Ãœbergabe vor.`,
    includes: ["Komplette Wohnung, KÃ¼che, MÃ¶bel und Hausrat", "Keller, Dachboden und NebenrÃ¤ume nach Absprache", "Besenreine Ãœbergabe an Vermieter, EigentÃ¼mer oder Verwaltung"],
    situations: (area) => [`Wohnung in ${area.name} nach Umzug oder KÃ¼ndigung rÃ¤umen`, "Ãœbergabe nach Pflegeheim, Verkauf oder Vermietung vorbereiten", "MÃ¶bel, Hausrat und SperrmÃ¼ll fachgerecht entsorgen"],
    compareTitle: (area) => `WohnungsauflÃ¶sung in ${area.name} ohne unklare Kosten`,
    compareText: (area) => `Vor der WohnungsauflÃ¶sung in ${area.name} werden Menge, Etage, Fahrstuhl, ParkmÃ¶glichkeit, Demontage und Ãœbergabeziel geklÃ¤rt. So entsteht ein nachvollziehbarer Festpreis nach EinschÃ¤tzung.`,
  },
  {
    key: "nachlassaufloesung",
    label: "NachlassauflÃ¶sung",
    slugPrefix: "nachlassaufloesung",
    baseSlug: "nachlassaufloesung-berlin",
    titleVerb: "diskret rÃ¤umen lassen",
    description: (area) => `NachlassauflÃ¶sung ${area.name}: Wohnung und Hausrat nach Todesfall diskret rÃ¤umen, Wertanrechnung prÃ¼fen und besenrein Ã¼bergeben. Kostenlose Besichtigung.`,
    intro: (area) => `Eine NachlassauflÃ¶sung in ${area.name} verlangt Ruhe, Diskretion und klare Absprachen. Trust EntrÃ¼mpelung Berlin stimmt SchlÃ¼sselÃ¼bergabe, persÃ¶nliche Unterlagen, WertgegenstÃ¤nde, RÃ¼ckfragen und Ãœbergabe so ab, dass AngehÃ¶rige entlastet werden.`,
    includes: ["Wohnung, Keller, Dachboden und Hausrat im Nachlass", "Sortierung nach vorheriger Absprache", "Diskrete RÃ¤umung und besenreine Ãœbergabe nach Wunsch"],
    situations: (area) => [`Nachlasswohnung in ${area.name} rÃ¤umen`, "AngehÃ¶rige wohnen nicht dauerhaft in Berlin", "Wohnung fÃ¼r Vermieter, Verkauf oder Verwaltung Ã¼bergeben"],
    compareTitle: (area) => `NachlassauflÃ¶sung in ${area.name} mit Ruhe und Struktur`,
    compareText: (area) => `Bei NachlassfÃ¤llen in ${area.name} besprechen wir vorab, welche Unterlagen, ErinnerungsstÃ¼cke oder WertgegenstÃ¤nde gesichert werden sollen. Verwertbare GegenstÃ¤nde kÃ¶nnen realistisch geprÃ¼ft werden.`,
  },
];

function districtFaq(serviceType, area) {
  const baseFaq = [
    [`Was kostet eine ${serviceType.label} in ${area.name}?`, `Die Kosten hÃ¤ngen von Menge, Etage, Zugang, Fahrstuhl, ParkmÃ¶glichkeit, Demontage und Entsorgung ab. Nach Fotos oder kostenloser Besichtigung erhalten Sie eine klare EinschÃ¤tzung.`],
    [`Ist eine kostenlose Besichtigung in ${area.name} mÃ¶glich?`, `Ja, eine kostenlose Besichtigung in ${area.name} ist nach Absprache mÃ¶glich. Fotos und Eckdaten helfen zusÃ¤tzlich bei der ersten EinschÃ¤tzung.`],
    [`Wie schnell ist ein Termin in ${area.name} mÃ¶glich?`, `Das hÃ¤ngt von Umfang, Zugang und Tourenplanung ab. Wenn die Angaben vollstÃ¤ndig sind, kÃ¶nnen auch kurzfristige Termine geprÃ¼ft werden.`],
    ["Wird besenrein Ã¼bergeben?", "Ja, die besenreine Ãœbergabe kann direkt vereinbart werden, wenn sie fÃ¼r Vermieter, EigentÃ¼mer oder Verwaltung benÃ¶tigt wird."],
    ["Was passiert mit MÃ¶beln, Hausrat und SperrmÃ¼ll?", "MÃ¶bel, Hausrat und SperrmÃ¼ll werden getragen, transportiert, getrennt und fachgerecht entsorgt. Verwertbare GegenstÃ¤nde kÃ¶nnen vorab geprÃ¼ft werden."],
  ];
  const profile = localDistrictProfiles[area.slug];
  if (!profile) return baseFaq;
  const localQuestion = serviceType.key === "entruempelung"
    ? [`Was ist bei einer EntrÃ¼mpelung in ${area.name} besonders wichtig?`, `Wichtig sind Angaben zu Keller, Dachboden, Wohnung oder GewerbeflÃ¤che sowie zu Etage, Fahrstuhl, Hofzugang und ParkmÃ¶glichkeit. So lÃ¤sst sich die RÃ¤umung vorab realistisch planen.`]
    : serviceType.key === "wohnungsaufloesung"
      ? [`Wie lÃ¤uft eine WohnungsauflÃ¶sung in ${area.name} ab?`, `Zuerst werden Umfang, MÃ¶bel, Hausrat, NebenrÃ¤ume und Ãœbergabetermin geklÃ¤rt. Danach folgen EinschÃ¤tzung, Angebot, RÃ¤umung und auf Wunsch die besenreine Ãœbergabe.`]
      : [`Wie wird eine NachlassauflÃ¶sung in ${area.name} abgestimmt?`, `Vor der RÃ¤umung werden Ansprechpartner, SchlÃ¼ssel, persÃ¶nliche Unterlagen, ErinnerungsstÃ¼cke und mÃ¶gliche Wertanrechnung besprochen. Danach wird der Nachlass nach Absprache gerÃ¤umt.`];
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
    title: `${serviceType.label} ${area.name} | Trust EntrÃ¼mpelung Berlin`,
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
  "KÃ¶nigs Wusterhausen",
  "Wildau",
  "Ludwigsfelde",
  "Werder",
  "Nauen",
  "Strausberg",
  "Hoppegarten",
  "Blankenfelde-Mahlow",
];

const brandenburgLead = "Potsdam, Falkensee, Oranienburg, Bernau, Teltow, Kleinmachnow, Hennigsdorf, KÃ¶nigs Wusterhausen, Wildau, Ludwigsfelde, Werder, Nauen, Strausberg, Hoppegarten und Blankenfelde-Mahlow";

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
    title: `${keyword} | Trust EntrÃ¼mpelung Berlin`,
    description: `${keyword} nach Absprache: RÃ¤ume, Wohnungen, Hausrat oder SperrmÃ¼ll im Berliner Umland rÃ¤umen lassen. Einsatz u. a. in ${brandenburgPlaces.slice(0, 7).join(", ")}. Kostenlose Besichtigung mÃ¶glich.`,
    h1: `${keyword} - Einsatz im Berliner Umland nach Absprache`,
    image: `${keyword} in Potsdam, Falkensee und weiteren Orten in Brandenburg`,
    intro: `${keyword} ist nach Absprache im Berliner Umland mÃ¶glich. Trust EntrÃ¼mpelung Berlin plant AuftrÃ¤ge in Brandenburg sorgfÃ¤ltig, weil Entfernung, ParkmÃ¶glichkeit, Etage, Tragewege, Entsorgung und Zeitfenster zusammenpassen mÃ¼ssen. Typische Orte sind ${brandenburgLead}.`,
    includes: service.includes.map((item) => normalizeAreaText(item, "Brandenburg")),
    situations: [
      `${keyword} in Potsdam, Falkensee oder Oranienburg`,
      `AuftrÃ¤ge in Bernau, Teltow, Kleinmachnow oder Hennigsdorf nach Absprache`,
      `RÃ¤umung, Transport, Entsorgung und Ãœbergabe im Berliner Umland planen`,
    ],
    compareTitle: `${keyword}: Berlin-nah planen, Aufwand realistisch einschÃ¤tzen`,
    compareText: `Bei EinsÃ¤tzen in Brandenburg prÃ¼fen wir zuerst Entfernung, Umfang, Zugang, Etage, ParkmÃ¶glichkeit und Entsorgungswege. So bleibt klar, ob ein Termin in Potsdam, Falkensee, Oranienburg, Bernau, Teltow, KÃ¶nigs Wusterhausen oder einem anderen Ort sinnvoll geplant werden kann.`,
    faq: [
      [`Bietet Trust ${keyword} an?`, `${keyword} ist nach Absprache mÃ¶glich, vor allem im Berliner Umland. Dazu zÃ¤hlen unter anderem Potsdam, Falkensee, Oranienburg, Bernau, Teltow, Kleinmachnow, Hennigsdorf und KÃ¶nigs Wusterhausen.`],
      ["Welche Orte in Brandenburg kommen infrage?", `Typische Einsatzorte sind ${brandenburgLead}. Weitere Orte prÃ¼fen wir nach Entfernung, Umfang und Termin.`],
      [`Was kostet ${keyword}?`, "Die Kosten hÃ¤ngen von Entfernung, Menge, Etage, Zugang, ParkmÃ¶glichkeit, Demontage und Entsorgung ab. Nach Fotos oder kostenloser Besichtigung erhalten Sie eine klare EinschÃ¤tzung."],
      ["Ist eine kostenlose Besichtigung mÃ¶glich?", "Ja, eine kostenlose Besichtigung ist nach Absprache mÃ¶glich. Bei kleineren AuftrÃ¤gen reichen oft Fotos und Eckdaten fÃ¼r die erste EinschÃ¤tzung."],
      ["Kann die Ãœbergabe besenrein erfolgen?", "Ja, eine besenreine Ãœbergabe kann vereinbart werden, wenn RÃ¤ume, Wohnung oder GewerbeflÃ¤che entsprechend vorbereitet werden sollen."],
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
    keyword: "EntrÃ¼mpelung Berlin",
    title: "EntrÃ¼mpelung Berlin | WohnungsauflÃ¶sung & HaushaltsauflÃ¶sung",
    description: "Trust EntrÃ¼mpelung Berlin Ã¼bernimmt EntrÃ¼mpelung, WohnungsauflÃ¶sung, HaushaltsauflÃ¶sung, SperrmÃ¼llabholung und NachlassauflÃ¶sung in Berlin. Kostenlose Besichtigung, Festpreis nach EinschÃ¤tzung und besenreine Ãœbergabe.",
    h1: "EntrÃ¼mpelung Berlin - WohnungsauflÃ¶sung, HaushaltsauflÃ¶sung & besenreine Ãœbergabe",
    type: "home",
    faq: [
      ["Was kostet eine EntrÃ¼mpelung in Berlin?", "Die Kosten hÃ¤ngen von Menge, Etage, Zugang, ParkmÃ¶glichkeit, Demontage, Entsorgung und gewÃ¼nschter Ãœbergabe ab. Trust EntrÃ¼mpelung Berlin nennt einen Festpreis nach Fotos oder Besichtigung."],
      ["Wie schnell bekomme ich einen Termin?", "Wenn Umfang und Zugang klar sind, sind auch kurzfristige Termine mÃ¶glich. Fotos und vollstÃ¤ndige Angaben beschleunigen die EinschÃ¤tzung."],
      ["Was ist im Festpreis enthalten?", "Der Festpreis umfasst die vereinbarte RÃ¤umung, Tragen, Transport, Entsorgung und auf Wunsch die besenreine Ãœbergabe."],
      ["Muss ich bei der EntrÃ¼mpelung vor Ort sein?", "Nicht immer. SchlÃ¼sselÃ¼bergabe, RÃ¼ckfragen und Abschluss kÃ¶nnen vorher klar abgestimmt werden."],
      ["Was passiert mit MÃ¶beln und SperrmÃ¼ll?", "MÃ¶bel und SperrmÃ¼ll werden sortiert, getragen, transportiert und fachgerecht entsorgt. Verwertbare GegenstÃ¤nde kÃ¶nnen geprÃ¼ft werden."],
      ["Ãœbernehmen Sie auch Keller, Dachboden und Garage?", "Ja, KellerentrÃ¼mpelung, DachbodenentrÃ¼mpelung und GaragenentrÃ¼mpelung gehÃ¶ren zu den Leistungen in Berlin."],
      ["Machen Sie auch WohnungsauflÃ¶sungen nach Todesfall?", "Ja, NachlassauflÃ¶sungen und WohnungsauflÃ¶sungen nach Todesfall werden diskret und mit klaren Absprachen durchgefÃ¼hrt."],
      ["Arbeiten Sie auch fÃ¼r Hausverwaltungen und Firmen?", "Ja, Trust Ã¼bernimmt EntrÃ¼mpelung Berlin auch fÃ¼r Hausverwaltungen, EigentÃ¼mer, BÃ¼ros, Praxen und GewerbeflÃ¤chen."],
      ["Kann ich Fotos fÃ¼r die EinschÃ¤tzung senden?", "Ja, Fotos von RÃ¤umen, Etage, Zugang und GegenstÃ¤nden helfen bei der kostenlosen EinschÃ¤tzung. Eine kostenlose Besichtigung ist nach Absprache mÃ¶glich."],
      ["Sind Sie auch in Brandenburg im Einsatz?", "Berlin ist der Schwerpunkt. Angrenzendes Brandenburg ist nach Absprache mÃ¶glich."],
    ],
  },
  ...services.map((service) => ({ ...service, type: "service" })),
  ...districtPages,
  ...brandenburgPages,
  {
    slug: "preise",
    keyword: "EntrÃ¼mpelung Kosten Berlin",
    title: "EntrÃ¼mpelung Kosten Berlin | Preise & Festpreis-ErklÃ¤rung",
    description: "Was kostet eine EntrÃ¼mpelung in Berlin? Trust erklÃ¤rt Preisfaktoren wie Menge, Etage, Zugang, Demontage, Entsorgung und Wertanrechnung. Kostenlose Besichtigung anfragen.",
    h1: "EntrÃ¼mpelung Kosten Berlin - Preise verstehen und Festpreis anfragen",
    type: "prices",
    faq: [
      ["Warum gibt es keinen seriÃ¶sen Festpreis ohne Umfang?", "EntrÃ¼mpelung Kosten Berlin lassen sich erst belastbar einschÃ¤tzen, wenn Menge, Etage, Zugang, ParkmÃ¶glichkeit, Demontage und Entsorgung bekannt sind."],
      ["Welche Faktoren beeinflussen den Preis?", "WohnungsgrÃ¶ÃŸe, Menge, Etage, Fahrstuhl, ParkmÃ¶glichkeit, Tragewege, Sonderstoffe, Demontage und Terminwunsch beeinflussen den Preis."],
      ["Ist eine kostenlose Besichtigung mÃ¶glich?", "Ja, Fotos und kurze Angaben reichen oft fÃ¼r eine erste EinschÃ¤tzung. Bei grÃ¶ÃŸeren AuftrÃ¤gen ist eine kostenlose Besichtigung nach Absprache mÃ¶glich."],
      ["Was bedeutet Wertanrechnung?", "Verwertbare GegenstÃ¤nde kÃ¶nnen geprÃ¼ft und realistisch im Angebot berÃ¼cksichtigt werden."],
      ["Ist selbst entsorgen gÃ¼nstiger?", "Manchmal ja. Wenn Tragen, Transport, Zeit, Fahrzeug, Entsorgung und Ãœbergabetermin zusammenkommen, lohnt sich hÃ¤ufig eine Firma."],
    ],
  },
  {
    slug: "kontakt",
    keyword: "EntrÃ¼mpelung Berlin Kontakt",
    title: "Kontakt | Trust EntrÃ¼mpelung Berlin",
    description: "Kontakt zu Trust EntrÃ¼mpelung Berlin: Kostenlose Besichtigung fÃ¼r EntrÃ¼mpelung, WohnungsauflÃ¶sung, SperrmÃ¼llabholung und HaushaltsauflÃ¶sung in Berlin anfragen.",
    h1: "Kontakt zu Trust EntrÃ¼mpelung Berlin",
    type: "contact",
    faq: [
      ["Welche Angaben helfen bei der Anfrage?", "FÃ¼r den EntrÃ¼mpelung Berlin Kontakt helfen Fotos, Bezirk, Etage, Fahrstuhl, ParkmÃ¶glichkeit, Umfang und gewÃ¼nschter Zeitraum."],
      ["Kann ich Fotos fÃ¼r die Anfrage senden?", "Ja, Fotos sind fÃ¼r eine schnelle EinschÃ¤tzung sehr hilfreich. Eine kostenlose Besichtigung ist nach Absprache mÃ¶glich."],
      ["Wie schnell bekomme ich eine RÃ¼ckmeldung?", "Die Antwortzeit hÃ¤ngt vom TagesgeschÃ¤ft ab. VollstÃ¤ndige Angaben beschleunigen die EinschÃ¤tzung."],
      ["Gibt es ein Formular?", "Ja, Ã¼ber das Formular kÃ¶nnen Sie Ihre Anfrage mit Leistung, Bezirk, Etage, Zeitraum und kurzer Beschreibung senden."],
    ],
  },
  {
    slug: "impressum",
    keyword: "Impressum Trust EntrÃ¼mpelung Berlin",
    title: "Impressum | Trust EntrÃ¼mpelung Berlin",
    description: "Impressum von Trust EntrÃ¼mpelung Berlin mit Anbieterkennzeichnung und KontaktmÃ¶glichkeit.",
    h1: "Impressum Trust EntrÃ¼mpelung Berlin",
    type: "legal",
    legalText: `${legalCompany}\nInhaber: ${owner}\n${streetAddress}\n${postalCode} ${city}\nE-Mail: ${email}\nHandelsregister: ${registerNumber}`,
    faq: [
      ["Wie erreiche ich Trust EntrÃ¼mpelung Berlin?", `Sie erreichen Trust EntrÃ¼mpelung Berlin per E-Mail unter ${email}.`],
      ["Wer ist Anbieter der Website?", `Anbieter ist ${legalCompany}, Inhaber ${owner}, ${streetAddress}, ${postalCode} ${city}.`],
    ],
  },
  {
    slug: "datenschutz",
    keyword: "Datenschutz Trust EntrÃ¼mpelung Berlin",
    title: "Datenschutz | Trust EntrÃ¼mpelung Berlin",
    description: "Datenschutz von Trust EntrÃ¼mpelung Berlin mit Hinweisen zur Kontaktaufnahme per Formular, E-Mail und Anfrage.",
    h1: "Datenschutz Trust EntrÃ¼mpelung Berlin",
    type: "legal",
    legalText: "Wenn Sie Trust EntrÃ¼mpelung Berlin kontaktieren, werden die von Ihnen Ã¼bermittelten Angaben zur Bearbeitung Ihrer Anfrage genutzt. Dazu kÃ¶nnen Name, Kontaktdaten, Einsatzort, Beschreibung des Auftrags und freiwillig gesendete Fotos gehÃ¶ren. Die Angaben werden nicht fÃ¼r unnÃ¶tige Werbung verwendet.",
    faq: [
      ["Welche Daten werden bei einer Anfrage verarbeitet?", "Verarbeitet werden die Angaben, die Sie freiwillig senden, zum Beispiel Name, E-Mail, Telefonnummer, Einsatzort, Leistungswunsch und Beschreibung."],
      ["WofÃ¼r werden die Daten genutzt?", "Die Daten werden genutzt, um Ihre Anfrage zu beantworten, den Umfang einzuschÃ¤tzen und einen Termin oder eine Besichtigung vorzubereiten."],
    ],
  },
];

const trustItems = [
  ["Kostenlose Besichtigung", "Fotos oder kurze Beschreibung reichen oft fÃ¼r den Start. Eine Besichtigung ist nach Absprache kostenlos mÃ¶glich."],
  ["Festpreis nach Besichtigung", "Umfang, Etage und Zugang werden vorher geprÃ¼ft."],
  ["Besenreine Ãœbergabe", "Auf Wunsch vorbereitet fÃ¼r Vermieter oder Verwaltung."],
  ["Fotos fÃ¼r die EinschÃ¤tzung", "Schnelle Orientierung Ã¼ber Formular, Telefon oder E-Mail."],
  ["Berlin & Umland", "Berlin ist Schwerpunkt, Brandenburg nach Absprache."],
];

const processSteps = [
  ["Kontaktaufnahme", "Sie nennen Leistung, Bezirk, Etage, Fahrstuhl, ParkmÃ¶glichkeit und gewÃ¼nschten Zeitraum."],
  ["Erste EinschÃ¤tzung", "Fotos und Eckdaten helfen, Umfang, Zugang und mÃ¶gliche Entsorgungswege vorab einzuordnen."],
  ["Vor-Ort-Besichtigung", "Bei grÃ¶ÃŸeren AuftrÃ¤gen prÃ¼fen wir RÃ¤ume, MÃ¶bel, Hausrat, Tragewege und Ãœbergabeziel vor Ort."],
  ["Transparentes Angebot", "Das Angebot richtet sich nach Aufwand, Menge, Zugang, Demontage, Entsorgung und Terminwunsch."],
  ["DurchfÃ¼hrung", "Wir rÃ¤umen, sortieren, tragen, transportieren und entsorgen die vereinbarten GegenstÃ¤nde."],
  ["Besenreine Ãœbergabe", "Wenn vereinbart, werden die RÃ¤ume nach der RÃ¤umung besenrein fÃ¼r Ãœbergabe oder weitere Nutzung vorbereitet."],
];

const costFactors = ["Menge & Volumen", "Etage & Fahrstuhl", "ParkmÃ¶glichkeit", "Demontage", "Entsorgungsart", "Sonderstoffe", "Wertanrechnung", "Terminwunsch"];

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
    title: "Direkte Antworten zur EntrÃ¼mpelung in Berlin",
    intro: "Die wichtigsten Fragen kurz beantwortet, bevor Sie eine Anfrage stellen.",
    answers: [
      ["Was macht Trust EntrÃ¼mpelung Berlin?", "Trust rÃ¤umt Wohnungen, Keller, DachbÃ¶den, Garagen, GewerbeflÃ¤chen und Nachlasswohnungen in Berlin. Dazu gehÃ¶ren Tragen, Transport, fachgerechte Entsorgung und auf Wunsch eine besenreine Ãœbergabe."],
      ["FÃ¼r wen ist der Service gedacht?", "Der Service richtet sich an Privatkunden, AngehÃ¶rige, EigentÃ¼mer, Vermieter, Hausverwaltungen und Unternehmen, die RÃ¤ume strukturiert frei bekommen mÃ¶chten."],
      ["Welche Angaben werden fÃ¼r ein Angebot gebraucht?", "Hilfreich sind Fotos, Bezirk, Etage, Fahrstuhl, ParkmÃ¶glichkeit, ungefÃ¤hre Menge, gewÃ¼nschter Zeitraum und das Ziel der Ãœbergabe."],
    ],
  },
  "entruempelung-berlin": {
    title: "Kurzantwort: Was umfasst eine EntrÃ¼mpelung?",
    intro: "Eine EntrÃ¼mpelung ist mehr als einzelne GegenstÃ¤nde abholen.",
    answers: [
      ["Welche RÃ¤ume werden entrÃ¼mpelt?", "GerÃ¤umt werden kÃ¶nnen Wohnung, Haus, Keller, Dachboden, Garage, einzelne Zimmer und GewerbeflÃ¤chen. Der konkrete Umfang wird vor Beginn festgelegt."],
      ["Was passiert mit Hausrat und SperrmÃ¼ll?", "MÃ¶bel, Kartons, Hausrat und SperrmÃ¼ll werden getragen, getrennt, transportiert und fachgerecht entsorgt. Verwertbare GegenstÃ¤nde kÃ¶nnen vorab geprÃ¼ft werden."],
      ["Wann ist die EntrÃ¼mpelung fertig?", "Fertig ist der Auftrag, wenn die vereinbarten Bereiche gerÃ¤umt sind. Eine besenreine Ãœbergabe kann vorab als Ziel vereinbart werden."],
    ],
  },
  "wohnungsaufloesung-berlin": {
    title: "Kurzantwort: Wann ist es eine WohnungsauflÃ¶sung?",
    intro: "Bei der WohnungsauflÃ¶sung steht die vollstÃ¤ndige RÃ¤umung mit Ãœbergabeziel im Mittelpunkt.",
    answers: [
      ["Was wird bei einer WohnungsauflÃ¶sung entfernt?", "MÃ¶bel, Hausrat, SperrmÃ¼ll, ElektrogerÃ¤te und nach Absprache NebenrÃ¤ume wie Keller oder Dachboden werden fÃ¼r die Ãœbergabe gerÃ¤umt."],
      ["FÃ¼r welche Situationen passt sie?", "Typisch sind KÃ¼ndigung, Umzug, Pflegeheim, Verkauf, Todesfall oder eine Ãœbergabe an Vermieter, EigentÃ¼mer oder Hausverwaltung."],
      ["Was ist anders als bei einer EntrÃ¼mpelung?", "Eine EntrÃ¼mpelung kann einzelne RÃ¤ume betreffen. Die WohnungsauflÃ¶sung meint meist die komplette Wohnung mit Ãœbergabetermin."],
    ],
  },
  "haushaltsaufloesung-berlin": {
    title: "Kurzantwort: Was gehÃ¶rt zur HaushaltsauflÃ¶sung?",
    intro: "Die HaushaltsauflÃ¶sung betrifft den kompletten Hausstand und persÃ¶nliche GegenstÃ¤nde.",
    answers: [
      ["Was wird bei einer HaushaltsauflÃ¶sung gerÃ¤umt?", "GerÃ¤umt werden MÃ¶bel, Kleidung, BÃ¼cher, Geschirr, Kartons, ElektrogerÃ¤te, SperrmÃ¼ll und sonstiger Hausrat nach Absprache."],
      ["Muss vorher alles sortiert werden?", "Nein. Wichtig ist nur, dass Unterlagen, ErinnerungsstÃ¼cke oder GegenstÃ¤nde, die bleiben sollen, vorher benannt oder markiert werden."],
      ["Was passiert mit verwertbaren Dingen?", "Verwertbare GegenstÃ¤nde kÃ¶nnen vorab geprÃ¼ft werden. Eine mÃ¶gliche Wertanrechnung wird realistisch und nicht pauschal bewertet."],
    ],
  },
  "nachlassaufloesung-berlin": {
    title: "Kurzantwort: Wie wird ein Nachlass gerÃ¤umt?",
    intro: "Bei NachlassfÃ¤llen zÃ¤hlen Diskretion, klare Ansprechpartner und sorgfÃ¤ltige Abstimmung.",
    answers: [
      ["Wer kann eine NachlassauflÃ¶sung beauftragen?", "HÃ¤ufig fragen AngehÃ¶rige, Erben, EigentÃ¼mer, Vermieter oder Hausverwaltungen an. ZustÃ¤ndigkeit, SchlÃ¼ssel und RÃ¼ckfragen werden vorab geklÃ¤rt."],
      ["Wie wird mit Dokumenten und Erinnerungen umgegangen?", "PersÃ¶nliche Unterlagen, Fotos, ErinnerungsstÃ¼cke und WertgegenstÃ¤nde werden vor der RÃ¤umung besprochen, damit nichts Wichtiges ungeklÃ¤rt entsorgt wird."],
      ["Kann die Wohnung ohne stÃ¤ndige Anwesenheit gerÃ¤umt werden?", "Ja, wenn SchlÃ¼sselÃ¼bergabe, Ansprechpartner, RÃ¼ckfragen und Ãœbergabeziel vorher eindeutig abgestimmt sind."],
    ],
  },
  "kellerentruempelung-berlin": {
    title: "Kurzantwort: Was ist bei KellerentrÃ¼mpelungen wichtig?",
    intro: "Bei Kellern entscheiden Zugang und Trageweg oft Ã¼ber den Aufwand.",
    answers: [
      ["Welche Keller kÃ¶nnen gerÃ¤umt werden?", "GerÃ¤umt werden kÃ¶nnen Kellerraum, Kellerbox, Verschlag oder Gemeinschaftsbereiche, sofern der Auftrag und Zugang klar abgestimmt sind."],
      ["Welche Angaben sind besonders wichtig?", "Wichtig sind Etage, Treppen, Licht, Kellerzugang, Hof oder Tiefgarage, ParkmÃ¶glichkeit und ob einzelne GegenstÃ¤nde erhalten bleiben sollen."],
      ["Was wird aus dem Keller mitgenommen?", "Kartons, MÃ¶bel, Hausrat und SperrmÃ¼ll kÃ¶nnen nach Absprache getragen, transportiert und fachgerecht entsorgt werden."],
    ],
  },
  "dachbodenentruempelung-berlin": {
    title: "Kurzantwort: Wie lÃ¤uft eine DachbodenentrÃ¼mpelung?",
    intro: "DachbÃ¶den brauchen gute Planung, weil Treppen, Staub und alte GegenstÃ¤nde den Aufwand bestimmen.",
    answers: [
      ["Was kann vom Dachboden entfernt werden?", "Alte MÃ¶bel, Kartons, Kisten, Hausrat und SperrmÃ¼ll kÃ¶nnen gerÃ¤umt werden, wenn Umfang und Zugang vorher bekannt sind."],
      ["Warum sind Treppen und Zugang so wichtig?", "DachbÃ¶den liegen oft ohne Fahrstuhl oder mit engen Tragewegen. Diese Angaben bestimmen Team, Zeit und Transportplanung."],
      ["Muss vorher sortiert werden?", "Nicht zwingend. GegenstÃ¤nde, die bleiben sollen, sollten aber vor Beginn klar markiert oder genannt werden."],
    ],
  },
  "firmenaufloesung-berlin": {
    title: "Kurzantwort: Was umfasst eine FirmenauflÃ¶sung?",
    intro: "Bei GewerbeflÃ¤chen sind Termine, ZustÃ¤ndigkeiten und Ãœbergabe besonders wichtig.",
    answers: [
      ["Welche FlÃ¤chen werden gerÃ¤umt?", "BÃ¼ros, Praxen, kleine Lager, Regale, BÃ¼romÃ¶bel und GewerbeflÃ¤chen kÃ¶nnen nach Absprache gerÃ¤umt werden."],
      ["Wie werden Termine geplant?", "Zeitfenster, Zugang, Ansprechpartner, Etage, ParkmÃ¶glichkeit und Ãœbergabeziel werden vorab abgestimmt, damit der Betrieb oder die Verwaltung planen kann."],
      ["Was passiert mit BÃ¼romÃ¶beln und LagerbestÃ¤nden?", "BÃ¼romÃ¶bel, Regale und GegenstÃ¤nde werden demontiert, getragen, transportiert und fachgerecht entsorgt oder bei Verwertbarkeit geprÃ¼ft."],
    ],
  },
  "sperrmuellabholung-berlin": {
    title: "Kurzantwort: Wann passt eine SperrmÃ¼llabholung?",
    intro: "SperrmÃ¼llabholung passt, wenn einzelne oder mehrere sperrige GegenstÃ¤nde abgeholt werden sollen.",
    answers: [
      ["Welche GegenstÃ¤nde kÃ¶nnen abgeholt werden?", "Typisch sind Sofa, Schrank, Bett, Matratze, Regal, Tisch, Teppich und andere sperrige HaushaltsgegenstÃ¤nde nach Absprache."],
      ["Muss der SperrmÃ¼ll schon drauÃŸen stehen?", "Nicht unbedingt. Wenn Tragen aus Wohnung, Keller, Dachboden oder Garage gewÃ¼nscht ist, wird der Aufwand vorher mit eingeplant."],
      ["Welche Angaben braucht Trust?", "BenÃ¶tigt werden Menge, Fotos, Etage, Fahrstuhl, Trageweg, ParkmÃ¶glichkeit und der gewÃ¼nschte Abholzeitraum."],
    ],
  },
  "moebeltransport-berlin": {
    title: "Kurzantwort: Was gehÃ¶rt zum MÃ¶beltransport?",
    intro: "Der MÃ¶beltransport kann einzelne MÃ¶bel, kleine Transporte oder Abholung und Entsorgung betreffen.",
    answers: [
      ["Welche MÃ¶bel kÃ¶nnen transportiert werden?", "Angefragt werden kÃ¶nnen einzelne MÃ¶belstÃ¼cke wie Sofa, Schrank, Bett, Tisch oder mehrere HaushaltsmÃ¶bel."],
      ["Welche Angaben sind fÃ¼r den Transport wichtig?", "Wichtig sind Abholadresse, Zieladresse, Etagen, Fahrstuhl, Tragewege, ParkmÃ¶glichkeit und ob Demontage nach Absprache nÃ¶tig ist."],
      ["Kann Transport mit Entsorgung kombiniert werden?", "Ja, wenn MÃ¶bel nicht weiter genutzt werden sollen, kann der MÃ¶beltransport mit MÃ¶belentsorgung verbunden werden."],
    ],
  },
  preise: {
    title: "Direkte Antworten zu EntrÃ¼mpelungskosten",
    intro: "Preise werden seriÃ¶s erst nach Umfang, Zugang und Entsorgung bewertet.",
    answers: [
      ["Warum gibt es keinen pauschalen Preis?", "Eine kleine Menge im Erdgeschoss ist anders zu planen als eine volle Wohnung im Altbau. Menge, Etage, Fahrstuhl, Parken, Demontage und Entsorgung verÃ¤ndern den Aufwand."],
      ["Wann ist eine Besichtigung sinnvoll?", "Eine Besichtigung ist sinnvoll, wenn mehrere RÃ¤ume, NebenrÃ¤ume, viel Hausrat, schwierige Tragewege oder ein fester Ãœbergabetermin betroffen sind."],
      ["Was macht ein Angebot transparenter?", "Fotos, eine kurze Beschreibung, Bezirk, Etage, Fahrstuhl, ParkmÃ¶glichkeit und gewÃ¼nschter Zeitraum helfen bei einer klaren EinschÃ¤tzung."],
    ],
  },
  kontakt: {
    title: "Direkte Antworten zur Anfrage",
    intro: "Je klarer die Anfrage, desto schneller lÃ¤sst sich der Auftrag einschÃ¤tzen.",
    answers: [
      ["Wie erreiche ich Trust EntrÃ¼mpelung Berlin?", `Sie erreichen Trust EntrÃ¼mpelung Berlin telefonisch unter ${phoneDisplay}, per E-Mail an ${email} oder Ã¼ber das Anfrageformular.`],
      ["Was sollte in der Anfrage stehen?", "Nennen Sie Leistung, Bezirk oder Adresse, Etage, Fahrstuhl, ParkmÃ¶glichkeit, ungefÃ¤hre Menge, Fotos und den gewÃ¼nschten Zeitraum."],
      ["Was passiert nach der Anfrage?", "Trust prÃ¼ft die Angaben, stellt RÃ¼ckfragen bei unklaren Punkten und stimmt bei Bedarf eine kostenlose Besichtigung oder den nÃ¤chsten Schritt ab."],
    ],
  },
};

const faqEnhancements = {
  "": [
    ["Was macht Trust EntrÃ¼mpelung Berlin genau?", "Trust EntrÃ¼mpelung Berlin rÃ¤umt Wohnungen, Keller, DachbÃ¶den, Garagen, GewerbeflÃ¤chen und Nachlasswohnungen. Dazu gehÃ¶ren Planung, Tragen, Transport, fachgerechte Entsorgung und auf Wunsch besenreine Ãœbergabe."],
    ["Welche Angaben werden fÃ¼r ein Angebot gebraucht?", "Hilfreich sind Fotos, Bezirk, Etage, Fahrstuhl, ParkmÃ¶glichkeit, Menge, Wunschtermin und das gewÃ¼nschte Ãœbergabeziel."],
  ],
  "entruempelung-berlin": [
    ["Was ist der Unterschied zwischen EntrÃ¼mpelung und SperrmÃ¼llabholung?", "Eine SperrmÃ¼llabholung betrifft meist einzelne sperrige GegenstÃ¤nde. Eine EntrÃ¼mpelung umfasst ganze RÃ¤ume, Sortierung, Tragen, Transport, Entsorgung und auf Wunsch besenreine Ãœbergabe."],
    ["Welche RÃ¤ume kÃ¶nnen entrÃ¼mpelt werden?", "Wohnung, Haus, Keller, Dachboden, Garage, einzelne Zimmer und GewerbeflÃ¤chen kÃ¶nnen nach Absprache gerÃ¤umt werden."],
  ],
  "wohnungsaufloesung-berlin": [
    ["Was wird bei einer WohnungsauflÃ¶sung entfernt?", "MÃ¶bel, Hausrat, SperrmÃ¼ll, ElektrogerÃ¤te und nach Absprache NebenrÃ¤ume wie Keller oder Dachboden werden fÃ¼r die Ãœbergabe gerÃ¤umt."],
    ["Worin unterscheidet sich WohnungsauflÃ¶sung von EntrÃ¼mpelung?", "Eine EntrÃ¼mpelung kann einzelne RÃ¤ume betreffen. Eine WohnungsauflÃ¶sung meint meist die komplette Wohnung mit Ãœbergabe an Vermieter, EigentÃ¼mer oder Hausverwaltung."],
  ],
  "haushaltsaufloesung-berlin": [
    ["Was gehÃ¶rt zu einer HaushaltsauflÃ¶sung?", "Zur HaushaltsauflÃ¶sung gehÃ¶ren MÃ¶bel, Hausrat, Kleidung, BÃ¼cher, Geschirr, Kartons, ElektrogerÃ¤te und SperrmÃ¼ll nach Absprache."],
    ["Wie wird mit persÃ¶nlichen GegenstÃ¤nden umgegangen?", "Unterlagen, ErinnerungsstÃ¼cke und GegenstÃ¤nde, die bleiben sollen, werden vor der RÃ¤umung besprochen oder markiert."],
  ],
  "nachlassaufloesung-berlin": [
    ["Wie lÃ¤uft eine NachlassauflÃ¶sung ab?", "Zuerst werden Ansprechpartner, SchlÃ¼ssel, persÃ¶nliche Unterlagen, WertgegenstÃ¤nde und Ãœbergabeziel geklÃ¤rt. Danach folgen EinschÃ¤tzung, Angebot, RÃ¤umung und Ãœbergabe."],
    ["Was passiert mit Dokumenten und ErinnerungsstÃ¼cken?", "Dokumente, Fotos und ErinnerungsstÃ¼cke werden vorab besprochen, damit wichtige Dinge nicht ungeklÃ¤rt entsorgt werden."],
  ],
  "kellerentruempelung-berlin": [
    ["Was muss ich bei Kellerzugang und Tragewegen nennen?", "Wichtig sind Kellerart, Etage, Treppen, Licht, Hof- oder Tiefgaragenzugang, ParkmÃ¶glichkeit und ob GegenstÃ¤nde erhalten bleiben sollen."],
    ["Welche GegenstÃ¤nde kÃ¶nnen aus dem Keller gerÃ¤umt werden?", "Kartons, MÃ¶bel, Hausrat und SperrmÃ¼ll kÃ¶nnen nach Absprache aus dem Keller getragen und fachgerecht entsorgt werden."],
  ],
  "dachbodenentruempelung-berlin": [
    ["Warum sind Zugang und Treppen beim Dachboden wichtig?", "DachbÃ¶den haben oft enge oder lange Tragewege. Zugang, Etage, Treppenhaus und ParkmÃ¶glichkeit bestimmen Team, Zeit und Aufwand."],
    ["Was wird aus dem Dachboden entfernt?", "Alte MÃ¶bel, Kartons, Kisten, Hausrat und SperrmÃ¼ll kÃ¶nnen nach Absprache vom Dachboden gerÃ¤umt werden."],
  ],
  "firmenaufloesung-berlin": [
    ["Was wird bei einer FirmenauflÃ¶sung gerÃ¤umt?", "BÃ¼romÃ¶bel, AktenmÃ¶bel, Regale, LagerbestÃ¤nde und GegenstÃ¤nde aus BÃ¼ro, Praxis, Lager oder GewerbeflÃ¤che kÃ¶nnen gerÃ¤umt werden."],
    ["Wie wird ein Termin fÃ¼r GewerbeflÃ¤chen abgestimmt?", "Zeitfenster, Ansprechpartner, Zugang, Etage, ParkmÃ¶glichkeit und Ãœbergabeziel werden vorab besprochen."],
  ],
  "sperrmuellabholung-berlin": [
    ["Welche SperrmÃ¼ll-GegenstÃ¤nde kÃ¶nnen abgeholt werden?", "Typisch sind Sofa, Schrank, Bett, Matratze, Regal, Tisch, Teppich und andere sperrige HaushaltsgegenstÃ¤nde nach Absprache."],
    ["Welche Angaben sind fÃ¼r die Abholung wichtig?", "BenÃ¶tigt werden Fotos, Menge, Etage, Fahrstuhl, Trageweg, ParkmÃ¶glichkeit und der gewÃ¼nschte Abholzeitraum."],
  ],
  "moebeltransport-berlin": [
    ["Welche Angaben braucht Trust fÃ¼r einen MÃ¶beltransport?", "Wichtig sind Abholadresse, Zieladresse, Etagen, Fahrstuhl, Tragewege, ParkmÃ¶glichkeit, MÃ¶belmaÃŸe und ob Demontage nach Absprache nÃ¶tig ist."],
    ["Geht es auch um einzelne MÃ¶belstÃ¼cke?", "Ja, auch einzelne MÃ¶belstÃ¼cke wie Sofa, Schrank, Bett oder Tisch kÃ¶nnen angefragt werden."],
  ],
  preise: [
    ["Warum ist eine Besichtigung oft sinnvoll?", "Eine Besichtigung ist sinnvoll, wenn mehrere RÃ¤ume, NebenrÃ¤ume, schwierige Tragewege, viel Hausrat oder ein fester Ãœbergabetermin betroffen sind."],
    ["Welche Angaben beeinflussen das Angebot?", "Menge, Etage, Fahrstuhl, ParkmÃ¶glichkeit, Tragewege, Demontage, Entsorgungsart, Terminwunsch und mÃ¶gliche Wertanrechnung beeinflussen das Angebot."],
  ],
  kontakt: [
    ["Welche Angaben sollte ich in die Anfrage schreiben?", "Schreiben Sie Leistung, Bezirk oder Adresse, Etage, Fahrstuhl, ParkmÃ¶glichkeit, ungefÃ¤hre Menge, Fotos und den gewÃ¼nschten Zeitraum in die Anfrage."],
    ["Wie erreiche ich Trust EntrÃ¼mpelung Berlin?", `Telefonisch unter ${phoneDisplay}, per E-Mail an ${email} oder Ã¼ber das Anfrageformular auf dieser Seite.`],
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
      <a class="brand" href="/" aria-label="Trust EntrÃ¼mpelung Berlin Startseite">
        <img class="brand-logo" src="/assets/logo-trust-transparent.png?v=${assetVersion}" alt="Trust EntrÃ¼mpelung Berlin" width="1200" height="300" decoding="async">
      </a>
      <nav class="desktop-nav" aria-label="Hauptnavigation">${desktopNavHtml()}</nav>
      <div class="header-actions">
        <a class="button button-secondary" href="${phoneHref}">${phoneDisplay}</a>
        <a class="button button-primary" href="/kontakt/">Kostenlose Besichtigung</a>
      </div>
      <button class="menu-toggle" type="button" aria-label="MenÃ¼ Ã¶ffnen" aria-expanded="false" data-menu-button><span></span><span></span></button>
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
    items.push(`<a href="/entruempelung-berlin/">EntrÃ¼mpelung Berlin</a>`);
  }
  items.push(`<span>${esc(page.keyword)}</span>`);
  return `<div class="container breadcrumb" aria-label="Breadcrumb">${items.join(" / ")}</div>`;
}

function heroHtml(page, text, image = "Heller Berliner Altbauflur nach besenreiner Ãœbergabe") {
  const heroTitle = page.slug ? page.keyword : "EntrÃ¼mpelung Berlin";
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
            <li>Terminplanung nach kurzer PrÃ¼fung</li>
            <li>Kostenlose Besichtigung mÃ¶glich</li>
            <li>Keine versteckten Kosten</li>
            <li>Festpreis nach EinschÃ¤tzung</li>
            <li>RÃ¤umung, Transport, Entsorgung</li>
            <li>Besenreine Ãœbergabe mÃ¶glich</li>
          </ul>
        </div>
        <aside class="quote-panel" aria-label="Kostenlose Besichtigung und EinschÃ¤tzung">
          <h2>Kostenlose Besichtigung vorbereiten</h2>
          <p>Fotos und Eckdaten helfen fÃ¼r eine erste Orientierung. Bei grÃ¶ÃŸeren AuftrÃ¤gen prÃ¼fen wir den Umfang vor Ort.</p>
          <ol class="quote-steps">
            <li><span>1</span>Bezirk, Etage und Fahrstuhl nennen</li>
            <li><span>2</span>Fotos von RÃ¤umen und GegenstÃ¤nden senden</li>
            <li><span>3</span>Umfang prÃ¼fen und Termin abstimmen</li>
          </ol>
          <a class="button button-primary" href="/kontakt/">Anfrage starten</a>
          <div class="hero-photo-note">${esc(image)} Â· klare EinschÃ¤tzung vor Beginn</div>
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
    <h2>EntrÃ¼mpelung Berlin - WohnungsauflÃ¶sung, HaushaltsauflÃ¶sung & SperrmÃ¼llabholung</h2>
    <p>Sie suchen eine zuverlÃ¤ssige EntrÃ¼mpelungsfirma in Berlin, die Wohnungen, Keller, DachbÃ¶den, Garagen oder GewerbeflÃ¤chen sauber rÃ¤umt? Trust EntrÃ¼mpelung Berlin Ã¼bernimmt EntrÃ¼mpelungen, WohnungsauflÃ¶sungen, HaushaltsauflÃ¶sungen und SperrmÃ¼llabholungen in ganz Berlin - strukturiert, diskret und mit klarer EinschÃ¤tzung vor Beginn der Arbeiten.</p>
    <p>Ob einzelne RÃ¤ume entrÃ¼mpelt werden sollen, eine komplette Wohnung leer gerÃ¤umt werden muss oder eine besenreine Ãœbergabe nach Umzug, Todesfall oder HaushaltsauflÃ¶sung ansteht: Wir prÃ¼fen den Umfang, klÃ¤ren Zugang, Etage, ParkmÃ¶glichkeit, Demontage und Entsorgung und erstellen auf Wunsch einen Festpreis nach Besichtigung. So wissen Sie vorher, was gemacht wird, welche Kosten entstehen und wann die RÃ¤ume wieder frei Ã¼bergeben werden kÃ¶nnen.</p>
    <p>Unser EntrÃ¼mpelungsdienst in Berlin unterstÃ¼tzt Privatkunden, AngehÃ¶rige, EigentÃ¼mer, Vermieter, Hausverwaltungen und Unternehmen. Wir rÃ¤umen MÃ¶bel, Hausrat, SperrmÃ¼ll, ElektrogerÃ¤te, Kartons und sonstige GegenstÃ¤nde, trennen verwertbare Materialien und sorgen fÃ¼r eine fachgerechte Entsorgung. Wenn verwertbare GegenstÃ¤nde vorhanden sind, kann eine Wertanrechnung geprÃ¼ft werden.</p>
    <p>Von der ersten Anfrage bis zur besenreinen Ãœbergabe haben Sie einen klaren Ansprechpartner. Schildern Sie kurz den Fall Ã¼ber das Formular, telefonisch oder per E-Mail - wir geben Ihnen eine erste EinschÃ¤tzung und planen den nÃ¤chsten Schritt.</p>
  </div></section>`;
}

const eeatPageSlugs = new Set(["", "entruempelung-berlin", "wohnungsaufloesung-berlin", "haushaltsaufloesung-berlin", "nachlassaufloesung-berlin", "preise", "kontakt"]);

function shouldShowTrustSection(page) {
  return eeatPageSlugs.has(page.slug);
}

function companyTrustHtml(page) {
  if (!shouldShowTrustSection(page)) return "";
  return `<section class="section-soft"><div class="container split">
    <div><span class="eyebrow">Unternehmen & Verantwortung</span><h2>Trust EntrÃ¼mpelung Berlin: klare Angaben, klare AblÃ¤ufe</h2><p>Trust EntrÃ¼mpelung Berlin ist der AuÃŸenauftritt der ${esc(legalCompany)} mit Sitz in ${esc(streetAddress)}, ${esc(postalCode)} ${esc(city)}. Die Kontaktaufnahme ist telefonisch unter <a href="${phoneHref}">${phoneDisplay}</a>, per E-Mail an ${email} oder Ã¼ber das Anfrageformular mÃ¶glich.</p><p>Das Einsatzgebiet umfasst Berlin. AuftrÃ¤ge im Berliner Umland und in Brandenburg werden nach Umfang, Entfernung und TerminmÃ¶glichkeit geprÃ¼ft.</p></div>
    <div class="card"><h3>Was vor einem Angebot geprÃ¼ft wird</h3><ul class="mini-list"><li>Leistung, RÃ¤ume und gewÃ¼nschtes Ãœbergabeziel</li><li>Menge, Etage, Fahrstuhl und Tragewege</li><li>ParkmÃ¶glichkeit, Demontage und Entsorgungsart</li><li>Wertanrechnung nur bei tatsÃ¤chlich verwertbaren GegenstÃ¤nden</li></ul></div>
  </div></section>`;
}

function disposalTrustHtml(page) {
  if (!shouldShowTrustSection(page)) return "";
  const nachlassText = page.slug === "nachlassaufloesung-berlin"
    ? `<p>Bei NachlassauflÃ¶sungen werden persÃ¶nliche Unterlagen, ErinnerungsstÃ¼cke und verwertbare GegenstÃ¤nde vor der RÃ¤umung besprochen, damit nichts Wichtiges ohne Abstimmung entfernt wird.</p>`
    : "";
  return `<section><div class="container split">
    <div class="card"><h3>Entsorgung und Verwertung</h3><p>MÃ¶bel, Hausrat, SperrmÃ¼ll und sonstige GegenstÃ¤nde werden nach Auftrag getrennt, getragen, transportiert und fachgerecht entsorgt. Verwertbare GegenstÃ¤nde kÃ¶nnen vorab realistisch geprÃ¼ft werden.</p>${nachlassText}</div>
    <div><span class="eyebrow">Transparenz</span><h2>Kein pauschaler Preis ohne Umfang</h2><p>Ein seriÃ¶ses Angebot hÃ¤ngt von Menge, Zugang, Etage, ParkmÃ¶glichkeit, Demontage, Entsorgungsart und Terminwunsch ab. Deshalb erfolgt die EinschÃ¤tzung anhand von Fotos, Eckdaten oder einer Besichtigung vor Ort.</p><a class="card-link" href="/preise/">Preisfaktoren ansehen</a></div>
  </div></section>`;
}

function servicesGridHtml() {
  return `<section id="leistungen" class="section-soft"><div class="container">
    <div class="section-intro"><h2>Was soll in Berlin gerÃ¤umt werden?</h2><p>WÃ¤hlen Sie die passende Leistung fÃ¼r Wohnung, Keller, Dachboden, Garage, SperrmÃ¼ll, Nachlass oder Gewerbe.</p></div>
    <div class="grid-3">${services.map((service) => `<article class="card">
      <h3>${esc(service.short)}</h3>
      <p>${esc(service.intro)}</p>
      <ul class="mini-list"><li>Festpreis nach EinschÃ¤tzung</li><li>Transport und Entsorgung</li><li>Besenreine Ãœbergabe mÃ¶glich</li></ul>
      <a class="card-link" href="/${service.slug}/">Details und Ablauf ansehen</a>
    </article>`).join("")}</div>
  </div></section>`;
}

function processHtml(keyword = "EntrÃ¼mpelung Berlin") {
  return `<section id="ablauf" class="process-section"><div class="container">
    <div class="section-intro section-intro-center"><h2>Unsere Vorgehensweise bei ${esc(keyword)}</h2><p>Der Ablauf ist klar gehalten: Anfrage, EinschÃ¤tzung, Angebot und Umsetzung. So wissen Sie vor Beginn, was gemacht wird und welche Kosten entstehen.</p></div>
    <div class="timeline process-band">${processSteps.map(([title, text], index) => `<div class="step"><span class="step-number">${index + 1}</span><div><h3>${esc(title)}</h3><p>${esc(text)}</p></div></div>`).join("")}</div>
    <div class="process-action"><a class="button button-primary" href="/kontakt/">Festpreis nach Besichtigung erhalten</a></div>
  </div></section>`;
}

function costsHtml(keyword = "EntrÃ¼mpelung in Berlin") {
  return `<section class="section-soft"><div class="container">
    <div class="section-intro"><h2>Was kostet eine ${esc(keyword)}?</h2><p>Lockpreise helfen selten, wenn Umfang, Etage oder Entsorgung unklar sind. Wir prÃ¼fen die relevanten Faktoren und erklÃ¤ren, warum ein Festpreis erst nach EinschÃ¤tzung seriÃ¶s ist.</p></div>
    <div class="cost-grid">${costFactors.map((factor) => `<div class="cost-factor"><strong>${esc(factor)}</strong><p>Wird in die EinschÃ¤tzung aufgenommen, bevor ein Festpreis genannt wird.</p></div>`).join("")}</div>
    <div class="info-box"><h3>Warum erst EinschÃ¤tzung, dann Festpreis?</h3><p>Eine Wohnung im Erdgeschoss mit Fahrstuhl und ParkmÃ¶glichkeit ist anders zu planen als ein Berliner Altbau mit engem Treppenhaus. Deshalb werden Menge, Zugang, Demontage, Entsorgungsart und Terminwunsch vorher geklÃ¤rt.</p></div>
  </div></section>`;
}

function sensitiveHtml() {
  return `<section><div class="container split">
    <div><span class="eyebrow">Sensible FÃ¤lle</span><h2>WohnungsauflÃ¶sung, Nachlass und klare Absprachen</h2><p>Bei Todesfall, Pflegeheim oder Zeitdruck ist eine ruhige Organisation wichtiger als groÃŸe Versprechen. Wenn AngehÃ¶rige nicht dauerhaft vor Ort sein kÃ¶nnen, stimmen wir SchlÃ¼sselÃ¼bergabe, RÃ¼ckfragen und Abschluss vorher klar ab.</p><a class="card-link" href="/nachlassaufloesung-berlin/">NachlassauflÃ¶sung Berlin ansehen</a></div>
    <div class="card"><h3>Was wir vorher klÃ¤ren</h3><ul class="mini-list"><li>SchlÃ¼sselÃ¼bergabe und Ansprechpartner</li><li>PersÃ¶nliche Unterlagen und WertgegenstÃ¤nde</li><li>Vermieter, Verwaltung und Ãœbergabeziel</li><li>RÃ¤ume, NebenrÃ¤ume und gewÃ¼nschter Termin</li></ul></div>
  </div></section>`;
}

function b2bHtml() {
  return `<section class="section-blue"><div class="container split">
    <div><span class="eyebrow">Gewerbe & Verwaltung</span><h2>FirmenauflÃ¶sung, BÃ¼roauflÃ¶sung und AuftrÃ¤ge fÃ¼r Hausverwaltungen</h2><p>FÃ¼r Hausverwaltungen, EigentÃ¼mer, Makler, BÃ¼ros, Praxen und LagerflÃ¤chen zÃ¤hlen Terminfenster, saubere Dokumentation und zuverlÃ¤ssige Ãœbergabe. Trust plant Zugang, Laufwege, Demontage und Entsorgung sachlich vor.</p></div>
    <div class="grid-2"><div class="card"><h3>FÃ¼r Verwaltungen</h3><p>RÃ¤umung nach Auszug, Nachlass oder Ãœbergabefrist mit klarer Abstimmung.</p></div><div class="card"><h3>FÃ¼r Firmen</h3><p>BÃ¼romÃ¶bel, Regale, LagerbestÃ¤nde und GewerbeflÃ¤chen strukturiert rÃ¤umen.</p></div></div>
  </div></section>`;
}

function areasHtml() {
  return `<section id="einsatzgebiete" class="area-map-section"><div class="container">
    <div class="section-intro"><h2>EntrÃ¼mpelung, WohnungsauflÃ¶sung und NachlassauflÃ¶sung in Berliner Bezirken</h2><p>WÃ¤hlen Sie Ihren Bezirk und direkt die passende Leistung. Jede Kachel fÃ¼hrt zu Informationen fÃ¼r den jeweiligen Berliner Einsatzort.</p></div>
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
        <p>Auch im Berliner Umland prÃ¼fen wir passende EinsÃ¤tze, zum Beispiel in ${esc(brandenburgLead)}.</p>
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
    <div class="section-intro"><h2>HÃ¤ufige Fragen zur ${esc(page.keyword)}</h2><p>Klicken Sie auf eine Frage, um die Antwort zu Ã¶ffnen.</p></div>
    <div class="faq-list">${page.faq.map(([q, a]) => `<details class="faq-item"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div>
  </div></section>`;
}

function ctaHtml(page) {
  return `<section><div class="container"><div class="cta-panel">
    <div><h2>Kostenlose Besichtigung und EinschÃ¤tzung fÃ¼r Ihre ${esc(page.keyword)}</h2><p>Senden Sie Fotos, Bezirk, Etage, Fahrstuhl, ParkmÃ¶glichkeit und gewÃ¼nschten Zeitraum. Wir prÃ¼fen den Umfang und melden uns mit einer klaren EinschÃ¤tzung zurÃ¼ck. Bei grÃ¶ÃŸeren AuftrÃ¤gen ist eine kostenlose Besichtigung mÃ¶glich.</p></div>
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
      <h2>Kurze Anfrage fÃ¼r ${esc(page.keyword)}</h2>
      <p>Beschreiben Sie kurz, was gerÃ¤umt werden soll. Bezirk, Etage, Fahrstuhl, ParkmÃ¶glichkeit und gewÃ¼nschter Zeitraum helfen bei einer schnellen EinschÃ¤tzung.</p>
      <ul class="mini-list"><li>Kostenlose Besichtigung mÃ¶glich</li><li>Klare EinschÃ¤tzung vor Beginn</li><li>Festpreis nach Umfang und Zugang</li></ul>
    </div>
    <form class="inquiry-form" action="${FORM_ENDPOINT}" method="post" data-static-form data-form-endpoint="${FORM_ENDPOINT}">
      <h2>Anfrage senden</h2>
      <p>Ihre Anfrage geht an ${formEmail}. Wir melden uns in der Regel innerhalb von 24 Stunden zurÃ¼ck.</p>
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
        <label class="span-2">Kurzbeschreibung<textarea name="message" required placeholder="Was soll gerÃ¤umt werden? Gibt es Keller, Dachboden, Garage oder SperrmÃ¼ll?"></textarea></label>
        <label>Wunschtermin<input name="preferred_date" autocomplete="off"></label>
        <label>R&uuml;ckrufzeit<input name="callback_time" placeholder="z. B. vormittags oder ab 16 Uhr" autocomplete="off"></label>
        <label class="span-2 consent-field"><input name="privacy_consent" type="checkbox" value="yes" required><span>Ich habe die <a href="/datenschutz/">Datenschutzerkl&auml;rung</a> gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden.</span></label>
      </div>
      <div class="form-actions">
        <button class="button button-primary" type="submit">Anfrage absenden</button>
      </div>
      <div class="form-status" data-form-status role="status" aria-live="polite" tabindex="-1"></div>
      <p>Datenschutz-Hinweis: Die Angaben werden zur Bearbeitung Ihrer Anfrage an ${formEmail} Ã¼bermittelt.</p>
    </form>
  </div></section>`;
}

function localLinkHubHtml(page) {
  if (page.type === "service") {
    const links = serviceLocalDistrictLinks(page);
    const serviceKey = localServiceKeyForPage(page);
    const serviceType = districtServiceTypeByKey(serviceKey);
    return `<section><div class="container"><div class="section-intro"><h2>${esc(serviceType.label)} in wichtigen Berliner Bezirken</h2><p>Direkt zu passenden lokalen Seiten fÃ¼r zentrale Berliner Einsatzgebiete.</p></div><div class="area-links">${links.map((link) => `<a href="/${link.slug}/">${esc(link.label)}</a>`).join("")}</div></div></section>`;
  }

  if (page.type === "district") {
    const serviceKey = localServiceKeyForPage(page);
    const links = priorityDistrictLinks(serviceKey, page.districtSlug, 5);
    return `<section><div class="container"><div class="section-intro"><h2>Weitere passende Berliner Bezirke</h2><p>Wenn der Einsatzort angrenzt oder noch nicht feststeht, helfen diese lokalen Seiten weiter.</p></div><div class="area-links"><a href="/${page.baseServiceSlug}/">${esc(serviceBySlug[page.baseServiceSlug]?.short || "Hauptleistung Berlin")}</a>${links.map((link) => `<a href="/${link.slug}/">${esc(link.label)}</a>`).join("")}</div></div></section>`;
  }

  if (page.type === "brandenburg") {
    const related = relatedBrandenburgLinks(page);
    return `<section><div class="container"><div class="section-intro"><h2>Weitere Seiten fÃ¼r Berlin und Brandenburg</h2><p>Passende Leistungen fÃ¼r Berlin und das Berliner Umland nach Absprache.</p></div><div class="area-links">${related.map((slug) => {
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
    ? "Lokale Planung fÃ¼r RÃ¤ume, Hausrat und Entsorgung"
    : page.serviceKey === "wohnungsaufloesung"
      ? "Lokale Planung fÃ¼r vollstÃ¤ndige WohnungsÃ¼bergaben"
      : "Lokale Planung fÃ¼r sensible NachlassfÃ¤lle";
  return `<section><div class="container split">
    <div><span class="eyebrow">Lokaler Bezug</span><h2>${esc(page.keyword)} mit Blick auf Zugang und Ãœbergabe</h2><p>${esc(page.localProfile.location)}</p><p>${esc(page.localProfile.access)}</p></div>
    <div class="card"><h3>${esc(focusTitle)}</h3><p>${esc(serviceText)}</p><ul class="mini-list"><li>Besichtigung oder EinschÃ¤tzung anhand von Fotos</li><li>Angebot passend zu Umfang, Etage und Zugang</li><li>RÃ¤umung, Transport und Ãœbergabe nach Absprache</li></ul></div>
  </div></section>`;
}

function internalLinksHtml(page) {
  const linkSlugs = page.links || ["entruempelung-berlin", "wohnungsaufloesung-berlin", "haushaltsaufloesung-berlin", "preise", "kontakt"];
  const linkIntro = page.type === "brandenburg" ? "Diese Seiten helfen bei der Einordnung und fÃ¼hren zu passenden Leistungen fÃ¼r Berlin und das Berliner Umland." : "Diese Seiten helfen bei der Einordnung und fÃ¼hren zu verwandten Leistungen in Berlin.";
  return `<section><div class="container"><div class="section-intro"><h2>Passende nÃ¤chste Seiten</h2><p>${linkIntro}</p></div><div class="grid-3">${linkSlugs.map((slug) => {
    const target = serviceBySlug[slug] || districtPageBySlug[slug] || brandenburgPageBySlug[slug] || pages.find((item) => item.slug === slug);
    return `<a class="card" href="/${slug}/"><span class="card-kicker">Weitere Leistung</span><h3>${esc(target?.keyword || slug)}</h3><p>Ablauf, EinschÃ¤tzung und Anfrage fÃ¼r diese Leistung ansehen.</p></a>`;
  }).join("")}<a class="card" href="#faq"><span class="card-kicker">Fragen</span><h3>FAQ zu ${esc(page.keyword)}</h3><p>Antworten zu Ablauf, Kosten, Besichtigung und Ãœbergabe ansehen.</p></a></div></div></section>`;
}

function footerHtml() {
  return `<footer class="site-footer"><div class="container-wide">
    <div class="footer-grid">
      <div><img class="footer-logo" src="/assets/logo-trust-transparent.png?v=${assetVersion}" alt="Trust EntrÃ¼mpelung Berlin" width="1200" height="300" loading="lazy" decoding="async"><div class="footer-title">Trust EntrÃ¼mpelung Berlin</div><p>Trust EntrÃ¼mpelung Berlin Ã¼bernimmt EntrÃ¼mpelungen, WohnungsauflÃ¶sungen, HaushaltsauflÃ¶sungen, SperrmÃ¼llabholungen und FirmenauflÃ¶sungen in Berlin. Unser Schwerpunkt liegt auf klarer Planung, transparenter EinschÃ¤tzung, fachgerechter Entsorgung und besenreiner Ãœbergabe.</p><p>Telefon: <a href="${phoneHref}">${phoneDisplay}</a><br>E-Mail: ${email}</p></div>
      <div><div class="footer-title">Leistungen</div><a href="/entruempelung-berlin/">EntrÃ¼mpelung Berlin</a><a href="/wohnungsaufloesung-berlin/">WohnungsauflÃ¶sung Berlin</a><a href="/haushaltsaufloesung-berlin/">HaushaltsauflÃ¶sung Berlin</a><a href="/nachlassaufloesung-berlin/">NachlassauflÃ¶sung Berlin</a><a href="/firmenaufloesung-berlin/">FirmenauflÃ¶sung Berlin</a><a href="/sperrmuellabholung-berlin/">SperrmÃ¼llabholung Berlin</a></div>
      <div><div class="footer-title">RÃ¤ume & SpezialfÃ¤lle</div><a href="/kellerentruempelung-berlin/">KellerentrÃ¼mpelung Berlin</a><a href="/dachbodenentruempelung-berlin/">DachbodenentrÃ¼mpelung Berlin</a><a href="/garagenentruempelung-berlin/">GaragenentrÃ¼mpelung Berlin</a><a href="/moebeltransport-berlin/">MÃ¶beltransport Berlin</a><a href="/kleine-umzuege-berlin/">Kleine UmzÃ¼ge Berlin</a><a href="/entruempelung-berlin/">Messie-Wohnung entrÃ¼mpeln</a></div>
      <div><div class="footer-title">Einsatzgebiete</div><a href="/#einsatzgebiete">Berlin Mitte</a><a href="/#einsatzgebiete">Wedding</a><a href="/#einsatzgebiete">Pankow</a><a href="/#einsatzgebiete">Charlottenburg</a><a href="/#einsatzgebiete">NeukÃ¶lln</a><a href="/#einsatzgebiete">Spandau</a><a href="/entruempelung-brandenburg/">EntrÃ¼mpelung Brandenburg</a><a href="/wohnungsaufloesung-brandenburg/">WohnungsauflÃ¶sung Brandenburg</a><a href="/nachlassaufloesung-brandenburg/">NachlassauflÃ¶sung Brandenburg</a></div>
      <div><div class="footer-title">Unternehmen</div><a href="/#leistungen">Ãœber uns</a><a href="/#ablauf">Ablauf</a><a href="/preise/">Preise</a><a href="/kontakt/">Kontakt</a><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a></div>
    </div>
    <div class="footer-bottom"><span>Â© ${new Date().getFullYear()} Trust EntrÃ¼mpelung Berlin</span><span>EntrÃ¼mpelung, WohnungsauflÃ¶sung und SperrmÃ¼llabholung in Berlin.</span></div>
  </div></footer>
  <div class="mobile-callbar"><a class="button button-primary" href="${phoneHref}">Anrufen</a>${whatsapp ? `<a class="button button-whatsapp" ${whatsappAttrs}>WhatsApp</a>` : `<a class="button button-secondary" href="/kontakt/">Anfrage</a>`}</div>`;
}

function schema(page) {
  const pageUrl = absoluteUrl(page.slug);
  const graph = [
    {"@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Trust EntrÃ¼mpelung Berlin", legalName: legalCompany, url: `${siteUrl}/`, logo: `${siteUrl}/assets/logo-trust-transparent.png`, image: `${siteUrl}/assets/logo-trust-transparent.png`, email, telephone: phoneDisplay, contactPoint: {"@type": "ContactPoint", telephone: phoneDisplay, email, contactType: "customer service", areaServed: ["Berlin", "Brandenburg"], availableLanguage: ["de"]}},
    {"@type": "LocalBusiness", "@id": `${siteUrl}/#localbusiness`, name: "Trust EntrÃ¼mpelung Berlin", legalName: legalCompany, url: `${siteUrl}/`, image: `${siteUrl}/assets/hero-entruempelung.jpg`, email, telephone: phoneDisplay, address: {"@type": "PostalAddress", streetAddress, postalCode, addressLocality: city, addressCountry: "DE"}, contactPoint: {"@type": "ContactPoint", telephone: phoneDisplay, email, contactType: "customer service", areaServed: ["Berlin", "Brandenburg"], availableLanguage: ["de"]}, areaServed: ["Berlin", ...brandenburgPlaces], serviceType: [...services.map((item) => item.keyword), ...brandenburgPages.map((item) => item.keyword)]},
    {"@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: page.title, description: page.description},
    {"@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb`, itemListElement: [
      {"@type": "ListItem", position: 1, name: "Startseite", item: `${siteUrl}/`},
      ...(page.slug ? [{"@type": "ListItem", position: 2, name: page.keyword, item: pageUrl}] : []),
    ]},
    {"@type": "FAQPage", "@id": `${pageUrl}#faq`, mainEntity: page.faq.map(([q, a]) => ({"@type": "Question", name: q, acceptedAnswer: {"@type": "Answer", text: a}}))},
  ];

  if (page.type === "home") {
    graph.push({"@type": "WebSite", "@id": `${siteUrl}/#website`, name: "Trust EntrÃ¼mpelung Berlin", url: `${siteUrl}/`});
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
  const clipped = text.slice(0, boundary > 145 ? boundary : limit).replace(/[,:;â€“-]\s*$/, "").trim();
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
  <meta property="og:site_name" content="Trust EntrÃ¼mpelung Berlin">
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
    heroHtml(page, "Trust EntrÃ¼mpelung Berlin Ã¼bernimmt EntrÃ¼mpelungen, WohnungsauflÃ¶sungen, HaushaltsauflÃ¶sungen und SperrmÃ¼llabholungen in ganz Berlin. Strukturiert geplant, transparent eingeschÃ¤tzt und auf Wunsch besenrein Ã¼bergeben."),
    homeSeoIntroHtml(),
    companyTrustHtml(page),
    directAnswersHtml(page),
    `<section class="home-method"><div class="container"><div class="section-intro section-intro-center"><h2>EntrÃ¼mpelung in Berlin mit Struktur, Festpreis und besenreiner Ãœbergabe</h2><p>Nach drei Sekunden soll klar sein, was Trust macht: RÃ¤ume frei machen, Hausrat sortieren, MÃ¶bel tragen, SperrmÃ¼ll entsorgen und Ãœbergaben vorbereiten.</p></div><div class="method-band"><div class="method-item"><span class="method-icon">1</span><h3>Wohnung leer rÃ¤umen</h3><p>FÃ¼r Auszug, KÃ¼ndigung, Verkauf, Pflegeheim oder Nachlass mit abgestimmtem Ãœbergabeziel.</p></div><div class="method-item"><span class="method-icon">2</span><h3>Keller, Dachboden und Garage</h3><p>RÃ¤ume werden nicht nur leer, sondern nutzbar und auf Wunsch besenrein vorbereitet.</p></div><div class="method-item"><span class="method-icon">3</span><h3>MÃ¶bel und SperrmÃ¼ll</h3><p>Tragen, Transport und Entsorgung werden passend zum Umfang geplant.</p></div></div></div></section>`,
    servicesGridHtml(),
    processHtml("EntrÃ¼mpelung Berlin"),
    costsHtml("EntrÃ¼mpelung in Berlin"),
    sensitiveHtml(),
    b2bHtml(),
    disposalTrustHtml(page),
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
    `<section id="leistungen"><div class="container"><div class="section-intro"><h2>Professionelle ${esc(page.keyword)}: Was wir Ã¼bernehmen</h2><p>${esc(page.keyword)} wird so geplant, dass Umfang, Zugang, Transport, Entsorgung und Ãœbergabe zusammenpassen.</p></div><div class="grid-3">${page.includes.map((item) => `<div class="card"><span class="card-kicker">Leistungsbereich</span><h3>${esc(item)}</h3><p>Der Umfang wird vor Beginn sauber aufgenommen, damit Angebot, Team und Zeitfenster zum Auftrag passen.</p></div>`).join("")}</div></div></section>`,
    `<section class="section-blue"><div class="container"><div class="section-intro"><h2>Typische Situationen fÃ¼r ${esc(page.keyword)}</h2><p>Viele Anfragen entstehen durch Auszug, Ãœbergabe, Nachlass, Sanierung oder Platzmangel. Entscheidend ist eine klare EinschÃ¤tzung vor Beginn.</p></div><div class="grid-3">${page.situations.map((item) => `<div class="card"><h3>${esc(item)}</h3><p>Zugang, Etage, Tragewege, ParkmÃ¶glichkeit und Entsorgung werden passend zu dieser Situation geplant.</p></div>`).join("")}</div></div></section>`,
    processHtml(page.keyword),
    costsHtml(page.keyword),
    `<section><div class="container split"><div><h2>${esc(page.compareTitle)}</h2><p>${esc(page.compareText)}</p></div><div class="card"><h3>Vor der EinschÃ¤tzung hilfreich</h3><ul class="mini-list"><li>Fotos der RÃ¤ume und GegenstÃ¤nde</li><li>Bezirk, Etage und Fahrstuhl</li><li>ParkmÃ¶glichkeit und Tragewege</li><li>Wunschtermin und Ãœbergabeziel</li></ul></div></div></section>`,
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
    heroHtml(page, "EntrÃ¼mpelung Kosten Berlin lassen sich seriÃ¶s erklÃ¤ren, aber nicht pauschal versprechen. Entscheidend sind Umfang, Etage, Zugang, ParkmÃ¶glichkeit, Demontage, Entsorgung und mÃ¶gliche Wertanrechnung.", "Ruhige Preisbesprechung mit Fotos, Notizen und klarer Umfangsliste"),
    trustBarHtml(),
    companyTrustHtml(page),
    directAnswersHtml(page),
    costsHtml("EntrÃ¼mpelung in Berlin"),
    disposalTrustHtml(page),
    `<section><div class="container split"><div><h2>Selbst entsorgen oder Firma beauftragen?</h2><p>Selbstentsorgung kann sinnvoll sein, wenn wenige GegenstÃ¤nde, Fahrzeug, Zeit und Helfer vorhanden sind. Eine EntrÃ¼mpelungsfirma lohnt sich, wenn Tragewege, groÃŸe MÃ¶bel, Entsorgung, Ãœbergabedruck oder mehrere RÃ¤ume zusammenkommen.</p></div><div class="card"><h3>FÃ¼r den Festpreis relevant</h3><ul class="mini-list"><li>WohnungsgrÃ¶ÃŸe und Menge</li><li>Etage, Fahrstuhl und ParkmÃ¶glichkeit</li><li>Demontage, KÃ¼che, Teppich oder Lampen</li><li>SondermÃ¼ll und Entsorgungsart</li><li>Wertanrechnung und Terminwunsch</li></ul></div></div></section>`,
    internalLinksHtml(page),
    inquiryFormHtml(page),
    faqHtml(page),
    ctaHtml(page),
  ].join("");
}

function contactContent(page) {
  return [
    heroHtml(page, "FÃ¼r den EntrÃ¼mpelung Berlin Kontakt helfen Fotos, Bezirk, Etage, Fahrstuhl, ParkmÃ¶glichkeit, gewÃ¼nschter Zeitraum und eine kurze Beschreibung. So kann Trust den Umfang schneller einschÃ¤tzen.", "Kontaktaufnahme mit Fotos und kurzer Objektbeschreibung"),
    trustBarHtml(),
    companyTrustHtml(page),
    directAnswersHtml(page),
    `<section><div class="container contact-layout"><div class="card"><h2>Kontaktwege</h2><p>Sie erreichen Trust EntrÃ¼mpelung Berlin telefonisch, per E-Mail oder Ã¼ber das Anfrageformular. FÃ¼r eine erste EinschÃ¤tzung helfen Fotos, Bezirk, Etage und eine kurze Beschreibung.</p><ul class="mini-list"><li>Telefon: ${phoneDisplay}</li><li>E-Mail: ${email}</li><li>Kostenlose Besichtigung bei grÃ¶ÃŸeren AuftrÃ¤gen</li><li>Einsatzgebiet: Berlin und Berliner Umland</li></ul><div class="hero-actions"><a class="button button-primary" href="${phoneHref}">Jetzt anrufen</a><a class="button button-secondary" href="#anfrageformular">Anfrage senden</a></div></div><div class="card"><h2>Was wir fÃ¼r die EinschÃ¤tzung brauchen</h2><ul class="mini-list"><li>Fotos von RÃ¤umen und GegenstÃ¤nden</li><li>Bezirk, Etage und Fahrstuhl</li><li>ParkmÃ¶glichkeit und Tragewege</li><li>Wunschtermin und Ãœbergabeziel</li></ul></div></div></section>`,
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
    heroHtml(page, page.slug === "impressum" ? "Hier finden Sie die Anbieterkennzeichnung von Trust EntrÃ¼mpelung Berlin." : "Hier finden Sie Hinweise dazu, wie Angaben aus Anfragen verarbeitet werden.", "Kontakt, Anbieterangaben und klare Verantwortlichkeit"),
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
