import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pages = [
  "",
  "entruempelung-berlin",
  "wohnungsaufloesung-berlin",
  "haushaltsaufloesung-berlin",
  "nachlassaufloesung-berlin",
  "firmenaufloesung-berlin",
  "kellerentruempelung-berlin",
  "dachbodenentruempelung-berlin",
  "garagenentruempelung-berlin",
  "sperrmuellabholung-berlin",
  "moebeltransport-berlin",
  "kleine-umzuege-berlin",
  "preise",
  "kontakt",
  "impressum",
  "datenschutz",
];

const existingRoutes = new Set(pages.map((slug) => `/${slug ? `${slug}/` : ""}`));
let ok = true;
const rows = [];

for (const slug of pages) {
  const route = `/${slug ? `${slug}/` : ""}`;
  const html = fs.readFileSync(path.join(root, slug, "index.html"), "utf8");
  const h1 = (html.match(/<h1\b/gi) || []).length;
  const title = /<title>[^<]+<\/title>/.test(html);
  const description = /<meta name="description" content="[^"]+">/.test(html);
  const schema = (html.match(/application\/ld\+json/g) || []).length;
  const footer = /<footer class="site-footer"/.test(html);
  const faq = /<div class="faq-list"/.test(html);
  const indexLinks = /href="[^"]*index\.html/.test(html);

  rows.push({ route, h1, title, description, schema, footer, faq, indexLinks });
  if (h1 !== 1 || !title || !description || schema < 1 || !footer || !faq || indexLinks) {
    ok = false;
  }

  for (const match of html.matchAll(/href="(\/[^\t\n\r"#?]*)/g)) {
    const href = match[1];
    if (href.startsWith("/assets/")) continue;
    if (!existingRoutes.has(href)) {
      console.log(`Missing internal link: ${route} -> ${href}`);
      ok = false;
    }
  }
}

console.table(rows);
process.exit(ok ? 0 : 1);
