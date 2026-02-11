"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-ocean-dark via-ocean to-ocean-dark py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="waves" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q10 10 20 20 Q30 30 40 20" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Planning a Trip to Anguilla?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
          Book Deanna before you arrive. Peak season fills up fast, and the families who plan ahead
          get the best availability. Your children will have the time of their lives.
        </p>
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Deanna!%20I'm%20planning%20a%20trip%20to%20Anguilla%20and%20would%20love%20to%20book%20your%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-ocean shadow-xl transition-all hover:shadow-2xl hover:bg-cream"
        >
          Book Ahead on WhatsApp
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </a>
      </motion.div>
    </section>
  );
}
