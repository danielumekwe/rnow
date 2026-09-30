// Crawls the static export in ./out and verifies every internal link on the
// About pages (and the site header/footer) resolves to a real page.
// Usage: npm run build && node scripts/check-about-links.mjs
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const errors = []; // problems on About pages (fail the run)
const warnings = []; // problems elsewhere on the site (reported only)
const isAbout = (route) => route === "/about" || route.startsWith("/about/");
const report = (route, msg) => (isAbout(route) ? errors : warnings).push(`${route}: ${msg}`);
const seen = new Set();

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return f === "_next" ? [] : htmlFiles(p);
    return p.endsWith(".html") ? [p] : [];
  });
}

function resolves(path) {
  const clean = path.replace(/\/$/, "") || "/index";
  return existsSync(join(OUT, `${clean}.html`)) || existsSync(join(OUT, clean, "index.html"));
}

const pages = htmlFiles(OUT);
let checked = 0;
for (const file of pages) {
  const route = "/" + file.slice(OUT.length + 1).replace(/(^|\/)index\.html$/, "").replace(/\.html$/, "");
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(/<a\b[^>]*?href="([^"]*)"/g)) {
    const raw = m[1].replace(/&amp;/g, "&");
    if (/^(https?:|mailto:|tel:)/.test(raw)) continue;
    if (raw === "#" || raw === "") {
      report(route, 'empty/"#" link');
      continue;
    }
    if (raw.startsWith("#")) continue; // in-page anchor (skip link etc.)
    const [path, hash] = raw.split("#");
    const key = `${route} -> ${raw}`;
    if (seen.has(key)) continue;
    seen.add(key);
    checked++;
    if (!resolves(path)) report(route, `broken link ${raw}`);
    else if (hash) {
      const target = existsSync(join(OUT, `${path}.html`)) ? join(OUT, `${path}.html`) : join(OUT, path, "index.html");
      if (!readFileSync(target, "utf8").includes(`id="${hash}"`)) report(route, `missing anchor ${raw}`);
    }
  }
}

// Menu items render only when a dropdown is open, so they are not in the static
// HTML. Check every path declared in the About sitemap and nav data directly.
const menuPaths = new Set();
for (const file of ["data/about/sitemap.ts", "data/navigation.ts"]) {
  for (const m of readFileSync(file, "utf8").matchAll(/(?:path|href):\s*"(\/[^"#]*)"/g)) menuPaths.add(m[1]);
}
for (const p of menuPaths) {
  checked++;
  if (!resolves(p)) errors.push(`menu/sitemap: no page for ${p}`);
}

const aboutPages = pages.filter((f) => f.startsWith(join(OUT, "about")) || f === join(OUT, "about.html"));
console.log(`Scanned ${pages.length} pages (${aboutPages.length} About pages); checked ${checked} unique links (including ${menuPaths.size} menu/sitemap paths).`);
if (warnings.length) {
  console.warn(`\n${new Set(warnings).size} warning(s) on pages outside /about (not part of this check):`);
  for (const w of new Set(warnings)) console.warn("  - " + w);
}
if (errors.length) {
  console.error(`\n${errors.length} problem(s):`);
  for (const e of [...new Set(errors)]) console.error("  - " + e);
  process.exit(1);
}
console.log("About pages: no broken links, no empty or # links.");
