import { Waves, Trophy, Baby } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  swimming: <Waves className="h-8 w-8 text-ocean" />,
  football: <Trophy className="h-8 w-8 text-ocean" />,
  childcare: <Baby className="h-8 w-8 text-ocean" />,
};

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-orange uppercase">
            What We Offer
          </p>
          <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-navy/60">
            Professional, certified, and child-focused services tailored to families in Anguilla.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl"
            >
              {/* Image placeholder */}
              <div className="relative h-48 overflow-hidden bg-navy/5">
                <div className="flex h-full items-center justify-center">
                  {ICONS[service.slug]}
                </div>
                {/* Price badge */}
                <div className="absolute top-4 right-4 rounded-full bg-orange px-3 py-1 text-sm font-bold text-white">
                  {service.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-orange">
                  {service.tagline}
                </p>
                <p className="mb-6 text-navy/60 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
