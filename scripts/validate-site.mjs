import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pages = [""];

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  if (entry.name.startsWith(".") || entry.name === "assets" || entry.name === "scripts") continue;
  const indexPath = path.join(root, entry.name, "index.html");
  if (fs.existsSync(indexPath)) pages.push(entry.name);
}

pages.sort((a, b) => {
  if (a === "") return -1;
  if (b === "") return 1;
  return a.localeCompare(b);
});

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
    if (fs.existsSync(path.join(root, href.replace(/^\//, "")))) continue;
    if (!existingRoutes.has(href)) {
      console.log(`Missing internal link: ${route} -> ${href}`);
      ok = false;
    }
  }
}

console.table(rows);
process.exit(ok ? 0 : 1);
