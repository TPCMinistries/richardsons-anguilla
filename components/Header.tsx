"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 shadow-2xl backdrop-blur-md"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo / Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2"
        >
          <div className="overflow-hidden rounded-lg bg-white/95 px-2 py-1 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.jpg"
              alt="Richardson's Anguilla Experience"
              width={516}
              height={1024}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20a%20session%20with%20Deanna.`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange/25 transition-all hover:bg-orange-dark hover:shadow-xl hover:shadow-orange/30"
          >
            <Phone className="h-3.5 w-3.5" />
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-white/10 bg-navy/95 px-6 pb-6 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/5 py-4 text-white/80 transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20a%20session%20with%20Deanna.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
