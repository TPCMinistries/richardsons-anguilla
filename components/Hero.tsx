"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { SITE, TRUST_STATS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background photo */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Anguilla beach"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-navy/80" />

      {/* Subtle wave pattern at bottom */}
      <div className="absolute right-0 bottom-0 left-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120Z"
            fill="white"
            fillOpacity="0.05"
          />
          <path
            d="M0,80 C360,30 720,100 1080,50 C1260,30 1380,60 1440,50 L1440,120 L0,120Z"
            fill="white"
            fillOpacity="0.03"
          />
        </svg>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-6 pt-20 pb-12 text-center"
      >
        {/* Trust badge */}
        <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <ShieldCheck className="h-4 w-4 text-orange" />
          <span className="text-sm font-medium text-white/80">
            Trusted by Zemi Beach House &middot; StarGuard Elite Certified
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl md:text-7xl"
        >
          Anguilla&apos;s Most Trusted Name in{" "}
          <span className="bg-gradient-to-r from-orange to-orange-light bg-clip-text text-transparent">
            Children&apos;s Care
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          {SITE.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Deanna!%20I'm%20planning%20a%20trip%20to%20Anguilla%20and%20would%20love%20to%20book%20your%20services%20for%20my%20children.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange/25 transition-all hover:bg-orange-dark hover:shadow-2xl hover:shadow-orange/30"
          >
            Book Before You Arrive
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm">
              <p className="text-2xl font-bold text-orange md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-white/50 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 z-10 animate-bounce text-white/30 transition-colors hover:text-white/60"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
