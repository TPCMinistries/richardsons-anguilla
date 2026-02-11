"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Heart, CheckCircle } from "lucide-react";
import { CREDENTIALS } from "@/lib/constants";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const ICONS: Record<string, React.ReactNode> = {
  "CPR & First Aid Certified": <ShieldCheck className="h-5 w-5 text-orange" />,
  "StarGuard Elite Lifeguard": <Award className="h-5 w-5 text-orange" />,
  "Certified Swim Instructor": <CheckCircle className="h-5 w-5 text-orange" />,
  "Youth Coaching Certified": <Award className="h-5 w-5 text-orange" />,
  "Background Verified": <ShieldCheck className="h-5 w-5 text-orange" />,
};

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20"
        >
          {/* Photo side */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream">
              {/* Replace with actual Deanna photo */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-36 w-36 items-center justify-center rounded-full bg-ocean/10">
                    <Heart className="h-20 w-20 text-ocean/60" />
                  </div>
                  <p className="text-sm text-navy/40">Deanna&apos;s Photo</p>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -right-4 -bottom-6 rounded-2xl bg-navy px-6 py-4 shadow-xl lg:-right-8">
              <p className="text-3xl font-bold text-orange">8+</p>
              <p className="text-sm font-medium text-white/70">Years of Trust</p>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-orange/10 to-ocean/10" />
          </motion.div>

          {/* Content side */}
          <motion.div variants={slideInRight}>
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-orange uppercase">
              The Person Behind the Promise
            </p>
            <h2 className="mb-6 text-3xl leading-tight font-bold text-navy md:text-5xl md:leading-tight">
              Meet Deanna Richardson
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-navy/60">
              <p>
                Deanna Richardson is the children&apos;s services professional that
                Anguilla&apos;s top resorts trust with their most important guests —
                families.
              </p>
              <p>
                Currently partnered with{" "}
                <strong className="text-navy/80">Zemi Beach House</strong> (Hilton LXR)
                for swim lessons and kids&apos; club programming, and with{" "}
                <strong className="text-navy/80">Learn to Swim Anguilla</strong> for
                island-wide water safety, Deanna has spent over eight years building the
                kind of reputation that luxury hospitality demands: impeccable credentials,
                warm professionalism, and the rare ability to make every child feel safe,
                capable, and genuinely cared for.
              </p>
              <p>
                She launched Richardson&apos;s Anguilla Experience because demand outgrew
                any single resort. Today, she serves families directly, partners with
                hotels and villa companies, and leads community water safety programs — all
                with the same standard of care that made her Anguilla&apos;s most
                recommended name in children&apos;s services.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.label}
                  className="trust-badge flex items-start gap-3 rounded-xl px-4 py-4 transition-all hover:shadow-md"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange/10">
                    {ICONS[cred.label] || <Award className="h-5 w-5 text-orange" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{cred.label}</p>
                    <p className="text-xs text-navy/40">{cred.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
