"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-x-0 top-full z-40 border-b border-gray-200 bg-white shadow-lg"
          role="search"
        >
          <form
            className="mx-auto flex max-w-[1400px] items-center gap-4 px-6 py-5 xl:px-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <Search className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              placeholder="Search products, industries, solutions…"
              className="w-full border-none bg-transparent text-lg text-ink placeholder:text-gray-400 focus:outline-none"
              aria-label="Search RNOW Industrial Supply"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
