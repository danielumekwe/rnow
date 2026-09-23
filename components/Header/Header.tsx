"use client";

import { useEffect, useState } from "react";
import { Menu, Search as SearchIcon } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SearchOverlay from "./SearchOverlay";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_2px_16px_rgba(20,23,26,0.08)]" : ""
      }`}
    >
      <TopBar />

      <div className="relative border-b border-gray-100">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2.5 xl:px-10">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              className="hidden h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-gray-100 lg:flex"
            >
              <SearchIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <Button href="#contact" variant="primary" showArrow={false} className="hidden lg:inline-flex">
              Talk to Us
            </Button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-gray-100 lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
