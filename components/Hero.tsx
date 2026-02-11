import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background gradient — replace with actual hero image */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-ocean to-navy opacity-90" />

      {/* Decorative wave overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Logo placeholder */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
          <span className="text-3xl font-bold text-orange font-[family-name:var(--font-heading)]">
            R
          </span>
        </div>

        <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl md:leading-tight">
          {SITE.tagline}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">
          {SITE.subtitle}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hi!%20I'm%20interested%20in%20booking%20a%20session.`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-orange-dark hover:shadow-lg"
          >
            Book a Session
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
