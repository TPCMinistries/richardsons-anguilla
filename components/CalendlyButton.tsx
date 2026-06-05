"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { BOOK_URL } from "@/lib/constants";

export default function CalendlyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Deanna on WhatsApp"
      className={`group fixed bottom-6 right-6 z-50 flex items-center rounded-full bg-orange text-white shadow-premium transition-all hover:bg-orange-dark ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <MessageCircle className="h-7 w-7" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[150px] group-hover:pr-5">
        Message Deanna
      </span>
    </a>
  );
}
