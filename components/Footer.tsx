import { MessageCircle, Heart } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-navy-dark py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange">
                <span className="text-sm font-bold text-white font-[family-name:var(--font-heading)]">R</span>
              </div>
              <span className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                Richardson&apos;s
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              Professional children&apos;s services in Anguilla.
              Certified, trusted, and loved by families.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/40 transition-colors hover:text-orange"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
              Services
            </h4>
            <nav className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <a
                  key={s.slug}
                  href="#services"
                  className="text-sm text-white/40 transition-colors hover:text-orange"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-white/40">
              <p>{SITE.location}</p>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[#25D366] transition-colors hover:text-[#20bd5a]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Deanna
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-white/25">
            Made with <Heart className="h-3 w-3 fill-orange/50 text-orange/50" /> in Anguilla
          </p>
        </div>
      </div>
    </footer>
  );
}
