"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { SITE, CONTACT_SERVICES } from "@/lib/constants";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(26,107,138,0.2),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(232,131,26,0.08),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-center md:mb-20"
        >
          <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
            Let&apos;s Connect
          </motion.p>
          <motion.h2 variants={fadeUp} className="mb-5 text-3xl font-bold text-white md:text-5xl">
            Reserve Deanna Before You Arrive
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-white/50">
            Whether you&apos;re a family planning your trip, a villa concierge, or a resort
            looking to partner — Deanna responds quickly and is flexible with scheduling.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left — WhatsApp + Info */}
          <motion.div variants={slideInLeft} className="space-y-8">
            {/* WhatsApp card */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-2 text-xl font-bold text-white">Fastest Way to Book</h3>
              <p className="mb-6 text-white/50">
                Most families book through WhatsApp. Tap below, tell Deanna your dates and what
                you need, and she&apos;ll get back to you — usually within the hour.
              </p>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Deanna!%20I'm%20visiting%20Anguilla%20and%20interested%20in%20booking%20your%20services%20for%20my%20children.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#25D366]/20 transition-all hover:bg-[#20bd5a] hover:shadow-2xl hover:shadow-[#25D366]/30"
              >
                <MessageCircle className="h-6 w-6" />
                Message on WhatsApp
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>

            {/* Info cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/10">
                  <MapPin className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Location</p>
                  <p className="text-sm text-white/50">Anguilla, British West Indies</p>
                  <p className="text-xs text-white/30">Service across the entire island</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/10">
                  <Clock className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Availability</p>
                  <p className="text-sm text-white/50">7 days a week</p>
                  <p className="text-xs text-white/30">Book in advance for peak season</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            variants={slideInRight}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center py-16 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/20">
                  <CheckCircle2 className="h-10 w-10 text-[#25D366]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Message Received!
                </h3>
                <p className="max-w-sm text-white/50">
                  Thank you for reaching out. Deanna will get back to you soon.
                  For faster response, message directly on WhatsApp.
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-1 text-xl font-bold text-white">Send a Message</h3>
                <p className="mb-6 text-sm text-white/40">
                  Prefer email? Fill this out and Deanna will respond within 24 hours.
                </p>
                <form
                  action="https://formspree.io/f/YOUR_FORM_ID"
                  method="POST"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/70">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/70">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-white/70">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                    >
                      <option value="" className="bg-navy text-white">Select a service</option>
                      {CONTACT_SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-navy text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="dates" className="mb-1.5 block text-sm font-medium text-white/70">
                        Travel Dates <span className="text-white/30">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="dates"
                        name="dates"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                        placeholder="e.g. March 15–22"
                      />
                    </div>
                    <div>
                      <label htmlFor="children" className="mb-1.5 block text-sm font-medium text-white/70">
                        Children &amp; Ages <span className="text-white/30">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="children"
                        name="children"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                        placeholder="e.g. 2 kids, ages 4 & 7"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/70">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/25 transition-colors focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                      placeholder="Tell Deanna what you're looking for — services, schedule, any questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange/20 transition-all hover:bg-orange-dark hover:shadow-xl hover:shadow-orange/25"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
