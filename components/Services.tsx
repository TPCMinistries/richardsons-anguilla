"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Waves, Baby, Dumbbell, LifeBuoy, CalendarDays, Check, ArrowRight } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const ICONS: Record<string, React.ReactNode> = {
  swimming: <Waves className="h-8 w-8 text-white" />,
  childcare: <Baby className="h-8 w-8 text-white" />,
  sports: <Dumbbell className="h-8 w-8 text-white" />,
  "water-safety": <LifeBuoy className="h-8 w-8 text-white" />,
  packages: <CalendarDays className="h-8 w-8 text-white" />,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-cream py-24 md:py-32">
      {/* Subtle top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-center md:mb-20"
        >
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            What We Offer
          </motion.p>
          <motion.h2 variants={fadeUp} className="mb-5 text-3xl font-bold text-navy md:text-5xl">
            Services Built on Trust
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-navy/50">
            Every service is backed by professional certification, luxury resort experience, and a
            genuine love for working with children. This isn&apos;t a side gig — it&apos;s a calling.
          </motion.p>
        </motion.div>

        {/* Top row: 3 cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-3"
        >
          {SERVICES.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>

        {/* Bottom row: 2 cards centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-8 grid gap-8 lg:grid-cols-2 lg:mx-auto lg:max-w-4xl"
        >
          {SERVICES.slice(3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Photo header */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />
        {/* Icon badge */}
        <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
          {ICONS[service.slug] || <Waves className="h-8 w-8 text-white" />}
        </div>
        {/* Price badge */}
        <div className="absolute top-5 right-5 rounded-full bg-navy/90 px-4 py-1.5 shadow-lg backdrop-blur-sm">
          <span className="text-sm font-bold text-white">{service.price}</span>
          {service.priceNote && (
            <span className="ml-1 text-xs text-white/60">{service.priceNote}</span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="mb-1 text-xl font-bold text-navy">
          {service.title}
        </h3>
        <p className="mb-4 text-sm font-medium text-orange">
          {service.tagline}
        </p>
        <p className="mb-6 text-[15px] leading-relaxed text-navy/55">
          {service.description}
        </p>

        {/* Feature list */}
        <ul className="mb-8 space-y-2.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-navy/70">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-ocean" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Deanna!%20I'm%20interested%20in%20${encodeURIComponent(service.title)}%20for%20my%20family.`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-light hover:shadow-lg"
        >
          {service.slug === "packages" ? "Build My Package" : `Book ${service.title.split(" ")[0]}`}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}
