"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";

export default function DesktopNav() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <nav
      className="hidden items-center lg:flex"
      aria-label="Primary"
      onMouseLeave={() => setOpenLabel(null)}
    >
      <ul className="flex items-center gap-1">
        {mainNav.map((item) => {
          const isOpen = openLabel === item.label;
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.megaMenu && setOpenLabel(item.label)}
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
                    className="absolute left-1/2 top-full z-40 w-[min(90vw,520px)] -translate-x-1/2 rounded-sm border border-gray-200 bg-white p-8 shadow-xl"
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {item.megaMenu.columns.map((col, i) => (
                        <div key={i}>
                          {col.heading && (
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                              {col.heading}
                            </p>
                          )}
                          <ul className="space-y-2.5">
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="text-sm font-medium text-ink transition-colors hover:text-accent"
                                >
                                  {link.label}
                                </Link>
                              </li>
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
