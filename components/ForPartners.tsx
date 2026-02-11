"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Handshake, ArrowRight } from "lucide-react";
import { SITE, PARTNER_BENEFITS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ForPartners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-navy py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(232,131,26,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,107,138,0.15),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-center md:mb-20"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Building2 className="h-4 w-4 text-orange" />
            <span className="text-sm font-medium text-white/70">For Resorts, Hotels & Villa Companies</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="mb-5 text-3xl font-bold text-white md:text-5xl">
            Partner With Anguilla&apos;s Top{" "}
            <span className="bg-gradient-to-r from-orange to-orange-light bg-clip-text text-transparent">
              Children&apos;s Services
            </span>{" "}
            Provider
          </motion.h2>

          <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-white/50">
            Your guests expect world-class everything — including childcare. Offer them
            a certified, insured, background-verified children&apos;s services partner
            they can trust completely.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-16 grid gap-6 sm:grid-cols-2"
        >
          {PARTNER_BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="mb-2 text-lg font-bold text-white">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust signals + CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12"
        >
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-orange" />
              Fully insured &amp; certified
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-orange" />
              Background verified
            </span>
            <span className="flex items-center gap-2">
              <Handshake className="h-4 w-4 text-orange" />
              Currently partnered with Zemi Beach House
            </span>
          </div>

          <p className="mx-auto mb-8 max-w-xl text-white/60">
            Whether you need a contracted children&apos;s services provider, a recommended
            vendor for your concierge list, or a partner for seasonal programming — let&apos;s
            talk about how Deanna can elevate your guest experience.
          </p>

          <a
            href={`https://wa.me/${SITE.whatsappPartner}?text=Hi%20Deanna,%20I'm%20reaching%20out%20about%20a%20potential%20hospitality%20partnership.%20I'd%20love%20to%20discuss%20children's%20services%20for%20our%20property.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange/25 transition-all hover:bg-orange-dark hover:shadow-2xl hover:shadow-orange/30"
          >
            Discuss a Partnership
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
