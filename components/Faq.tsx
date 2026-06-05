"use client";

import { motion } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import { FAQS, BOOK_URL } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Faq() {
  return (
    <section id="faq" className="relative bg-cream py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-14 text-center"
        >
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            Good to Know
          </motion.p>
          <motion.h2 variants={fadeUp} className="mb-5 text-3xl font-bold text-navy md:text-5xl">
            Questions Parents Ask
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-navy/60">
            Everything you need to know before booking. Don&apos;t see your question?
            Message Deanna — she&apos;s happy to help.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {FAQS.map((faq) => (
            <motion.details
              key={faq.question}
              variants={fadeUp}
              className="group rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-colors open:border-orange/30 hover:border-navy/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange transition-transform duration-300 group-open:rotate-45">
                  <Plus className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-navy/65">{faq.answer}</p>
            </motion.details>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-light"
          >
            <MessageCircle className="h-4 w-4" />
            Ask Deanna a Question
          </a>
        </div>
      </div>
    </section>
  );
}
