"use client";

import { useState } from "react";
import { Send, MessageCircle, MapPin } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-orange uppercase">
            Get in Touch
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Book?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Reach out via WhatsApp for the fastest response, or send us a message below.
          </p>
        </div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* WhatsApp CTA */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hi!%20I'm%20interested%20in%20booking%20a%20session.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#20bd5a] hover:shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
              Chat on WhatsApp
            </a>

            <div className="space-y-4 text-white/60">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-orange" />
                <span>{SITE.location}</span>
              </div>
              <p className="text-sm leading-relaxed">
                WhatsApp is the fastest way to reach Deanna. For swim lessons, childcare bookings,
                or youth football inquiries, send a message and she&apos;ll respond promptly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/20">
                  <Send className="h-8 w-8 text-[#25D366]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-white/60">
                  Thank you for reaching out. Deanna will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  // For now, just show success state
                  // Replace form action with real Formspree ID to enable
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/80">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1 block text-sm font-medium text-white/80">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                  >
                    <option value="" className="text-navy">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.title} className="text-navy">
                        {s.title}
                      </option>
                    ))}
                    <option value="Other" className="text-navy">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-dark"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
