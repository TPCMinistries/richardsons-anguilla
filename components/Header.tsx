"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <a href="#home" className="text-xl font-bold text-white font-[family-name:var(--font-heading)]">
          {SITE.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hi!%20I'm%20interested%20in%20booking%20a%20session.`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-dark"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-navy px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/80 transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hi!%20I'm%20interested%20in%20booking%20a%20session.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-full bg-orange px-5 py-2 text-sm font-semibold text-white"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
