"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { mainNav, type NavLink } from "@/data/navigation";

function MenuLink({ link }: { link: NavLink }) {
  return (
    <li>
      <Link
        href={link.href}
        className={`text-sm transition-colors hover:text-accent ${
          link.children ? "font-bold text-ink" : "font-medium text-ink"
        }`}
      >
        {link.label}
      </Link>
      {link.children && (
        <ul className="mt-2 space-y-2 border-l border-gray-200 pl-4">
          {link.children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="text-sm text-gray-600 transition-colors hover:text-accent"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function DesktopNav() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <nav
      className="hidden items-center lg:flex"
      aria-label="Primary"
      onMouseLeave={() => setOpenLabel(null)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpenLabel(null);
      }}
    >
      <ul className="flex items-center gap-1">
        {mainNav.map((item) => {
          const isOpen = openLabel === item.label;
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.megaMenu && setOpenLabel(item.label)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                  setOpenLabel((cur) => (cur === item.label ? null : cur));
                }
              }}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-7 text-sm font-semibold tracking-wide text-ink transition-colors hover:text-accent"
                aria-expanded={item.megaMenu ? isOpen : undefined}
                onFocus={() => item.megaMenu && setOpenLabel(item.label)}
              >
                {item.label}
                {item.megaMenu && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                )}
              </Link>

              <AnimatePresence>
                {item.megaMenu && isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className={`absolute left-1/2 top-full z-40 -translate-x-1/2 rounded-sm border border-gray-200 bg-white p-8 shadow-xl ${
                      item.megaMenu.columns.some((c) => c.links.some((l) => l.children))
                        ? "w-[min(94vw,760px)]"
                        : "w-[min(90vw,520px)]"
                    }`}
                  >
                    <div className={`grid gap-8 ${item.megaMenu.columns.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                      {item.megaMenu.columns.map((col, i) => (
                        <div key={i}>
                          {col.heading && (
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                              {col.heading}
                            </p>
                          )}
                          <ul className={item.megaMenu!.columns.length === 1 && col.links.length > 8 ? "gap-x-8 space-y-2.5 sm:columns-2 [&>li]:break-inside-avoid" : "space-y-2.5"}>
                            {col.links.map((link) => (
                              <MenuLink key={link.label} link={link} />
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {item.megaMenu.featured && (
                      <div className="mt-6 border-t border-gray-100 pt-5">
                        <Link
                          href={item.megaMenu.featured.href}
                          className="text-sm font-semibold text-accent hover:text-accent-dark"
                        >
                          {item.megaMenu.featured.label} &rarr;
                        </Link>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
