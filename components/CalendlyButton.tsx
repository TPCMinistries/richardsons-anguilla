"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function CalendlyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE.calendly}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on Calendly"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange text-white shadow-lg shadow-orange/25 transition-all hover:scale-110 hover:shadow-xl hover:bg-orange-dark ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <CalendarDays className="h-7 w-7" />
    </a>
  );
}
