"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-center md:mb-20"
        >
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            In Their Words
          </motion.p>
          <motion.h2 variants={fadeUp} className="mb-5 text-3xl font-bold text-navy md:text-5xl">
            Families Trust Deanna
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mb-6 max-w-2xl text-lg text-navy/50">
            The best recommendations come from parents who&apos;ve been there. Here&apos;s what
            they say about working with Deanna.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-orange text-orange" />
            ))}
            <span className="ml-2 text-sm font-medium text-navy/40">5.0 from families</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-cream to-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              {/* Quote icon */}
              <Quote className="mb-5 h-10 w-10 text-orange/20 transition-colors group-hover:text-orange/40" />

              <blockquote className="mb-8 flex-1 text-[15px] leading-[1.8] text-navy/65 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 border-t border-navy/5 pt-5">
                {/* Avatar placeholder */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.author}</p>
                  <p className="text-xs text-navy/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
