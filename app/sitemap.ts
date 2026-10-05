import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { productCategories } from "@/data/productCategories";
import { caseStudies } from "@/data/about/whyRnow";
import { newsArticles, events } from "@/data/about/news";

export const dynamic = "force-static";

/** Account pages that have no value in search results. */
const EXCLUDED = new Set(["/sign-in", "/create-account"]);

/**
 * Every static route under app/, found by walking for page.tsx files so new
 * pages land in the sitemap automatically. Dynamic [slug] folders are skipped
 * here and expanded from their data below.
 */
function staticRoutes(dir = path.join(process.cwd(), "app"), route = ""): string[] {
  const routes: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === "page.tsx") routes.push(route || "/");
    if (entry.isDirectory() && !entry.name.startsWith("[") && !entry.name.startsWith("_")) {
      // Route groups like (marketing) don't appear in the URL.
      const segment = entry.name.startsWith("(") ? "" : `/${entry.name}`;
      routes.push(...staticRoutes(path.join(dir, entry.name), route + segment));
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes()
    .filter((route) => !EXCLUDED.has(route))
    .map((route) => ({
      url: route === "/" ? siteConfig.url : `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
    }));

  const detail = (base: string, slug: string, lastModified: Date = now) => ({
    url: `${siteConfig.url}${base}/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  });

  const all = [
    ...pages,
    ...productCategories.map((c) => detail("/products-and-services", c.slug)),
    ...caseStudies.map((c) => detail("/about/why-rnow/case-studies", c.slug)),
    ...newsArticles.map((a) => detail("/about/news/company-news", a.slug, new Date(a.date))),
    ...events.map((e) => detail("/about/news/events", e.slug)),
  ];

  // A static page can share a URL with a [slug] entry (e.g. electrical-products);
  // the static page wins, so keep the first occurrence of each URL.
  const seen = new Set<string>();
  return all.filter((entry) => !seen.has(entry.url) && seen.add(entry.url));
}
