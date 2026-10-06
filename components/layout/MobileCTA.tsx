"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { CalButton } from "@/components/ui/CalButton";

/** Barre d'action fixe sur mobile, visible après le hero et masquée près du CTA final. */
export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const nearEnd = contact ? contact.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(window.scrollY > window.innerHeight * 0.7 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={clsx(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/85 p-3 backdrop-blur-xl transition-transform duration-300 sm:hidden",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <CalButton size="lg" className="w-full" />
    </div>
  );
}
