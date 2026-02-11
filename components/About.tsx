import { Shield, Award, Heart } from "lucide-react";
import { CREDENTIALS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
              {/* Replace with actual photo of Deanna */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-ocean/10">
                    <Heart className="h-16 w-16 text-ocean" />
                  </div>
                  <p className="text-sm text-navy/50">Deanna&apos;s Photo</p>
                </div>
              </div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-orange/10" />
          </div>

          {/* Bio */}
          <div>
            <p className="mb-2 text-sm font-semibold tracking-widest text-orange uppercase">
              Meet Your Instructor
            </p>
            <h2 className="mb-6 text-3xl font-bold text-navy md:text-4xl">
              About Deanna Richardson
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-navy/70">
              <p>
                Deanna Richardson is a dedicated swim instructor, certified lifeguard, and trusted
                childcare provider based in Anguilla. With years of experience working with children
                of all ages, she combines professional training with a genuine passion for keeping
                kids safe, active, and happy.
              </p>
              <p>
                Whether it&apos;s teaching a toddler their first splash, coaching young footballers,
                or providing attentive care while parents enjoy the island, Deanna brings warmth,
                skill, and reliability to every interaction.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred}
                  className="flex items-center gap-3 rounded-lg bg-cream px-4 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange/10">
                    {cred.includes("CPR") ? (
                      <Shield className="h-4 w-4 text-orange" />
                    ) : (
                      <Award className="h-4 w-4 text-orange" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-navy">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
