"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

export default function TrustedBy() {
  return (
    <section className="border-b border-navy/5 bg-white py-10 md:py-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mx-auto max-w-5xl px-6 text-center"
      >
        <p className="mb-8 text-xs font-semibold tracking-[0.25em] text-navy/30 uppercase">
          Trusted by Anguilla&apos;s Finest
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center gap-1.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5">
                <span className="text-lg font-bold text-navy/60 font-[family-name:var(--font-heading)]">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <p className="text-sm font-semibold text-navy/70">{partner.name}</p>
              <p className="text-[11px] text-navy/35">{partner.type}</p>
            </div>
          ))}

          {/* Future partners placeholder */}
          <div className="flex flex-col items-center gap-1.5 opacity-40">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-dashed border-navy/15">
              <span className="text-lg font-bold text-navy/30">+</span>
            </div>
            <p className="text-sm font-semibold text-navy/40">Your Resort</p>
            <p className="text-[11px] text-navy/25">Partner with us</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
