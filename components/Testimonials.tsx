import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-orange uppercase">
            What Families Say
          </p>
          <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
            Trusted by Families
          </h2>
          <div className="mx-auto flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-orange text-orange" />
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-cream p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-orange/30" />
              <p className="mb-6 text-navy/70 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-navy">{t.author}</p>
                <p className="text-sm text-navy/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
