"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background photo */}
      <Image
        src="/images/cta-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ocean/80" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Booking Your Anguilla Trip?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
          Reserve Deanna before you arrive. Peak season fills up fast, and the families who
          plan ahead get the best availability. Your children will have the time of their lives.
        </p>
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Deanna!%20I'm%20planning%20a%20trip%20to%20Anguilla%20and%20would%20love%20to%20book%20your%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-ocean shadow-xl transition-all hover:shadow-2xl hover:bg-cream"
        >
          Reserve Your Dates on WhatsApp
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </a>
      </motion.div>
    </section>
  );
}
