import { MessageCircle } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white font-[family-name:var(--font-heading)]">
              {SITE.name}
            </h3>
            <p className="text-sm leading-relaxed text-white/50">
              Safe, skilled, and trusted children&apos;s services in Anguilla.
              Swim lessons, childcare, and youth coaching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-widest text-white/70 uppercase">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-orange"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold tracking-widest text-white/70 uppercase">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-white/50">
              <p>{SITE.location}</p>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#25D366] transition-colors hover:text-[#20bd5a]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/30">
          &copy; {year} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
