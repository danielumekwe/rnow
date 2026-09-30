import type { AboutNode } from "@/data/about/types";

/**
 * The About section's structure. Menus, breadcrumbs, section cards and
 * "related pages" are all built from this tree, so a page is added in one place.
 */
export const aboutTree: AboutNode = {
  key: "about",
  label: "About RNOW",
  path: "/about",
  blurb: "Who we are, how we work and what we stand for.",
  children: [
    {
      key: "careers",
      label: "Careers",
      path: "/about/careers",
      blurb: "Build a career supporting the operations that keep industry moving.",
      children: [
        {
          key: "internship-program",
          label: "Internship Program",
          path: "/about/careers/internship-program",
          blurb: "A hands-on summer experience across sales, operations and supply chain.",
        },
        {
          key: "rotational-program",
          label: "Sales & Operations Rotational Program",
          path: "/about/careers/rotational-program",
          blurb: "A structured early-career track through the core functions of a distributor.",
        },
      ],
    },
    {
      key: "corporate-citizenship",
      label: "Corporate Citizenship",
      path: "/about/corporate-citizenship",
      blurb: "How we operate responsibly, protect people and support our communities.",
      children: [
        {
          key: "compliance",
          label: "Compliance Statements",
          path: "/about/corporate-citizenship/compliance",
          blurb: "Our standards for ethics, trade, data and responsible business conduct.",
        },
        {
          key: "sustainability",
          label: "Sustainability",
          path: "/about/corporate-citizenship/sustainability",
          blurb: "Our approach to environment, safety, sourcing and governance.",
        },
        {
          key: "community",
          label: "RNOW Cares",
          path: "/about/corporate-citizenship/community",
          blurb: "Our community giving and volunteering program.",
        },
      ],
    },
    {
      key: "news",
      label: "News & Events",
      path: "/about/news",
      blurb: "Company updates, industry insights and events where you can meet our team.",
      children: [
        {
          key: "company-news",
          label: "Company News",
          path: "/about/news/company-news",
          blurb: "Announcements, product and service updates, and team news.",
        },
        {
          key: "events",
          label: "Events",
          path: "/about/news/events",
          blurb: "Trade shows, training sessions and open houses.",
        },
      ],
    },
    {
      key: "why-rnow",
      label: "Why RNOW",
      path: "/about/why-rnow",
      blurb: "What it is like to work with RNOW, and the standards we hold ourselves to.",
      children: [
        {
          key: "case-studies",
          label: "Case Studies",
          path: "/about/why-rnow/case-studies",
          blurb: "How we approach real supply challenges, from problem to result.",
        },
        {
          key: "quality",
          label: "Quality",
          path: "/about/why-rnow/quality",
          blurb: "How we verify, document and trace every product we supply.",
        },
        {
          key: "service-commitment",
          label: "Service Commitment",
          path: "/about/why-rnow/service-commitment",
          blurb: "The promises we make on response, delivery and support.",
        },
        {
          key: "value-added-solutions",
          label: "Value-Added Solutions",
          path: "/about/why-rnow/value-added-solutions",
          blurb: "Services that go beyond the product to lower your total cost.",
        },
      ],
    },
  ],
};

/** All nodes, flattened, root first. */
export function flattenAbout(node: AboutNode = aboutTree): AboutNode[] {
  return [node, ...(node.children ?? []).flatMap((c) => flattenAbout(c))];
}

export function findAboutNode(path: string): AboutNode | undefined {
  return flattenAbout().find((n) => n.path === path);
}

/** Ancestors from About down to (and including) the node. */
export function aboutTrail(path: string): AboutNode[] {
  const walk = (node: AboutNode, trail: AboutNode[]): AboutNode[] | null => {
    const next = [...trail, node];
    if (node.path === path) return next;
    for (const c of node.children ?? []) {
      const hit = walk(c, next);
      if (hit) return hit;
    }
    return null;
  };
  return walk(aboutTree, []) ?? [];
}

/** Breadcrumb items for a page, ending with the page itself (no link). */
export function aboutCrumbs(path: string, tail?: string) {
  const trail = aboutTrail(path);
  const items = trail.map((n, i) => ({
    label: n.label,
    href: i === trail.length - 1 && !tail ? undefined : n.path,
  }));
  if (tail) items.push({ label: tail, href: undefined });
  return items;
}

/** Cards for a node's children. */
export function childLinks(path: string) {
  const node = findAboutNode(path);
  return (node?.children ?? []).map((c) => ({
    title: c.label,
    text: c.blurb,
    href: c.path,
  }));
}

export function aboutLinks(paths: string[]) {
  return paths.map((p) => {
    const n = findAboutNode(p);
    if (!n) throw new Error(`Unknown About path: ${p}`);
    return { title: n.label, text: n.blurb, href: n.path };
  });
}
