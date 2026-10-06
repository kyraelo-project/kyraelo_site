"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CalButton } from "@/components/ui/CalButton";
import { Container } from "@/components/ui/Container";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        open
          ? "border-b border-line bg-bg"
          : scrolled
            ? "border-b border-line bg-bg/75 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent",
      )}
    >
      <Container className="flex h-[72px] max-w-[1400px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden min-[1360px]:block">
          <ul className="flex items-center gap-0.5">
            {NAV.map((item) => (
              <li key={item.href + item.label}>
                <a
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-2.5 py-2 text-[13.5px] text-ink-soft transition-colors hover:bg-muted hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden whitespace-nowrap px-3 py-2 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink md:inline-flex"
          >
            Nous contacter
          </Link>
          <ThemeToggle />
          <div className="hidden sm:block">
            <CalButton className="whitespace-nowrap" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line min-[1360px]:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 72px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto min-[1360px]:hidden"
          >
            <Container className="flex flex-col gap-1 pb-10 pt-4">
              <nav aria-label="Navigation mobile">
                <ul className="flex flex-col">
                  {NAV.map((item, i) => (
                    <motion.li
                      key={item.href + item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-14 items-center border-b border-line text-2xl font-medium tracking-tight"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <CalButton size="lg" />
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong font-medium"
                >
                  Nous contacter
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
