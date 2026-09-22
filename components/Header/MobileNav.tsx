"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Phone, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import Button from "@/components/Button";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <span className="text-lg font-bold tracking-tight text-white">
              RNOW
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobile">
            <ul className="divide-y divide-white/10">
              {mainNav.map((item) => {
                const isExpanded = expanded === item.label;
                return (
                  <li key={item.label} className="py-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex-1 py-3.5 text-lg font-semibold text-white"
                      >
                        {item.label}
                      </Link>
                      {item.megaMenu && (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={isExpanded}
                          onClick={() =>
                            setExpanded(isExpanded ? null : item.label)
                          }
                          className="flex h-10 w-10 items-center justify-center text-white"
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {item.megaMenu && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-x-6 gap-y-4 pb-5 pl-1">
                            {item.megaMenu.columns.map((col) =>
                              col.links.map((link) => (
                                <Link
                                  key={link.label}
                                  href={link.href}
                                  onClick={onClose}
                                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                                >
                                  {link.label}
                                </Link>
                              )),
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-4 border-t border-white/10 px-6 py-6">
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="flex items-center gap-2.5 text-sm font-medium text-gray-300"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
            <Button href="#contact" variant="primary" onClick={onClose} className="w-full justify-center">
              Contact Us
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
